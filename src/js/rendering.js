let nextId = 1;
var ul = document.createElement('ul');
ul.className = 'email-list__items list-items';
document
  .getElementById('emaiList')
  .appendChild(ul)
  .setAttribute('id', 'e-mail-list');

let store = [];

const removeElement = id => {
  store = store.filter(item => item.id !== id);
  renderList();
};

function addElement() {
  let value = document.getElementById('inputEmail').value;

  if (emailValidation(value)) {
    store.push({ id: nextId++, value: value });
    renderList();
  } else {
    alert(`${value} не является email адресом`);
  }
}

const renderList = () => {
  ul.innerHTML = '';

  store.forEach(item => {
    let button = document.createElement('button');
    button.innerText = 'X';
    button.type = 'button';
    button.className = 'btn btn_delete list-items__btn list-items__btn_delete';
    button.addEventListener('click', () => {
      removeElement(item.id);
    });

    var li = document.createElement('li');
    li.className = 'list-items__item';
    li.innerHTML = item.value;
    li.appendChild(button);

    ul.appendChild(li);
  });
};

document.getElementById('submit').addEventListener('click', addElement);

document.getElementById('inputEmail').addEventListener('keypress', () => {
  if (event.keyCode === 13) {
    addElement();
  }
});
