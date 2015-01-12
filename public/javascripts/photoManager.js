function loadImage(index,leftArray,rightArray){
  // console.log("leftImage: " + $('#leftImage').attr("src"));
  // console.log("rightImage: " + $('#leftImage').attr("src"));

  $('#leftImage').attr("src",leftArray[index%leftArray.length]);
  $('#rightImage').attr("src",rightArray[index%rightArray.length]);
}

var leftSources = ["/images/home/dormGradPhoto.jpg",
"/images/home/nolaPhoto.jpg",
"/images/home/seniorBall.jpg"];

var rightSources = ["/images/home/hibiyaPark.jpg",
"/images/home/acfGradPhoto.jpg",
"/images/home/tokyoSkytree.jpg"];

var counter = 0;
// console.log("Setting Interval.....");
setInterval(function(){loadImage(counter++,leftSources,rightSources)},5000);
