/** @format */

const EventEmmiter = require("events");

const emmiter = new EventEmmiter();

emmiter.on("event-1", () => {
  console.log("event-1 occured");
});

emmiter.on("event-1", (params) => {
  console.log("event-1 occured on another listner", `with params ${params}`);
});

console.log("before events");
emmiter.emit("event-1", "softDrink");
console.log("after first event");

setTimeout(() => {
  emmiter.emit("event-1", "coffee");
}, 2000);

//we can write a class as well whcih can extends the build in modules like event
