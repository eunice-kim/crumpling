var index = 0;

var srcs2 = [];
var srcs = [];
var srcNos = [4,12,25,27,29];

for (let i = 0; i <= 32; i++) {
    if (i == 3 || i == 17 || i == 31) {
      srcs.push("MEDIA/" + i + ".jpg");
    }
    else if (i == 4 || i == 12 || i == 25 || i == 27 || i == 29) {
      srcs.push("MEDIA/" + i + ".1.mp4");
      srcs2.push("MEDIA/" + i + ".2.mp4");
    }
    else {
      srcs.push("MEDIA/" + i + ".mp4");
    }
}

preload.apply(null, srcs);
preload2.apply(null, srcs2);

function preload() {
    for (let i = 0; i < arguments.length; i++) {
      let newMedia;
      if (i == 3 || i == 17 || i == 31) {
        newMedia = new Image();
        newMedia.src = preload.arguments[i];
      }
      else {
        newMedia = document.createElement("video");
        newMedia.setAttribute("src", preload.arguments[i]);
        newMedia.setAttribute("type", "video/mp4");
        newMedia.autoplay = true;
        newMedia.muted = true;
        newMedia.loop = true;
      }
      document.body.appendChild(newMedia);
      newMedia.id = 'media' + i;
      if (i > 0) {
        newMedia.style.display = "none";
      }
      else {
        newMedia.style.display = "block";
      }
      if (i == 0 || i == 32) {
        newMedia.style.width = '50vmin';
      }
    }
}

function preload2() {
  for (let i = 0; i < arguments.length; i++) {
    let newMedia;
    newMedia = document.createElement("video");
    newMedia.setAttribute("src", preload2.arguments[i]);
    newMedia.autoplay = true;
    newMedia.muted = true;
    newMedia.loop = true;
    document.body.appendChild(newMedia);
    newMedia.id = 'media' + srcNos[i] + ".2";
    newMedia.style.display = "none";
  }
}

function changeDisplay(event) {
  let allVids = document.getElementsByTagName("video");
  let allImgs = document.getElementsByTagName("img");
  for (let i = 0; i < allVids.length; i++) {
    allVids[i].style.display = "none";
  }
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].style.display = "none";
  }
  let mouseX = event.clientX;
  if (mouseX < window.innerWidth / 2 && index != 0) {
    prev();
  }
  else if (mouseX >= window.innerWidth / 2 && index <= 31) {
    next();
  }
}

function prev() {
  if (index == 0) {
    let vid = document.getElementById('media0');
    vid.style.display = "block";
    return;
  }
  index--;
  let vid = document.getElementById('media' + index);
  vid.style.display = "block";
  if (index == 4 || index == 12 || index == 25 || index == 27 || index == 29) {
    vid.loop = false;
    vid.currentTime = 0;
    vid.addEventListener('ended',myHandler,false);
    function myHandler(e) {
      vid.style.display = "none";
      let newVid = document.getElementById('media' + index + ".2");
      newVid.style.display = "block";
      newVid.loop = true;
    }
  }
}

function next() {
  if (index == 32) {
    let vid = document.getElementById('media32');
    vid.style.display = "block";
    return;
  }
  index++;
  let vid = document.getElementById('media' + index);
  vid.style.display = "block";
  if (index == 4 || index == 12 || index == 25 || index == 27 || index == 29) {
    vid.loop = false;
    vid.currentTime = 0;
    vid.addEventListener('ended',myHandler,false);
    function myHandler(e) {
      vid.style.display = "none";
      let newVid = document.getElementById('media' + index + ".2");
      newVid.style.display = "block";
      newVid.loop = true;
      vid.loop = true;
    }
  }
}
