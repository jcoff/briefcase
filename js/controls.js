
var mytrack = document.getElementById('mytrack');
function trackSrc(trackSource, albumName, songName) {
	mytrack.src = trackSource;
	 x = document.getElementById('nowPlaying');
	 x.querySelector("h3").innerHTML = albumName;
	 x.querySelector("p").innerHTML = songName;
}


var playButton = document.getElementById('playButton');
var muteButton = document.getElementById('muteButton');

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');

var minutes = parseInt (mytrack.duration/60);
var seconds = parseInt (mytrack.duration%60);


var bar = document.getElementById('defaultBar');
var barSize = parseInt(window.getComputedStyle(bar).width, 10);
console.log(barSize);
var progressBar = document.getElementById('progressBar');


duration.innerHTML = minutes + ':' + seconds;

muteButton.addEventListener('click', muteOrUnmute, false);
bar.addEventListener('click', clickedBar, false);


function playOrPause () {
	if(!mytrack.paused && !mytrack.ended) {
		mytrack.pause() ;
		playButton.style.backgroundImage = 'url(img/play.png)' ;
		window.clearInterval (updateTime);
		/*pause vinyl spining*/
		$("#slide").css("animation-play-state", "paused");
	}
	else {
		mytrack.play(); 
		playButton.style.backgroundImage = 'url(img/pause.png)' ;
		updateTime = setInterval(update,500) ;
		$("#slide").css("animation-play-state", "running");
	}
}

function muteOrUnmute () {
	if (mytrack.muted == true) {
		mytrack.muted = false;
		muteButton.style.backgroundImage = 'url(img/speaker.png)' ;
	}
	else {
		mytrack.muted = true;
		muteButton.style.backgroundImage = 'url(img/mute.png)' ;
	}

}

function update () {
	if(!mytrack.ended) {
		var playedMinutes = parseInt (mytrack.currentTime/60) ;
		var playedSeconds = parseInt (mytrack.currentTime%60);
		currentTime.innerHTML = playedMinutes + ' : ' + playedSeconds;
		var size = parseInt (mytrack.currentTime*barSize/mytrack.duration) ;
		progressBar.style.width = size + "px" ;
	}
	else {
		currentTime.innerHTML = "0.00";
		playButton.style.backgroundImage = 'url(img/play.png)' ;
		progressBar.style.width = "0px";
		window.clearInterval (updateTime);
	}
}

function clickedBar (e) {
	if (!mytrack.ended) {
		var mouseX = e.pageX - bar.offsetLeft;
		var newtime = mouseX*mytrack.duration/barSize;
		mytrack.currentTime = newtime;
		progressBar.style.width = mouseX + 'px';
	}
}

$("#playButton").click(function() {
	if ($("#gramophone").css("visibility")=="hidden" && mytrack.paused ) {
		$("#slide").filter(':animated').promise().done(function() {
		gramophoneActivation();
		});
	}
	else {
		playOrPause();
	}
});
