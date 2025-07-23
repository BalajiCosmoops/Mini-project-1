//Navigation section

const candleDropDown = document.getElementById('candle');
const CandleMenu = document.getElementById('candleDD')
const icon = candleDropDown.querySelector('i')
candleDropDown.addEventListener('click', function () {
    if (CandleMenu.style.display === "none") {
        CandleMenu.style.display = "block";
        icon.classList.replace('fa-angle-down', 'fa-angle-up');
        homewareMenu.style.display = "none";
        icon1.classList.replace('fa-angle-up', 'fa-angle-down');
        bespokeMenu.style.display = "none";
        icon2.classList.replace('fa-angle-up', 'fa-angle-down');
    } else {
        CandleMenu.style.display = "none";
        icon.classList.replace('fa-angle-up', 'fa-angle-down');
    }
})

const homewareDropDown = document.getElementById('homeware');
const homewareMenu = document.getElementById('homewareDD')
const icon1 = homewareDropDown.querySelector('i');

homewareDropDown.addEventListener('click', function () {
    if (homewareMenu.style.display === "none") {
        homewareMenu.style.display = "block";
        icon1.classList.replace('fa-angle-down', 'fa-angle-up');
        CandleMenu.style.display = "none";
        icon.classList.replace('fa-angle-up', 'fa-angle-down');
        bespokeMenu.style.display = "none";
        icon2.classList.replace('fa-angle-up', 'fa-angle-down');
    } else {
        homewareMenu.style.display = "none";
        icon1.classList.replace('fa-angle-up', 'fa-angle-down');
    }
})

const bespokeDropDown = document.getElementById('bespoke');
const bespokeMenu = document.getElementById('bespokeDD');
const icon2 = bespokeDropDown.querySelector('i');

bespokeDropDown.addEventListener('click', function () {
    if (bespokeMenu.style.display === "none") {
        bespokeMenu.style.display = "block";
        icon2.classList.replace('fa-angle-down', 'fa-angle-up');
        CandleMenu.style.display = "none";
        icon.classList.replace('fa-angle-up', 'fa-angle-down');
        homewareMenu.style.display = "none";
        icon1.classList.replace('fa-angle-up', 'fa-angle-down');
    } else {
        bespokeMenu.style.display = "none";
        icon2.classList.replace('fa-angle-up', 'fa-angle-down');
    }
})


// navigation button
const navDropDown = document.getElementById('nav-button-DD');
const navMenu = document.getElementById('nav-button-menu');
const navIcon = navDropDown.querySelector('i');

navDropDown.addEventListener('click', function () {
    if (navMenu.style.display === "none") {
        navMenu.style.display = "block";
        navIcon.classList.replace('fa-angle-down', 'fa-angle-up')
    }
    else {
        navMenu.style.display = "none";
        navIcon.classList.replace('fa-angle-up', 'fa-angle-down')
    }
})

//sidebar

const sidebarDropDown = document.getElementById('menu-icon-DD');
const sidebarMenu = document.getElementById('sidebarDD');
const sideIcon = sidebarDropDown.querySelector('i');

sidebarDropDown.addEventListener('click', function () {
    if (sidebarMenu.style.display === "none") {
        sidebarMenu.style.display = "block";
    }
    else {
        sidebarMenu.style.display = "none";
        
    }
})
//candle
const candleDropDownSide = document.getElementById('candle-dd');
const CandleMenuSide = document.getElementById('candle-menu');
const candleButton = document.getElementById('candel-btn');
candleDropDownSide.addEventListener('click', function () {
    if (CandleMenuSide.style.display === "none") {
        CandleMenuSide.style.display = "block";
        sidebarMenu.style.display = "none";
    }
    else {
        CandleMenuSide.style.display = "none";
        sidebarMenu.style.display = "block";
    }
})
candleButton.addEventListener('click', function () {
    if (CandleMenuSide.style.display === "block") {
        CandleMenuSide.style.display = "none";
        sidebarMenu.style.display = "block";
    }
    else {
        CandleMenuSide.style.display = "block";
        sidebarMenu.style.display = "none";
    }
})

