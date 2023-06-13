//Função para fazer o martelo bater
const hammer = document.getElementById("player")
const hammerContainerEl = document.querySelector(".hammerContainer")
const pontuacao = document.getElementById("pontuacao");
hammerContainerEl.style.justifyContent = "center"
hammerContainerEl.style.alignItems = "center"
var alvo = null;
var hits = 0;
var gameState = false;

const audioPlayerI = document.getElementById('audioPlayerIntro');
const audioPlayerG = document.getElementById('audioPlayerGame');
const audioPlayerH = document.getElementById('audioPlayerHit');


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
    audioPlayerG.play();
    gameState = true;
    setInterval(() => {
      const hitSpot = document.getElementById(Math.floor((Math.random() * 9) + 1));
      hitSpot.style.backgroundColor = "red";
      alvo = hitSpot.id;
      console.log(alvo)
      setTimeout(() => {
        hitSpot.style.backgroundColor = "blue";
        alvo = null;
      }, 3000);
    }, 5000);
} else {
  alert("Tenha paciencia rapá!")
}
//hitSpot

}

function captureClickHit(){
  
}

//Faz a tela tremer ao realizar acertar o infeliz
function tremerTela() {
  document.body.classList.add("tela-tremer");

  setTimeout(function() {
    document.body.classList.remove("tela-tremer");
  }, 500);
}

//Inicia a música assim que abrir a página
function playIntro() {
  const audioPlayerI = document.getElementById('audioPlayerIntro');
  audioPlayerI.play();
}

playIntro();