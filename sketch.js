
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
let s1o1;
let s1o2;
let s1o3;
let s1o4;
let s2o1;
let s2o2;
let s2o3;
let s2o4;
let s3o1;
let s3o2;
let s3o3;
let s3o4;
let s4o1;
let s4o2;
let s4o3;
let s4o4;
let s5o1;
let s5o2;
let s5o3;
let s5o4;
let s1o1Found = false;
let s1o2Found = false;
let s1o3Found = false;
let s1o4Found = false;
let s2o1Found = false;
let s2o2Found = false;
let s2o3Found = false;
let s2o4Found = false;
let s3o1Found = false;
let s3o2Found = false;
let s3o3Found = false;
let s3o4Found = false;
let s4o1Found = false;
let s4o2Found = false;
let s4o3Found = false;
let s4o4Found = false;
let s5o1Found = false;
let s5o2Found = false;
let s5o3Found = false;
let s5o4Found = false;
let s1complete = false;
let s2complete = false;
let s3complete = false;
let s4complete = false;
let s5complete = false;
let s1note;
let s2note;
let s3note;
let s4note;
let s5note;
let sound;
let bunnyRun;
let overview;
let intro;
let scenes;
let scrollPos = 0;
let notes = 0;
const soundButton = document.getElementById('toggle-sound');
const soundIcon   = soundButton.querySelector('img');

function preload() {
  bunnyRun1 = loadImage("assets/bunnyRun1.png");
  scene1 = loadImage("assets/scene1.png");
  scene2 = loadImage("assets/scene2.png");
  scene3 = loadImage("assets/scene3.png");
  scene4 = loadImage("assets/scene4.png");
  scene5 = loadImage("assets/scene5.png");
  s1o1 = loadImage("assets/s1orange.png");
  s1o2 = loadImage("assets/s1caterpillar.png");
  s1o3 = loadImage("assets/s1bell.png");
  s1o4 = loadImage("assets/s1heart.png");
  s2o1 = loadImage("assets/s2starfruit.png");
  s2o2 = loadImage("assets/s2hook.png");
  s2o3 = loadImage("assets/s2glass.png");
  s2o4 = loadImage("assets/s2star.png");
  s3o1 = loadImage("assets/s3penguin.png");
  s3o2 = loadImage("assets/s3candy.png");
  s3o3 = loadImage("assets/s3bottle.png");
  s3o4 = loadImage("assets/s3music.png");
  s4o1 = loadImage("assets/s4poop.png");
  s4o2 = loadImage("assets/s4mitten.png");
  s4o3 = loadImage("assets/s4teapot.png");
  s4o4 = loadImage("assets/s4candycane.png");
  s5o1 = loadImage("assets/s5icecream.png");
  s5o2 = loadImage("assets/s5mushroom.png");
  s5o3 = loadImage("assets/s5butterfly.png");
  s5o4 = loadImage("assets/s5sword.png");
  s1note = loadImage("assets/s1note.png");
  s2note = loadImage("assets/s2note.png");
  s3note = loadImage("assets/s3note.png");
  s4note = loadImage("assets/s4note.png");
  s5note = loadImage("assets/s5note.png");
  sound = loadSound("assets/lofi-295209.mp3");
  bunnyRun = loadImage("assets/bunnyRun.png");
  overview = loadImage("assets/sceneoverview.png");
  intro = loadImage("assets/intro.png")
  scenes = loadImage("assets/scenes.png");
  
}

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  sound.play();
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  c.parent('sketch'); 

  // Menu button
  document.getElementById('menu-btn').addEventListener('click', () => {
  if (menuScreen == false){
    menuScreen = true;
    }
  });

  // Sound button
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
  frameRate(6);

}

