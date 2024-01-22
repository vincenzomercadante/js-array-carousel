/**
 *
 * @param {HTMLCollection} slides array contenente tutte le slide
 * @param {HTMLCollection} thumbs array contenente tutte le thumb
 * @param {number} index indice della slide attiva
 * @param {string} buttonClicked stringa che indica quale bottone è stato cliccato
 *
 * @returns {number} index numero equivalente alla slide attiva dopo il cambio
 *
 */
function slideChanger(slides, thumbs, index, buttonClicked) {
  // rimozione classe active alla slide corrente
  slides[index].classList.remove("active");
  thumbs[index].classList.remove("p-active");
  // incremento o decremento per cambio slide
  index = buttonClicked === "next" ? index + 1 : index - 1;
  console.log(index);
  // gestione fine array
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  // assegnazione classe active alla nuova slide corrente
  slides[index].classList.add("active");
  thumbs[index].classList.add("p-active");

  return index;
}
