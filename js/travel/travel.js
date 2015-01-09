var reader = new FileReader();

var japanText = reader.readAsText("../res/text/japan.txt");
var europeText = reader.readAsText("../res/text/europe.txt");

document.getElementById('section#japanSection').text = japanText;
document.getElementById('section#europeSection').text = europeText;
