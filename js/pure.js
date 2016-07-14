function changeCover (par1, par2) {
	if (!mytrack.paused && !mytrack.ended) {
		playOrPause ();
	};
	$("#slide").css("animation-play-state", "running");
	
	if ($("#gramophone").css('visibility')=='visible') {
		$("#gramophone").css({'visibility':'hidden','opacity':'0'});
		$("#slide").removeClass().addClass("slide-covered").delay(100).queue(function(next){
			$("#slide").css("animation-play-state", "running").removeClass().addClass("slide");
			next();
		});
		$("#toner").css({"display":"none"});
	};

	$(".playable").removeClass("playAnimation").attr("src", "img/Play-small.png");
	$("#coverpic").attr('src', par1).css({'visibility':'visible'});
	$("#slide").attr('src', par2);
	$("#progressBar").css({"width":"0px"});
}

function ShowContent(a,b,c,d) {
document.getElementById(a).style.display = "block";
document.getElementById(b).style.display = "none";
document.getElementById(c).style.display = "none";
document.getElementById(d).style.display = "none";
}

var functionIsRunning = false;

function gramophoneActivation() {
				functionIsRunning = true;
				if ($("#toner").hasClass("tonerSpin")) {
					$("#toner").css({"display":"none", "z-index":"2"}).removeClass("tonerSpin");
				}
				$("#slide").css("animation-play-state", "running");
				$("#slide").addClass("player");
				$("#coverpic").delay(300).fadeOut(1500).delay(100).queue(function(next) {
				$("#coverpic").css({"visibility":"hidden"});
				$("#gramophone").css({"visibility":"visible"}).animate({opacity: 1}, 900);
				$("#coverpic").fadeIn(1900);
				$("#toner").fadeIn(1800).css({"display":"block", "z-index":"1"});
				next();
				$("#slide").addClass("loadVinyl").delay(2750).queue(function(next){
				$("#toner").css("z-index","2").addClass("tonerSpin");
				$("#slide").removeClass("loadVinyl").addClass("play").delay(1100).queue(function(next){
					playOrPause();
					functionIsRunning = false;
					next();
				});
				
				next();
			});
			
			next();
		});
	};

$("img.playable").click(function( event ) {
	$(".tracks img.playable").attr("src", "img/Play-small.png");
		$(".playable").removeClass("playAnimation");
		$(event.target).addClass("playAnimation");
		$(event.target).attr("src", "img/Play-small-red.png");

	if($("#gramophone").css('visibility')=='hidden') {
		gramophoneActivation();
	}
	else {
		playOrPause();
	}
	
	$(event.target).siblings( ".playable" ).addClass("playAnimation");
});

$("img#album-KTS").click(function( event ) {
	if (functionIsRunning == false) {
		changeCover('img/covers/Cover-KissTheSky-art2.png', 'img/covers/Vinyl-KissTheSky-art.png');
		ShowContent('tracklist2', 'tracklist1', 'tracklist3', 'tracklist4');
		trackSrc('music/CanYouSeeMe.mp3', 'Kiss The Sky', '07. Can You See Me');
	}
});
$("img#album-EL").click(function( event ) {
	if (functionIsRunning == false) {
		changeCover('img/covers/Cover-ElectricLadyland2.png', 'img/covers/Vinyl-ElectricLadyland.png'); 
		ShowContent('tracklist3', 'tracklist1', 'tracklist2', 'tracklist4');
		trackSrc('music/AllAlongTheWatchtower.mp3', 'Electric Ladyland', '05. All Along The Watchtower');
	}
});
$("img#album-BAL").click(function( event ) {
	if (functionIsRunning == false) {
		changeCover('img/covers/Cover-BoldAsLove2.png', 'img/covers/Vinyl-BoldAsLoveS2.png');
		ShowContent('tracklist1', 'tracklist2', 'tracklist3', 'tracklist4');
		trackSrc('music/LittleWing.mp3', 'Axis: Bold As Love', '06. Little Wing');
	}
});
$("img#album-AYE").click(function( event ) {
	if (functionIsRunning == false) {
		changeCover('img/covers/Cover-AreYouExperienced2.png', 'img/covers/Vinyl-AreYouExperienced.png');
		ShowContent('tracklist4', 'tracklist1', 'tracklist2', 'tracklist3');
		trackSrc('music/AllAlongTheWatchtower.mp3', 'Electric Ladyland', '09. All Along The Watchtower')
	}
});

/*album-cover hover effect: rolls out vinyl*/
if($("#coverpic").css('height')!='200px' && $("#gramophone").css('height')!='200px') {
$("#cover").hover(function() {
		$("#slide").removeClass("slide").addClass("vinylWink");
		}, function(){
		$("#slide").removeClass("vinylWink").addClass("slide");	
});
};
/*stop vinyl's spining when track is ended*/
mytrack.onended = function () {
	$("#slide").css("animation-play-state", "paused");
}

/*launch gramophone activation when cover is clicked*/
$("#coverpic").click(function(event) {
	gramophoneActivation();
});




				







