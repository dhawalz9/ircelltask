let loader = document.querySelector('.pre-loader');
window.addEventListener('load', function () {
  loader.style.opacity = '0';
  setTimeout(function() {
    loader.style.display = 'none';
  }, 500); // delay in ms
});

document.querySelectorAll('.flex-item').forEach(item => {
  const textLength = item.textContent.length;

  // Adjust the width based on the length of the text
  item.style.flexBasis = `${textLength * 0.65}%`; // Modify the multiplier as needed
});