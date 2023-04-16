$(document).ready(function(){
  var pageName = (window.location.href).substring(((window.location.href).lastIndexOf("/")+1),(window.location.href).length);
  $('.nav-link[href="' + pageName + '"]').addClass('active'); // add the active class to the corresponding link
if(pageName.includes('blog')){
  $('.nav-link[href="blog.html"]').addClass('active'); // add the active class to the corresponding link
}
  console.log(pageName);
  // $('.nav-link').on('click',function(){
  //   $('.nav-link').removeClass('active');
  //   $(this).addClass('active');
  //   localStorage.setItem('activeLink', $(this).attr('href')); // store the active link in local storage
  // });

  // var activeLink = localStorage.getItem('activeLink'); // retrieve the active link from local storage
  // if (activeLink) {
  //   $('.nav-link[href="' + activeLink + '"]').addClass('active'); // add the active class to the corresponding link
  // }
});


//Responsive navbar
const topNav = document.querySelector(".nav");
const ham = document.querySelector("#ham");
const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleHamburger);
});

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  topNav.classList.toggle("showNav");
  if (ham.getAttribute("aria-expanded") == "false") {
    ham.setAttribute("aria-expanded", "true");
  } else {
    ham.setAttribute("aria-expanded", "false");
  }
}

// Bootstrap Carousel
$(document).ready(function () {
  if ($(".brands_slider").length) {
    var brandsSlider = $(".brands_slider");

    brandsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
      nav: false,
      dots: false,
      autoWidth: true,
      items: 8,
      margin: 42,
    });

    if ($(".brands_prev").length) {
      var prev = $(".brands_prev");
      prev.on("click", function () {
        brandsSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".brands_next").length) {
      var next = $(".brands_next");
      next.on("click", function () {
        brandsSlider.trigger("next.owl.carousel");
      });
    }
  }
});

//swiper js
var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-slider-container", {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
