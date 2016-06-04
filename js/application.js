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
      console.log($($(this).parent().children()[i]));
      if ($($(this).parent().children()[i]).hasClass('red') || $($(this).parent().children()[i]).hasClass('yellow') || i ==7 ) {
        $($(this).parent().children()[i-1]).addClass(player)
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
