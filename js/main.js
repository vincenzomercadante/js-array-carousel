// inizializzo il mio array dei nomi delle immagini
const allImage = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// Recupero gli elementi HTML
const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");
const slideContainer = document.querySelector(".slide-container");
const thumbContainer = document.querySelector(".preview");

// ciclo per la generazione degli elementi HTML
let slideHTML = "";
let thumbHTML = "";
for (let i = 0; i < allImage.length; i++) {
  // aggiunta della classe active sul primo elemento
  let activeClass = i == 0 ? "active" : "";
  let pactiveClass = i == 0 ? "p-active" : "";

  slideHTML += `<img src="./img/${allImage[i]}" alt="slide ${i}" class="slide ${activeClass}">`;
  thumbHTML += `<img src="./img/${allImage[i]}" alt="slide ${i}" class="p-slide ${pactiveClass}">`;
}
// stampa su pagina delle immagini generate
slideContainer.innerHTML += slideHTML;
thumbContainer.innerHTML += thumbHTML;
// array di tutte le slide
const allSlides = document.getElementsByClassName("slide");
const allPrevSlides = document.getElementsByClassName("p-slide");
// variabile per visualizzare la slide corrente
let currentSlide = 0;

// creazione event listeners dei due bottoni
arrowNext.addEventListener("click", function () {
  // rimozione classe active alla slide corrente
  allSlides[currentSlide].classList.remove("active");
  allPrevSlides[currentSlide].classList.remove("p-active");
  // incremento per cambio slide
  currentSlide++;
  if (currentSlide >= allSlides.length) currentSlide = 0;
  //   assegnazione classe active alla nuova slide corrente
  allSlides[currentSlide].classList.add("active");
  allPrevSlides[currentSlide].classList.add("p-active");
});

arrowPrev.addEventListener("click", function () {
  // rimozione classe active alla slide corrente
  allSlides[currentSlide].classList.remove("active");
  allPrevSlides[currentSlide].classList.remove("p-active");
  // decremento per cambio slide
  currentSlide--;
  if (currentSlide < 0) currentSlide = 4;
  //   assegnazione classe active alla nuova slide corrente
  allSlides[currentSlide].classList.add("active");
  allPrevSlides[currentSlide].classList.add("p-active");
});

// array delle thumblist
const thumbList = document.querySelectorAll(".p-slide");

// ciclo per creazione event listener sulle thumb
for (let i = 0; i < thumbList.length; i++) {
  thumbList[i].addEventListener("click", function () {
    thumbList[currentSlide].classList.remove("p-active");
    this.classList.add("p-active");
    allSlides[currentSlide].classList.remove("active");
    allSlides[i].classList.add("active");
    currentSlide = i;
  });
}
