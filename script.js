var itemCmp = document.querySelector('.item-content');
var imgItem = document.querySelector('.img-item');
var titleItem = document.querySelector('.title-item');
var valorItem = document.querySelector('.valor-item');
var pacelaItem = document.querySelector('.pacela-item');
var descricaoItem = document.querySelector('.descricao-item');
var bxX = document.querySelector('.bx-x');
var cdp = document.querySelector('.cdp');
var body = document.querySelector('body');
var item1 = document.querySelector('.item-1');
var item2 = document.querySelector('.item-2');

item1.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/DZn3N8PN/Whats-App-Image-2022-01-27-at-18-13-00-1-removebg-preview.png"
  titleItem.innerHTML = "Babador para bebê com panda estampado no babador"
  valorItem.innerHTML = "R$--,--"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Babador para bebê com panda estampado no babador para seu filho(a) não se sujar quando come."
  cdp.value = "STCZ"
});

item2.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/c1hcH8JM/Whats-App-Image-2022-01-27-at-18-13-00-removebg-preview.png"
  titleItem.innerHTML = "Saco organizador para maternidade ou escola"
  valorItem.innerHTML = "R$18,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Saco organizador para maternidade ou escola. Para manter as coisas do seu filho(a) organizado."
  cdp.value = "SACO"
});