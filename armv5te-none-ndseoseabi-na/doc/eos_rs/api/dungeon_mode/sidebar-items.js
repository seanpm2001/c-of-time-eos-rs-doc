window.SIDEBAR_ITEMS = {"enum":[["Conversion2Status","The status of a monster’s Conversion 2 state."],["Direction","Direction on the dungeon grid"],["DungeonEntityType","The type of an entity in a dungeon."],["DungeonObjective","Types of weather."],["DungeonTypeMatchup","Describes the effectiveness of a move’s type against type(s)."],["FloorLoopStatus","Controls whether the loop that runs until the current floor ends should continue iterating or not and why"],["FloorType","The type of a floor."],["ForcedLossReason","List of reasons why you can get forcefully kicked out of a dungeon."],["MissionSubtypeChallenge","Mission subtype for [`MissionType::ChallengeRequest`]."],["MissionSubtypeExplore","Mission subtype for [`MissionType::ExploreWithClient`]."],["MissionSubtypeOutlaw","Mission subtype for [`MissionType::ArrestOutlaw`]."],["MissionSubtypeTakeItem","Mission subtype for [`MissionType::TakeItemFromOutlaw`]."],["MissionType","Specific mission type on a dungeon floor."],["MissionTypeGroup","Group of mission type on a dungeon floor."],["MoveCategory","The category of a move."],["SecondaryTerrainType","The type of secondary terrain of a tile."],["TargetTypeIndex","Move index of a monster, used by some functions."],["TerrainType","The type of terrain of a tile."],["WarpType","Different types of warp effects"],["Weather","Types of weather."]],"fn":[["advance_frame","Advances one frame. Does not return until the next frame starts."],["display_actions","Graphically displays any pending actions that have happened but haven’t been shown on screen yet."],["fade_to_black","Fades the screen to black across several frames."],["get_chebyshev_distance","Returns the Chebyshev distance between two positions. Calculated as max(abs(x0-x1), abs(y0-y1))."],["get_direction_towards_position","Gets the direction in which a monster should move to go from the origin position to the target position."],["is_position_in_sight","Checks if a given target position is in sight from a given origin position."],["reset_damage_calc_scratch_space","[`DungeonMonsterRef::calc_damage`] seems to use scratch space of some kind, which this function zeroes."],["reset_damage_desc","Seems to zero some damage description struct, which is output by the damage calculation function."],["set_both_screens_window_color_to_default","This changes the palettes of windows in both screens to an appropriate value depending on the playthrough."]],"mod":[["dungeon_generator","The dungeon generation as a collection of traits with two implementations."]],"struct":[["Dungeon","The Rust-safe wrapped master struct that contains the state of the dungeon. Can be owned or mutably borrowed from a low-level [`ffi::dungeon`]."],["DungeonEffectsEmitter","Helper struct for emitting move and item effects."],["DungeonEffectsInternals","Internal functions for battle effect calculations."],["DungeonMonsterMut","Mutable reference type for the info struct for [`DungeonEntity`] objects that are monsters."],["DungeonMonsterRef","Reference type for the info struct for [`DungeonEntity`] objects that are monsters."],["DungeonRng","Helper struct for dungeon RNG."],["DungeonTileGridIter","A iterator over the tiles in a dungeon tile grid."],["DungeonTileGridIterMut","A mutable iterator over the tiles in a dungeon tile grid."],["DungeonTileGridMut","See [`DungeonTileGridRead`] and [`DungeonTileGridWrite`]."],["DungeonTileGridRef","See [`DungeonTileGridRead`]."],["EntityTableMut","See [`EntityTableRead`] and [`EntityTableWrite`]."],["EntityTableRef","See [`EntityTableRead`]."],["GlobalDungeonData","Helper struct for dealing with the current floor, the global dungeon and the mission state."],["LogMessageBuilder","Builder for creating dungeon message log messages."]],"trait":[["DungeonMonsterRead","Trait for [`DungeonMonsterRef`] and [`DungeonMonsterMut`] (read operations)."],["DungeonMonsterWrite","Trait for [`DungeonMonsterMut`] (write operations)."],["DungeonMoveExt","Extension trait for [`Move`] specific to dungeon mode."],["DungeonTileGridRead","Functions for reading from a tile grid."],["DungeonTileGridWrite","Functions for writing into a tile grid."],["EntityTableRead","Functions for reading data from an entity table."],["EntityTableWrite","Functions for writing data into an entity table."]],"type":[["DungeonEntity","Entity in a dungeon. Has a [`DungeonEntityType`]."],["DungeonItem","Extended info struct for [`DungeonEntity`] objects that are items."],["DungeonTile","A struct representing a single dungeon tile."],["DungeonTrap","Extended info struct for [`DungeonEntity`] objects that are traps."]]};