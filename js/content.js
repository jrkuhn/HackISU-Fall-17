//alert("Hello, This is FlashOff");
alert(document.title);

var images = [];
for(var i = 0; i < document.images.length; i++){
  images.push(document.images[i].src);
  alert(images[i]);
}

// var imgElements = document.getElementsByTagName("img");
// var videoElements = documet.getElementsbyTagName("video");


// if(imgElements.length > 0) {
//   for(i = 0 i < imgElements.length, i++) {
//     alert(imgElements[i].src);
//   }
// }
//
// if(videoElements.length > 0) {
//   for(i = 0 i < videoElements.length, i++) {
//     alert(videoElements[i].src);
//   }
// }
