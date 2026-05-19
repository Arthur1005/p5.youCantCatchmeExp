let runBtn, runX, runY;
const RUN_W = 200, RUN_H = 36, RUN_ZONE = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);

  runX = random(RUN_ZONE, width - RUN_W - RUN_ZONE);
  runY = random(RUN_ZONE, height - RUN_H - RUN_ZONE);

  runBtn = createButton('catch me if you can!');
  runBtn.position(runX, runY);
  runBtn.size(RUN_W, RUN_H);
  runBtn.style('font-size', '18px');
  runBtn.style('cursor', 'pointer');
  runBtn.style('border', '1px solid #e67e22');
  runBtn.style('background', '#e67e22');
  runBtn.style('color', 'white');
  runBtn.style('border-radius', '6px');
}

function draw() {
  background('#e67e22');

  let dx = max(0, max(runX - mouseX, mouseX - (runX + RUN_W)));
  let dy = max(0, max(runY - mouseY, mouseY - (runY + RUN_H)));
  let d = sqrt(dx * dx + dy * dy);

  if (d < RUN_ZONE) {
    runX = random(RUN_ZONE, width - RUN_W - RUN_ZONE);
    runY = random(RUN_ZONE, height - RUN_H - RUN_ZONE);
    runBtn.position(runX, runY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
