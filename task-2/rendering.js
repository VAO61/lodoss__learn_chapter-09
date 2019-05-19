let nextId = 1;
var ul = document.createElement('ul');
document.body.appendChild(ul).setAttribute('id', 'e-mail-list');

let store = [];

const removeElement = id => {
  store = store.filter(item => item.id !== id);
  renderList();
};

const addElement = () => {
  let value = document.getElementById('inputTest').value;

  if (emailValidation(value)) {
    store.push({ id: nextId++, value: value });
    renderList();
  } else {
    alert(`${value} не является email адресом.`);
  }
};

const renderList = () => {
  ul.innerHTML = '';

  store.forEach(item => {
    let button = document.createElement('button');
    button.innerText = 'X';
    button.type = 'button';
    button.addEventListener('click', event => {
      // TODO: http://kharchuk.ru/JavaScript.pdf 415стр.
      // TODO: 17.2.1. Распространение событий
      // TODO: Остановка всплытия события клика
      // event.preventDefault();
      // TODO: Остановка погружения события клика
      // event.stopPropagation();
      removeElement(item.id);

      // Остановка всплытия события клика
      // return false;
    });

    var li = document.createElement('li');
    li.innerHTML = item.value;
    li.appendChild(button);

    ul.appendChild(li);
  });
};

document.getElementById('submit').addEventListener('click', addElement);
