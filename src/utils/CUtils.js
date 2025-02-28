let typeMap = {
    'float': 4,
    'int': 4,
    'bool': 4,
    'string': 4,
    'double': 8,
    'char': 1,
    'byte': 1,
    'short': 2,
    "uint32_t": 4,
    "dynarray": 4
};

function getOffset(obj, key) {
    let offset = 0;

    for (let k in obj) {
        let prop = obj[k];

        if (k === key) {
            return offset;
        }

        if (typeof prop.type === 'object' && prop.type !== null) {
            offset += getTotalSize(prop.type);
        } else if (typeMap[prop.type]) {
            offset += typeMap[prop.type];
        } else if (prop.type?.includes && prop.type.includes("pad_")) {
            offset += parseInt(prop.type.replace("pad_", ""));
        }
    }

    return offset;
}

function getTotalSize(obj) {
    let totalSize = 0;

    for (let k in obj) {
        let prop = obj[k];

        if (typeof prop.type === 'object' && prop.type !== null) {
            totalSize += getTotalSize(prop.type);
        } else if (typeMap[prop.type]) {
            totalSize += typeMap[prop.type];
        } else if (prop.type?.includes && prop.type.includes("pad_")) {
            totalSize += parseInt(prop.type.replace("pad_", ""));
        }
    }

    return totalSize;
}

function getCValue(type, ptr) {
    switch (type) {
        case "float":
            return Module.HEAPF32[ptr >> 2];
        case "int":
            return Module.HEAP32[ptr >> 2];
        case "bool":
        case "short":
            return Module.HEAP16[ptr >> 1];
        case "byte":
            return Module.HEAP8[ptr];
        case "double":
            return Module.HEAPF64[ptr >> 3];
        default:
            return Module.HEAP32[ptr >> 2];
    }
}

function setCValue(type, ptr, value) {
    switch (type) {
        case "float":
            Module.HEAPF32[ptr >> 2] = value;
            break;
        case "int":
            Module.HEAP32[ptr >> 2] = value;
            break;
        case "bool":
        case "short":
            Module.HEAP16[ptr >> 1] = value;
            break;
        case "byte":
            Module.HEAP8[ptr] = value;
            break;
        case "double":
            Module.HEAPF64[ptr >> 3] = value;
            break;
        default:
            Module.HEAP32[ptr >> 2] = value;
    }
}

function cStruct(struct, ptr) {
    let structObject = {};

    for (let key in struct) {
        let prop = struct[key];
        let offset = getOffset(struct, key);

        Object.defineProperty(structObject, key, {
            get() {
                if (prop.type == "dynarray") {
                    return cArrayAt(prop.itemType, ptr + offset);
                }
                if (typeof prop.type === 'object' && prop.type !== null) {
                    return cStruct(prop.type, ptr + offset);
                }
                return getCValue(prop.type, ptr + offset);;
            },
            set(value) {
                if (typeof prop.type === 'object' && prop.type !== null) {
                    let nestedStruct = cStruct(prop, ptr + offset);
                    Object.assign(nestedStruct, value);
                } else if (typeMap[prop.type]) {
                    setCValue(prop.type, ptr + offset, value);
                }
            },
            enumerable: true,
            configurable: true 
        });
    }

    return structObject;
}

function cArrayAt(type, ptr) {
    let firstIndex = getCValue(type, ptr);
    let iteratorSize = getTotalSize(type);

    const handler = {
        get(target, prop) {
            if (typeMap[type]) {
                return getCValue(type, firstIndex + (prop * iteratorSize));
            } else {
                return cStruct(type, firstIndex + (prop * iteratorSize));
            }
        }
    };
    
    return new Proxy({}, handler);
}

function cArray(type, ptr, size) {
    let instance = [];
    let iteratorSize = getTotalSize(type);

    let firstIndex = getCValue(type, ptr);

    for (let offset = 0; offset < size; offset++) {
        if (typeMap[type]) {
            instance.push(getCValue(type, firstIndex + (offset * iteratorSize)));
        } else {
            instance.push(cStruct(type, firstIndex + (offset * iteratorSize)));
        }
        
    }

    return instance;
}

export default { typeMap, getOffset, getTotalSize, getCValue, setCValue, cStruct, cArray, cArrayAt };