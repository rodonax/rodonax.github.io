var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/big1.jpg') {
		myImage.setAttribute ('src', 'images/big2.jpg');
	} else {
		myImage.setAttribute ('src', 'images/big1.jpg');
	}
}