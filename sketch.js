let rot = -1.5;
let rot2 = 0;
let rot3 = 0;
let Alpha = 0;
let dead = false;
let xMove = 0;
let yMove = 0;
let yPos = 110;
let flip = 1;
let shootCounter = 0;
let inkCounter = 0;
let movementX = 0;
let movementY = 0;
let multiplier = 1;
let start = 0;
let starter = 1;
let shootX = 0;
let shootY = 0;
let shootRandom = 0;
let trajectoryX = 0;
let trajectoryY = 0;
let jumpCounter = 0;
let jumpVariable;
let jumpCounterVariable = 0;

let stage = -1;

let playerXPos = 0;
let playerYPos = 0;
let player2XPos = 0;
let player2YPos = 0;
let fireXPos;
let fireYPos;
let horsemanXPos;
let horsemanYPos;
let alienXPos;
let alienYPos;
let collider = 1;
let task1 = false;
let task2 = false;
let task3 = false;
let task4 = false;
let soundTimer = false;
let soundTimer2 = false;
let soundClock = 0;
let horseRandom = 1;
let horseX = 0;
let horseFlip = false;
let bossHealth = 0;
let gifCounter = 0;
let dragonDeath = false;
let horsemanDeath = false;
let alienDeath = false;
let finalDeath = false;
let finalAnimation = 0;
let dragonCounter = -400;
let dragonCounter2 = 0;
let horseVariable1 = 755;
let horseVariable2 = 725;
let ability1 = false;
let ability2 = false;
let ability3 = false;
let abilitySelection = 1;
let playerHealth = 0;
let playerDeath = false;
let projectileX = 0;
let projectileCounter = 0;
let shootClock = 0;
let shoot;
let shootStart = false;
let shootSpeed = 0;
let endCounter = 0;
let dashCounter = 0;
let laserCounter = 0;

function preload() {
  run = loadImage("Run.gif");
  run2 = loadImage("RunFlip.gif");
  jump = loadImage("Jump.gif");
  idle = loadImage("Idle.gif");
  attack1 = loadImage("Punch.gif");
  attack1Flip = loadImage("PunchFlip.gif");
  dragon2 = loadImage("Dragon2.gif");
  alienEye = loadImage("Alien Eye.gif");
  alienBody = loadImage("AlienBody.png");
  horseman = loadImage("Horseman.gif");
  horsemanFlip = loadImage("Horseman Flip.gif");
  bossBar = loadImage("Boss Bar.png");
  bossBarDeath = loadImage("Boss Bar Death.gif");
  finalBoss = loadImage("Final Boss.gif");
  finalForm = loadImage("Final Form.gif");
  ink = loadImage("Ink.gif");

  //Story Images
  worldsScroll = loadImage("Worlds Scroll.png");
  dragonStory = loadImage("Dragon Story.jpg");
  horsemanStory = loadImage("Horseman Story.jpg");
  alienStory = loadImage("Alien Story.png");

  laser = loadImage("Laser.gif");
  laserFlip = loadImage("Laser Flip.gif");
  dash = loadImage("Dash.gif");
  dashFlip = loadImage("Dash Flip.gif");
  fireShoot = loadImage("Fire.gif");
  fireShootFlip = loadImage("Fire Flip.gif");
  fire = loadImage("Fire Projectile.gif");

  startScroll = loadImage("StartScreen.png");
  startGame = loadImage("Start Game.png");
  scroll = loadImage("Scroll.gif");
  scrollReverse = loadImage("Scroll Reverse.gif");
  scroll2 = loadImage("Background.png");

  //Audio
  intro = loadSound("Intro.mp3");
  tutorial1 = loadSound("Tutorial 1.mp3");
  tutorial2 = loadSound("Tutorial 2.mp3");
  mainTheme = loadSound("Main Theme.mp3");
  battleMusic = loadSound("Battle Music.mp3");
}
function setup() {
  createCanvas(650, 400);
  shoot = new Shoot();
}

