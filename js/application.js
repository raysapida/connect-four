$(document).ready(function() {
  var turn = 1;
  var player;
  var board = [
    Array.apply(null, Array(6)).map(Number.prototype.valueOf,0),
    Array.apply(null, Array(6)).map(Number.prototype.valueOf,0),
    Array.apply(null, Array(6)).map(Number.prototype.valueOf,0),
    Array.apply(null, Array(6)).map(Number.prototype.valueOf,0),
    Array.apply(null, Array(6)).map(Number.prototype.valueOf,0),
    Array.apply(null, Array(6)).map(Number.prototype.valueOf,0),
    Array.apply(null, Array(6)).map(Number.prototype.valueOf,0)
  ];

  $('#board').on('click', '.drop', function (event) {
    var lastCircle = $(this).parent().children()[1];
    if (!($(lastCircle).hasClass('red') || $(lastCircle).hasClass('yellow'))) {
      event.preventDefault();
      if (isOdd(turn)) {
        player = 'yellow';
      } else {
        player = 'red';
      }

      var col = $(this).parent().attr('id')
      var colNum = returnColNum(col);

      for(var i = 1; i < 8; i++){
        var currentNode = $(this).parent().children()[i];
        if ($(currentNode).hasClass('red') || $(currentNode).hasClass('yellow') || i ==7 ) {
          board[colNum][i] = player
          var prevNode = $(this).parent().children()[i-1];
          $(prevNode).addClass(player)
          break;
        }
      }
      checkCol(board, player);
      checkRow(board, player);
      checkDiagnal(board, player);
      turn ++;
    }
  });
});

function isOdd(number) {
  if(number%2) {
    return false
  } else {
    return true
  }
}

function returnColNum(column) {
  return 'abcdefg'.indexOf(column);
}

function checkCol(board, player) {
  board.forEach(function(column){
    if (column.join('').match(Array(5).join(player))){
      alert(player+'  wins');
    }
  });
};

function checkRow(board, player) {
  var transposedBoard= board[0].map(function(column, i) {
    return board.map(function(row) {
      return row[i]
    })
  });
  transposedBoard.forEach(function(column){
    if (column.join('').match(Array(5).join(player))){
      alert(player+'  wins');
    }
  });
}

function checkDiagnal(board, player) {
}
