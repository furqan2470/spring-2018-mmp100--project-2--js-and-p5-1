const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(200);
}

function draw() {
	strokeWeight(2.0);
	stroke(255,51,51);
    ellipse(250, 250, 200, 80);
    rect(115,240,40,20);
    line (350,255,320,260);
    strokeWeight(1.0);
    arc (292,283,20,136, radians(270), radians(360));
    arc (170, 210, 220, 22, radians(270), radians(360));
    line(170,200,180,220);
    arc (230,291,100,35, radians(360), radians(90));
    line (230,309,250,290);
    fill(200);
    arc (130, 280, 100, 14, radians(270), radians(360));
    line(128,272,150,302);
    arc (150,285,100,35, radians(360), radians(90));
    stroke(255, 204, 0);
    ellipse(320,240,15,15);
    ellipse (320,241,2,2);
}
