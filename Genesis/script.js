let order = [];
let clickedOrder = [];
let score = 0;
let player1 = '';

// 0 =  verde; 1  = vermelho, 2 = amarelo, 3 azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


// cria ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}


// acende a proxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
      element.classList.add('selected');
  }, number - 100);
  setTimeout(() => {
      element.classList.remove('selected');
  }, number + 300);
  return;
}

// checa se os botões clicados são correspondentes as cores do jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você Acertou! Iniciando próximo nível.`);
    nextLevel();
  }
}


//função para clique do usuario

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

// criar função que retorna  a cor

let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
}

//função para o proximo nivel do jogo

let nextLevel = () => {
  score++;
  shuffleOrder();
}

// função caso o jogador perca o jogo

let gameOver = () => {
  alert(`A pontuação de ${player1} foi: ${score}!\n Você perdeu o jogo.\n Clique em OK para iniciar um novo jogo.`);
  order = [];
  clickedOrder = [];

  playGame();
}

// função que roda para iniciar o jogo

let playGame = () => {
  alert('Bem vindo ao Genesis! Iniciando um novo jogo.');
  player1 = prompt('Seu nome de jogador: ');

  score = 0;

  nextLevel();
}


// registro de eventos para receber a ação de click do usuario


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();