$(document).ready(function() {
  var turn = 1;
  var player;
  $('#board').on('click', '.drop', function (event) {
    event.preventDefault();
    if (isOdd(turn)) {
      player = 'yellow';
    } else {
      player = 'red';
    }

    for(var i = 1; i < 8; i++){
      var currentNode = $(this).parent().children()[i];
      if ($(currentNode).hasClass('red') || $(currentNode).hasClass('yellow') || i ==7 ) {
        var prevNode = $(this).parent().children()[i-1];
        $(prevNode).addClass(player)
        break;
      }
    }
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
