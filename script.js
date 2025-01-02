// Select all draggable images
const gridItems = document.querySelectorAll('.grid-item');
let draggedItem = null;

// Event Listeners for Each Grid Item
gridItems.forEach(item => {
  // Start Drag
  item.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    setTimeout(() => {
      e.target.classList.add('dragging');
    }, 0);
  });

  // End Drag
  item.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
    draggedItem = null;
  });

  // Drag Over
  item.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Drop
  item.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem && draggedItem !== e.target) {
      // Swap Background Images
      const draggedBg = draggedItem.style.backgroundImage || window.getComputedStyle(draggedItem).backgroundImage;
      const targetBg = e.target.style.backgroundImage || window.getComputedStyle(e.target).backgroundImage;

      draggedItem.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;

      // Swap Labels
      const draggedLabel = draggedItem.querySelector('.label').innerText;
      const targetLabel = e.target.querySelector('.label').innerText;

      draggedItem.querySelector('.label').innerText = targetLabel;
      e.target.querySelector('.label').innerText = draggedLabel;
    }
  });
});
