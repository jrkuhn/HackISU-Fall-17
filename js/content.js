//alert("Hello, This is FlashOff");
alert(document.title);

var images = [];
var gifs = document.querySelectorAll('img[src$=".gif"]');
var gifArray = [];
var gifArrayScreenshots = [];

var superGifs = [];

for(var i = 0; i < gifs.length; i++){
  //create new image in array index
  images[i] = new Image();

  //add image to array index
  images.push(gifs[i]);

  //title to image and print its title in the console
  images[i].src = gifs[i].src;
  console.log(images[i].src);
  //document.body.appendChild(gifs[i]);

//gifFrames
  gifFrames({ url: gifs[i].src, frames: 'all', outputType: 'canvas' }).then(function (frameData) {
    gifArrayScreenshots[i] = new Array();
    //prints/saves all frames in the gif as DOM images.
    for(j=0; j < frameData.length; j++){
      gifArrayScreenshots[i][j] = frameData[j].getImage();
      document.body.appendChild(frameData[j].getImage());
    }
    document.body.appendChild(gifArrayScreenshots[i][0]);
    console.log(frameData.length);
  }).catch(console.error.bind(console));
}





//doesn't work now
  //var ex = document.getElementById("example");
  //  superGifs[i] = new SuperGif({gif: gifs[i]});
  //
  //  superGifs[i].load(function (err) {
  //       if (err) {
  //           console.error(err);
  //       } else {
  //           console.log('loaded '+i);
  //       }
  //   });
  //  console.log(superGifs[i].get_auto_play());
  //  console.log(superGifs[i].get_current_frame());
  //  superGifs[i].pause(function(){console.log('paused ' + i)});
  //
  // if(superGifs[i].get_length() <= 1){
  //   console.log(i + gifs[i].src  + ' static: ' + superGifs[i].get_length() + ' frames');
  // }
  // else {
  //   console.log("image" + i + "moving");
  // }
  // console.log(superGifs[i].get_current_frame());
//


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
