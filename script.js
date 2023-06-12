
//Função para fazer o martelo bater
var hammer = document.getElementById("player")

hammer.addEventListener("click", function(){
  hammer.style.backgroundImage = "url('./imgs/hammer_smashing.png')"

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
