$(document).ready(function(){

  // Side Navbar
    $(".topggleBtn").click(function(e){
      e.preventDefault();
      $(".sideBar").css({"right":"0","transition":"all 0.5s ease"});
      $(".sideBar .navContent").css({"opacity":"1","transform":"translateX(0)","transition":"all 2s ease"});
    });

    $(".closeBtn").click(function(e){
      e.preventDefault();
      $(".sideBar .navContent").css({"opacity":"0","transform":"translateX(60px)","transition":"all 0.5s ease"});
      $(".sideBar").css({"right":"-280px","transition":"all 1.5s ease"});
    })

    window.onscroll = function() {scrollFuncToggle();scrollFuncToTop();};

    function scrollFuncToggle() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".topggleBtn").css({"padding":"0 0.5rem","background":"#000"})
      } else {
        $(".topggleBtn").css({"padding":"0","background":"unset"})
      }
    }

    function scrollFuncToTop() {
      if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 20) {
        $(".toTop").css({"opacity":"1"})
      } else {
        $(".toTop").css({"opacity":"0"})
      }
    }

    //To Top
    function topFunction() {
      document.documentElement.scrollTop = 0;
    }

    $(".toTop").click(function(){
      topFunction();
    })

    // Social Network Hover
    $(".socNets ul li").mouseenter(function(){
      $(this).find("span").css({"opacity":"1","transform":"scale(1)"})
    })
    $(".socNets ul li").mouseleave(function(){
      $(this).find("span").css({"opacity":"0","transform":"scale(0)"})
    })

  $(".partner .owl-carousel").owlCarousel({
    loop:true,
    dots:true,
    margin:25,
    infinity:true,
    responsive:{
        0:{
            items:1
        },
        478:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    }
  });

  $(".testimonial .owl-carousel").owlCarousel({
    loop:true,
    margin:35,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
  });

  });

  //Scroll Animation
  AOS.init();

  //Counter Plugin
  let counterClass ='.counter';
  let visibilityIds = ['#counters_1'];
  