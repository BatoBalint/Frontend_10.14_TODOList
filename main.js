var input = document.getElementById('todoInput');
var list = document.getElementById('list');

function AddElement() {
  if (input.value.trim() !== '') {
      let li = document.createElement('li');

      let myDiv = document.createElement('div');
      myDiv.classList.add('listItemDiv');
      myDiv.classList.add('p-3');
      myDiv.classList.add('pb-0');
      myDiv.classList.add('border-bottom');
      myDiv.classList.add('border-info');

      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.addEventListener('click', CheckboxClick)

      let todoText = document.createElement('p');
      let todoTextNode = document.createTextNode(input.value);
      todoText.appendChild(todoTextNode);

      let xText = document.createElement('p');
      let xTextNode = document.createTextNode('X');
      xText.appendChild(xTextNode);
      xText.classList.add('floatRight');
      xText.addEventListener('click', DeleteListItem);

      myDiv.appendChild(checkbox);
      myDiv.appendChild(todoText);
      myDiv.appendChild(xText);

      li.appendChild(myDiv);

      list.appendChild(li);
    }

    input.value = '';
}

function CheckboxClick() {
  this.parentNode.classList.toggle('done');
}

function DeleteListItem() {
  this.parentNode.parentNode.remove();
}

function HideAll(cb) {
  let li = list.childNodes;
  if (cb.checked) {
    for (let i = 1; i < li.length; i++) {
      if (li[i].childNodes[0].classList.contains('done')) {
        li[i].classList.add('hide');
        console.log('yoooo');
      }
    }
  } else {
    for (let i = 1; i < li.length; i++) {
      if (li[i].classList.contains('hide')) {
        li[i].classList.remove('hide');
        console.log('not yooo');
      }
    }
  }
}

function DeleteAll() {
  if (confirm('You really want to delete all items?')) {
    let li = list.childNodes;
    for (let i = 1; i < li.length; i++) {
      if (li[i].childNodes[0].classList.contains('done')) {
        li[i].remove();
        i--;
      }
    }
  } else {

  }
}


/*<li>
  <div class="listItemDiv p-3 pb-0 border-bottom border-info">
    <input type="checkbox" name="" value="">
    <p>Kacsa</p>
    <p class="floatRight">X</p>
  </div>
</li>*/
