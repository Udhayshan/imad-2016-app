console.log('Loaded!');

var element = document.getElementById('maintext');
element.innerHTML = 'JavaScript Rocks';

var img = document.getElementById('monster');

img.onClick = function()
{
    img.style.marginleft = '80px';
}