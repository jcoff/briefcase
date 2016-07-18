/*equalizer animation for menu buttons hover-effect*/
function equalizer(bar) {
  var height = Math.random() * 15 + 9;
  var timing = height * 15.5;


  bar.animate({
    height: height,

  }, timing, function() {
    equalizer($(this));
  });
};


$(function() {
    $('.nav a') .hover(function() {
        $('.eqWrapper span').each(function(i) {
         equalizer($(this))});
      }, function() {
         $('.eqWrapper span').stop();
      });

});

$(function() {
    $('.navBottom a') .hover(function() {
        $('.eqWrapperB span').each(function(i) {
         equalizer($(this))});
      }, function() {
         $('.eqWrapperB span').stop();
      });

});






