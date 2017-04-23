function callImg() {
  var image = "";
  var img = 133;
  for (i = 1; i < img; i++) {
    image += "<a href='images/img (" + i + ").jpg' data-lightbox='gallery'><img class='images clickMe' src='images/img (" + i + ").jpg'></a>";
  };
  document.getElementById("btn").style.display = "none";
  document.getElementById("Img").innerHTML = image;
}
