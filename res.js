menubar=document.querySelector('.menu-bar')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
menubar.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-res');
    navlist.classList.toggle('v-class-res');

})  