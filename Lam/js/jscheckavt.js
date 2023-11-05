var ckavt=document.getElementById('ckavt');
var checkavt = localStorage.getItem('avatar')
var image = document.createElement('img');
image.setAttribute('src', checkavt)
ckavt.appendChild(image);
