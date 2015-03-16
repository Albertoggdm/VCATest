// Remove the loaded when the polymer elements are loaded
document.addEventListener('polymer-ready', function() {
  document.body.classList.add('loaded');
});
