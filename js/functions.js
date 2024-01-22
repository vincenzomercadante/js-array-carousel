/**
 *
 * @param {number} index indice della slide che deve essere la nuova currentslide
 *
 * @returns {number} index numero equivalente alla slide attiva dopo il cambio
 *
 */
function slideChanger(index) {
  // rimozione classe active alla slide corrente
  allSlides[currentSlide].classList.remove("active");
  allPrevSlides[currentSlide].classList.remove("p-active");

  // gestione fine/inizio array
  if (index == allSlides.length) {
    index = 0;
  } else if (index < 0) {
    index = allSlides.length - 1;
  }
  // assegnazione classe active alla nuova slide corrente
  allSlides[index].classList.add("active");
  allPrevSlides[index].classList.add("p-active");

  return index;
}