//homeware

const homewareDropDownSide = document.getElementById('homeware-dd');
const homewareMenuSide = document.getElementById('homeware-menu');
const homewareButton = document.getElementById('homeware-btn');
homewareDropDownSide.addEventListener('click', function () {
    if (homewareMenuSide.style.display === "none") {
        homewareMenuSide.style.display = "block";
        sidebarMenu.style.display = "none";
    }
    else {
        homewareMenuSide.style.display = "none";
        sidebarMenu.style.display = "block";
    }
})
homewareButton.addEventListener('click', function () {
    if (homewareMenuSide.style.display === "block") {
        homewareMenuSide.style.display = "none";
        sidebarMenu.style.display = "block";
    }
    else {
        homewareMenuSide.style.display = "block";
        sidebarMenu.style.display = "none";
    }
})

// bespoke

const bespokeDropDownSide = document.getElementById('bespoke-dd');
const bespokeMenuSide = document.getElementById('bespoke-menu');
const bespokeButton = document.getElementById('bespoke-btn');
bespokeDropDownSide.addEventListener('click', function () {
    if (bespokeMenuSide.style.display === "none") {
        bespokeMenuSide.style.display = "block";
        sidebarMenu.style.display = "none";
    }
    else {
        bespokeMenuSide.style.display = "none";
        sidebarMenu.style.display = "block";
    }
})
bespokeButton.addEventListener('click', function () {
    if (bespokeMenuSide.style.display === "block") {
        bespokeMenuSide.style.display = "none";
        sidebarMenu.style.display = "block";
    }
    else {
        bespokeMenuSide.style.display = "block";
        sidebarMenu.style.display = "none";
    }
})

//signature

const signatureDropDownSide = document.getElementById('signature-DD');
const signatureMenuSide = document.getElementById('signature-menu');
const signatureButton = document.getElementById('signature-btn');
signatureDropDownSide.addEventListener('click', function (e) {
    e.preventDefault();
    if (signatureMenuSide.style.display === "none") {
        signatureMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
    else {
        signatureMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
})
signatureButton.addEventListener('click', function () {
    if (signatureMenuSide.style.display === "block") {
        signatureMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
    else {
        signatureMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
})

//Find your accents
const findDropDownSide = document.getElementById('Find-DD');
const findMenuSide = document.getElementById('find-menu');
const findButton = document.getElementById('find-btn');
findDropDownSide.addEventListener('click', function (e) {
    e.preventDefault();
    if (findMenuSide.style.display === "none") {
        findMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
    else {
        findMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
})
findButton.addEventListener('click', function () {
    if (findMenuSide.style.display === "block") {
        findMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
    else {
        findMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
})
//refill your accents
const refillDropDownSide = document.getElementById('refill-DD');
const refillMenuSide = document.getElementById('refill-menu');
const refillButton = document.getElementById('refill-btn');
refillDropDownSide.addEventListener('click', function (e) {
    e.preventDefault();
    if (refillMenuSide.style.display === "none") {
        refillMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
    else {
        refillMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
})
refillButton.addEventListener('click', function () {
    if (refillMenuSide.style.display === "block") {
        refillMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
    else {
        refillMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
})
//browse your accents
const browseDropDownSide = document.getElementById('browse-DD');
const browseMenuSide = document.getElementById('browse-menu');
const browseButton = document.getElementById('browse-btn');
browseDropDownSide.addEventListener('click', function (e) {
    e.preventDefault();
    if (refillMenuSide.style.display === "none") {
        refillMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
    else {
        refillMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
})
refillButton.addEventListener('click', function () {
    if (refillMenuSide.style.display === "block") {
        refillMenuSide.style.display = "none";
        CandleMenuSide.style.display = "block";
    }
    else {
        refillMenuSide.style.display = "block";
        CandleMenuSide.style.display = "none";
    }
})