// squid up and down
const squid1 = document.querySelector('.squid1');
let squid1Y = 20;
let squid1Direction = 1;

setInterval(() => {
  squid1Y += squid1Direction * 0.5;
  if (squid1Y > 100 || squid1Y < 10) squid1Direction *= -1;
  squid1.style.top = `${squid1Y}%`;
}, 25);

const squid2 = document.querySelector('.squid2');
let squid2Y = 60;
let squid2Direction = 1;

setInterval(() => {
  squid2Y += squid2Direction * 0.5;
  if (squid2Y > 100 || squid2Y < 0) squid2Direction *= -1;
  squid2.style.top = `${squid2Y}%`;
}, 25);

const squid3 = document.querySelector('.squid3');
let squid3Y = 20;
let squid3Direction = 1;

setInterval(() => {
  squid3Y += squid3Direction * 0.5;
  if (squid3Y > 80 || squid3Y < 20) squid3Direction *= -1;
  squid3.style.top = `${squid3Y}%`;
}, 25);

const squid = document.querySelector('.squid');
let squidY = 50;
let squidDirection = 1;

setInterval(() => {
  squidY += squidDirection * 0.5;
  if (squidY > 70 || squidY < 30) squidDirection *= -1;
  squid.style.top = `${squidY}%`;
}, 25);

const stingray = document.querySelector('.stingray');
let stingrayX = 210, stingrayY = 210;
let stingrayVX = 2, stingrayVY = 1.5;
let stingrayFlipped = false;

function movestingray() {
  stingrayX += stingrayVX;
  stingrayY += stingrayVY;

  const stingrayWidth = 200;
  const stingrayHeight = 150;

  if (stingrayX + stingrayWidth > window.innerWidth || stingrayX < 0) {
    stingrayVX = (Math.random() * 2 + 1) * (stingrayVX > 0 ? -1 : 1);
    stingrayFlipped = !stingrayFlipped;
    stingray.style.transform = stingrayFlipped > 0 ? 'scaleX(1)' : 'scaleX(-1)';
  }

  if (stingrayY + stingrayHeight > window.innerHeight || stingrayY < 0) {
    stingrayVY = (Math.random() * 2 + 0.5) * (stingrayVY > 0 ? -1 : 1);
  }

  stingray.style.left = `${stingrayX}px`;
  stingray.style.top = `${stingrayY}px`;

  requestAnimationFrame(movestingray);
}
movestingray();


const shark = document.querySelector('.shark');
let sharkX = 100, sharkY = 100;
let sharkVX = 2, sharkVY = 1.5;
let sharkFlipped = false;

function moveShark() {
  sharkX += sharkVX;
  sharkY += sharkVY;

  const sharkWidth = 200;
  const sharkHeight = 150;

  if (sharkX + sharkWidth > window.innerWidth || sharkX < 0) {
    sharkVX = (Math.random() * 2 + 2) * (sharkVX > 0 ? -1 : 1);
    sharkFlipped = !sharkFlipped;
    shark.style.transform = sharkFlipped > 0 ? 'scaleX(1)' : 'scaleX(-1)';
  }

  if (sharkY + sharkHeight > window.innerHeight || sharkY < 0) {
    sharkVY = (Math.random() * 2 + 1) * (sharkVY > 0 ? -1 : 1);
  }

  shark.style.left = `${sharkX}px`;
  shark.style.top = `${sharkY}px`;

  requestAnimationFrame(moveShark);
}
moveShark();

const fishGroup = document.querySelector('.fish-group');
let fishX = 50, fishY = 400;
let fishVX = 1, fishVY = 0.5;
let fishFlipped = false;

const fishGroup_1 = document.querySelector('.fish-group_1');
let fish_1X = 50, fish_1Y = 400;
let fish_1VX = 1, fish_1VY = 0.5;
let fish_1Flipped = false;

