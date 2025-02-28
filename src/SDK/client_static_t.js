import connstate_t from "./connstate_t";
import keydest_t from "./keydest_t";
import local_state_t from "./local_state_t";

export default {
    state: {
        type: connstate_t
    },
    initialized: {
        type: "int"
    },
    changelevel: {
        type: "int"
    },
    changedemo: {
        type: "int"
    },
    timestart: {
        type: "double"
    },

    // screen rendering information
    disable_screen: {
        type: "float"
    },
    draw_changelevel: {
        type: "int"
    },

    key_dest: {
        type: keydest_t
    },

    mempool: {
        type: "int"
    },

    signon: {
        type: "int"
    },

    // connection information
    servername: {
        type: "char"
    },
    connect_time: {
        type: "double"
    },
    max_fragment_size: {
        type: "int"
    },
    connect_retry: {
        type: "int"
    },
    spectator: {
        type: "int"
    },

    spectator_state: {
        type: local_state_t
    },

    userinfo: {
        type: "char[MAX_INFO_STRING]"
    },
    physinfo: {
        type: "char[MAX_INFO_STRING]"
    },

    datagram: {
        type: "sizebuf_t"
    },
    datagram_buf: {
        type: "byte"
    },

    netchan: {
        type: "netchan_t"
    },

    packet_loss: {
        type: "float"
    },
    packet_loss_recalc_time: {
        type: "double"
    },
    starting_count: {
        type: "int"
    },

    nextcmdtime: {
        type: "float"
    },
    lastoutgoingcommand: {
        type: "int" // sequence number of last outgoing command
    },
    lastupdate_sequence: {
        type: "int" // prediction stuff
    },

    td_lastframe: {
        type: "int" // to meter out one message a frame
    },
    td_startframe: {
        type: "int" // host_framecount at start
    },
    td_starttime: {
        type: "double" // realtime at second frame of timedemo
    },
    forcetrack: {
        type: "int" // -1 = use normal cd track
    },

    // game images
    pauseIcon: {
        type: "int" // draw 'paused' when game in-pause
    },
    tileImage: {
        type: "int" // for draw any areas not covered by the refresh
    },
    loadingBar: {
        type: "int" // 'loading' progress bar
    },
    creditsFont: {
        type: "cl_font_t" // shared credits font
    },

    latency: {
        type: "float" // rolling average of frame latency (receivedtime - senttime) values.
    },

    num_client_entities: {
        type: "int" // cl.maxclients * CL_UPDATE_BACKUP * MAX_PACKET_ENTITIES
    },
    next_client_entities: {
        type: "int" // next client_entity to use
    },
    packet_entities: {
        type: "entity_state_t*" // [num_client_entities]
    },

    predicted_players: {
        type: "predicted_player_t[MAX_CLIENTS]"
    },
    correction_time: {
        type: "double"
    },

    scrshot_request: {
        type: "scrshot_t"
    },
    scrshot_action: {
        type: "scrshot_t"
    },
    envshot_vieworg: {
        type: "const float*"
    },
    envshot_viewsize: {
        type: "int"
    },
    envshot_disable_vis: {
        type: "int"
    },
    shotname: {
        type: "string"
    },

    // download info
    dl: {
        type: "incomingtransfer_t"
    },

    // demo loop control
    demonum: {
        type: "int"
    },
    olddemonum: {
        type: "int"
    },
    demos: {
        type: "char[MAX_DEMOS][MAX_QPATH]"
    },
    demos_pending: {
        type: "int"
    },

    // movie playlist
    movienum: {
        type: "int"
    },
    movies: {
        type: "string[MAX_MOVIES]"
    },

    // demo recording info; must be here to avoid clearing on level change
    demorecording: {
        type: "int"
    },
    demoplayback: {
        type: "int"
    },
    demowaiting: {
        type: "int"
    },
    timedemo: {
        type: "int"
    },
    demoname: {
        type: "string"
    },
    demotime: {
        type: "double"
    },
    set_lastdemo: {
        type: "int"
    },

    demofile: {
        type: "file_t*"
    },
    demoheader: {
        type: "file_t*"
    },
    internetservers_wait: {
        type: "int"
    },
    internetservers_pending: {
        type: "int"
    },
    internetservers_key: {
        type: "uint32_t"
    },
    internetservers_query: {
        type: "char[512]"
    },
    internetservers_query_len: {
        type: "uint32_t"
    },

    // multiprotocol support
    legacymode: {
        type: "connprotocol_t"
    },
    extensions: {
        type: "int"
    },

    serveradr: {
        type: "netadr_t"
    },

    // do we accept utf8 as input
    accept_utf8: {
        type: "int"
    },

    // server's build number (might be zero)
    build_num: {
        type: "int"
    }
};