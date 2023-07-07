let bars = document.querySelector('.bars');
let list = document.querySelector('.list');
// let dropdown = document.querySelector('.dropdown')
// let dropitemMenu= document.querySelector('.dropdown-menu');
let close = document.querySelector('.close')
bars.addEventListener('click',function(){
list.classList.toggle('displaytoggle')
})
// dropdown.addEventListener('click',function(){
// dropitemMenu.classList.toggle('dropdown-menutoggle')
// })
close.addEventListener('click',function(){
    list.classList.toggle('displaytoggle')
})