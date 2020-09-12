function playGame (playerInput){

  function clearMessages ();

  let randomNumber = Math.floor (Math.random () * 3 + 1);

  console.log ('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName (randomNumber);

  function getMoveName (argMoveId){
    if (argMoveId == 1){
      return 'kamień';
    }
    if (argMoveId == 2){
      return 'papier';
    }
    if (argMoveId == 3){
      return 'nożyce';
    }
  }
  printMessage ('Mój ruch to: ' + argComputerMove);

  console.log ('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName (playerInput);

  printMessage ('Twój ruch to: ' + argPlayerMove);

  function displayResult (argComputerMove, argPlayerMove) {
    if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage ('Ty wygrywasz!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage ('Mamy remis!');
    }
    else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage ('Tym razem wygrywam Ja!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage ('Mamy remis!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage ('Ja wygrywam!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage ('A niech to! Przegrałem.');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage ('Wygrałem!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage ('Znowu remis!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage ('Ja się tak nie bawię!');
    }
    else {
      printMessage ('Nieznany ruch');
    }
  }
}
