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

// intervallo in cui si cambia la slide
let clock = setInterval(function () {
  currentSlide = slideChanger(currentSlide + 1);
}, 3000);

// creazione event listeners del bottone next
arrowNext.addEventListener("click", function () {
  currentSlide = slideChanger(currentSlide + 1);
});

// creazione event listeners del bottone prev
arrowPrev.addEventListener("click", function () {
  currentSlide = slideChanger(currentSlide - 1);
});

// evento quando abbandono il mouse dal container
slideContainer.addEventListener("mouseleave", function () {
  clock = setInterval(function () {
    currentSlide = slideChanger(currentSlide + 1);
  }, 3000);
});

// evento quando passo sopra al container con il mouse
slideContainer.addEventListener("mouseover", function () {
  clearInterval(clock);
});

// array delle thumb
const thumbList = document.querySelectorAll(".p-slide");
// ciclo per creazione event listener sulle thumb
for (let i = 0; i < thumbList.length; i++) {
  thumbList[i].addEventListener("click", function () {
    currentSlide = slideChanger(i);
  });
}
