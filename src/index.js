import CUtils from "./utils/CUtils";
import movevars_s from "./SDK/movevars_s";
import cl_entity from "./SDK/cl_entity";
import vec3_t from "./SDK/vec3_t";
import entity_state from "./SDK/entity_state";

window.CUtils = CUtils;
window.movevars_s = movevars_s;
window.vec3_t = vec3_t;
window.entity_state = entity_state;

console.log(CUtils.getStruct(cl_entity, Module._CL_GetLocalPlayer()));

window.cl_entity = cl_entity;

// POC
function zeroGravity () {
    let movevars = CUtils.getStruct(movevars_s, Module._clgame + 1032);
    movevars.gravity = 0;
    CUtils.setStruct(movevars_s, Module._clgame + 1032, movevars);
}

function fullbright () {
    Module.Cvar_Set("r_fullbright", "1");
}