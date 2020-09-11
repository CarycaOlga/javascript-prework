let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  if(argMoveId == 2){
    return == 'papier';
  }
  if(argMoveId == 3){
    return == 'nożyce';
  }
}
/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2) {
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + argComputerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
  }
  if else ( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Mamy remis!');
  }
  if else (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Tym razem wygrywam Ja!');
  }
  if else (argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Mamy remis!');
  }
  if else (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Ja wygrywam!');
  }
  if else(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('A niech to! Przegrałem.');
  }
  if else(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Wygrałem!');
  }
  if else(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Znowu remis!');
  }
  if else(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ja się tak nie bawię!');
  }
  else {
  printMessage('Nieznany ruch');
  }
}