const fishGroup_2 = document.querySelector('.fish-group_2');
let fish_2X = 50, fish_2Y = 400;
let fish_2VX = 1, fish_2VY = 0.5;
let fish_2Flipped = false;


function moveFish() {
  fishX += fishVX;
  fishY += fishVY;

  const fishWidth = 200;
  const fishHeight = 100;

  if (fishX + fishWidth > window.innerWidth || fishX < 0) {
    fishVX = (Math.random() * 1 + 1) * (fishVX > 0 ? -1 : 1);
    fishFlipped = !fishFlipped;
    fishGroup.style.transform = fishFlipped > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  if (fishY + fishHeight > window.innerHeight || fishY < 0) {
    fishVY = (Math.random() * 1 + 1) * (fishVY > 0 ?   -1 : 1);
  }

  fishGroup.style.left = `${fishX}px`;
  fishGroup.style.top = `${fishY}px`;

  requestAnimationFrame(moveFish);
}
moveFish();

function moveFishGroup_1() {
  fish_1X += fish_1VX;
  fish_1Y += fish_1VY;

  const fishWidth = 200;
  const fishHeight = 100;

  if (fish_1X + fishWidth > window.innerWidth || fish_1X < 0) {
    fish_1VX = (Math.random() * 1 + 1) * (fish_1VX > 0 ? -1 : 1);
    fish_1Flipped = !fish_1Flipped;
    fishGroup_1.style.transform = fish_1Flipped > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  if (fish_1Y + fishHeight > window.innerHeight || fish_1Y < 0) {
    fish_1VY = (Math.random() * 1 + 1) * (fish_1VY > 0 ? -1 : 1);
  }

  fishGroup_1.style.left = `${fish_1X}px`;
  fishGroup_1.style.top = `${fish_1Y}px`;

  requestAnimationFrame(moveFishGroup_1);
}
moveFishGroup_1();
function moveFishGroup_2() {
  fish_2X += fish_2VX;
  fish_2Y += fish_2VY;

  const fishWidth = 200;
  const fishHeight = 100;

  if (fish_2X + fishWidth > window.innerWidth || fish_2X < 0) {
    fish_2VX = (Math.random() * 1 + 1) * (fish_2VX > 0 ? -1 : 1);
    fish_2Flipped = !fish_2Flipped;
    fishGroup_2.style.transform = fish_2Flipped > 0 ? 'scaleX(-1)' : 'scaleX(1)';
  }

  if (fish_2Y + fishHeight > window.innerHeight || fish_2Y < 0) {
    fish_2VY = (Math.random() * 1 + 1) * (fish_2VY > 0 ? -1 : 1);
  }

  fishGroup_2.style.left = `${fish_2X}px`;
  fishGroup_2.style.top = `${fish_2Y}px`;

  requestAnimationFrame(moveFishGroup_2);
}
moveFishGroup_2();
const aquarium = document.getElementById('aquarium');
const toggleThemeBtn = document.getElementById('toggleTheme');
const toggleMusicBtn = document.getElementById('toggleMusic');
const bgMusic = document.getElementById('bgMusic');

let theme = 0;
toggleThemeBtn.addEventListener('click', () => {
  theme++;
  if (theme % 2 === 0) {
    aquarium.style.background = "linear-gradient(to bottom, #1989cf, #145374)";
  } else {
    aquarium.style.background = "linear-gradient(to bottom, #8fffe9ff, #c4facaff)";
  }
});

// Bật/Tắt nhạc
let isPlaying = false;
toggleMusicBtn.addEventListener('click', () => {
  if (!bgMusic) return;

  if (!isPlaying) {
    bgMusic.play()
      .then(() => {
        isPlaying = true;
        toggleMusicBtn.textContent = "Turn off";
      })
      .catch(err => {
        console.warn("VIRUS DECTECTED", err);
      });
  } else {
    bgMusic.pause();
    bgMusic.currentTime = 0; 
    isPlaying = false;
    toggleMusicBtn.textContent = "Turn on";
  }
});