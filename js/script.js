const thumbnails = document.querySelectorAll('.thumbnails-list__item img');
const figcaption = document.querySelector('.pop-up figcaption');
thumbnails.forEach(img => {
  img.onclick = () => {
    document.querySelector('.pop-up').style.display = 'block';
    let smallSrc = img.src;
    let largeSrc = smallSrc.replace('-small', '-large');
    document.querySelector('.pop-up img').src = largeSrc;

    let caption;
    let parentListItem = img.closest('li');
    if (parentListItem && parentListItem.id) {
      switch (parentListItem.id) {
        case '1':
          caption = "Pink Flowers";
          break;
        case '2':
          caption = "Purple Flowers";
          break;
        case '3':
          caption = "Red Flowers";
          break;
        case '4':
          caption = "White Flowers";
          break;
        case '5':
          caption = "Yellow Flowers";
          break;
        default:
          caption = "Image Title";
      }
    } else {
      caption = "Image Title";
    }

    figcaption.textContent = caption;
  }
})

document.querySelector('.pop-up span').onclick = () =>{
  document.querySelector('.pop-up').style.display = 'none';
}
