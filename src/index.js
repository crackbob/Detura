import CUtils from "./utils/CUtils";
import movevars_s from "./SDK/movevars_s";
import cl_entity from "./SDK/cl_entity";
import vec3_t from "./SDK/vec3_t";
import entity_state_t from "./SDK/entity_state_t";
import clgame_static_t from "./SDK/clgame_static_t";
import client_static_t from "./SDK/client_static_t";

window.CUtils = CUtils;
window.movevars_s = movevars_s;
window.vec3_t = vec3_t;
window.entity_state_t = entity_state_t;
window.clgame_static_t = clgame_static_t;

console.log(CUtils.cStruct(cl_entity, Module._CL_GetLocalPlayer()));

window.cl_entity = cl_entity;
window.client_static_t = client_static_t;

// POC
function zeroGravity () {
    let movevars = CUtils.cStruct(movevars_s, Module._clgame + 1032);
    movevars.gravity = 0;
}

function fullbright () {
    Module.Cvar_Set("r_fullbright", "1");
}