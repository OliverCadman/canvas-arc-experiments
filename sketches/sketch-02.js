const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2048, 2048],
  // animate: true,
  // playbackRate: "throttle",
  // fps: 15,
  duration: 3,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);

    const cx = width;
    const cy = height;
    const w = width * 0.005;
    const h = height * 0.1;
    let x, y;

    const num = 30;
    const radius = width * 1;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      // context.save();
      // context.translate(x, y);
      // context.rotate(-angle);
      // context.scale(random.range(2, 5), random.range(2, 5));

      // context.beginPath();
      // context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      // context.fill();
      // context.restore();

      context.save();
      context.translate(x, y);
      context.rotate(angle);

      context.lineWidth = random.range(5, 8000);
      context.strokeStyle =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      context.beginPath();
      context.arc(
        0,
        0,
        radius * 0.5,
        slice * random.range(1, 90),
        slice * random.range(0, 8)
      );
      context.stroke();

      context.restore();

      // context.save();
      // context.translate(x, y);
      // context.rotate(-angle);
      // context.beginPath();
      // context.strokeStyle = "#" + Math.floor(Math.random() * 200).toString(16);
      // context.rect(
      //   -w * 0.5,
      //   -h * 0.5,
      //   -w * random.range(-1, 7),
      //   -h * random.range(1, 5)
      // );
      // // context.lineWidth = 2;

      // context.fill();

      // context.restore();
    }
  };
};

canvasSketch(sketch, settings);
