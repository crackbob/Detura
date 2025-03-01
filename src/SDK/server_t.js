import sv_client_t from "./sv_client_t";
import sv_state_t from "./sv_state_t";

export default {
    state: {
      type: sv_state_t // precache commands are only valid during load
    },
    background: {
      type: 'int' // this is background map
    },
    loadgame: {
      type: 'int' // client begins should reuse existing entity
    },
    time: {
      type: 'double' // sv.time += sv.frametime
    },
    time_residual: {
      type: 'double' // unclamped
    },
    frametime: {
      type: 'float' // 1.0 / sv_fps->value
    },
    framecount: {
      type: 'int' // count physic frames
    },
    current_client: {
      type: "int" // current client who network message sending on
    },
  
    hostflags: {
      type: 'int' // misc server flags: predicting etc
    },
    worldmapCRC: {
      type: 'CRC32_t' // check crc for catching cheater maps
    },
    progsCRC: {
      type: 'int' // this is used with feature ENGINE_QUAKE_COMPATIBLE
    },
  
    name: {
      type: 'Array<char[MAX_QPATH]>' // map name
    },
    startspot: {
      type: 'Array<char[MAX_QPATH]>'
    },
  
    lastchecktime: {
      type: 'double'
    },
    lastcheck: {
      type: 'int' // number of last checked client
    },
  
    model_precache: {
      type: 'Array<Array<char[MAX_QPATH]>[MAX_MODELS]'
    },
    sound_precache: {
      type: 'Array<Array<char[MAX_QPATH]>[MAX_SOUNDS]'
    },
    files_precache: {
      type: 'Array<Array<char[MAX_QPATH]>[MAX_CUSTOM]'
    },
    event_precache: {
      type: 'Array<Array<char[MAX_QPATH]>[MAX_EVENTS]'
    },
    model_precache_flags: {
      type: 'Array<byte[MAX_MODELS]>'
    },
    models: {
      type: 'Array<model_t*>[MAX_MODELS]'
    },
    num_static_entities: {
      type: 'int'
    },
  
    // run local lightstyles to let SV_LightPoint grab the actual information
    lightstyles: {
      type: 'Array<lightstyle_t>[MAX_LIGHTSTYLES]'
    },
  
    consistency_list: {
      type: 'Array<consistency_t>[MAX_MODELS]'
    },
    resources: {
      type: 'Array<resource_t>[MAX_RESOURCES]'
    },
    num_consistency: {
      type: 'int' // typically check model bounds on this
    },
    num_resources: {
      type: 'int'
    },
  
    instanced: {
      type: 'Array<sv_baseline_t>[MAX_CUSTOM_BASELINES]' // instanced baselines
    },
    last_valid_baseline: {
      type: 'int' // all the entities with number more than that was created in-game and doesn't have the baseline
    },
    num_instanced: {
      type: 'int'
    },
  
    // unreliable data to send to clients
    datagram: {
      type: 'sizebuf_t'
    },
    datagram_buf: {
      type: 'Array<byte>[MAX_DATAGRAM]'
    },
  
    // reliable data to send to clients
    reliable_datagram: {
      type: 'sizebuf_t' // copied to all clients at end of frame
    },
    reliable_datagram_buf: {
      type: 'Array<byte>[MAX_DATAGRAM]'
    },
  
    // the multicast buffer is used to send a message to a set of clients
    multicast: {
      type: 'sizebuf_t'
    },
    multicast_buf: {
      type: 'Array<byte>[MAX_MULTICAST]'
    },
  
    signon: {
      type: 'sizebuf_t'
    },
    signon_buf: {
      type: 'Array<byte>[MAX_INIT_MSG]' // need to get to maximum size
    },
  
    spec_datagram: {
      type: 'sizebuf_t'
    },
    spectator_buf: {
      type: 'Array<byte>[MAX_MULTICAST]'
    },
  
    worldmodel: {
      type: 'model_t*' // pointer to world
    },
  
    playersonly: {
      type: 'qboolean'
    },
    simulating: {
      type: 'qboolean' // physics is running
    },
    paused: {
      type: 'qboolean'
    },
  
    // statistics
    ignored_static_ents: {
      type: 'int'
    },
    ignored_world_decals: {
      type: 'int'
    },
    static_ents_overflow: {
      type: 'int'
    }
};