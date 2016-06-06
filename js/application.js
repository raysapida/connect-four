$(document).ready(function() {
  var turn = 0;
  var player;
  var board = Array.matrix(7, 8, 0);

  $('#board').on('click', '.drop', function (event) {
    event.preventDefault();
    var lastCircle = $(this).parent().children()[1];
    if (!($(lastCircle).hasClass('red') || $(lastCircle).hasClass('yellow'))) {
      turn ++;
      player = isOdd(turn) ? 'yellow' : 'red';

      var col = $(this).parent().attr('id');
      var colNum = returnColNum(col);

      for(var i = 1; i < 8; i++){
        var currentNode = $(this).parent().children()[i];
        if ($(currentNode).hasClass('red') || $(currentNode).hasClass('yellow') || i ==7 ) {
          board[colNum][i] = player;
          var prevNode = $(this).parent().children()[i-1];
          $(prevNode).addClass(player);
          checkCol(board, player);
          checkRow(board, player);
          checkDiagnal(board, player);
          return;
        }
      }
    }
  });
});

function isOdd(number) {
  if(number%2) {
    return false;
  } else {
    return true;
  }
}

function returnColNum(column) {
  return 'abcdefg'.indexOf(column);
}

function checkCol(board, player) {
  board.forEach(function(column){
    if (column.join('').match(Array(5).join(player))){
      $('#winner').html(player+' wins!');
    }
  });
}

function checkRow(board, player) {
  var transposedBoard= board[0].map(function(column, i) {
    return board.map(function(row) {
      return row[i];
    });
  });
  transposedBoard.forEach(function(column){
    if (column.join('').match(Array(5).join(player))){
      $('#winner').html(player+' wins!');
    }
  });
}

function checkDiagnal(board, player) {
}

Array.matrix = function(numrows, numcols, initial) {
  var arr = [];
  for (var i  = 0; i < numrows; i++){
    var columns = [];
    for (var j = 0; j < numcols; j++){
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}
