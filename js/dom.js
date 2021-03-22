const form = document.getElementById('addForm');
const itemList = document.getElementById('items');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    const newItem = document.getElementById('item').value;

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn)

    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}