import vec3_t from "./vec3_t";

export default {
    origin: {
        type: vec3_t
    },
    velocity: {
        type: vec3_t
    },

    viewmodel: {
        type: "int"
    },
    punchangle: {
        type: vec3_t
    },
    flags: {
        type: "int"
    },
    waterlevel: {
        type: "int"
    },
    watertype: {
        type: "int"
    },
    view_ofs: {
        type: vec3_t
    },
    health: {
        type: "float"
    },

    bInDuck: {
        type: "int"
    },
    weapons: {
        type: "int"
    },

    flTimeStepSound: {
        type: "int"
    },
    flDuckTime: {
        type: "int"
    },
    flSwimTime: {
        type: "int"
    },
    waterjumptime: {
        type: "int"
    },

    maxspeed: {
        type: "float"
    },

    fov: {
        type: "float"
    },
    weaponanim: {
        type: "int"
    },

    m_iId: {
        type: "int"
    },
    ammo_shells: {
        type: "int"
    },
    ammo_nails: {
        type: "int"
    },
    ammo_cells: {
        type: "int"
    },
    ammo_rockets: {
        type: "int"
    },
    m_flNextAttack: {
        type: "float"
    },

    tfstate: {
        type: "int"
    },
    pushmsec: {
        type: "int"
    },
    deadflag: {
        type: "int"
    },
    physinfo: {
        type: "char"
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
    }
};