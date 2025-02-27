import connstate_t from "./connstate_t";
import keydest_t from "./keydest_t";
import local_state_t from "./local_state_t";

export default {
    "state": connstate_t,
    "initialized": "int",
    "changelevel": "int",
    "changedemo": "int",
    "timestart": "double",

    // screen rendering information
    "disable_screen": "float",
    "draw_changelevel": "int",

    "key_dest": keydest_t,

    "mempool": "int",

    "signon": "int",

    // connection information
    "servername": "char",
    "connect_time": "double", 
    "max_fragment_size": "int",
    "connect_retry": "int",
    "spectator": "int",

    "spectator_state": local_state_t,

    "userinfo": "char[MAX_INFO_STRING]",
    "physinfo": "char[MAX_INFO_STRING]",

    "datagram": "sizebuf_t",
    "datagram_buf": "byte",

    "netchan": "netchan_t",

    "packet_loss": "float",
    "packet_loss_recalc_time": "double",
    "starting_count": "int",

    "nextcmdtime": "float", 
    "lastoutgoingcommand": "int", // sequence number of last outgoing command
    "lastupdate_sequence": "int", // prediction stuff

    "td_lastframe": "int", // to meter out one message a frame
    "td_startframe": "int", // host_framecount at start
    "td_starttime": "double", // realtime at second frame of timedemo
    "forcetrack": "int", // -1 = use normal cd track

    // game images
    "pauseIcon": "int", // draw 'paused' when game in-pause
    "tileImage": "int", // for draw any areas not covered by the refresh
    "loadingBar": "int", // 'loading' progress bar
    "creditsFont": "cl_font_t", // shared credits font

    "latency": "float", // rolling average of frame latencey (receivedtime - senttime) values.

    "num_client_entities": "int", // cl.maxclients * CL_UPDATE_BACKUP * MAX_PACKET_ENTITIES
    "next_client_entities": "int", // next client_entity to use
    "packet_entities": "entity_state_t*", // [num_client_entities]

    "predicted_players": "predicted_player_t[MAX_CLIENTS]",
    "correction_time": "double",

    "scrshot_request": "scrshot_t",
    "scrshot_action": "scrshot_t",
    "envshot_vieworg": "const float*",
    "envshot_viewsize": "int",
    "envshot_disable_vis": "int",
    "shotname": "string",

    // download info
    "dl": "incomingtransfer_t",

    // demo loop control
    "demonum": "int",
    "olddemonum": "int",
    "demos": "char[MAX_DEMOS][MAX_QPATH]",
    "demos_pending": "int",

    // movie playlist
    "movienum": "int",
    "movies": "string[MAX_MOVIES]",

    // demo recording info must be here, so it isn't clearing on level change
    "demorecording": "int",
    "demoplayback": "int",
    "demowaiting": "int",
    "timedemo": "int",
    "demoname": "string",
    "demotime": "double",
    "set_lastdemo": "int",

    "demofile": "file_t*",
    "demoheader": "file_t*",
    "internetservers_wait": "int",
    "internetservers_pending": "int",
    "internetservers_key": "uint32_t",
    "internetservers_query": "char[512]",
    "internetservers_query_len": "uint32_t",

    // multiprotocol support
    "legacymode": "connprotocol_t",
    "extensions": "int",

    "serveradr": "netadr_t",

    // do we accept utf8 as input
    "accept_utf8": "int",

    // server's build number (might be zero)
    "build_num": "int"
};