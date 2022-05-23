// Mudança de cor do texto
const titulo = document.querySelector("#titulo");

titulo.addEventListener("mouseover", function () {
  titulo.style.color = "yellow";
});

titulo.addEventListener("mouseout", function () {
  titulo.style.color = "#fff";
});

// INÍCIO DE MUDANÇA DE IMAGEM E HUMOR

const elementoHumor = document.getElementById('textos');
const elementoImg = document.getElementById('imgInicial');
let elementoButton = document.querySelector('#button');

elementoButton.addEventListener( 'click', () => {
  if (elementoButton.value == '1') {
    mudaHumor('Situação: Harry Doidão','./assets/img/harry-doidao.png','2' );
  } else if (elementoButton.value == '2') {
    mudaHumor('Situação: Harry Nojinho','./assets/img/harry-nojinho.png','3' );
  } else if (elementoButton.value == '3') {
    mudaHumor('Situação: Harry Pensador', './assets/img/harry-pensador.png','4');
  } else {
    mudaHumor('Situação: Harry Revoltado', './assets/img/harry-revoltado.png','1');
  } 
  
});

function mudaHumor(humor,image,valor){
	elementoHumor.innerText = humor;
	elementoImg.src = image;
	elementoButton.value = valor;
}