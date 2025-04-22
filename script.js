// Text & Style Update
function updateMessage() {
    const message = document.getElementById('message');
    message.textContent = "🎉 Message Updated! JavaScript is powerful!";
    message.style.color = '#fff';
    message.style.backgroundColor = '#1abc9c';
    message.style.padding = '12px';
    message.style.borderRadius = '6px';
    message.style.transition = 'all 0.4s ease';
  }
  
  // Dynamic List Functions
  let itemCount = 2;
  
  function addItem() {
    itemCount++;
    const list = document.getElementById('list-container');
    const newItem = document.createElement('li');
    newItem.id = `item-${itemCount}`;
    newItem.textContent = `Learn JavaScript #${itemCount}`;
    list.appendChild(newItem);
  }
  
  function removeItem() {
    const list = document.getElementById('list-container');
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
      itemCount--;
    }
  }
  
  // Event Listeners
  document.getElementById('update-btn').addEventListener('click', updateMessage);
  document.getElementById('add-item-btn').addEventListener('click', addItem);
  document.getElementById('remove-item-btn').addEventListener('click', removeItem);
  