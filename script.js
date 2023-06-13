//Função para fazer o martelo bater
const hammer = document.getElementById("player")
const hammerContainerEl = document.querySelector(".hammerContainer")
const pontuacao = document.getElementById("pontuacao");
const title = document.getElementById("title")
hammerContainerEl.style.justifyContent = "center"
hammerContainerEl.style.alignItems = "center"
var alvo = null;
var hits = 0;
var gameState = false;

const audioPlayerI = document.getElementById('audioPlayerIntro');
const audioPlayerG = document.getElementById('audioPlayerGame');
const audioPlayerH = document.getElementById('audioPlayerHit');
const houseBackground = document.getElementById("gamescreen")
const startscreen = document.getElementById("startScreen")

window.addEventListener('load', function() {
  audioPlayerI.play();
});
const btnStart = document.getElementById("btnStart");



const possibilidades = {
  "flex-startflex-start": 1,
  "centerflex-start": 2,
  "flex-endflex-start": 3,
  "flex-startcenter": 4,
  "centercenter": 5,
  "flex-endcenter": 6,
  "flex-startflex-end": 7,
  "centerflex-end": 8,
  "flex-endflex-end": 9,
}

document.addEventListener("keydown", function(event){
  if (event.keyCode === 32) {
    hammerHit();
  }
});

hammer.addEventListener("click", function(event){
    hammerHit();
});

function hammerHit(){
  audioPlayerH.pause();
  audioPlayerH.currentTime = 0;
  audioPlayerH.play();
  hammer.style.backgroundImage = "url('./imgs/hammer_smashing.png')"
  const hammerHitPosition = hammerContainerEl.style.justifyContent + hammerContainerEl.style.alignItems

  console.log(possibilidades[hammerHitPosition])
  console.log(alvo)
  if(possibilidades[hammerHitPosition] == alvo){
    tremerTela();
    hits++
    console.log("hits: " + hits)
    updateHits(hits);
  }

  setTimeout(function() {
    hammer.style.backgroundImage = "url('./imgs/hammer_fronta.png')"
  }, 200)
}

// Aumenta a quantidade de Hits realizados na tela
function updateHits(value){
  pontuacao.textContent = value
  updateBackground();
}

//Função para mudar verticalmente a localização do martelo
function updateVCssProperty(value){
  //Seleciona o fundo desejado
  let element = document.querySelector(".hammerContainer");

  //altera a propriedade esoclhida
  element.style.alignItems = value;

}


//função para mudar horizontalmente a localização do martelo.
function updateHCssProperty(value){
  //Seleciona o fundo desejado
  let element = document.querySelector(".hammerContainer");

  //altera a propriedade esoclhida
  element.style.justifyContent = value;

}


//Inicia o jogo e torna o estado do jogo = true
function startGame(){
  if(gameState === false ){
    audioPlayerI.pause();
    audioPlayerG.play();
    gameState = true; 
    title.style.color = "red";
    startS();

    setInterval(() => {
      const hitSpot = document.getElementById(Math.floor((Math.random() * 9) + 1));
      hitSpot.style.backgroundImage = `url('./imgs/${Math.floor((Math.random() *9)+1)}.jpg')`;
      alvo = hitSpot.id;
      console.log(alvo)
      setTimeout(() => {
        hitSpot.style.backgroundImage = "none";
        alvo = null;
      }, 3000);
    }, 5000);
} else {
}

// function restart(){
//   window.location.reload();
// }


function startS(){
  console.log("STARTED")
  startscreen.style.display = "flex";

  let countdown = document.getElementById('countdown')
  var segundos = 3;

      var interval = setInterval(() => {
      segundos--;
      countdown.textContent = segundos;

      if (segundos === 0) {
        clearInterval(interval);
        fadeOut(startscreen)
      }
    }, 1000); // 1000 milissegundos = 1 segundo
  }

  function fadeOut(elemento) {
    var opacidade = 1;
    var interval = setInterval(function() {
      opacidade -= 0.1;
      elemento.style.opacity = opacidade;

      if (opacidade <= 0) {
        clearInterval(interval);
        elemento.style.display = 'none';
      }
    }, 100); // Ajuste o intervalo de tempo para controlar a velocidade do fadeout
  }

}

function updateBackground(){
  if(hits > 20 && hits < 59) {
    houseBackground.style.backgroundImage = "url('./imgs/mansao2.jpg')"
  } else if (hits > 60 && hits < 119){
    houseBackground.style.backgroundImage = "url('./imgs/mansao3.jpg')"
  } else if (hits > 120 && hits < 179){
    houseBackground.style.backgroundImage = "url('./imgs/mansao4.jpg')"
  } else if (hits > 180 && hits < 220){
    houseBackground.style.backgroundImage = "url('./imgs/mansao5.jpg')"
  } else if (hits > 221){
    houseBackground.style.backgroundImage = "url('./imgs/mansao5.jpg')"
  }
}

//Faz a tela tremer ao realizar acertar o infeliz
function tremerTela() {
  document.body.classList.remove("tela-tremer");
  document.body.classList.add("tela-tremer");

  setTimeout(function() {
    document.body.classList.remove("tela-tremer");
  }, 500);
}

