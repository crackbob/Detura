import cl_state_t from "./cl_state_t";

export default {
    state: {
      type: cl_state_t
    },
    upstate: {
      type: 'cl_upload_t' // uploading state
    },
    name: {
      type: 'Array<char[32]>' // extracted from userinfo, color string allowed
    },
    flags: {
      type: 'uint' // client flags, some info
    },
    crcValue: {
      type: 'CRC32_t'
    },
  
    userinfo: {
      type: 'Array<char[MAX_INFO_STRING]>' // name, etc (received from client)
    },
    physinfo: {
      type: 'Array<char[MAX_INFO_STRING]>' // set on server (transmit to client)
    },
  
    netchan: {
      type: 'netchan_t'
    },
    chokecount: {
      type: 'int' // number of messages rate suppressed
    },
    delta_sequence: {
      type: 'int' // -1 = no compression
    },
  
    next_messagetime: {
      type: 'double' // time when we should send next world state update
    },
    next_checkpingtime: {
      type: 'double' // time to send all players pings to client
    },
    next_sendinfotime: {
      type: 'double' // time to send info about all players
    },
    cl_updaterate: {
      type: 'double' // client requested updaterate
    },
    timebase: {
      type: 'double' // client timebase
    },
    connection_started: {
      type: 'double'
    },
  
    hashedcdkey: {
      type: 'Array<char[34]>' // MD5 hash is 32 hex #'s, plus trailing 0
    },
  
    customdata: {
      type: 'customization_t' // player customization linked list
    },
    resourcesonhand: {
      type: 'resource_t'
    },
    resourcesneeded: {
      type: 'resource_t' // <mapname.res> from client (server downloading)
    },
    lastcmd: {
      type: 'usercmd_t' // for filling in big drops
    },
  
    connecttime: {
      type: 'double'
    },
    cmdtime: {
      type: 'double'
    },
    ignorecmdtime: {
      type: 'double'
    },
  
    packet_loss: {
      type: 'int'
    },
    latency: {
      type: 'float'
    },
  
    ignored_ents: {
      type: 'int' // if visibility list is full we should know how many entities will be ignored
    },
    edict: {
      type: 'edict_t*' // EDICT_NUM(clientnum + 1)
    },
    pViewEntity: {
      type: 'edict_t*' // svc_setview member
    },
    viewentity: {
      type: 'Array<edict_t*>[MAX_VIEWENTS]' // list of portal cameras in player PVS
    },
    num_viewents: {
      type: 'int' // num of portal cameras that can merge PVS
    },
  
    m_bLoopback: {
      type: 'int' // Does this client want to hear his own voice?
    },
    listeners: {
      type: 'uint' // which other clients does this guy's voice stream go to?
    },
  
    // the datagram is written to by sound calls, prints, temp ents, etc.
    // it can be harmlessly overflowed.
    datagram: {
      type: 'sizebuf_t'
    },
    datagram_buf: {
      type: 'Array<byte>[MAX_DATAGRAM]'
    },
  
    frames: {
      type: 'client_frame_t*' // updates can be delta'd from here
    },
    events: {
      type: 'event_state_t' // delta-updated events cycle
    },
  
    challenge: {
      type: 'int' // challenge of this user, randomly generated
    },
    userid: {
      type: 'int' // identifying number on server
    },
    extensions: {
      type: 'int'
    },
    useragent: {
      type: 'Array<char[MAX_INFO_STRING]>'
    },
  
    ignorecmdtime_warns: {
      type: 'int' // how many times client time was faster than server during this session
    },
    ignorecmdtime_warned: {
      type: 'int' // did we warn our server operator in the log for this batch of commands?
    },
  
    fullupdate_next_calltime: {
      type: 'double'
    },
    userinfo_next_changetime: {
      type: 'double'
    },
    userinfo_penalty: {
      type: 'double'
    },
    userinfo_change_attempts: {
      type: 'int'
    }
};
