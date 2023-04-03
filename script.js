//  h1 animation js 

let navContent = document.getElementById('navbar');
$(window).scroll(function() {    
if($(window).scrollTop() > 0) {        
navContent.style.boxShadow = '0 1px 5px #e8e9ee';
navContent.style.transition = 'all 0.2s';
} else {        
navContent.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0.25)';
navContent.style.transition = 'all 0.2s';
}
});

// text animation 

var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}
