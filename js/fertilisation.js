//This is the code for maps
const paths = document.querySelectorAll("path");
const dataCity = document.querySelector(".city");

paths.forEach((path) => {
  path.addEventListener("click", (event) => {
    // Remove "active" class from all paths
    paths.forEach((eo) => {
      eo.classList.remove("active");
    });
    const city = path.dataset.city;
    dataCity.textContent = city;
    path.classList.add("active");
  });
  dataCity.classList.add("active");
});

function openTab(tabId) {
  var tabs = document.getElementsByClassName("content-tabss");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  var activeTab = document.getElementById(tabId);
  activeTab.style.display = "block";

  var activeTabs = document.getElementsByClassName("active");
  for (var i = 0; i < activeTabs.length; i++) {
    activeTabs[i].classList.remove("active");
  }

  var selectedTab = document.querySelector(".tab[data-tab-id='" + tabId + "']");
  selectedTab.classList.add("active");
}

/*tabs active*/
const tabss = document.querySelectorAll(".content-tabss .tab");
if (tabss) {
  tabss.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabss.forEach((tb) => {
        tb.classList.remove("active");
      });

      tab.classList.add("active");
    });
  });
}

/*function hideAllInformation() {
  informationDivs.forEach((div) => {
    div.style.display = "none";
  });
}*/

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

//Grainy gradient pie

am5.ready(function () {
  var root = am5.Root.new("chartdiv");

  root.setThemes([am5themes_Animated.new(root)]);

  var chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      endAngle: 270,
      layout: root.verticalLayout,
      innerRadius: am5.percent(60),
    })
  );

  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
      endAngle: 270,
    })
  );

  series.set(
    "colors",
    am5.ColorSet.new(root, {
      colors: [
        am5.color(0x4a8b71),
        am5.color(0xf1cf69),
        am5.color(0x306650),
        am5.color(0x39526d),
        am5.color(0xa95a52),
        am5.color(0xe35b5d),
        am5.color(0xffa446),
      ],
    })
  );

  var gradient = am5.RadialGradient.new(root, {
    stops: [{ color: am5.color(0x000000) }, { color: am5.color(0x000000) }, {}],
  });

  series.slices.template.setAll({
    fillGradient: gradient,
    strokeWidth: 2,
    stroke: am5.color(0xffffff),
    cornerRadius: 10,
    shadowOpacity: 0.1,
    shadowOffsetX: 2,
    shadowOffsetY: 2,
    shadowColor: am5.color(0x000000),
    fillPattern: am5.GrainPattern.new(root, {
      maxOpacity: 0.2,
      density: 0.5,
      colors: [am5.color(0x000000)],
    }),
  });

  series.slices.template.states.create("hover", {
    shadowOpacity: 1,
    shadowBlur: 10,
  });

  series.ticks.template.setAll({
    strokeOpacity: 0.4,
    strokeDasharray: [2, 2],
  });

  series.states.create("hidden", {
    endAngle: -90,
  });

  series.data.setAll([
    {
      category: "Lithuania",
      value: 500,
    },
    {
      category: "Czechia",
      value: 300,
    },
    {
      category: "Ireland",
      value: 200,
    },
    {
      category: "Germany",
      value: 100,
    },
  ]);

  var legend = chart.children.push(
    am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15,
    })
  );
  legend.markerRectangles.template.adapters.add("fillGradient", function () {
    return undefined;
  });
  legend.data.setAll(series.dataItems);

  series.appear(1000, 100);
});

/*code js de button telecharger*/

window.onload = function () {
  const downloadButtons = document.querySelectorAll(".image--documment");

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

/*image__container__popup*/

document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popuer-image").style.display = "block";
    document.querySelector(".popuer-image img").src = image.getAttribute("src");
  };
});
document.querySelector(".popuer-image span").onclick = () => {
  document.querySelector(".popuer-image").style.display = "none";
};

/*video__container__popup*/

document.querySelectorAll(".popup img").forEach((video) => {
  video.onclick = () => {
    document.querySelector(".popuer-video").style.display = "block";
    document.querySelector(".popuer-video video").src =
      image.getAttribute("src");
  };
});
document.querySelector(".popuer-video span").onclick = () => {
  document.querySelector(".popuer-video").style.display = "none";
};

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
  document.getElementById("superficie-2018-2019").innerText = superficie;
  document.getElementById("superficie-2019-2020").innerText = superficie;

  document.getElementById("production-2018-2019").innerText = production;
  document.getElementById("production-2019-2020").innerText = production;

  document.getElementById("rendement-2018-2019").innerText = rendement;
  document.getElementById("rendement-2019-2020").innerText = rendement;
}
