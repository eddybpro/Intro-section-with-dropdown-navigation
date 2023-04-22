const header = document.querySelector('header');
links = document.querySelector('.links'),
subNavLinks = document.querySelectorAll('.box li'),
career = document.querySelector('.career'),
about = document.querySelector('.about'),
btnsBox = document.querySelector('.btns'),
buttons = document.querySelectorAll('.btns button'),
menuBtn = document.querySelector('.menu'),
closeBtn = document.querySelector('.close'),
features = document.querySelector('.features'),
feaArrow = document.querySelector('.fea-arrow'),
featuresBox = document.querySelector('.features .box'),
company = document.querySelector('.company'),
comArrow = document.querySelector('.com-arrow'),
companyBox = document.querySelector('.company .box');

let featuresFlag = true;
let companyFlag = true;

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    links.classList.toggle('show');
    links.style.left = '6rem';
    btnsBox.classList.toggle('show');
    btnsBox.style.left = '6rem';
    header.style.overflowX = 'visible';
})

function closeMenu(){
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    links.classList.toggle('hide');
    links.style.left='50rem';
    btnsBox.classList.toggle('hide');
    btnsBox.style.left = '50rem';
    header.style.overflowX = 'hidden';

    setTimeout(()=>{
        links.classList.remove('hide');
        links.classList.remove('show');
        btnsBox.classList.remove('hide');
        btnsBox.classList.remove('show');
    }, 1000);
}

closeBtn.addEventListener('click',closeMenu)

subNavLinks.forEach(li=>{
    li.addEventListener('click', closeMenu);
})

buttons.forEach(btn=>{
    btn.addEventListener('click', closeMenu);
})

career.addEventListener('click', closeMenu);

about.addEventListener('click', closeMenu);

features.addEventListener('click', ()=>{
    if(screen.width < 768 ){
        features.classList.toggle('fea-mar-btm');
        if(!companyFlag){
            btnsBox.classList.toggle('btns-top');
        }else{
            btnsBox.classList.toggle('fea-btns-top');
        }
    };
    featuresBox.classList.toggle('none');
    if(featuresFlag){
        feaArrow.src = "images/icon-arrow-up.svg";
        featuresFlag=false;
    }else{
        feaArrow.src = "images/icon-arrow-down.svg";
        featuresFlag = true;
    }
})

company.addEventListener('click', ()=>{
    if(screen.width < 768 ){
        company.classList.toggle('com-mar-btm');
        if(!featuresFlag){
            btnsBox.classList.toggle('btns-top');
        }else{
            btnsBox.classList.toggle('com-btns-top');
        }
    }

    companyBox.classList.toggle('none');
    if(companyFlag){
        comArrow.src = "images/icon-arrow-up.svg";
        companyFlag=false;
    }else{
        comArrow.src = "images/icon-arrow-down.svg";
        companyFlag = true;
    }
})