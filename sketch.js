let img;
let img1;
let sound;
let particles = [];
let street;
let scrollPos = -30;
let back;
let story;

function preload() {
  img = loadImage("assets/jersey-2019-1970s-popular-culture-76p-fashion-stamp.png");
  img1 = loadImage("assets/GIrl.png");
  imgcity = loadImage("assets/cityView.jpg")
  bunny = loadImage("assets/bunny.png");
  sound = loadSound("assets/lofi-295209.mp3");
  street = loadImage("assets/Scene.png");
  back = loadImage("assets/archBorder.png");
  story = loadImage("assets/bunnyStory.png");
}

function setup() {
  const c = createCanvas(windowWidth, windowHeight*0.8);
  c.parent('sketch'); 
  // ADD: volume slider hookup
  const vol = document.getElementById('vol');
  const volVal = document.getElementById('volVal');
  sound.setVolume(parseFloat(vol.value));
  volVal.textContent = parseFloat(vol.value).toFixed(2);

  vol.addEventListener('input', () => {
  const v = parseFloat(vol.value);
  sound.setVolume(v);
  volVal.textContent = v.toFixed(2);
  });

  // ADD: play/stop button
  document.getElementById('toggle-sound').addEventListener('click', () => {
  if (!sound.isPlaying()) {
  sound.play();
  sound.setLoop(true);
  } else {
  sound.stop();
  }
  });
  frameRate(5);
}

let isPurple = true;

class Particle {
  constructor() {
    this.x = random(113, 180);
    this.y = 25;
    this.vy = random(-2, -5); // random upward velocity
    this.alpha = 100; // full opacity
  }

  update() {
    this.y -= this.vy;
    this.x -= this.vy;// move the particle upward
    this.alpha -= 12; // fade out
  }

  show() {
    stroke("grey");
    fill(0, 150, 255, this.alpha);
    line(this.x, this.y, this.x+3, this.y+3);
}

  isFinished() {
    return this.alpha <= 0; // Particle is finished when it's fully transparent
  }
}

function draw() {
  background(187, 124, 89);
  fill(187, 124, 89);
  noStroke();
  image(street, windowWidth*0.252, windowWidth*0.085, windowWidth+windowWidth*0.5, windowWidth*0.2);
  rect(windowWidth*0.76, windowWidth*0.05, windowWidth*0.4, windowWidth*0.3);
  image(back, 0, 0, windowWidth, windowWidth*0.4)
  image(story, windowWidth*0.052, windowWidth*0.085, windowWidth*0.14, windowWidth*0.28)

  stroke(10, 10, 10);
  //floor
  fill(249, 151, 187);
  rect(windowWidth*0.252, windowWidth*0.27, windowWidth*0.5, windowWidth*0.063);
  // //clothing rack
  // fill(155, 85, 24);
  // rect(280, 110, 180, 5);
  // rect(280, 100, 20, 100);
  // rect(450, 100, 20, 100);
  // //clothes
  // fill(255, 255, 255);
  // rect(338, 110, 5, 60);
  // rect(408, 110, 5, 60);
  // fill(155, 24, 138);
  // rect(310, 120, 50, 40);
  // rect(320, 120, 50, 40);
  // rect(320, 120, 40, 60);
  // rect(380, 120, 50, 40);
  // rect(390, 120, 50, 40);
  // rect(390, 120, 40, 60);
  // //cashier desk
  // fill(155, 85, 24);
  // rect(0, 150, 200, 20);
  // fill(84, 83, 104);
  // rect(20, 100, 50, 40);
  // rect(35, 140, 20, 10);
  // rect(110, 140, 50, 10);
  // //window
  // rect(100, 20, 130, 70);
  // fill(8, 40, 115, 150);
  // image(imgcity, 105, 25, 120, 60);
  // rect(105, 25, 120, 60);

  //bunny
  image(bunny, windowWidth/2, windowWidth*0.25, windowWidth*0.05, windowWidth*0.05);

  //postage stamp
  image(img, windowWidth/2.1, windowWidth*0.25, windowWidth*0.03, windowWidth*0.03);
  // text("^", 170, 280);
  // text("|", 171.5, 285);
  // text("picking up postage cards makes the bunny recall memories", 120, 300);

  // //falling stars
  // for(let n=0; n<1; n++){
  // particles.push(new Particle());
  // }

  // loop through each particle in reverse order
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // update the particle's position
    particles[i].show(); // display the particle

  // remove the particle from the array if it's finished
  if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }

  //memory
  if (mouseX > 160 && mouseX < 190 && mouseY > 230 && mouseY < 260) {
    image(img1, 500, 80, 200, 200);
  }

  //Exercise #2
  //background(233, 204, 204, 50);
  for (let x = windowWidth*0.05; x < width; x += 50) {
    let x = random(windowWidth*0.43);
    let y = random(windowWidth*0.15);

    a = map(mouseX, 0, 500, 0, 255);
    b = map(mouseY, 0, 180, 0, 255);

    push();
    if (isPurple) {
      fill(a, 0, b, 15);
    } else {
      fill(0, a, b, 15);
    }
    noStroke();
    circle(x+windowWidth*0.28, y+windowWidth*0.1, 50);
    pop();
  }
}

// function mousePressed(){
//   while((mouseX>50 && mouseX<100) && (mouseY>220 && mouseY<270)){
//     image(img1, 300, 220, 100, 100);
//   }
// }

function mousePressed() {
  isPurple = !isPurple;
}

//while (scrollPos < -1500) {
  function mouseWheel(){
  scrollPos -= 3;
}
//}
