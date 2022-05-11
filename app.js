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

// Hovering the "coding word"
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
});