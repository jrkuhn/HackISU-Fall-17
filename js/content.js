//alert("Hello, This is FlashOff");
alert(document.title);

var images = [];
var gifs = document.querySelectorAll('img[src$=".gif"]');
var SuperGifs = [];

for(var i = 0; i < gifs.length; i++){
  //create new image in array index
  images[i] = new Image();

  //add image to array index
  images.push(gifs[i]);

  //title to image and print its title in the console
  images[i].src = gifs[i].src;
  console.log(images[i].src);

//doesn't work now
  var SuperGifs[i] = new SuperGif({gifs[i]});
  SuperGifs[i].load();
  if(SuperGifs[i].get_length() == 1){
    console.log(i+' static: ' SuperGifs[i].get_length() ' frames');
  }
  else {
    console.log(i+' moving: ' SuperGifs[i].get_length() ' frames');
  }
//
}



//finds all videos
var videos = document.querySelectorAll('a[href$=".mp4"]');

if(videos.length > 0) {
  console.log(videos[i].src);
}

//commented code

  // var video = [];
  //
  // for(var i = 0; i < document.videos.length; i++){
  //   //creates new video in array index
  //   videos[i] = new videos();
  //
  //   //add video to array index
  //   videos.push(document.videos[i]);
  //
  //   //title to video and print its title in the console
  //   videos[i].src = document.images[i].src;
  //   alert(videos[i].src);
  // }

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
