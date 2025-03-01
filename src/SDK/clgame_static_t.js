import cl_entity from "./cl_entity";
import movevars_s from "./movevars_s";
import playermove_t from "./playermove_t";

export default {
    "bruh": {
        type: "pad_1008"
    },
    "entities": {
        itemType: cl_entity,
        type: "dynarray"
    },
    "static_entities": {
        itemType: cl_entity,
        type: "dynarray"
    },
    "idk": {
        type: "pad_4"
    },
    "maxEntities": {
        type: "int"
    },
    "numStatics": {
        type: "int"
    },
    "maxModels": {
        type: "int"
    },

	// movement values from server
	"movevars":	{
        type: movevars_s
    },
	"oldmovevars": {
        type: movevars_s
    },

    "idkWHy": {
        type: "pad_104"
    },

    "pMove": {
        type: "ptr",
        itemType: playermove_t
    },	
}