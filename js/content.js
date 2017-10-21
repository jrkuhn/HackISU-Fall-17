//alert("Hello, This is FlashOff");
alert(document.title);

var images = [];

//documents.images is all images in the page
for(var i = 0; i < document.images.length; i++){
  //create new image in array index
  images[i] = new Image();

  //add image to array index
  images.push(document.images[i]);

  //title to image and print its title in the console
  images[i].src = document.images[i].src;
  console.log(images[i].src);
}

//finds all videos
var videos = document.querySelectorAll('a[href$=".mp4"]');

if(videos.length > 0) {
  console.log(videos[i].src);
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
