$(function(){
  "use strict";

  $(".popup img").click(function(){
    var $src = $(this).attr("src");
    $(".show").fadeIn();
    $(".img-show img").attr("src", $src);
  });
  $(".overlay").click(function(){
    $(".show").fadeOut();
  });
});
