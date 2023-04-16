
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme('light');

function showContent() {
    element = document.getElementById("avatar");
    elementB = document.getElementById("avatarb");
    imgA = document.getElementById("imgW_A");
    imgB = document.getElementById("imgW_B");
    imgAA = document.getElementById("imgL_A");
    imgBB = document.getElementById("imgL_B");
    imgAAA = document.getElementById("imgE_A");
    imgBBB = document.getElementById("imgE_B");

    check = document.getElementById("slider");
    
    if (check.checked) {
        element.style.display='block';
        elementB.style.display= 'none';
        imgA.style.display='block';
        imgB.style.display= 'none';
        imgAA.style.display='block';
        imgBB.style.display= 'none';
        imgAAA.style.display='block';
        imgBBB.style.display= 'none';
    }
    else {
        element.style.display='none';
        elementB.style.display='block';
        imgA.style.display='none';
        imgB.style.display='block';
        imgAA.style.display='none';
        imgBB.style.display='block';
        imgAAA.style.display='none';
        imgBBB.style.display='block';

    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    var fadeIns = document.querySelectorAll(".fade-in");
    
    function fadeInHandler() {
      for (var i = 0; i < fadeIns.length; i++) {
        var element = fadeIns[i];
        if (isElementInViewport(element)) {
          element.classList.add("active");
        }
      }
    }
    
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    window.addEventListener("scroll", fadeInHandler);
    window.addEventListener("load", fadeInHandler);
  });

  const slideIn = document.querySelector('.slide-in');

  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  function checkSlide() {
    const slideInAt = (window.scrollY + window.innerHeight) - slideIn.offsetHeight / 2;
    const isHalfShown = slideInAt > slideIn.offsetTop;
    if (isHalfShown) {
      slideIn.classList.add('active');
    } else {
      slideIn.classList.remove('active');
    }
  }
  
  window.addEventListener('load', debounce(checkSlide));
  
  