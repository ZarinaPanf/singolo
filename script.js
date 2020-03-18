let slider = document.getElementsByClassName("slider");
const button = document.getElementById('submit');
const close_button = document.getElementById('close-btn');
const arrow_left = document.querySelector(".arrow-left");
const arrow_right = document.querySelector(".arrow-right");
const iphone1 = document.querySelector(".iphone-vertical");
const iphone2 = document.querySelector(".iphone-horizontal");
const iphone3 = document.querySelector(".iphone-main");
const screen1 = document.querySelector(".vertical-screen");
const screen2 = document.querySelector(".horizontal-screen");
const screen3 = document.querySelector(".main-screen");
const onsubmit = document.getElementById("form");
const filter = document.querySelector(".filter");
const section_item = document.querySelectorAll(".portfolio__container");
const navs = document.querySelectorAll('.navigation__item');
const portfolio = document.querySelector('#portfolio');

let screenoff1 = false;
let screenoff2 = false;
let screenoff3 = false;
var slideIndex = 1;
showSlides(slideIndex);


window.onload = function() {
    addNavsClickHandler();
}; 

const addNavsClickHandler = () => {
    document.querySelector('#navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation__item')) {
            let clickedNav = e.target;
            removeSelectedNavs();
            selectClickedNav(clickedNav);
        }
    })
    window.addEventListener('wheel', (e) => {
        if (e.target.classList.contains('navigation__item')) {
            let clickedNav = e.target;
            removeSelectedNavs();
            selectClickedNav(clickedNav);
        }
    })
};

const removeSelectedNavs = () => {
    navs.forEach(nav => {
    nav.classList.remove('active');
    nav.classList.add('nonactive');
    })
};

const selectClickedNav = (clickedNav) => {
    clickedNav.classList.remove('nonactive');
    clickedNav.classList.add('active');
};

arrow_left.addEventListener('click', () => {
    plusSlides(-1);
    if (slider[0].classList[1] == "slide-2") {
        slider[0].classList.remove('slide-2');
    }
    else { slider[0].classList.add('slide-2'); }
}); 

arrow_right.addEventListener('click', () => {
    plusSlides(1);
    if (slider[0].classList[1] == "slide-2") {
        slider[0].classList.remove('slide-2');
    }
    else { slider[0].classList.add('slide-2'); }
});

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

iphone1.addEventListener('click', () => {
    screenoff1 = !screenoff1;
    screenoff1 ? screen1.style.display = "block" : screen1.style.display = "none";
});

iphone2.addEventListener('click', () => {
    screenoff2 = !screenoff2;
    screenoff2 ? screen2.style.display = "block" : screen2.style.display = "none";
});

iphone3.addEventListener('click', () => {
    screenoff3 = !screenoff3;
    screenoff3 ? screen3.style.display = "block" : screen3.style.display = "none";
});

onsubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    return false;
});

filter.addEventListener('click', (event) => {
    filter.querySelectorAll('li').forEach(el => el.classList.remove('active-filter'));
    event.target.classList.add('active-filter');
    if (event.target.classList[1] == 'button1') {
        section_item[0].classList.remove('last-item');
        section_item[1].classList.remove('last-item');
        section_item[2].classList.remove('last-item');
    };
    if (event.target.classList[1] == 'button2') {
        section_item[0].classList.remove('last-item');
        section_item[1].classList.remove('last-item');
        section_item[2].classList.remove('last-item');
        section_item[1].classList.add('last-item');
    };
    if (event.target.classList[1] == 'button3') {
        section_item[0].classList.remove('last-item');
        section_item[1].classList.remove('last-item');
        section_item[2].classList.remove('last-item');
        section_item[1].classList.add('last-item');
        section_item[2].classList.add('last-item');
    };
    if (event.target.classList[1] == 'button4') {
        section_item[0].classList.add('last-item');
        section_item[1].classList.add('last-item');
        section_item[2].classList.remove('last-item');
    };
});

portfolio.addEventListener('click', (event) => {
    portfolio.querySelectorAll('img').forEach(el => el.classList.remove('active-img'));
    event.target.classList.add('active-img');
});

button.addEventListener('click', (e) => {
    if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
        e.preventDefault();
        const subject = document.getElementById('subject').value.toString();
        const description = document.getElementById('description').value.toString();
        document.getElementById('result1').innerText = 'Письмо отправлено';

        if (subject !== '') {
            document.getElementById('result2').innerText = 'Тема: ' + subject;
        }
        else { document.getElementById('result2').innerText = 'Без темы'; }

        if (description !== '') {
            document.getElementById('result3').innerText = 'Описание: ' + description;
        }
        else { document.getElementById('result3').innerText = 'Без описания'; }

        document.getElementsByTagName('body')[0].classList.add('hide');
        document.getElementById('message-block').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    }
});

if ('close_button') {
close_button.addEventListener('click', () => {
    document.getElementById('result1').innerText = '';
    document.getElementById('result2').innerText = '';
    document.getElementById('result3').innerText = '';
    document.getElementsByTagName('body')[0].classList.remove('hide');
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
    setTimeout(function(){
        document.getElementById('form').reset();
    }, 0.001);
})
}

