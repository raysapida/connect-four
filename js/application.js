$(document).ready(function() {
  var turn = 0;
  var player;
  var board = Array.matrix(7, 6, 0);

  $('#board').on('click', '.drop', function (event) {
    event.preventDefault();
    var lastCircle = $(this).parent().children()[1];
    if (!($(lastCircle).hasClass('red') || $(lastCircle).hasClass('yellow'))) {
      turn ++;
      player = isOdd(turn) ? 'yellow' : 'red';

      var col = $(this).parent().attr('id');
      var colNum = returnColNum(col);

      for(var i = 2; i < 8; i++){
        var currentNode = $(this).parent().children()[i];
        if ($(currentNode).hasClass('red') || $(currentNode).hasClass('yellow') || i ==7 ) {
          board[colNum][i-2] = player;
          var prevNode = $(this).parent().children()[i-1];
          $(prevNode).addClass(player);
          checkCol(board, player);
          checkRow(board, player);
          checkDiagnal(board, player, colNum, (i-2));
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
    //console.log(column.join(''));
    if (column.join('').match(Array(5).join(player))){
      $('#winner').html(player+' wins!');
    }
  });
}

function checkDiagnal(board, player, x, y) {
  if (y < 3) {
    var start = startingPoint(x+y);
    var result ='';
    var i = start[0];
    var j = start[1];
    for(var a = 0; a < 5; a++){
      result += board[i][j];
      i ++;
      j --;
    }
    if (result.match(Array(5).join(player))){
      $('#winner').html(player+' wins!');
    }
  }
}

function startingPoint(sum) {
  switch(sum) {
    case 3:
      return [0,3];
      break;
    case 4:
      return [0,4];
      break;
    case 5:
      return [0,5];
      break;
    case 6:
      return [1,5];
      break;
    case 7:
      return [2,5];
      break;
    case 8:
      return [3,5];
      break;
    default:
      console.log('default');
  }
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
