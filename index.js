const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13); // Built-in LED is connected to digital pin 13
  led.blink(500); // Blink the LED every 500ms
});