function draw() {
  background(50,50,50);
  
  // Scenes game images
  if (s1 == true){
    image(scene1, 0, -50, windowWidth, windowWidth/1.85);
    if (s1o1Found == true){
      image(s1o1, 0, -50, windowWidth, windowWidth/1.85);
    }
    if (s1o2Found == true){
      image(s1o2, 0, -50, windowWidth, windowWidth/1.85);
    }
    if (s1o3Found == true){
      image(s1o3, 0, -50, windowWidth, windowWidth/1.85);
    } 
    if (s1o4Found == true){
      image(s1o4, 0, -50, windowWidth, windowWidth/1.85);
    }
    if (!s1complete && s1o1Found == true && s1o2Found == true && s1o3Found == true && s1o4Found == true){
      notes += 1;
      s1complete = true;
    }
    if (s1complete == true){
      image(s1note, 0, -50, windowWidth, windowWidth/1.85);
    }
  } else if (s2 == true){
    image(scene2, 0, -50, windowWidth, windowWidth/2);
    if (s2o1Found == true){
      image(s2o1, 0, -50, windowWidth, windowWidth/2);
    } 
    if (s2o2Found == true){
      image(s2o2, 0, -50, windowWidth, windowWidth/2);
    } 
    if (s2o3Found == true){
      image(s2o3, 0, -50, windowWidth, windowWidth/2);
    } 
    if (s2o4Found == true){
      image(s2o4, 0, -50, windowWidth, windowWidth/2);
    }
    if (!s2complete && s2o1Found == true && s2o2Found == true && s2o3Found == true && s2o4Found == true){
      notes += 1;
      s2complete = true;
    }
    if (s2complete == true){
      image(s2note, 0, -50, windowWidth, windowWidth/2);
    }
  } else if (s3 == true){
    image(scene3, 0, -50, windowWidth, windowWidth/1.95)
    if (s3o1Found == true){
      image(s3o1, 0, -50, windowWidth, windowWidth/1.95);
    } 
    if (s3o2Found == true){
      image(s3o2, 0, -50, windowWidth, windowWidth/1.95);
    } 
    if (s3o3Found == true){  
      image(s3o3, 0, -50, windowWidth, windowWidth/1.95);
    } 
    if (s3o4Found == true){
      image(s3o4, 0, -50, windowWidth, windowWidth/1.95);
    }
    if (!s3complete && s3o1Found == true && s3o2Found == true && s3o3Found == true && s3o4Found == true){
      notes += 1;
      s3complete = true;
    }
    if (s3complete == true){
      image(s3note, 0, -50, windowWidth, windowWidth/1.95)
    }
  } else if (s4 == true){
    image(scene4, 0, -50, windowWidth, windowWidth/1.85);
    
    if (s4o1Found == true){
      image(s4o1, 0, -50, windowWidth, windowWidth/1.85);
    } 
    if (s4o2Found == true){
      image(s4o2, 0, -50, windowWidth, windowWidth/1.85);
    } 
    if (s4o3Found == true){
      image(s4o3, 0, -50, windowWidth, windowWidth/1.85);
    } 
    if (s4o4Found == true){
      image(s4o4, 0, -50, windowWidth, windowWidth/1.85);
    }
    if (!s4complete && s4o1Found == true && s4o2Found == true && s4o3Found == true && s4o4Found == true){
      notes += 1;
      s4complete = true;
    }
    if (s4complete == true){
      image(s4note, 0, -50, windowWidth, windowWidth/1.85);
    }
  } else if (s5 == true){
    image(scene5, 0, -50, windowWidth, windowWidth/1.92);

    if (s5o1Found == true){
      image(s5o1, 0, -50, windowWidth, windowWidth/1.92);
    } 
    if (s5o2Found == true){
      image(s5o2, 0, -50, windowWidth, windowWidth/1.92);
    } 
    if (s5o3Found == true){
      image(s5o3, 0, -50, windowWidth, windowWidth/1.92);
    } 
    if (s5o4Found == true){
      image(s5o4, 0, -50, windowWidth, windowWidth/1.92);
    }
    if (!s5complete && s5o1Found == true && s5o2Found == true && s5o3Found == true && s5o4Found == true){
      notes += 1;
        s5complete = true;
    }
    if (s5complete == true){
      image(s5note, 0, -50, windowWidth, windowWidth/1.92);
    }
  } else if (introScreen == true){
    image(intro, windowWidth/4, 0, windowWidth/2, windowWidth/2);
  } 
  
  // Menu Screen
  if (menuScreen == true){
    background(50,50,50);

    //circles
    //background(233,204,204, 50);
    for(let x=50; x<windowWidth*1.5; x+=60){
      let randx = random(windowWidth-windowWidth/9);
      let randy = random(180);
  
      let a = map(mouseX, 0, windowWidth, 0, 255);
      let b = map(mouseY, 0, windowHeight, 0 ,255);
  
    push();
      fill(0, a, b, 15);
   
      noStroke();
      circle(randx+windowWidth/20, windowWidth/15, windowWidth/18);
      pop();
    }

    //text
    textFont('Courier New');
    fill(100, 158, 151);
    textSize(windowWidth/20);
    text("Bunny Memories", windowWidth/3.5, windowWidth/12);
    textSize(windowWidth/100);
    text("Instructions: Click on the scene to enter it. \nFind the hidden objects shown below each scene excluding \nthe first page which describes the story.", windowWidth/50, windowWidth/2.5);
    text("by Melva Deng", windowWidth/3.5, windowWidth/10);
    image(overview, 0, -50, windowWidth, windowWidth/2);
  } else if (menuScreen == false && introScreen == false){
    //bunny
    image(bunnyRun, 0, -50, windowWidth/1.2, windowWidth/2);

    //notes collected count
    textSize(windowWidth/60);
    fill(255, 255, 255);
    text(notes + "/5 Notes Collected", windowWidth/1.28, -50+windowWidth/2.1-windowWidth/45);
  }

  //fill(0, 10);
  //rect(windowWidth/1.37, -50+windowWidth/2.1-windowWidth/11.6, windowWidth/50, windowWidth/60);

}


