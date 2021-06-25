let btn = document.querySelector('#btn');
let menu = document.querySelector('.menuMob');

function toggle(event){
  if(menu.classList.contains('show')){
    menu.classList.remove('show');
  }else{
    menu.classList.add('show');
  }
}

btn.addEventListener('click', toggle, false);