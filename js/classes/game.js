
class Game {

  constructor() {
    // "ROOMS" is an object existing in "room.js"
    this.rooms = ROOMS;

    this.startRoom(shadowing , this.rooms.hallRoom);
    // startFirstMinigame(); //Should not be here, just for testing
    // startSecondRoom(); //Should not be here, just for testing
  }

  // effect (Argument 1) : is an object, ex. {container: "body", elements: ['<div></div>']}
  // room (Argument 2) : is a whole room class
  startRoom(effect, room) {
    // Create
    creatObject(room.objectsList[0]);
    creatObject(room.objectsList[1]);
    creatObject(effect);  // Not sure what this is for ??
    // Hide
    hideEffectObject(shadowing);  // Not sure what this is for ??
    hideObjects(room.objectsList);
    // Show
    showObject(room.objectsList[0].selectors[0]);
    showObject(room.objectsList[0].selectors[5]);
    // Initial functions
    initialFunctions();
  }

}

  // Start the application (run the main method (e.g game-constructor))
  new Game();
