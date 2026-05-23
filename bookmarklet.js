javascript: (function () {
    alert('hallooo welcome to my bookmarklet! hopefully after using this it becomes easier to read the webpage!')
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontSize = '24px';
    document.body.style.fontFamily = 'sans-serif';

    var imgs=document.querySelectorAll('img');
    for(var i=0; i<imgs.length; i++) {
        imgs[i].remove();
    }
})();
