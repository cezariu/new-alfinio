$(document).ready(function () {
  const owl1 = $("#owl-carousel1");
  owl1.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      767: {
        items: 2,
        nav: false,
        loop: true,
      },

      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });

  $("#forward1").click(function () {
    owl1.trigger("next.owl.carousel");
    owl1.trigger("stop.owl.autoplay");
    owl1.trigger("play.owl.autoplay");
  });
  $("#backward1").click(function () {
    owl1.trigger("prev.owl.carousel");
    owl1.trigger("stop.owl.autoplay");
    owl1.trigger("play.owl.autoplay");
  });

  // Second carousel
  const owl2 = $("#owl-carousel2");
  owl2.owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      640: {
        items: 2,
        nav: false,
        loop: true,
      },
    },
  });
  $("#forward2").click(function () {
    owl2.trigger("next.owl.carousel");
    owl2.trigger("stop.owl.autoplay");
    owl2.trigger("play.owl.autoplay");
  });
  $("#backward2").click(function () {
    owl2.trigger("prev.owl.carousel");
    owl2.trigger("stop.owl.autoplay");
    owl2.trigger("play.owl.autoplay");
  });

  // Third carousel
  $("#owl-carousel3").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },

      768: {
        items: 2,
        nav: false,
        loop: true,
      },

      992: {
        items: 4,
        nav: false,
        loop: true,
      },
    },
  });
});

// $(".pop").on("click", function (e) {
//   $("#imagepreview").attr("src", e.target.src);
//   $("#imagemodal").modal("show");
// });

$(document).ready(sizeMap);

window.addEventListener("resize", changeSize);

function changeSize() {
  sizeMap();
}
function sizeMap() {
  $(".contact_map").css({
    height: $(".form-container").height() + "px",
  });
}

const backForward = document.getElementById("back-forward");
backForward.addEventListener("click", closeSocialIcons);
const icons = document.getElementById("icons");

function closeSocialIcons(e) {
  if (backForward.children[0].id === "back") {
    backForward.innerHTML = `
    <img
    src="../images/forward.png"
    alt="forward"
    width="25px"
    height="25px"
    id="forward"
  />`;
    icons.classList.remove("d-flex");
    icons.classList.add("d-none");
  } else {
    backForward.innerHTML = `<img
    src="../images/back.png"
    alt="back"
    width="25px"
    height="25px"
    id="back"
  />`;
    icons.classList.add("d-flex");
    icons.classList.remove("d-none");
  }
}
