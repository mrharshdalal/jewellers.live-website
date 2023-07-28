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

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
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

  // typing text animation script

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeOut: 1000,
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
      // 1000: {
      //   items: 5,
      //   nav: false,
      // },
      
    },
  });
  $(document).ready(function () {
    const reviewContainer = $(".review-container");
    const jewellerNames = ["Full Name 1", "Full Name 2", "Full Name 3", "Full Name 4", "Full Name 5"];
    const jewellerShops = ["Owner of Gelson Jewelery", "Owner of XYZ Jewelers", "Owner of ABC Jewelers", "Owner of PQR Jewelers", "Owner of LMN Jewelers"];
    const jewellerReviews = [
      "1Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      "3Ut commodo, metus sit amet posuere accumsan, ex elit iaculis magna, vitae bibendum tortor metus id purus.",
      "4Phasellus elementum tellus et orci sodales, eget interdum nisl blandit.",
      "5Sed ut massa ut dui elementum eleifend non vel ligula."
    ];

    $(".carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        1024: {
          items: 4
        }
      }
    });

    // Update the review-container content when a card is clicked
    $(".carousel .card1").click(function () {
      const index = 0;
      console.log(index)
      reviewContainer.find("img").attr("src", "images/photo.png");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    $(".carousel .card2").click(function () {
      const index = 1;
      console.log(index)
      reviewContainer.find("img").attr("src", "images/photo.png");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    $(".carousel .card3").click(function () {
      const index = 2;
      console.log(index)
      reviewContainer.find("img").attr("src", "images/photo.png");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    $(".carousel .card4").click(function () {
      const index = 3;
      console.log(index)
      reviewContainer.find("img").attr("src", "images/photo.png");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    $(".carousel .card5").click(function () {
      const index = 4;
      console.log(index)
      reviewContainer.find("img").attr("src", "images/photo.png");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
  });

  
});
