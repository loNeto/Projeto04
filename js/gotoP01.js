function scrollTo(element){
  document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}
document.querySelector('#desk--gotoCardapio').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#cardapio');
});
document.querySelector('#desk--gotoContato').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#contato');
});

document.querySelector('#mob--gotoCardapio').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#cardapio');
});
document.querySelector('#mob--gotoContato').addEventListener('click', function(event){
  event.preventDefault;
  scrollTo('#contato');
});