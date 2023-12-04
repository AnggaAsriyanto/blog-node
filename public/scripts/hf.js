const headerEl      = document.querySelector('header');
const footer        = document.querySelector('footer');
const main          = document.querySelector('main');
const timesBtn      = document.getElementById('times');
const barsBtn       = document.getElementById('bars');
const barsMenu      = document.querySelector('.bars-menu');
const darkEl        = document.querySelector('.dark-mode');
const darkBtn       = document.querySelector('.button-switch');
const searchCon     = document.querySelector('.search-container');
const searchBtn     = document.getElementById('search');
const searchFo      = document.querySelector('.bars form');
const inputSearch   = document.querySelector('.input-search');
console.log()

let footerNum;
let click = true;

document.addEventListener('scroll', () => {
    let footerTop = footer.getBoundingClientRect().top;
    if(footerTop < footerNum) {
        headerEl.style.transform = 'translateY(-105%)';
    } else {
        headerEl.style.transform = 'translateY(0)';
    };

    footerNum = footerTop;
})

searchBtn.addEventListener('click', () => {
    if(click) {
        searchBtn.innerHTML = '<span><i class="fas fa-times"></span>';
        searchCon.classList.add('searching');
        click = false;
    } else {
        searchBtn.innerHTML = '<span><i class="fas fa-search"></span>';
        searchCon.classList.remove('searching');
        click = true;
    }
})

inputSearch.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        searchFo.submit();
    }
})

darkBtn.addEventListener('click', () => {
    darkEl.classList.toggle('active');
})

barsBtn.addEventListener('click', () => {
    barsMenu.classList.add('active');
    document.body.style.overflowY = 'hidden';
})

timesBtn.addEventListener('click', () => {
    barsMenu.classList.remove('active');
    document.body.style.overflowY = 'scroll';
})
