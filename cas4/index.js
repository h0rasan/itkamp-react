var nekiElement = document.getElementById('neki-el'); //funkcija  u js-u koja omogucava pristup elementu putem njegovog id-a

nekiElement.style.color = '#22BF34';

var secEl = document.getElementById('sec-el');

secEl.style.color = '#ff5733'; // style je nacin pristupa i izmene css elementaa color je atributx
secEl.style.fontSize = '50px'; // sluzi za promennu velicine fonta

var trdEl = document.getElementById('trd-el');

trdEl.innerText = 'neki tekst'; // innerText je nacin izmene ili popunjavanja teksta unutar elementa

var natureImg = document.getElementById('nature-img');
natureImg.style.borderRadius = '50%';
natureImg.style.width = '500px';
natureImg.style.height = '500px';
natureImg.addEventListener('click', () => {
  natureImg.style.display = 'none';
  setTimeout(() => {
    natureImg.style.display = 'block';
  }, 5000);
});


// addEventListener je funkcija koja se dodaje html elementu koji smo naznacili da prati 
// dogadjanje oko ili unutar naznacenog elementa i izvrsava funkciju  koja mu je zadata, prvi argument
// funkcije je event(sta treba korisnik da uradi). drugi argument 