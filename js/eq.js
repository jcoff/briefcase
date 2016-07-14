function equalizer(bar) {
  // Syntax: Math.random() * (max-min = range) + min;
  // My bars will be at least 70px, and at most 170px tall
  var height = Math.random() * 15 + 9;
  // Any timing would do the trick, mine is height times 7.5 to get a speedy yet bouncy vibe
  var timing = height * 15.5;
  // If you need to align them on a baseline, just remove this line and also the "marginTop: marg" from the "animate"

  bar.animate({
    height: height,

  }, timing, function() {
    equalizer($(this));
  });
};



// Action on play-pause buttons can be added here (should be a wholesome function rather than annonymous)

/*$('.nav a') .mouseover(function(){
    $('.eqWrapper span').each(function(i) {
  equalizer($(this));
});
});

$('.nav a') .mouseout(function(){
  $('.eqWrapper span').each(function(i) {
  equalizer($(this));
});
});*/


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






