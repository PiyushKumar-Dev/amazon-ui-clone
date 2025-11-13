const imgs=document.querySelectorAll('.header-slider ul img');
const next_btn=document.querySelector('.next');
const prev_btn=document.querySelector('.prev');
let n=0;
function changeSlide(){
    for(img of imgs){
        img.style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n=n-1;
    }
    else {
        n=imgs.length-1;
    }
    changeSlide();
});
next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else {
        n=0;
    }
    changeSlide();
});

const scrollContainer =document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(ev)=>{
        //    ev.preventDefault();
           item.scrollLeft+=ev.deltaY;
    });
}