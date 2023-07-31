$(document).ready(function () {
    $(window).scroll(function () {
      // sticky my-navbar on scroll script
      if (this.scrollY > 20) {
        $(".my-navbar").addClass("sticky");
      } else {
        $(".my-navbar").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  

  
    $(".my-navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/my-navbar script
    $(".my-menu-btn").click(function () {
      $(".my-navbar .my-menu").toggleClass("active");
      $(".my-menu-btn i").toggleClass("active");
    });

  
    // owl carousel script
    $(".carousel").owlCarousel({
      loop:true,
      margin: 20,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 4,
          nav: false,
        },
        1000: {
          items: 5,
          nav: false,
        },
      },
    });
   
      
  });
  