const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('nav ul');
const backgroundMenu = document.querySelector('nav');
const disabled = document.querySelector('.disabled');
const close = document.querySelectorAll('.close');
const body = document.querySelector('body')
const up = document.querySelector('.up')
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightboxContainer');
const lightboxImage = document.getElementById('lightboxImage');
const closeButton = document.getElementById('closeLightbox');
const svk = document.querySelector('.svk')
const en = document.querySelector('.en')
const chevronRight = document.querySelector('.bx-chevron-right')
const chevronLeft = document.querySelector('.bx-chevron-left')

window.onscroll = function() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.querySelector('nav').style.background = "#012340";
        document.querySelector('.bx-x').style.background = '#012340';
        document.querySelector('.bx-x').style.border = '1px solid #012340';
        disabled.style.pointerEvents = 'auto'
        up.style.display = 'block'


    }else {
        document.querySelector('nav').style.background = "";
        document.querySelector('.bx-menu').style.background = "";
        document.querySelector('.bx-menu').style.border = '';
        document.querySelector('.bx-x').style.background = '';
        document.querySelector('.bx-x').style.border = '';
        openMenu.style.display = 'none'
        menu.style.display = 'flex'
        closeMenu.style.display = 'none'
        disabled.style.pointerEvents = 'none'
        up.style.display = 'none'
        
    }
};

let texts = ["Desinger","Developer"];
let count = 0;
function changeText() {
    let el = document.querySelector('.opening-text p');
    el.innerHTML = texts[count];
    el.classList.add("fade");
    setTimeout(() => el.classList.remove("fade"), 1000);
    count++;
    if (count >= texts.length) count = 0;
}
setInterval(changeText, 4000);

menu.addEventListener('click', () => {
    menu.style.display = 'none'
    closeMenu.style.display = 'flex'
    openMenu.style.display = 'flex'
    backgroundMenu.style.display = 'flex'
    backgroundMenu.style.background = "#012340";
    backgroundMenu.style.transtion = 'all 0.3s linear'
    document.querySelector('.bx-x').style.background = '#012340';
    document.querySelector('.bx-x').style.border = '1px solid #012340';
})

up.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

closeMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    closeMenu.style.display = 'none'
    openMenu.style.display = 'none'
    backgroundMenu.style.background = '#012340'
    document.querySelector('.bx-menu').style.background = "#012340";
    document.querySelector('.bx-menu').style.border = '1px solid #012340';
})




close.forEach(function(e) {
    e.addEventListener('click', function() {
        openMenu.style.display = 'none'
        menu.style.display = 'flex'
        closeMenu.style.display = 'none'
    });
});



chevronRight.addEventListener('click', () => {
    en.style.display = 'block';
    svk.style.display = 'block';
    chevronRight.style.display = 'none'
    chevronLeft.style.display = 'block'
})

chevronLeft.addEventListener('click', () => {
    chevronRight.style.display = 'block'
    chevronLeft.style.display = 'none'
})
function toggleSk() {
        en.style.display = 'none';
        svk.style.display = 'block';
}
function toggleEn() {
        en.style.display = 'block';
        svk.style.display = 'none';
}

////////////  LIGHT--BOX  //////////////
galleryImages.forEach((image) => {
  image.addEventListener('click', function() {
    const imageUrl = this.getAttribute('src');
    const imageAlt = this.getAttribute('alt');

    lightboxImage.setAttribute('src', imageUrl);
    lightboxImage.setAttribute('alt', imageAlt);
    lightbox.style.display = 'flex';
    body.style.overflowY = 'hidden'
  });
});

document.addEventListener('keyup', function(event) {
    if (event.key === "Escape") {
        lightbox.style.display = 'none';
        body.style.overflowY = 'auto'
    }
  });

closeButton.addEventListener('click', function() {
  lightbox.style.display = 'none';
  body.style.overflowY = 'auto'
});


