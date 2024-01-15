// inizializzo il mio array dei nomi delle immagini
const allImage = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// Recupero gli elementi HTML
const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");
const slideContainer = document.querySelector(".slide-container");

// ciclo per la generazione dei vari elementi HTML
let slideHTML = "";
for (let i = 0; i < allImage.length; i++) {
  // aggiunta della classe active sul primo elemento
  let activeClass = i == 0 ? "active" : "";
  slideHTML += `<img src="./img/${allImage[i]}" alt="slide ${i}" class="slide ${activeClass}">`;
}
// stampa su pagina delle immagini generate
slideContainer.innerHTML += slideHTML;
// array di tutte le slide
const allSlides = document.getElementsByClassName("slide");
// variabile per visualizzare la slide corrente
let currentSlide = 0;

// creazione event listeners dei due bottoni
arrowNext.addEventListener("click", function () {
  // rimozione classe active alla slide corrente
  allSlides[currentSlide].classList.remove("active");
  // incremento per cambio slide
  currentSlide++;
  if (currentSlide >= allSlides.length) currentSlide = 0;
  //   assegnazione classe active alla nuova slide corrente
  allSlides[currentSlide].classList.add("active");
});

arrowPrev.addEventListener("click", function () {
  // rimozione classe active alla slide corrente
  allSlides[currentSlide].classList.remove("active");
  // decremento per cambio slide
  currentSlide--;
  if (currentSlide < 0) currentSlide = 4;
  //   assegnazione classe active alla nuova slide corrente
  allSlides[currentSlide].classList.add("active");
});
