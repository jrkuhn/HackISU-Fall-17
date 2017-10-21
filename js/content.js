//alert("Hello, This is FlashOff");
alert(document.title);

var images = [];
for(var i = 0; i < document.images.length; i++){
  images[i] = new Image();
  images.push(document.images[i]);

  images[i].src = document.images[i].src;
  console.log(images[i].src);
}

var videos = document.querySelectorAll('a[href$=".mp4"]');



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
