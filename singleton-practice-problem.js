(() => {

  // Create a Singleton design pattern, to achieve only one active instance at a time, and references to it after.

  const obj = (() => {
    let objInstance;

    const create = () => {
      let _isRunning = false;
      const start = () => {
        _isRunning = true;
      };
      const stop = () => {
        _isRunning = false;
      };
      const currentStatus = () => {
        return _isRunning;
      };
      return {
        start,
        stop,
        currentStatus
      };
    };

    return {
      getInstance: () => {
        if (!objInstance) {
          objInstance = create();
        }
        return objInstance;
      }
    };

  })();

  const obj1 = obj.getInstance();
  const obj2 = obj.getInstance();

  console.log(obj1.currentStatus()); // false
  console.log(obj2.currentStatus()); // false
  obj1.start();
  console.log(obj1.currentStatus()); // true
  console.log(obj2.currentStatus()); // true
  obj2.stop();
  console.log(obj1.currentStatus()); // false
  console.log(obj2.currentStatus()); // false

})();