function mousePressed(){
  // Finding Objects
    if(s5 == true){
      if((mouseX>(0) && mouseX<(windowWidth/55)) && (mouseY>(-50+windowWidth/2.1-windowWidth/5) && mouseY<(-50+windowWidth/2.1-windowWidth/5+windowWidth/30))){
        s5o1Found = true;
      }
      if((mouseX>(windowWidth/1.745) && mouseX<(windowWidth/1.745+windowWidth/40)) && (mouseY>(-50+windowWidth/2.1-windowWidth/3.15) && mouseY<(-50+windowWidth/2.1-windowWidth/3.15+windowWidth/40))){
        s5o2Found = true;
      }
      if((mouseX>(windowWidth/1.37) && mouseX<(windowWidth/1.37+windowWidth/50)) && (mouseY>(-50+windowWidth/2.1-windowWidth/11.6) && mouseY<(-50+windowWidth/2.1-windowWidth/11.6+windowWidth/60))){
        s5o3Found = true;
      }
      if((mouseX>(windowWidth/3.2) && mouseX<(windowWidth/3.2+windowWidth/55)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4.2) && mouseY<(-50+windowWidth/2.1-windowWidth/4.2+windowWidth/14))){
        s5o4Found = true;
      }
    }
    if(s4 == true){
      if((mouseX>(windowWidth/7.5) && mouseX<(windowWidth/7.5+windowWidth/55)) && (mouseY>(-50+windowWidth/2.1-windowWidth/16) && mouseY<(-50+windowWidth/2.1-windowWidth/16+windowWidth/60))){ 
        s4o1Found = true;
      }
      if((mouseX>(windowWidth/1.58) && mouseX<(windowWidth/1.58+windowWidth/35)) && (mouseY>(-50+windowWidth/2.1-windowWidth/7) && mouseY<(-50+windowWidth/2.1-windowWidth/7+windowWidth/40))){
        s4o2Found = true;
      }
      if((mouseX>(windowWidth/1.9) && mouseX<(windowWidth/1.9+windowWidth/35)) && (mouseY>(-50+windowWidth/2.1-windowWidth/7.5) && mouseY<(-50+windowWidth/2.1-windowWidth/7.5+windowWidth/60))){
        s4o3Found = true;
      }
      if((mouseX>(windowWidth/1.63) && mouseX<(windowWidth/1.63+windowWidth/35)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<(-50+windowWidth/2.1-windowWidth/4+windowWidth/60))){
        s4o4Found = true;
      }
    }
    if (s3 == true){
      if((mouseX>(windowWidth/2.1) && mouseX<(windowWidth/2.1+windowWidth/45)) && (mouseY>(-50+windowWidth/2.1-windowWidth/6.8) && mouseY<(-50+windowWidth/2.1-windowWidth/6.8+windowWidth/55))){
        s3o1Found = true;
      }
      if((mouseX>(windowWidth/4.4) && mouseX<(windowWidth/4.4+windowWidth/90)) && (mouseY>(-50+windowWidth/2.1-windowWidth/8.4) && mouseY<(-50+windowWidth/2.1-windowWidth/8.4+windowWidth/80))){
        s3o2Found = true;
      }
      if((mouseX>(windowWidth/9.5) && mouseX<(windowWidth/9.5+windowWidth/90)) && (mouseY>(-50+windowWidth/2.1-windowWidth/8.1) && mouseY<(-50+windowWidth/2.1-windowWidth/8.1+windowWidth/57))){
        s3o3Found = true;
      }
      if((mouseX>(windowWidth/1.74) && mouseX<(windowWidth/1.74+windowWidth/75)) && (mouseY>(-50+windowWidth/2.1-windowWidth/5.8) && mouseY<(-50+windowWidth/2.1-windowWidth/5.8+windowWidth/75))){
        s3o4Found = true;
      }
    }
    if (s1 == true){
      if((mouseX>(windowWidth/4) && mouseX<(windowWidth/4+windowWidth/27)) && (mouseY>(-50+windowWidth/2.1-windowWidth/6.7) && mouseY<(-50+windowWidth/2.1-windowWidth/6.7+windowWidth/70))){
        s1o1Found = true;
      } else if((mouseX>(windowWidth/4.8) && mouseX<(windowWidth/4.8+windowWidth/27)) && (mouseY>(-50+windowWidth/2.1-windowWidth/9.8) && mouseY<(-50+windowWidth/2.1-windowWidth/9.8+windowWidth/70))){
        s1o2Found = true;
      } else if((mouseX>(windowWidth/1.36) && mouseX<(windowWidth/1.36+windowWidth/70)) && (mouseY>(-50+windowWidth/2.1-windowWidth/7) && mouseY<(-50+windowWidth/2.1-windowWidth/7+windowWidth/70))){
        s1o3Found = true;
      } else if((mouseX>(windowWidth/1.54) && mouseX<(windowWidth/1.54+windowWidth/80)) && (mouseY>(-50+windowWidth/2.1-windowWidth/2.89) && mouseY<(-50+windowWidth/2.1-windowWidth/2.89+windowWidth/90))){
        s1o4Found = true;
      }
    }

    if (s2 == true){
      if((mouseX>(windowWidth/3.12) && mouseX<(windowWidth/3.12+windowWidth/50)) && (mouseY>(-50+windowWidth/2.1-windowWidth/5) && mouseY<(-50+windowWidth/2.1-windowWidth/5+windowWidth/24))){
        s2o1Found = true;
      }
      if((mouseX>(windowWidth/2.85) && mouseX<(windowWidth/2.85+windowWidth/50)) && (mouseY>(-50+windowWidth/2.2-windowWidth/9.5) && mouseY<(-50+windowWidth/2.1-windowWidth/9.5+windowWidth/42))){
        s2o2Found = true;
      }
      if((mouseX>(windowWidth/1.85) && mouseX<(windowWidth/1.85+windowWidth/30)) && (mouseY>(-50+windowWidth/2.1-windowWidth/3.85) && mouseY<(-50+windowWidth/2.1-windowWidth/3.85+windowWidth/30))){
        s2o3Found = true;
      }
      if((mouseX>(windowWidth/2.31) && mouseX<(windowWidth/2.311+windowWidth/50)) && (mouseY>(-50+windowWidth/2.1-windowWidth/3.65) && mouseY<(-50+windowWidth/2.1-windowWidth/3.65+windowWidth/70))){
        s2o4Found = true;
      }
    }
    
  // Enter Scenes
  if(menuScreen == true){
    if((mouseX>(windowWidth/20) && mouseX<(windowWidth/20+windowWidth/11)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      introScreen = true;
      s1=s2=s3=s4=s5=menuScreen = false;
    } else if((mouseX>(windowWidth/7) && mouseX<(windowWidth/7+windowWidth/5.6)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s1 = true;
      s2=s3=s4=s5=introScreen=menuScreen = false;
    } else if((mouseX>(windowWidth/3.09) && mouseX<(windowWidth/3.09+windowWidth/6.5)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s2 = true;
      s1=s3=s4=s5=introScreen=menuScreen = false;
    } else if((mouseX>(windowWidth/2.08) && mouseX<(windowWidth/2.08+windowWidth/7.2)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s3 = true;
      s1=s2=s4=s5=introScreen=menuScreen = false;
    } else if((mouseX>(windowWidth/1.63) && mouseX<(windowWidth/1.63+windowWidth/7.2)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s4 = true;
      s1=s2=s3=s5=introScreen=menuScreen = false;
    } else if((mouseX>(windowWidth/1.32) && mouseX<(windowWidth/1.32+windowWidth/5.4)) && (mouseY>(-50+windowWidth/2.1-windowWidth/4) && mouseY<(-50+windowWidth/2.1-windowWidth/4+windowWidth/7.4))){
      s5 = true;
      s1=s2=s3=s4=introScreen=menuScreen = false;
    } 
  }

}
