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
      // 1000: {
      //   items: 5,
      //   nav: false,
      // },
    },
  });
  $(document).ready(function () {
    const reviewContainer = $(".review-container");
    const jewellerNames = ["Susil Kumar", "Bharath Acha", "Vinay", "Kiran"];
    const jewellerShops = [
      "Owner of Sumangali Jewellers",
      "Owner of Vishal Thangamaligai, Walajabad",
      "Owner of Sumangali (SJR) Jewellers, Royapuram",
      "Owner of Rajesh Jewellers, Kolar",
    ];
    const jewellerReviews = [
      "We have been running Jewellery buying plans for over a decade now and have more than 2000 customers doing it yearly. In recent years, at least 30-40% of customers started sending their installments on Gpay or phonepay which was convenient for them. However, it became a nightmare for our 7-member accounting team, as they spent the first 4 hours of each day locating these payments. Even then, we couldn't reconcile payments for 30% of customers, having to wait until they provided their statements. After switching to jewllers.live, just one member of my accounting team spends just 10 mins to do this job. ",
      "I had earlier bought website and app for my store paying 50k once and 2.25Lakh once from different service providers. However, After delivering the website, I never ever used to get proper support. But here the service support is excellent. They schedule monthly calls for reviews and discussions about new implementable ideas, which is amazing and helps us learn new things.",
      "I joined my family business one year ago and was not happy with the old-school method of maintaining records. When I considered implementing software for this purpose, I had two concerns: pricing and the ease of use for other people at the store. I asked for demo account access and gave it to my father and surprisingly, he learnt how to use with out any assistance. I went over and took the basic plan, which was sufficient for my needs, is reasonably priced and totally worth it.",
      "What I like the most is “learnings”. They have established a community and conduct a monthly call they call as the cadence call (a new term I learned). Here what we do is discussions. Purely valuable discussions take place here. You can bring up any problems you want to solve or seek help with, and they even invite experts to clarify our doubts. The outcome of these discussions is a clear plan for what needs to be done in the coming month.",
    ];

    $(".carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1024: {
          items: 4,
        },
      },
    });

    // Update the review-container content when a card is clicked
    $(".carousel .card1").click(function () {
      const index = 0;
      console.log(index);
      reviewContainer.find("img").attr("src", "images/owner1.jpeg");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    $(".carousel .card2").click(function () {
      const index = 1;
      console.log(index);
      reviewContainer.find("img").attr("src", "images/owner2.jpeg");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    $(".carousel .card3").click(function () {
      const index = 2;
      console.log(index);
      reviewContainer.find("img").attr("src", "images/owner3.jpeg");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    $(".carousel .card4").click(function () {
      const index = 3;
      console.log(index);
      reviewContainer.find("img").attr("src", "images/owner4.jpg");
      reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
      reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
      reviewContainer.find("p").text(jewellerReviews[index]);
    });
    // $(".carousel .card5").click(function () {
    //   const index = 4;
    //   console.log(index)
    //   reviewContainer.find("img").attr("src", "images/photo.png");
    //   reviewContainer.find(".jeweller-name").text(jewellerNames[index]);
    //   reviewContainer.find(".jeweller-shop").text(jewellerShops[index]);
    //   reviewContainer.find("p").text(jewellerReviews[index]);
    // });
  });
});
