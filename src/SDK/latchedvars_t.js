import vec3_t from "./vec3_t";

export default {
    prevanimtime: {
        type: "float"
    },
    sequencetime: {
        type: "float"
    },
    prevseqblending: {
        type: "array",
		itemType: "byte",
		size: 2
    },
    prevorigin: {
        type: vec3_t
    },
    prevangles: {
        type: vec3_t
    },
    prevsequence: {
        type: "int"
    },
    prevframe: {
        type: "float"
    },
    prevcontroller: {
		type: "array",
		itemType: "byte",
		size: 4
	},
    prevblending: {
		type: "array",
		itemType: "byte",
		size: 2
	},
};