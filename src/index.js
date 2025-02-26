import CUtils from "./utils/CUtils";
import movevars_s from "./SDK/movevars_s";
import cl_entity from "./SDK/cl_entity";

window.CUtils = CUtils;
window.movevars_s = movevars_s;

console.log(CUtils.getStruct(cl_entity, Module._CL_GetLocalPlayer()));

window.cl_entity = cl_entity;

// POC
function zeroGravity () {
    let movevars = CUtils.getStruct(movevars_s, Module._clgame + 1032);
    movevars.gravity = 0;
    CUtils.setStruct(movevars_s, Module._clgame + 1032, movevars);
}