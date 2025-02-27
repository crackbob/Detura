let typeMap = {
    'float': { size: 4, heap: Module.HEAPF32 },
    'int': { size: 4, heap: Module.HEAP32 },
    'bool': { size: 4, heap: Module.HEAP32 },
    'string': { size: 4, heap: Module.HEAP32 },
    'double': { size: 8, heap: Module.HEAPF64 },
    'char': { size: 1, heap: Module.HEAP8 },
    'byte': { size: 1, heap: Module.HEAP8 },
    'short': { size: 2, heap: Module.HEAP16 },
    'uint32_t': { size: 4, heap: Module.HEAP32 }
};

function getOffset(obj, key) {
    let offset = 0;

    for (let k in obj) {
        if (k === key) {
            return offset;
        }

        let type = obj[k];
        if (typeof type === 'object' && type !== null) {
            offset += getTotalSize(type);
        } else if (typeMap[type]) {
            offset += typeMap[type].size;
        } else if (type?.includes && type.includes("pad_")) {
            offset += parseInt(type.replace("pad_", ""));
        }
    }

    return offset;
}

function getTotalSize(obj) {
    let totalSize = 0;

    for (let k in obj) {
        let type = obj[k];

        if (typeof type === 'object' && type !== null) {
            totalSize += getTotalSize(type);
        } else if (typeMap[type]) {
            totalSize += typeMap[type].size;
        }
    }

    return totalSize;
}

function getCValue(type, ptr) {
    let typeInfo = typeMap[type] || typeMap['int'];
    let index = ptr / typeInfo.size;
    return typeInfo.heap[index];
}

function setCValue(type, ptr, value) {
    let typeInfo = typeMap[type] || typeMap['int'];
    let index = ptr / typeInfo.size;
    typeInfo.heap[index] = value;
}

function cStruct(struct, ptr) {
    let structObject = {};

    for (let key in struct) {
        let type = struct[key];
        let offset = getOffset(struct, key);

        Object.defineProperty(structObject, key, {
            get() {
                if (typeof type === 'object' && type !== null) {
                    return cStruct(type, ptr + offset);
                } else if (typeMap[type]) {
                    return getCValue(type, ptr + offset);
                }
                return undefined;
            },
            set(value) {
                if (typeof type === 'object' && type !== null) {
                    let nestedStruct = cStruct(type, ptr + offset);
                    Object.assign(nestedStruct, value);
                } else if (typeMap[type]) {
                    setCValue(type, ptr + offset, value);
                }
            },
            enumerable: true,
            configurable: true 
        });
    }

    return structObject;
}

export default { typeMap, getOffset, getTotalSize, getCValue, setCValue, cStruct };