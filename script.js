//Função para fazer o martelo bater
const hammer = document.getElementById("player")
const hammerContainerEl = document.querySelector(".hammerContainer")
const pontuacao = document.getElementById("pontuacao");
hammerContainerEl.style.justifyContent = "center"
hammerContainerEl.style.alignItems = "center"
var alvo = null;
var hits = 0;

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
hammer.addEventListener("click", function(e){
  hammer.style.backgroundImage = "url('./imgs/hammer_smashing.png')"
  const hammerHitPosition = hammerContainerEl.style.justifyContent + hammerContainerEl.style.alignItems

  console.log(possibilidades[hammerHitPosition])
  console.log(alvo)
  if(possibilidades[hammerHitPosition] == alvo){
    hits++
    console.log("hits: " + hits)
    updateHits(hits);
  }

  function updateHits(value){
    pontuacao.textContent = value
  }

  
  setTimeout(function() {
    hammer.style.backgroundImage = "url('./imgs/hammer_fronta.png')"
  }, 200)
});

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

function startGame(){
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
//hitSpot

}

function captureClickHit(){
  
}