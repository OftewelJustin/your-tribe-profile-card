document.addEventListener('DOMContentLoaded', function () {
  const expandButton = document.querySelector('.btn-primary');
  const card = document.querySelector('.card');
  const content = document.querySelector('.content');

  if (expandButton && card) {
    expandButton.addEventListener('click', toggleExpand);
  }

  function toggleExpand() {
    if (card.classList.contains('expand')) {
      // If the card is expanded, change it to unexpanded
      card.classList.remove('expand');
      card.classList.add('collapse'); // Start collapse animation
      content.classList.remove('visible');
      content.classList.add('invisible'); // Start collapse animation

    } else {
      // If the card is unexpanded, change it to expanded
      content.classList.remove('invisible'); // Remove collapse animation
      card.classList.remove('collapse'); // Remove collapse animation
      card.classList.add('expand'); // Start expand animation
      content.classList.add('visible');
    }
  }
});
