const typeSizes = {
    'float': 4,
    'int': 4,
    'bool': 4,
    'string': 4,
    'double': 8,
    'char': 1,
    'byte': 1,
    'short': 2,
    "color24": 3
};

function getOffset(obj, key) {
    let offset = 0;
    
    for (const k in obj) {
        if (k === key) {
            return offset;
        }
        
        const type = obj[k];

        if (typeof type === 'object' && type !== null) {
            offset += getTotalSize(type);
        } else if (typeSizes[type]) {
            offset += typeSizes[type];
        }
    }
    
    return -1;
}

function getTotalSize(obj) {
    let totalSize = 0;
    for (const k in obj) {
        const type = obj[k];

        if (typeof type === 'object' && type !== null) {
            totalSize += getTotalSize(type);
        } else if (typeSizes[type]) {
            totalSize += typeSizes[type];
        }
    }
    return totalSize;
}

function getCValue(type, ptr) {
    if (type == "float") {
        return Module.HEAPF32[ptr >> 2];
    }
    
    if (type == "int") {
        return Module.HEAP32[ptr >> 2];
    }
    
    if (type == "bool" || type == "short") {
        return Module.HEAP16[ptr >> 1];
    }

    if (type === "byte") {
        return Module.HEAP8[ptr];
    }

    if (type === "double") {
        return Module.HEAPF64[ptr >> 3];
    }
}

function setCValue(type, ptr, value) {
    if (type == "float") {
        Module.HEAPF32[ptr >> 2] = value;
    }
    
    if (type == "int") {
        Module.HEAP32[ptr >> 2] = value;
    }
    
    if (type == "bool" || type == "short") {
        Module.HEAP16[ptr >> 1] = value;
    }

    if (type === "byte") {
        Module.HEAP8[ptr] = value;
    }

    if (type === "double") {
        Module.HEAPF64[ptr >> 3] = value;
    }
}

function getStruct(struct, ptr) {
    let retVal = {};
    Object.keys(struct).forEach(function (key) {
        let type = struct[key];
        let offset = getOffset(struct, key);

        if (typeof type === 'object' && type !== null && !Array.isArray(type)) {
            retVal[key] = getStruct(type, ptr + offset);
        } else if (typeSizes[type]) {
            retVal[key] = getCValue(type, ptr + offset);
        }
    });
    return retVal;
}

function setStruct(struct, ptr, newStruct) {
    Object.keys(struct).forEach(function (key) {
        let type = struct[key];
        let offset = getOffset(struct, key);
        setCValue(type, ptr + offset, newStruct[key]);
    })
}

export default { typeSizes, getOffset, getTotalSize, getCValue, setCValue, getStruct, setStruct }