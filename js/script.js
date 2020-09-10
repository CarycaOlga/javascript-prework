let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2) {
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if else ( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Mamy remis!');
}

if else (computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Tym razem wygrywam Ja!');
}

if else (computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Mamy remis!');
}

if else (computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ja wygrywam!');
}

if else(computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('A niech to! Przegrałem.');
}

if else(computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Wygrałem!');
}

if else(computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Znowu remis!');
}

if else(computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ja się tak nie bawię!');
}
else {
  printMessage('Nieznany ruch');
}
