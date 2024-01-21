$(document).ready(function () {
  $(".select-items div").click(function () {
    var value = $(this).data("value");
    $(".select-selected").html($(this).html());
    $("select").val(value);
  });
});
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

var btnContainer = document.getElementById("myDIV");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//button scroll smooth footer
document
  .getElementById("scrollToFooter")
  .addEventListener("click", function () {
    const sectionElement = document.getElementById("section");
    sectionElement.scrollIntoView({ behavior: "smooth" });
  });

let requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

document.addEventListener("DOMContentLoaded", function () {
  const goTopButton = document.querySelector('[data-action="gotop"]');
  const windowViewPortHeight = window.innerHeight; // browser viewport height
  let isRequestingAnimationFrame = false;

  if (!goTopButton) {
    return;
  }

  goTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (!isRequestingAnimationFrame) {
      requestAnimationFrame(filterGoTopButtonVisibility);
      isRequestingAnimationFrame = true;
    }
  });

  function filterGoTopButtonVisibility(timestamp) {
    let windowPageYOffset =
      window.pageYOffset || document.documentElement.scrollTop;
    if (windowPageYOffset > windowViewPortHeight) {
      goTopButton.classList.add("show");
      isRequestingAnimationFrame = false;
    } else {
      goTopButton.classList.remove("show");
      requestAnimationFrame(filterGoTopButtonVisibility);
    }
  }
});

/*code js de button telecharger*/

window.onload = function () {
  const downloadButtons = document.querySelectorAll(".tabs__background");

  downloadButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const invoice = document.getElementById("invoice");
      console.log(invoice);
      console.log(window);
      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };
      html2pdf().from(invoice).set(opt).save();
    });
  });
};