function draw() {
  //Collider Visual

  //   if (keyIsPressed && key == "C") {
  //     collider = -1;
  //   } else {
  //     collider = 1;
  //   }

  //For Demonstration
  if (keyIsPressed && key == "X" && bossHealth < 200) {
    bossHealth += 1;
  }

  //Unlocks
  if (stage > 1) {
    ability1 = true;
  }
  if (stage > 2) {
    ability2 = true;
  }
  if (stage > 3) {
    ability3 = true;
  }

  if (stage >= 0 && starter == 1) {
    start = 200;
  }

  //Game Starting
  if (starter == 1 && stage == -1) {
    image(startScroll, -100, -100, width + 200, height + 200);
    image(startGame, 0, -15, width, height);
    if (
      mouseX > width - 510 &&
      mouseX < width - 125 &&
      mouseY > 110 &&
      mouseY < 190 &&
      mouseIsPressed
    ) {
      starter *= -1;
    }
  }
  if (starter == -1) {
    if (start < 2000) {
      start++;
    }
    starter = -1;
  }
  if (start > 30 && start < 200) {
    image(scroll, -125, -125, width + 250, height + 250);
  } else if (start > 180) {
    image(scroll2, -25, -25, width + 50, height + 50);
  }

  translate(width / 2, height / 2);

  // push();
  // if (dead == true && inkCounter < 125) {
  //   inkCounter++;
  //   translate(movementX, movementY);
  //   Alpha += 2.5;
  //   tint(0, Alpha);
  //   image(explode, width - 100, height - 200, 150, 150);
  //   if (Alpha > 312) {
  //     Alpha = 0;
  //   }
  // }
  // pop();
  // if (Alpha > 349) {
  //   Alpha = 0;
  // }
  push();
  if (stage == 0) {
    if (!tutorial1.isPlaying() && soundClock < 1) {
      tutorial1.setVolume(0.6);
      tutorial1.play();
      soundClock++;
    }
  }
  if (stage == 0) {
    if (
      (keyIsPressed && key == "a") ||
      (keyIsPressed && key == "d" && soundClock >= 1)
    ) {
      task1 = true;
    }
    if (keyIsPressed && key == "w" && task1 == true) {
      task2 = true;
    }
    if (keyIsPressed && key == " " && task1 == true && task2 == true) {
      task3 = true;
    }
    if (task1 == false) {
      text("Press 'a' to Move Left and 'd' to Move Right", 0, 0, 100, 100);
    }
    if (task1 == true && task2 == false) {
      text("Press 'w' to Jump", 0, 0, 100, 100);
    }
    if (task1 == true && task2 == true && task3 == false) {
      text("Press 'Spacebar' to Punch", 0, 0, 100, 100);
    }
    if (
      task1 == true &&
      task2 == true &&
      task3 == true &&
      task4 == false &&
      !tutorial1.isPlaying()
    ) {
      if (soundTimer == false && !tutorial2.isPlaying()) {
        tutorial2.play();
      }
      if (tutorial2.isPlaying()) {
        soundTimer = true;
        soundClock++;
      }
      text("When New Abilities are Unlocked", 0, 0, 100, 100);
      text(
        "Numbers Will Select Abilities in Order of Aquisition",
        0,
        50,
        100,
        100
      );
      text("Pressing 's' Will Use the Ability", 0, 125, 100, 100);
    }
    if (soundClock >= 450) {
      task4 = true;
    }
    if (task4 == true) {
      text(
        "Click on the Screen to Fight the First Opponent",
        -100,
        0,
        100,
        100
      );
      if (mouseIsPressed) {
        stage = 1;
        soundClock = 0;
      }
    }
  }
  pop();
  push();
  if (stage == 1) {
    if (dragonDeath == false) {
      if (
        dist(playerXPos, playerYPos, width / 2, height / 2) < 125 &&
        rot2 < -325 &&
        rot2 < 25 &&
        keyIsPressed &&
        key == " " &&
        bossHealth < 200
      ) {
        bossHealth += 0.5;
      }

      if (bossHealth < 200) {
        image(bossBar, -230, -225, 500, 100);
      } else if (bossHealth == 200 && gifCounter < 140) {
        image(bossBarDeath, -230, -225, 500, 100);
        gifCounter++;
      }

      fill(155, 0, 0);
      rectMode(CENTER);
      rect(10 - bossHealth / 2, -180, 200 - bossHealth, 5, 50);
    }
    pop();
    if (gifCounter >= 130) {
      dragonDeath = true;
      bossHealth = 0;
      gifCounter = 0;
      ability1 = true;
    }
    if (dragonDeath == true) {
      text("Press '1' to Select This Ability", 0, 0, 100, 100);
      text("Press 's' to Launch This Ability", 0, 50, 100, 100);
      text(
        "When Ready Click On Screen to Move On to the Next Opponent",
        -100,
        0,
        100,
        100
      );
      if (mouseIsPressed) {
        stage = 2;
      }
    }
    if (dragonDeath == false) {
      push();
      push();
      shootRandom++;
      if (shootRandom >= 0 && shootRandom < 10) {
        shootX = random(-5, 5);
        shootY = random(3);
      }
      if (shootRandom >= 100 && shootRandom < 200) {
        trajectoryX += shootX;
        trajectoryY += shootY;
      }
      if (shootRandom >= 200) {
        shootRandom = 0;
        trajectoryX = 0;
        trajectoryY = 0;
      }
      push();
      rot2 -= 1;
      rotate(rot2 * 0.015);
      image(dragon2, 0, 45, 100, 100);
      image(fire, 82.5, 75, 25, 25);
      pop();

      if (rot2 <= -420) {
        rot2 = 0;
      }
      push();
      // if (shootRandom < 100) {
      //   rot2 -= 0.015;
      //   rotate(rot2);
      // image(fire, 75, 75, 50, 50);
      //   pop();
      // } else {
      //   fireXPos = map(trajectoryX, -325, 325, 0, 650);
      //   fireYPos = trajectoryY;
      // ellipse(fireXPos, fireYPos, 100);
      // if (dist(mouseX, mouseY, fireXPos, fireYPos) < 200) {
      //   background(255, 0, 0);
      // }
      // image(fire, fireXPos, fireYPos, 100);
      // }
    }
  }
  pop();
  if (stage == 2) {
    if (horsemanDeath == false) {
      push();
      if (bossHealth < 200) {
        image(bossBar, -230, -225, 500, 100);
      } else if (bossHealth == 200 && gifCounter < 140) {
        image(bossBarDeath, -230, -225, 500, 100);
        gifCounter++;
      }

      push();
      fill(155, 0, 0);
      rectMode(CENTER);
      rect(10 - bossHealth / 2, -180, 200 - bossHealth, 5, 50);
      pop();
      pop();
    }

    if (gifCounter >= 130) {
      horsemanDeath = true;
      bossHealth = 0;
      gifCounter = 0;
      ability2 = true;
    }

    if (horsemanDeath == true) {
      text("Press '2' to Select This Ability", 0, 0, 100, 100);
      text("Press 's' to Launch This Ability", 0, 50, 100, 100);
      text(
        "When Ready Click On Screen to Move On to the Next Opponent",
        -100,
        0,
        100,
        100
      );
      if (mouseIsPressed) {
        stage = 3;
      }
    }
    if (horsemanDeath == false) {
      if (collider == -1) {
        ellipse(-width / 2 + 445 + horseX, 175, 50);
        ellipse(-width / 2 + 425 + horseX, 175, 40);
      }

      if (
        dist(
          playerXPos,
          playerYPos,
          -width / 2 + horseVariable1 + horseX,
          375
        ) < 35 &&
        keyIsPressed &&
        key == " " &&
        bossHealth < 200
      ) {
        bossHealth += 1;
      }
      if (
        dist(
          playerXPos,
          playerYPos,
          -width / 2 + horseVariable2 + horseX,
          375
        ) < 30 ||
        dist(
          player2XPos,
          player2YPos,
          -width / 2 + horseVariable2 + horseX,
          375
        ) < 30
      ) {
        playerHealth += 0.5;
      }

      if (horseFlip == false) {
        image(horsemanFlip, -width / 2 + 400 + horseX, 135, 75, 75);
        horseX -= horseRandom;
      }
      if (horseFlip == true) {
        image(horseman, -width / 2 + 400 + horseX, 135, 75, 75);
        horseX += 2;
      }
      if (horseX < -425) {
        horseFlip = true;
        horseRandom = random(2, 4);
        horseVariable1 = 725;
        horseVariable2 = 755;
      }
      if (horseX > 140) {
        horseFlip = false;
        horseRandom = random(2, 4);
        horseVariable1 = 755;
        horseVariable2 = 725;
      }
    }
  }
  push();
  if (stage == 3) {
    if (alienDeath == false) {
      if (
        keyIsPressed &&
        key == " " &&
        bossHealth < 200 &&
        dist(playerXPos, playerYPos, movementX + 325, 115 + movementY) < 35
      ) {
        bossHealth += 0.5;
      }
      push();
      if (bossHealth < 200) {
        image(bossBar, -230, -225, 500, 100);
      } else if (bossHealth == 200 && gifCounter < 140) {
        image(bossBarDeath, -230, -225, 500, 100);
        gifCounter++;
      }

      push();
      fill(155, 0, 0);
      rectMode(CENTER);
      rect(10 - bossHealth / 2, -180, 200 - bossHealth, 5, 50);
      pop();
    }
    pop();
    if (gifCounter >= 130) {
      alienDeath = true;
      bossHealth = 0;
      gifCounter = 0;
      ability3 = true;
      movementX = 0;
      movementY = 180;
    }

    if (alienDeath == true) {
      text("Press '3' to Select This Ability", 0, 0, 100, 100);
      text("Press 's' to Launch This Ability", 0, 50, 100, 100);
      text(
        "When Ready Click On Screen to Move On to the Next Opponent",
        -100,
        0,
        100,
        100
      );
      if (mouseIsPressed) {
        stage = 4;
      }
    }
    if (alienDeath == false) {
      push();
      movementY += multiplier * 0.2;
      if (movementY > 200) {
        multiplier *= -1;
      }
      if (movementY < -40) {
        multiplier *= -1;
      }
      image(alienEye, -15 + movementX, -125 + movementY, 30, 30);
      image(alienBody, -30 + movementX, -100 + movementY, 60, 90);
      pop();
    }
  }
  if (stage == 4) {
    if (finalAnimation < 400) {
      finalAnimation++;
    }

    if (finalDeath == false) {
      push();
      if (bossHealth < 200) {
        image(bossBar, -230, -225, 500, 100);
      } else if (bossHealth == 200 && gifCounter < 140) {
        image(bossBarDeath, -230, -225, 500, 100);
        gifCounter++;
      }

      push();
      push();
      fill(155, 0, 0);
      rectMode(CENTER);
      rect(10 - bossHealth / 2, -180, 200 - bossHealth, 5, 50);
      pop();
    }
    pop();
    if (gifCounter >= 130) {
      finalDeath = true;
      bossHealth = 0;
      gifCounter = 0;
    }
    push();
    if (finalDeath == true) {
      stage = 5;
    }
    if (finalDeath == false) {
      movementY += multiplier * 0.25;
      if (movementY > 180) {
        multiplier *= -1;
      }
      if (movementY < -50) {
        multiplier *= -1;
      }
      if (finalAnimation < 250) {
        image(finalBoss, -100 + movementX, -125 + movementY, 200, 200);
      }
      if (finalAnimation > 250 && finalAnimation < 305) {
        image(ink, -330 + movementX, -275 + movementY, 600, 600);
      }
      if (finalAnimation >= 295) {
        if (
          keyIsPressed &&
          key == " " &&
          bossHealth < 200 &&
          dist(playerXPos, playerYPos, 325 + movementX, 175 + movementY) < 75
        ) {
          bossHealth += 0.25;
        }
        image(finalForm, -82.5 + movementX, -125 + movementY, 175, 175);
      }
      pop();
    }
  }
  if (stage == 5) {
    if (endCounter < 400) {
      endCounter++;
    }
    if (endCounter > 0 && endCounter < 315) {
      image(
        scrollReverse,
        -width / 2 - 100,
        -height / 2 - 100,
        width + 200,
        height + 200
      );
    }
    if (endCounter >= 315 && endCounter <= 400) {
      image(
        startScroll,
        -width / 2 - 100,
        -height / 2 - 100,
        width + 200,
        height + 200
      );
    }
  }

  //Movement
  if (start >= 150 && stage != 5) {
    if (
      keyIsPressed &&
      key == "w" &&
      jumpCounter == 0 &&
      yMove > -1 &&
      jumpVariable == true
    ) {
      jumpCounter = 70;
      jumpCounterVariable = 0;
    } else {
      if (jumpCounter > 0) {
        jumpCounter -= 1;
      }
    }

    if (xMove <= -145) {
      if (abilitySelection == 2 && keyIsPressed && key == "s") {
        xMove += 5;
      } else {
        xMove += 1;
      }
    }
    if (xMove >= 495) {
      if (abilitySelection == 2 && keyIsPressed && key == "s") {
        xMove -= 5;
      } else {
        xMove -= 1;
      }
    }
    //Collider
    if (playerHealth >= 400) {
      playerDeath = true;
    }

    if (playerDeath == false && stage >= 0) {
      push();
      fill(255, 0, 0);
      rect(-185 + xMove, 162.5 + yMove, 20, 2.5);
      fill(0, 255, 0);
      rect(
        -185 + xMove - playerHealth * (0.025 / 16),
        162.5 + yMove,
        20 - playerHealth * 0.05,
        2.5
      );
      pop();

      playerXPos = 150 + xMove;
      playerYPos = 370 + yMove;
      player2XPos = playerXPos;
      player2YPos = playerYPos + 15;
      if (collider == -1) {
        ellipse(-175 + xMove, 175 + yMove, 15, 15);
        ellipse(-175 + xMove, 190 + yMove, 10, 10);
      }
      if (jumpCounter <= 70 && jumpCounter >= 60) {
        image(jump, -200 + xMove, 162.5 + yMove, 50, 50);
      } else if (!keyIsPressed) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }
      if (keyIsPressed && key == "w" && jumpVariable == false) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }

      if (yMove > -200 && jumpCounter >= 10) {
        if (yMove != -60 && yMove >= -60) {
          yMove -= 10;
        } else if (yMove <= -60) {
          yMove -= 0.5;
        }
      } else if (yMove < 0) {
        yMove += 2;
      }

      if (jumpCounter == 0 && jumpCounterVariable < 25) {
        jumpCounterVariable += 1;
      }

      if (jumpCounterVariable >= 25) {
        jumpVariable = true;
      } else {
        jumpVariable = false;
      }

      if (
        keyIsPressed &&
        key != "d" &&
        key != "a" &&
        key != " " &&
        key != "w" &&
        key != "s"
      ) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }
      if (keyIsPressed && key == "d" && key != "w") {
        xMove += 1;
        image(run, -200 + xMove, 162.5 + yMove, 50, 50);
        flip = 1;
      }
      if (keyIsPressed && key == "a" && key != " ") {
        xMove -= 1;
        image(run2, -200 + xMove, 162.5 + yMove, 50, 50);
        flip = -1;
      }
      if (keyIsPressed && key == " " && flip == 1) {
        image(attack1, -200 + xMove, 162.5 + yMove, 50, 50);
      } else if (keyIsPressed && key == " " && flip == -1) {
        image(attack1Flip, -200 + xMove, 162.5 + yMove, 50, 50);
      }

      if (shootClock > 0) {
        shoot.move();
        shoot.display();
      }
      if (shootStart == true) {
        shootClock++;
      }
      if (shootClock >= 202) {
        shootStart = false;
        shootClock = 0;
      }
      fill(0);
      if (
        ability1 == true &&
        keyIsPressed &&
        key == "s" &&
        abilitySelection == 1 &&
        flip == 1 &&
        shootStart == false &&
        shootClock <= 40
      ) {
        image(fireShoot, -200 + xMove, 162.5 + yMove, 50, 50);
        shootClock++;
        projectileX = 3;
        if (shootClock > 40) {
          shootStart = true;
        }
        if (shootClock > 0 && shootClock < 201) {
          shoot = new Shoot();
        }
      } else if (flip == 1 && key == "s" && abilitySelection == 1) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }

      if (
        ability1 == true &&
        keyIsPressed &&
        key == "s" &&
        abilitySelection == 1 &&
        flip == -1 &&
        shootStart == false &&
        shootClock <= 40
      ) {
        image(fireShootFlip, -200 + xMove, 162.5 + yMove, 50, 50);
        shootClock++;
        projectileX = -3;
        if (shootClock > 40) {
          shootStart = true;
        }
        if (shootClock > 0 && shootClock < 201) {
          shoot = new Shoot();
        }
      } else if (flip == -1 && key == "s" && abilitySelection == 1) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }

      if (
        ability2 == true &&
        keyIsPressed &&
        key == "s" &&
        abilitySelection == 2 &&
        flip == 1
      ) {
        dashCounter++;
        if (dashCounter > 30 && dashCounter < 51) {
          xMove += 5;
        }
        if (dashCounter > 100) {
          dashCounter = 0;
        }
        image(dash, -200 + xMove, 162.5 + yMove, 50, 50);
      } else if (flip == 1 && key == "s" && abilitySelection == 2) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }
      if (
        ability2 == true &&
        keyIsPressed &&
        key == "s" &&
        abilitySelection == 2 &&
        flip == -1
      ) {
        dashCounter++;
        if (dashCounter > 30 && dashCounter < 51) {
          xMove -= 5;
        }
        if (dashCounter > 100) {
          dashCounter = 0;
        }
        image(dashFlip, -200 + xMove, 162.5 + yMove, 50, 50);
      } else if (flip == -1 && key == "s" && abilitySelection == 2) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }
      push();
      strokeWeight(3);
      if (
        ability3 == true &&
        keyIsPressed &&
        key == "s" &&
        abilitySelection == 3 &&
        flip == 1
      ) {
        laserCounter++;
        if (laserCounter >= 50 && laserCounter <= 70) {
          line(-165 + xMove, 177.5 + yMove, -185 + xMove + 400, 177.5 + yMove);
        }
        if (laserCounter >= 85) {
          laserCounter = 0;
        }
        image(laser, -200 + xMove, 162.5 + yMove, 50, 50);
      } else if (flip == 1 && key == "s" && abilitySelection == 3) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }
      if (
        ability3 == true &&
        keyIsPressed &&
        key == "s" &&
        abilitySelection == 3 &&
        flip == -1
      ) {
        laserCounter++;
        if (laserCounter >= 50 && laserCounter <= 70) {
          line(-185 + xMove, 177.5 + yMove, -185 + xMove - 400, 177.5 + yMove);
        }
        if (laserCounter >= 85) {
          laserCounter = 0;
        }
        image(laserFlip, -200 + xMove, 162.5 + yMove, 50, 50);
      } else if (flip == -1 && key == "s" && abilitySelection == 3) {
        image(idle, -200 + xMove, 162.5 + yMove, 50, 50);
      }
    }
    pop();
    if (start > 0 && !mainTheme.isPlaying() && stage < 0) {
      mainTheme.setVolume(0.05);
      mainTheme.play();
    }
    if (stage > 0 && !battleMusic.isPlaying() && stage < 5) {
      mainTheme.stop();
      battleMusic.setVolume(0.1);
      battleMusic.play();
    }
  }
  // Start Screen
  if (stage == -1) {
    push();
    if (
      start >= 200 &&
      !intro.isPlaying() &&
      start <= 1450 &&
      soundTimer2 == false
    ) {
      intro.setVolume(0.6);
      intro.play();
    }
    if (start >= 175 && start < 900) {
      Alpha += 0.4;
      tint(0, Alpha);
      image(worldsScroll, -width / 2 + 75, -height / 2 - 50, 500, 500);
    }
    if (start > 900 && start < 950) {
      Alpha = 0;
      soundTimer2 = true;
    }

    tint(200, Alpha);
    if (start >= 1000 && start < 1800) {
      Alpha += 0.5;
      image(dragonStory, -width / 2, -height / 2 + 100, 150, 150);
    }

    if (start >= 1150 && start < 1800) {
      image(horsemanStory, -width / 2 + 250, -height / 2 + 100, 150, 150);
    }
    if (start >= 1300 && start < 1800) {
      image(alienStory, -width / 2 + 500, -height / 2 + 100, 150, 150);
    }
    pop();
    if (start >= 1850 && stage == -1) {
      stage = 0;
    }
  }
  push();
  if (playerDeath == true) {
    background(0);
    textSize(100);
    fill(205, 0, 0);
    text("You Died", -200, 0);
  }
  pop();
  if (stage >= 5 && !mainTheme.isPlaying()) {
    battleMusic.stop();
    mainTheme.setVolume(0.05);
    mainTheme.play();
  }
}

function keyTyped() {
  // if (key == "0") {
  //   stage = 0;
  // }
  if (key == "1") {
    // stage = 1;
    abilitySelection = 1;
  }
  if (key == "2") {
    // stage = 2;
    abilitySelection = 2;
  }
  if (key == "3") {
    // stage = 3;
    abilitySelection = 3;
  }
  // if (key == "4") {
  //   stage = 4;
  // }
}

class Shoot {
  constructor() {
    this.x = -175 + xMove;
    this.y = 180 + yMove;
    this.diameter = 5;
    this.speed = projectileX;
  }
  move() {
    this.x += this.speed;
  }
  display() {
    ellipse(this.x, this.y, this.diameter);
    // if (dist(mouseX,mouseY,-175+xMove+this.speed,240+yMove)< 100){
    // background(255,0,0)
    // }
  }
}
