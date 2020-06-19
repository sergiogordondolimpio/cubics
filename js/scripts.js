// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        addTheAnimation(element)
      } else {
        removeTheAnimation(element)
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

//switch to select the animation to show the element
function addTheAnimation(element){
    switch(element.classList[0]) {
        case "nav-bar":
            element.classList.add('is-visible-down');
            break;
        case "photo":
            element.classList.add('is-visible-opacity');
            break;
        case "description-left":
            element.classList.add('is-visible-to-right');
            break;
        case "description-right":
            element.classList.add('is-visible-to-left');
            break;
        case "header-text":
            element.classList.add('is-visible-opacity');
            break;
        case "footer-form":
            element.classList.add('is-visible-opacity');
            break;
        default:
          // code block
      }
}

//switch to select the animation to show the element
function removeTheAnimation(element){
    switch(element.classList[0]) {
        case "nav-bar":
            element.classList.remove('is-visible-down');
            break;
        case "photo":
            element.classList.remove('is-visible-opacity');
          break;
        case "description-left":
            element.classList.remove('is-visible-to-right');
          break;
        case "description-right":
            element.classList.remove('is-visible-to-left');
            break;
        case "header-text":
            element.classList.remove('is-visible-opacity');
            break;
        case "footer-form":
            element.classList.remove('is-visible-opacity');
            break;
        default:
          // code block
      }
}

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }