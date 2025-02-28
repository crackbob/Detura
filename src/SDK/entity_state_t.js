import vec3_t from "./vec3_t";
import color24 from "./color24";

export default {
    entityType: {
        type: "int"
    },
    number: {
        type: "int"
    },
    msg_time: {
        type: "float"
    },
    messagenum: {
        type: "int"
    },

    origin: {
        type: vec3_t
    },
    angles: {
        type: vec3_t
    },

    modelindex: {
        type: "int"
    },
    sequence: {
        type: "int"
    },
    frame: {
        type: "float"
    },
    colormap: {
        type: "int"
    },
    skin: {
        type: "short"
    },
    solid: {
        type: "short"
    },
    effects: {
        type: "int"
    },
    pad: {
        type: "pad_4" // i do NOT know if this is in the right spot
    },
    scale: {
        type: "float"
    },
    eflags: {
        type: "byte"
    },

    rendermode: {
        type: "int"
    },
    renderamt: {
        type: "int"
    },
    rendercolor: {
        type: color24
    },
    renderfx: {
        type: "int"
    },

    movetype: {
        type: "int"
    },
    animtime: {
        type: "float"
    },
    framerate: {
        type: "float"
    },
    body: {
        type: "int"
    },
    controller: {
        type: "pad_4"
    },
    blending: {
        type: "pad_4"
    },
    velocity: {
        type: vec3_t
    },

    mins: {
        type: vec3_t
    },
    maxs: {
        type: vec3_t
    },

    aiment: {
        type: "int"
    },
    owner: {
        type: "int"
    },

    friction: {
        type: "float"
    },
    gravity: {
        type: "float"
    },

    team: {
        type: "int"
    },
    playerclass: {
        type: "int"
    },
    health: {
        type: "int"
    },
    spectator: {
        type: "int"
    },
    weaponmodel: {
        type: "int"
    },
    gaitsequence: {
        type: "int"
    },
    basevelocity: {
        type: vec3_t
    },
    usehull: {
        type: "int"
    },
    oldbuttons: {
        type: "int"
    },
    onground: {
        type: "int"
    },
    iStepLeft: {
        type: "int"
    },
    flFallVelocity: {
        type: "float"
    },

    fov: {
        type: "float"
    },
    weaponanim: {
        type: "int"
    },

    startpos: {
        type: vec3_t
    },
    endpos: {
        type: vec3_t
    },
    impacttime: {
        type: "float"
    },
    starttime: {
        type: "float"
    },

    iuser1: {
        type: "int"
    },
    iuser2: {
        type: "int"
    },
    iuser3: {
        type: "int"
    },
    iuser4: {
        type: "int"
    },
    fuser1: {
        type: "float"
    },
    fuser2: {
        type: "float"
    },
    fuser3: {
        type: "float"
    },
    fuser4: {
        type: "float"
    },
    vuser1: {
        type: vec3_t
    },
    vuser2: {
        type: vec3_t
    },
    vuser3: {
        type: vec3_t
    },
    vuser4: {
        type: vec3_t
    },
};