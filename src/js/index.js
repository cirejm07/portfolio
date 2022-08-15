$(document).ready(function() {


// GSAP - quickSetter mouse follower
gsap.set(".cursor", {xPercent: -50, yPercent: -50});

const cursor = $(".cursor")
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

//GSAP - Typewritter plugin
gsap.to("#intro", {text: "Jeric Moreno",duration: 3, ease: "back", repeat: -1, yoyo:true})



// Navbar
//set current scroll to 0
var currentScroll = 0; 
// set the current DOM document $(window) with a jQuery .scroll function in order to access the Y axis of the scroll bar.

// console.log($(window))
$(window).scroll(function(){
  let innerHeight = $(this).innerHeight()
  innerHeight = 200;
  var scrollTop = $(this).scrollTop();
  var nav = $('nav');
//set delay of the function to 100ms
  setTimeout(function(){

if (scrollTop >= innerHeight ) {
  nav.addClass("nav-colored");
  nav.removeClass("nav-transparent");
} 
else {
  nav.addClass("nav-transparent");
  nav.removeClass("nav-colored");
}

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

// Hovering the "coding word" a tool-tip will appear
    $('.ingredients-logo-container').hover(
    function(){$(this).find(".ingredients-logo-text").fadeIn(150);},
    function(){$(this).find(".ingredients-logo-text").fadeOut(300);},
    )
    
  

    // when hover, the parent will find it child element "cards-title" and add a class title of "hide-element"
    $(".cards").hover(
      function(){$(this).find(".cards-title").addClass("hide-element")},
      function(){$(this).find(".cards-title").removeClass("hide-element")},
      )

    // Show project description and anchor tag
    $(".cards").hover(
    function(){$(this).find(".view-project").fadeToggle(250);}
    )

    // slick slider
    
    $('.slider').slick({
      dots: true,
      infinite: true,
      autoplay:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

});