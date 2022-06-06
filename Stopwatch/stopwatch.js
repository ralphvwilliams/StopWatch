class Stopwatch {
  constructor() {
    this.time = 0;
    this.status = 1;
    this.stopTime = 0;
    this.startTime = 0;
    this.timeElapsed = 0;
  }
  start = function () {
    if (this.status == 1) {
      this.status = 0;
      console.log("App is running.......");
      this.time = new Date();
      this.startTime = this.time.getTime();
    } else if (this.status == 2) {
      this.status = 0;
      this.startTime = this.stopTime;
      console.log(this.startTime);
    } else {
      console.log("App is already running.....");
      throw "App is already running!";
    }
    // this.time = new Date();
    // this.startTime = this.time.getSeconds();
  };
  stop = function () {
    console.log("Stopping watch.....");
    this.time = new Date();
    this.stopTime = this.time.getTime();
    console.log(this.stopTime);
    this.timeElapsed += (this.stopTime - this.startTime) / 1000;
    console.log(`${this.timeElapsed} seconds`);
    this.status = 2;
  };
}
