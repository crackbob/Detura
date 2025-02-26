import vec3_t from "../SDK/vec3_t"
import color24 from "./color24";

export default {
    entityType: "int",
    number: "int",
    msg_time: "float",
    messagenum: "int",

    origin: vec3_t,
    angles: vec3_t,

    modelindex: "int",
    sequence: "int",
    frame: "float",
    colormap: "int",
    skin: "short",
    solid: "short",
    effects: "int",
    scale: "float",
    eflags: "byte",

    rendermode: "int",
    renderamt: "int",
    rendercolor: color24,
    renderfx: "int",

    movetype: "int",
    animtime: "float",
    framerate: "float",
    body: "int",
    controller: "pad_4",
    blending: "pad_4",
    velocity: vec3_t,

    mins: vec3_t,
    maxs: vec3_t,

    aiment: "int",
    owner: "int",

    friction: "float",
    gravity: "float",

    team: "int",
    playerclass: "int",
    health: "int",
    spectator: "int",
    weaponmodel: "int",
    gaitsequence: "int",
    basevelocity: vec3_t,
    usehull: "int",
    oldbuttons: "int",
    onground: "int",
    iStepLeft: "int",
    flFallVelocity: "float",

    fov: "float",
    weaponanim: "int",

    startpos: vec3_t,
    endpos: vec3_t,
    impacttime: "float",
    starttime: "float",

    iuser1: "int",
    iuser2: "int",
    iuser3: "int",
    iuser4: "int",
    fuser1: "float",
    fuser2: "float",
    fuser3: "float",
    fuser4: "float",
    vuser1: vec3_t,
    vuser2: vec3_t,
    vuser3: vec3_t,
    vuser4: vec3_t,
};