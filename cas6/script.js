document.querySelector('#add-btn').addEventListener('click', function () {
  let text = document.querySelector('#canvas');
  let addText = document.createElement('h1');
  addText.textContent = document.querySelector('#input').value;
  text.appendChild(addText);
});

document.querySelector('#add-text').addEventListener('click', function () {
  let text = document.querySelector('#canvas');
  let addText = document.createElement('p');
  addText.textContent = document.querySelector('#input-text').value;
  text.appendChild(addText);
});

document.querySelector('#blue').addEventListener('click', function () {
  let backgroudBlue = document.querySelector('#canvas');
  backgroudBlue.style.backgroundColor = 'blue';
});

document.querySelector('#green').addEventListener('click', function () {
  let backgroudBlue = document.querySelector('#canvas');
  backgroudBlue.style.backgroundColor = 'green';
});

document.querySelector('#yellow').addEventListener('click', function () {
  let backgroudBlue = document.querySelector('#canvas');
  backgroudBlue.style.backgroundColor = 'yellow';
});

document.querySelector('#red').addEventListener('click', function () {
  let backgroudBlue = document.querySelector('#canvas');
  backgroudBlue.style.backgroundColor = 'red';
});
