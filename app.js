$(document).ready(function() {

// Navbar
//set current scroll to 0
var currentScroll = 0; 
// set the current DOM document $(window) with a jQuery .scroll function in order to access the Y axis of the scroll bar.
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  var nav = $('nav');
//set delay of the function to 100ms
  setTimeout(function(){
// If scrolling down... add .hide class to <nav> element
    if (scrollTop > currentScroll){
      nav.addClass('hide');
// if scrolling up, remove the .hide class to <nav> element
    } else {
      nav.removeClass('hide');
    }
    currentScroll = scrollTop;
  }, 100);
});

// Hovering the "coding word" a tool-tip will apprear
    $('.ingredients-logo-container').hover(
    function(){$(this).find(".ingredients-logo-text").fadeIn(150);},
    function(){$(this).find(".ingredients-logo-text").fadeOut(300);},
    )
    
   $('#coding').hover(
       
       function(){$('#interested-in-coding a').css(
           {
               "visibility":"visible",
               "transition-delay" : "0.2s"
            }
           )},
       function(){$('#interested-in-coding a').css("visibility","hidden")}
       )

// Hovering the tool-tip anchor tag
    $('#interested-in-coding a').hover(
        function(){$(this).css(
            {"visibility" : "visible",
            "transition-delay" : "-0.2s"
        }
            )},
        function(){$(this).css("visibility","hidden")}
        )

    // when hover, the parent will find it child element "cards-title" and add a class title of "hide-element"
    $(".cards").hover(
      function(){$(this).find(".cards-title").addClass("hide-element")},
      function(){$(this).find(".cards-title").removeClass("hide-element")},
      )

    // Show project description and anchor tag
    $(".cards").hover(
    function(){$(this).find(".view-project").slideToggle(500);}
    )

    // slider testimonial
    card=1;
    $(".prev").click(function(){
       if(card==0)
        {
            $("#side1").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.5)");
            $("#side2").css("transform","translateX(-100px) scale(1)");
            $("#side3").css("transform","translateX(100px)");
            card=1;
        }
        else if(card==1)
        {
            $("#side3").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.5)");
            $("#side1").css("transform","translateX(-100px) scale(1)");
            $("#side2").css("transform","translateX(100px)");
            card=2;
        }
        else if(card==2)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.5)");
            $("#side3").css("transform","translateX(-100px) scale(1)");
            $("#side1").css("transform","translateX(100px)");
            card=0;
        }
    });
    $(".next").click(function(){
       if(card==0)
        {
            $("#side3").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.5)");
            $("#side1").css("transform","translateX(-100px) scale(1)");
            $("#side2").css("transform","translateX(100px)");
            card=2;
        }
        else if(card==1)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.5)");
            $("#side3").css("transform","translateX(-100px) scale(1)");
            $("#side1").css("transform","translateX(100px)");
            card=0;
        }
        else if(card==2)
        {
            $("#side1").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.5)");
            $("#side2").css("transform","translateX(-100px) scale(1)");
            $("#side3").css("transform","translateX(100px)");
            card=1;
        }
    });    


});