const paths = document.querySelectorAll("path");
const dataCity = document.querySelector(".city");

paths.forEach((path) => {
  path.addEventListener("click", (event) => {
    // Supprimer la classe "active" de tous les chemins paths
    paths.forEach((eo) => {
      eo.classList.remove("active");
    });
    const city = path.dataset.city;
    dataCity.textContent = city;
    path.classList.add("active");
  });
  dataCity.classList.add("active");
});

// Initialize Swiper

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-button");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
};
window.addEventListener("load", initSlider);

//scroll menu page home
document.addEventListener("scroll", function () {
  const element = document.querySelector("nav");
  const rect = element.getBoundingClientRect();
  const y = rect.top + window.scrollY;
  if (y > 12) {
    element.classList.add("light");
  } else {
    element.classList.remove("light");
  }
  console.log(y);
});

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*se code la pour les region  */

function changeStats(superficie, production, rendement) {
  // Adding an event listener to the button

  document.getElementById("superficie-2018-2019").innerText = superficie;
  document.getElementById("superficie-2019-2020").innerText = superficie;

  document.getElementById("production-2018-2019").innerText = production;
  document.getElementById("production-2019-2020").innerText = production;

  document.getElementById("rendement-2018-2019").innerText = rendement;
  document.getElementById("rendement-2019-2020").innerText = rendement;
}
