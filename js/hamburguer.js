
const d = document;
d.addEventListener('click', e=>{
    if(e.target.matches('.btn-menu')||e.target.matches(`${'.btn-menu'} *`)){
        d.querySelector('.navs').classList.toggle("is-active");
        d.querySelector('.btn-menu').classList.toggle("is-active");
    }
    if(e.target.matches('.btn-close')||e.target.matches(`${'.btn-close'} *`)){
        d.querySelector('.navs').classList.remove("is-active");
    }
    if(e.target.matches('.navs a')){
        d.querySelector('.navs').classList.remove("is-active");
        d.querySelector('.btn-menu').classList.remove("is-active");
    }
})