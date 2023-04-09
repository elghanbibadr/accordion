


let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function(item) {
  let header = item.querySelector('.header-wrraper');
  let content = item.querySelector('.accordion-content');
  let plusIcon = header.querySelector('.plus-icon');
  let minusIcon = header.querySelector('.minus-icon');

  header.addEventListener('click', function() {
    if (item.classList.contains('active')) {
      // Collapse the active item
      item.classList.remove('active');
      plusIcon.classList.remove('hidden');
      minusIcon.classList.add('hidden');
      content.style.maxHeight = null;
    } else {
      // Collapse any active item
      let activeItem = document.querySelector('.accordion-item.active');
      if (activeItem) {
        activeItem.classList.remove('active');
        activeItem.querySelector('.plus-icon').classList.remove('hidden');
        activeItem.querySelector('.minus-icon').classList.add('hidden');
        activeItem.querySelector('.accordion-content').style.maxHeight = null;
      }

      // Expand the clicked item
      item.classList.add('active');
      plusIcon.classList.add('hidden');
      minusIcon.classList.remove('hidden');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
