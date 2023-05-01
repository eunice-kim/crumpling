var index = 0;
var title = document.getElementById("title");
var video = document.getElementById("video");
var still = document.getElementById("still");
var fin = document.getElementById("fin");

function changeDisplay(event) {
  let mouseX = event.clientX;
  if (mouseX < window.innerWidth / 2 && index != 0) {
    prev();
  }
  else if (mouseX >= window.innerWidth / 2 && index <= 31) {
    next();
  }
}

function prev() {
  index--;
  fin.style.display = "none";
  if (index == 0) {
    video.style.display = "none";
    title.style.display = "block";
    return;
  }
  if (index == 3 || index == 17 || index == 31) {
    video.style.display = "none";
    still.style.display = "block";
    let newSrc = "MEDIA/" + index + ".jpg";
    still.src= newSrc;
  }
  else if (index == 4 | index == 12 | index == 25 | index == 27 | index == 29) {
    video.style.display = "block";
    still.style.display = "none";
    let newSrc = "MEDIA/" + index + ".1.mp4";
    video.src= newSrc;
    video.loop = false;
    video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
      let newSrc = "MEDIA/" + index + ".2.mp4";
      video.src= newSrc;
      video.loop = true;
    }
  }
  else {
    video.style.display = "block";
    still.style.display = "none";
    let newSrc = "MEDIA/" + index + ".mp4";
    video.src= newSrc;
    video.loop = true;
  }
}

function next() {
  index++;
  if (index == 32) {
    still.style.display = "none";
    fin.style.display = "block";
    return;
  }
  if (index == 1) {
    title.style.display = "none";
    video.style.display = "block";
    return;
  }
  if (index == 3 || index == 17 || index == 31) {
    video.style.display = "none";
    still.style.display = "block";
    let newSrc = "MEDIA/" + index + ".jpg";
    still.src= newSrc;
  }
  else if (index == 4 | index == 12 | index == 25 | index == 27 | index == 29) {
    video.style.display = "block";
    still.style.display = "none";
    let newSrc = "MEDIA/" + index + ".1.mp4";
    video.src= newSrc;
    video.loop = false;
    video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
      let newSrc = "MEDIA/" + index + ".2.mp4";
      video.src= newSrc;
      video.loop = true;
    }
  }
  else {
    video.style.display = "block";
    still.style.display = "none";
    let newSrc = "MEDIA/" + index + ".mp4";
    video.src= newSrc;
  }
}
