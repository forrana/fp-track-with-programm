let song = document.getElementById('song')
let programElements = [...document.querySelectorAll(".program span")]

function markCurrentTime() {
  let currentTime = song.currentTime
  if(!currentTime) return;
  let element = programElements
    .map(
      element => { element.classList.remove("active"); return element; }
    )
    .find(
      (element) =>
        element.getAttribute("data-start") < currentTime &&
        element.getAttribute("data-end") > currentTime
    )

  element
    .classList
    .toggle("active")

  let endTime = element.getAttribute("data-end");
  let totalTime = endTime - element.getAttribute("data-start");
  let percentsPassed = ((endTime - currentTime) / totalTime)*100;
  element
    .style
    .setProperty('--p', 100 - percentsPassed + '%');
}

setInterval(() => markCurrentTime(), 1000);

document.addEventListener( 'visibilitychange' , () => {
    if (!document.hidden) {
        markCurrentTime();
    }
}, false );
