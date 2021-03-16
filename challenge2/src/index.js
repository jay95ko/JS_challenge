// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
function windowColorHandler() {
  if (window.innerWidth <= 500) {
    document.querySelector("body").className = "small";
  } else if (window.innerWidth <= 1000) {
    document.querySelector("body").className = "mid";
  } else {
    document.querySelector("body").className = "big";
  }
}

document.querySelector("body").className = "mid";
window.addEventListener("resize", windowColorHandler);
