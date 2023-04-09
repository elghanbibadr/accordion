let accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function(item) {
  let header = item.querySelector('.accordion-header');
  let content = item.querySelector('.accordion-content');

  header.addEventListener('click', function() {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      content.style.display = 'none';
    } else {
      accordionItems.forEach(function(item) {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.display = 'none';
      });

      item.classList.add('active');
      content.style.display = 'block';
    }
  });
});
