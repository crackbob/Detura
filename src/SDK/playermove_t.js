import movevars_s from "./movevars_s";
import vec3_t from "./vec3_t";

export default {
    player_index: {
      type: 'int' // So we don't try to run the PM_CheckStuck nudging too quickly.
    },
    server: {
      type: 'int' // For debugging, are we running physics code on server side?
    },
  
    multiplayer: {
      type: 'int' // 1 == multiplayer server
    },
    time: {
      type: 'float' // realtime on host, for reckoning duck timing
    },
    frametime: {
      type: 'float' // Duration of this frame
    },
    forward: {
      type: vec3_t // Vectors for angles
    },
    right: {
      type: vec3_t
    },
    up: {
      type: vec3_t
    },
  
    // player state
    origin: {
      type: vec3_t // Movement origin
    },
    angles: {
      type: vec3_t // Movement view angles
    },
    oldangles: {
      type: vec3_t // Angles before movement view angles were looked at
    },
    velocity: {
      type: vec3_t // Current movement direction
    },
    movedir: {
      type: vec3_t // For waterjumping, a forced forward velocity so we can fly over lip of ledge
    },
    basevelocity: {
      type: vec3_t // Velocity of the conveyor we are standing on, e.g.
    },
  
    // For ducking/dead
    view_ofs: {
      type: vec3_t // Our eye position
    },
    flDuckTime: {
      type: 'float' // Time we started duck
    },
    bInDuck: {
      type: 'int' // In process of ducking or ducked already?
    },
  
    // For walking/falling
    flTimeStepSound: {
      type: 'int' // Next time we can play a step sound
    },
    iStepLeft: {
      type: 'int'
    },
  
    flFallVelocity: {
      type: 'float'
    },
    punchangle: {
      type: vec3_t
    },
  
    flSwimTime: {
      type: 'float'
    },
    flNextPrimaryAttack: {
      type: 'float'
    },
  
    effects: {
      type: 'int' // MUZZLE FLASH, e.g.
    },
  
    flags: {
      type: 'int' // FL_ONGROUND, FL_DUCKING, etc.
    },
    usehull: {
      type: 'int' // 0 = regular player hull, 1 = ducked player hull, 2 = point hull
    },
    gravity: {
      type: 'float' // Our current gravity and friction
    },
    friction: {
      type: 'float'
    },
    oldbuttons: {
      type: 'int' // Buttons last usercmd
    },
    waterjumptime: {
      type: 'float' // Amount of time left in jumping out of water cycle
    },
    dead: {
      type: 'int' // Are we a dead player?
    },
    deadflag: {
      type: 'int'
    },
    spectator: {
      type: 'int' // Should we use spectator physics model?
    },
    movetype: {
      type: 'int' // Our movement type, NOCLIP, WALK, FLY
    },
  
    onground: {
      type: 'int'
    },
    waterlevel: {
      type: 'int'
    },
    watertype: {
      type: 'int'
    },
    oldwaterlevel: {
      type: 'int'
    },
  
    sztexturename: {
      type: 'array', // Texture name
      size: 256
    },
    chtexturetype: {
      type: 'char'
    },
  
    maxspeed: {
      type: 'float'
    },
    clientmaxspeed: {
      type: 'float' // Player specific maxspeed
    },
  
    // For mods
    iuser1: {
      type: 'int'
    },
    iuser2: {
      type: 'int'
    },
    iuser3: {
      type: 'int'
    },
    iuser4: {
      type: 'int'
    },
    fuser1: {
      type: 'float'
    },
    fuser2: {
      type: 'float'
    },
    fuser3: {
      type: 'float'
    },
    fuser4: {
      type: 'float'
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
  
    // world state
  
    numphysent: {
      type: 'int' // Number of entities to clip against
    },
    physents: {
      type: 'Array<physent_t>[MAX_PHYSENTS]'
    },
  
    nummoveent: {
      type: 'int' // Number of movement entities (ladders)
    },
    moveents: {
      type: 'Array<physent_t>[MAX_MOVEENTS]' // Just a list of ladders
    },
  
    numvisent: {
      type: 'int' // All things being rendered, for tracing against things you don't actually collide with
    },
    visents: {
      type: 'Array<physent_t>[MAX_PHYSENTS]'
    },
  
    cmd: {
      type: 'usercmd_t' // Input to run through physics
    },
  
    numtouch: {
      type: 'int' // Trace results for objects we collided with
    },
    touchindex: {
      type: 'Array<pmtrace_t>[MAX_PHYSENTS]'
    },
  
    physinfo: {
        type: 'array',
        itemType: "byte",
        size: 256
    },
  
    movevars: {
        type: "ptr",
        itemType: movevars_s // Pointer to movevars
    },
    player_mins: {
        type: 'array',
        itemType: vec3_t,
        size: 4
    },
    player_maxs: {
        type: 'array',
        itemType: vec3_t,
        size: 4
    }
};