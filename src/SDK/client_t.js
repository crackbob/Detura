import vec3_t from "./vec3_t";

export default {
    time: {
        type: 'double'
    },
    oldtime: {
        type: 'double'
    },
    
    viewentity: {
        type: 'int'
    },

    // server state information
    playernum: {
        type: 'int'
    },
    maxclients: {
        type: 'int'
    },

    nummodels: {
        type: 'int'
    },
    models: {
        type: 'Array<model_t>'
    },

    paused: {
        type: 'int'
    },

    simorg: {
        type: vec3_t
    },

    servercount: {
        type: 'int'
    },
    validsequence: {
        type: 'int'
    },
    parsecount: {
        type: 'int'
    },
    parsecountmod: {
        type: 'int'
    },

    video_prepped: {
        type: 'int'
    },
    audio_prepped: {
        type: 'int'
    },

    delta_sequence: {
        type: 'int'
    },

    mtime: {
        type: 'Array<double>'
    },
    lerpFrac: {
        type: 'float'
    },

    last_command_ack: {
        type: 'int'
    },
    last_incoming_sequence: {
        type: 'int'
    },

    background: {
        type: 'int'
    },
    first_frame: {
        type: 'int'
    },
    proxy_redirect: {
        type: 'int'
    },
    skip_interp: {
        type: 'int'
    },

    checksum: {
        type: 'uint'
    },

    frames: {
        type: 'Array<frame_t>'
    },
    commands: {
        type: 'Array<runcmd_t>'
    },
    predicted_frames: {
        type: 'Array<local_state_t>'
    },

    timedelta: {
        type: 'double'
    },

    serverinfo: {
        type: 'string'
    },
    players: {
        type: 'Array<player_info_t>'
    },
    lastresourcecheck: {
        type: 'double'
    },
    http_download: {
        type: 'int'
    },
    events: {
        type: 'event_state_t'
    },

    // predicting stuff but not only...
    local: {
        type: 'cl_local_data_t'
    },

    // player final info
    cmd: {
        type: 'usercmd_t'
    },
    viewangles: {
        type: vec3_t
    },
    viewheight: {
        type: vec3_t
    },
    punchangle: {
        type: vec3_t
    },

    intermission: {
        type: 'int'
    },
    crosshairangle: {
        type: vec3_t
    },

    predicted_angle: {
        type: 'Array<pred_viewangle_t>'
    },
    angle_position: {
        type: 'int'
    },
    addangletotal: {
        type: 'float'
    },
    prevaddangletotal: {
        type: 'float'
    },

    // predicted velocity
    simvel: {
        type: vec3_t
    },

    instanced_baseline: {
        type: 'Array<entity_state_t>'
    },
    instanced_baseline_count: {
        type: 'int'
    },

    sound_precache: {
        type: 'Array<Array<string>>'
    },
    event_precache: {
        type: 'Array<Array<string>>'
    },
    files_precache: {
        type: 'Array<Array<string>>'
    },
    lightstyles: {
        type: 'Array<lightstyle_t>'
    },
    numfiles: {
        type: 'int'
    },

    consistency_list: {
        type: 'Array<consistency_t>'
    },
    num_consistency: {
        type: 'int'
    },

    need_force_consistency_response: {
        type: 'int'
    },
    resourcesonhand: {
        type: 'resource_t'
    },
    resourcesneeded: {
        type: 'resource_t'
    },
    resourcelist: {
        type: 'Array<resource_t>'
    },
    num_resources: {
        type: 'int'
    },

    sound_index: {
        type: 'Array<short>'
    },
    decal_index: {
        type: 'Array<short>'
    },

    worldmodel: {
        type: 'model_t'
    },

    lostpackets: {
        type: 'int'
    },

    frametime_remainder: {
        type: 'double'
    },

    worldmapCRC: {
        type: 'uint'
    }
};