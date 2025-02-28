import entity_state from "./entity_state_t";
import latchedvars_t from "./latchedvars_t";
import mouth_t from "./mouth_t";
import position_history_t from "./position_history_t";
import vec3_t from "./vec3_t";

export default {
    index: {
        type: "int"
    },
    player: {
        type: "int"
    },

    baseline: {
        type: entity_state
    },
    prevstate: {
        type: entity_state
    },
    curstate: {
        type: entity_state
    },

    current_position: {
        type: "int"
    },
    ph: {
        type: position_history_t
    },

    mouth: {
        type: mouth_t
    },

    latched: {
        type: latchedvars_t
    },

    lastmove: {
        type: "float"
    },

    origin: {
        type: vec3_t
    },
    angles: {
        type: vec3_t
    },

    attachment: {
        type: vec3_t
    },

    trivial_accept: {
        type: "int"
    },

    model: {
        type: "model_s"
    },
    efrag: {
        type: "efrag_s"
    }, 
    topnode: {
        type: "mnode_s"
    },

    syncbase: {
        type: "float"
    },
    visframe: {
        type: "int"
    },
    cvFloorColor: {
        type: "colorVec"
    },
    imlazy: {
        type: "pad_1834"
    }
};