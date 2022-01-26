/**
 * Calculation for the min-height style of main.
 */
function calcMainHeight() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`;
}

/**
 * Init function if document loaded.
 */
function init() {
  // Timeout for better example
  setTimeout(() => {
    calcMainHeight();
    document.getElementById("loader").remove();
  }, 2000);
}

// Eventlistner for loaded document.
document.addEventListener("load", init());
