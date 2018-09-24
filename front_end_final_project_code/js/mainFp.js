"use strict";



$(document).ready(function () {








    // indexFp(About Us) starts----------------------------------------------------------------------------!!!!!!!!!




    let scrolPos = $("body").scrollTop();

    // Drop down list of lamguages
    $(".dropLang").click(function () {
        $(".dropDown").toggle();
    })

    // Drop down list of lamguages for homepage (clone)
    $(".dropLangH").click(function () {
        $(".dropDownH").toggle();
    })


    // Search drop-down window
    $(".search").click(function () {
        $(".searchWindow").toggle();
    })
    // Search drop-down window for homepage
    $(".searchH").click(function () {
        $(".searchWindowH").toggle();
    })



    // Scroll events start
    $(window).scroll(function () {
        if (window.pageYOffset > 200) {
            $(".headerBottom").addClass("invisible").css("opacity", 0);
        }
        if (window.pageYOffset > 320 || window.pageYOffset == 0) {
            $(".headerBottom").removeClass("invisible").css("opacity", 1);
        }


        $(".headerBottom").addClass("shadow");

        $(".headerBottom").addClass("shadow");
        $(".upTo").removeClass("invisible").css("opacity", "1");
        if (window.pageYOffset == 0) {
            $(".upTo").addClass("invisible").css("opacity", "0");
        }
    })
    // Scroll events end





    // Scroll events start for homepage(clone)
    $(window).scroll(function () {
        // if (window.pageYOffset > 200) {
        //     $(".headerBottomH").addClass("invisible").css("opacity", 0);
        // }
        // if (window.pageYOffset > 320 || window.pageYOffset == 0) {
        //     $(".headerBottomH").removeClass("invisible").css("opacity", 1);
        // }


        // $(".headerBottomH").addClass("shadow");

        
        $(".upTo").removeClass("invisible").css("opacity", "1");
        if (window.pageYOffset == 0) {
            $(".upTo").addClass("invisible").css("opacity", "0");
        }
    })





    // back to top button starts
    $(".upTo").click(function () {

        if (window.pageYOffset != 0) {
            $("body,html").animate({ scrollTop: 0 }, '800');
        }
        return true;
    })
    // back to top button ends





    $(".items").click(function () {
        $(this).siblings(".items").removeClass(".activeListItem");
        $(this).addClass(".activeListItem");
    })

    // indexFp(About Us) ends----------------------------------------------------------------------------!!!!!!!!!















  
  
    // comming soon page starts
   
let countDownDate = new Date("December 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();
    
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    $("#day").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
    
  
}, 1000);
    // comming soon page ends



   


    $(document).ready(function(){


        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:3000,
            smartSpeed:1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:1
                }
            }
        })
        
      });








});