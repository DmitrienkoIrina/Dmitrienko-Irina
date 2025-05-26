const intensImg = document.querySelectorAll('.header__logo');
const intensiveText = document.querySelectorAll('.info__logo');

 intensImg.forEach ((item, index) => {


  item.addEventListener('mouseover', () => { 
        item.style.opacity = 0.5;
        intensiveText[index] .removeAttribute('hidden');
    });

    item.addEventListener ( 'mouseout',() => {
         item.style.opacity = 1;
         intensiveText[index] .setAttribute('hidden', true );
    });
});