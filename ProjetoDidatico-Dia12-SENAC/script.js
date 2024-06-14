function fugir(){
  let botaoNao = document.getElementById("nao");

  // pegar altura, largura total da tela
  let larguraJanela = window.innerWidth;
  let alturaJanela = window.innerHeight;

  // descontar tamanho botão 
  let maxX = larguraJanela - botaoNao.offsetWidth;
  let maxY = alturaJanela - botaoNao.offsetHeight;

  // sortear posicao aleatoria
  let aleatorioX = Math.floor(Math.random() * maxX);
  let aleatorioY = Math.floor(Math.random() * maxY);
  
  // manipular posicao do botao no html
  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";

}