var video = document.getElementById("myvideo");
var btn = document.getElementById("myBtn");
function myFunction() {
  if (video.paused) 
    {
      video.play();
      btn.innerHTML = "Pause";
    } 
    else 
    {
      video.pause();
      btn.innerHTML="Play";
    }
}