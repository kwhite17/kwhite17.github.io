function loadImage(index,leftArray,rightArray){
  console.log("leftImage: " + $('#leftImage').attr("src"));
  console.log("rightImage: " + $('#leftImage').attr("src"));

  $('#leftImage').attr("src",leftArray[index%leftArray.length].src);
  $('#rightImage').attr("src",rightArray[index%rightArray.length].src);
}

var leftSources = ["/images/home/dormGradPhoto.jpg",
"/images/home/nolaPhoto.jpg",
"/images/home/seniorBall.jpg"];

var rightSources = ["/images/home/hibiyaPark.jpg",
"/images/home/acfGradPhoto.jpg",
"/images/home/tokyoSkytree.jpg"];

var leftImages = [];

var rightImages = [];

for (i=0; i<leftSources.length; i++) {
  console.log("leftSource: " + leftSources[i])
  leftImages[i] = new Image();
  leftImages[i].src = leftSources[i];
}

for (i=0; i<rightSources.length;i++) {
  console.log("rightSource: " + rightSources[i]);
  rightImages[i] = new Image();
  rightImages[i].src = rightSources[i];
}

var counter = 0;
console.log("Setting Interval.....");
setInterval(function(){loadImage(counter++,leftImages,rightImages)},5000);
