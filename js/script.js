var image = ["images/kid-1.png", "images/kid-2.png", "images/kid-3.png"];

var imageNumber = 0;
var imageLength = image.length - 1; 
//lenth of the array, -1 cuz the length will say 2, but array starts at 0. Tech it is 3.length, but it is three concering this array

function change_image(number) {

	imageNumber = imageNumber + number;

	if (imageNumber > imageLength ) {
		imageNumber = 0;
	}
	//what if we are at the first pic and click back?
	if (imageNumber < 0 ) {
		imageNumber = imageLength;
	}
	//need to set the index of the images array
	document.kids.src = image[imageNumber];
	 return false;
     
    //stays in the scope, so the number comes from the end of if statements 
}