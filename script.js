window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add ("display");
    }, 4000);
}

document.querySelector('.categorie-bague').
addEventListener('click',()=>{ 
    document.querySelector('.container').classList.toggle("change");
});
document.querySelector('.scroll-btn').addEventListener('click',() => {
    document.querySelector('html').stayle.scrollBehavior = "smooth";
    sitTimeout(() => {
        document.querySelector('html').stayle.scrollBehavior = "unset";
    }, 1000)
});