const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('gracias amor sabia que ibas a decir que si')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('clickover', function () {
    const randomX = parseInt(Math.random()+1000);
    const randomY = parseInt(Math.random()*1000);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
   
