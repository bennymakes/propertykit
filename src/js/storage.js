// src/js/storage.js
//     Seduxe (pronounced Seduce) is a Session Storage - Redux class that enables
//     easy getting and setting of redux data to and from session or local storage

export default class Seduxe {
  //Seduxe is designed to work with Redux.
  // It expects an instance of Redux store to be passed in

  constructor(store, local = "SESSION", name = "reduxStore", debug = false) {
    this.store = store; //The instance of the redux store
    this.debug = debug; //Debugging on/off
    this.name = name;
    //Use sessionStorage or localStorage
    if (
      local == "SESSION" ||
      local == "S" ||
      local == "session" ||
      local == "s"
    ) {
      this.storage = window.sessionStorage;
    } else if (
      local == "LOCAL" ||
      local == "L" ||
      local == "local" ||
      local == "l"
    ) {
      this.storage = window.localStorage;
    } else {
      this.storage = null;
    }
  }

  log = (message) => {
    if (this.debug === true) {
      console.log(message);
    }
  };

  check = () => {
    console.log(this.store.getState());
    return true;
  };

  peek = () => {
    return this.storage;
  };

  leave = () => {
    this.storage.clear();
    return true;
  };

  push = () => {
    //Push function pushes data to local/session storage
    return this.storage.setItem(this.name, this.store);
  };

  pull = () => {
    //Pull retrieves data from local/session storage
    return this.storage.getItem(this.name);
  };

  swapPartner = () => {
    //SwapPartner changes the Redux store you are replicated or pushing/pulling
  };

  authPull = () => {
    //Auth pull takes a boolean value and returns data if true, deleting the local data store if false
  };

  authPush = () => {
    //Auth push takes a boolean value and saves data if true, deleting the local data store if false
  };
}
