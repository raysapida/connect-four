$(document).ready(function() {
  var turn = 1;
  var player;
  var board = [
    new Array(6),
    new Array(6),
    new Array(6),
    new Array(6),
    new Array(6),
    new Array(6),
    new Array(6)
  ];

  $('#board').on('click', '.drop', function (event) {
    event.preventDefault();
    if (isOdd(turn)) {
      player = 'yellow';
    } else {
      player = 'red';
    }

    var col = $(this).parent().attr('id')
    var colNum = checkCol(col);

    for(var i = 1; i < 8; i++){
      var currentNode = $(this).parent().children()[i];
      if ($(currentNode).hasClass('red') || $(currentNode).hasClass('yellow') || i ==7 ) {
          board[colNum][i] = player
          var prevNode = $(this).parent().children()[i-1];
          $(prevNode).addClass(player)
          break;
      }
    }

    console.log(board);
    turn ++;
  });
});

function isOdd(number) {
  if(number%2) {
    return false
  } else {
    return true
  }
}

function checkCol(column) {
  return 'abcdefg'.indexOf(column);
}
