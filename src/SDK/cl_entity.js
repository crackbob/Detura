import entity_state from "./entity_state";
import latchedvars_t from "./latchedvars_t";
import mouth_t from "./mouth_t";
import position_history_t from "./position_history_t";
import vec3_t from "./vec3_t";

export default {
    index: "int",
    player: "int",

    baseline: entity_state,
    prevstate: entity_state,
    curstate: entity_state,

    current_position: "int",
    ph: position_history_t,

    mouth: mouth_t,

    latched: latchedvars_t,

    lastmove: "float",

    origin: "vec3_t",
    angles: "vec3_t",

    attachment: vec3_t,

    trivial_accept: "int",

    model: "model_s",
    efrag: "efrag_s", 
    topnode: "mnode_s",

    syncbase: "float",
    visframe: "int",
    cvFloorColor: "colorVec"
};