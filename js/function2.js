
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