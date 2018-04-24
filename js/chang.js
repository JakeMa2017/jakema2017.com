function upDate(previewPic){
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo(){
  document.getElementById("image").style.backgroundImage = "url('../css/imgs/IMG_0060.JPG')";	
}

function test(){
	alert("Small screen size.");
}
function test2(){
	alert("Second test.");
}

function displayFitIphone(){
	screenSize = screen.height;


	//For mac, maybe 15' laptop
	if (screenSize <= 900){
		var allThum = document.getElementsByClassName('thumbnail');
		allThum[0].style.width = "300px";

		var goforit = document.getElementById("image");

		goforit.style.width = '475px';
        goforit.style.height = '550px';
		
   		

		var thum;
		for (var i = 0; i < 7; i++){
			thum = document.getElementsByTagName("img")[i];
			thum.style.width = "75px";
			thum.style.height = "75px";
		}
		

		

	}

	if (screenSize < 800){
		var div = document.getElementById('image');
		div.style.top = "450px";
		document.getElementById('body').style.backgroundPosition = "100% 30%";

		var jiaoZhu = document.getElementById('jiaoZhu');
		jiaoZhu.style.top = "450px";
	}



}
