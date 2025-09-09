
let menuScreen = true;
let introScreen = false;
let s1 = false;
let s2 = false;
let s3 = false;
let s4 = false;
let s5 = false;
let scene1;
let scene2;
let scene3;
let scene4;
let scene5;
let sound;
let bunnyRun1;
let s2object1;
let bunnyRun;
let s2found1;
let overview;
let s2lantern;
let intro;
let scenes;
let scrollPos = 0;
const soundButton = document.getElementById('toggle-sound');
const soundIcon   = soundButton.querySelector('img');

//let scrollPos = -30;

function preload() {
  bunnyRun1 = loadImage("assets/bunnyRun1.png");
  scene1 = loadImage("assets/scene1.png");
  scene2 = loadImage("assets/scene2.png");
  scene3 = loadImage("assets/scene3.png");
  scene4 = loadImage("assets/scene4.png");
  scene5 = loadImage("assets/scene5.png");
  sound = loadSound("assets/lofi-295209.mp3");
  s2object1 = loadImage("assets/s2object1.png");
  bunnyRun = loadImage("assets/bunnyRun.png");
  s2found1 = loadImage("assets/s2found1.png");
  overview = loadImage("assets/overview.png");
  s2lantern = loadImage("assets/s2lantern.png");
  intro = loadImage("assets/intro.png")
  scenes = loadImage("assets/scenes.png");
  
}

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  c.parent('sketch'); 
//  sound.play();
  // ADD: volume slider hookup
  // const vol = document.getElementById('vol');
  // const volVal = document.getElementById('volVal');
  // sound.setVolume(parseFloat(vol.value));
  // volVal.textContent = parseFloat(vol.value).toFixed(2);

  // vol.addEventListener('input', () => {
  // const v = parseFloat(vol.value);
  // sound.setVolume(v);
  // volVal.textContent = v.toFixed(2);
  // });
  document.getElementById('menu-btn').addEventListener('click', () => {
  if (menuScreen == false){
    menuScreen = true;
    }
  });

  // ADD: play/stop button
  document.getElementById('toggle-sound').addEventListener('click', () => {
  if (!sound.isPlaying()) {
  sound.play();
  sound.setLoop(true);
  soundIcon.src = 'assets/music.png';
  } else {
  sound.stop();
  soundIcon.src = 'assets/noM.png';
  }
  });
  frameRate(30);
}

function draw() {
  background(50,50,50);

  if (menuScreen == true){
    fill(255, 150, 105);
    rect(0, 0, windowWidth, windowHeight);
    fill(0, 0, 0);
    textSize(windowWidth/20);
    text("Bunny Memories", windowWidth/3, windowWidth/10);
    image(overview, 0, -50, windowWidth, windowWidth/2);
  } else if (s1 == true){
    //scene
    image(scene1, 0, -50, windowWidth, windowWidth/1.85);

    //bunny
    image(bunnyRun, 0, -50, windowWidth/1.2, windowWidth/2);

    //notesCollected
    textSize(windowWidth/50);
    fill(255, 255, 255);
    text("0/5 Notes Collected", windowWidth/1.25, -50+windowWidth/2.1-windowWidth/45);
  } else if (s2 == true){
    image(scene2, 0, -50, windowWidth, windowWidth/2);
    image(bunnyRun, 0, -50, windowWidth/1.2, windowWidth/2);
    textSize(windowWidth/50);
    fill(255, 255, 255);
    text("0/5 Notes Collected", windowWidth/1.25, -50+windowWidth/2.1-windowWidth/45);
  } else if (s3 == true){
    image(scene3, 0, -40, windowWidth, windowWidth/2);
    image(bunnyRun, 0, -50, windowWidth/1.2, windowWidth/2);
    textSize(windowWidth/50);
    fill(255, 255, 255);
    text("0/5 Notes Collected", windowWidth/1.25, -50+windowWidth/2.1-windowWidth/45);
  } else if (s4 == true){
    image(scene4, 0, -25, windowWidth, windowWidth/2);
    image(bunnyRun, 0, -50, windowWidth/1.2, windowWidth/2);
    textSize(windowWidth/50);
    fill(255, 255, 255);
    text("0/5 Notes Collected", windowWidth/1.25, -50+windowWidth/2.1-windowWidth/45);
  } else if (s5 == true){
    image(scene5, 0, -50, windowWidth, windowWidth/1.9);
    image(bunnyRun, 0, -50, windowWidth/1.2, windowWidth/2);
    textSize(windowWidth/50);
    fill(255, 255, 255);
    text("0/5 Notes Collected", windowWidth/1.25, -50+windowWidth/2.1-windowWidth/45);
  } else if (introScreen == true){
    image(intro, windowWidth/4, -50, windowWidth/2, windowWidth/2);
  } 
  
  fill(0, 0, 0);
  //rect(windowWidth/3.09, -50+windowWidth/2.1-windowWidth/4, windowWidth/6.5, windowWidth/7.4);

}


function mousePressed(){
  if(menuScreen == true){
    if((mouseX>(windowWidth/20) && mouseX<(windowWidth/20+windowWidth/11)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<+(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      introScreen = true;
      menuScreen = false;
    } else if((mouseX>(windowWidth/7) && mouseX<(windowWidth/7+windowWidth/5.6)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<+(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s1 = true;
      s2=s3=s4=s5=menuScreen = false;
    } else if((mouseX>(windowWidth/3.09) && mouseX<(windowWidth/3.09+windowWidth/6.5)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<+(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s2 = true;
      s1=s3=s4=s5=menuScreen = false;
    } else if((mouseX>(windowWidth/2.08) && mouseX<(windowWidth/2.08+windowWidth/7.2)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<+(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s3 = true;
      s1=s2=s4=s5=menuScreen = false;
    } else if((mouseX>(windowWidth/1.63) && mouseX<(windowWidth/1.63+windowWidth/7.2)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<+(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s4 = true;
      s1=s2=s3=s5=menuScreen = false;
    } else if((mouseX>(windowWidth/1.32) && mouseX<(windowWidth/1.32+windowWidth/5.4)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<+(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s5 = true;
      s1=s2=s3=s4=menuScreen = false;
    } 
  }
}

// function mouseWheel(){
//   if(sceneTest == true){
//     if(scrollPos > -windowWidth*4){
//       scrollPos -= 3;
//     }
//   }
// }
