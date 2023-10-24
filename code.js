//contexto .fillRect ( x, y, largura, altura )


// Obtendo o elemento canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Definindo as cores
const verde = "#009246"; // Verde 
const branco = "#FFFFFF"; // Branco 
const vermelho = "#FF0000"; // Vermelho 

// definindo as larguras de cada cor
const larguraVerde = canvas.width / 3;
const larguraBranco = canvas.width / 3;
const larguraVermelho = canvas.width / 3;

// Desenhar a faixa verde
ctx.fillStyle = verde;
ctx.fillRect(0, 0, larguraVerde, canvas.height);

// Desenhar a faixa branca
ctx.fillStyle = branco;
ctx.fillRect(larguraVerde, 0, larguraBranco, canvas.height);

// Desenhar a faixa vermelha
ctx.fillStyle = vermelho;
ctx.fillRect(larguraVerde + larguraBranco, 0, larguraVermelho, canvas.height);


