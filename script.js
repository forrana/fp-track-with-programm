let song = document.getElementById('song')
let programElements = [...document.querySelectorAll(".program span")]

function markCurrentTime() {
  let currentTime = song.currentTime
  if(!currentTime) return;
  programElements
    .map(
      element => { element.classList.remove("active"); return element; }
    )
    .find(
      (element) =>
        element.getAttribute("data-start") < currentTime &&
        element.getAttribute("data-end") > currentTime
    )
    .classList
    .toggle("active")
}

setInterval(() => markCurrentTime(), 1000);

document.addEventListener( 'visibilitychange' , () => {
    if (!document.hidden) {
        markCurrentTime();
    }
}, false );
