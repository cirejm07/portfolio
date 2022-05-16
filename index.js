$(document).ready(function() {


// GSAP - quickSetter mouse follower
gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = $(".ball")
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

console.log($("window"))

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

//GSAP - Typewritter plugin
gsap.to("#intro", {text: "Front-end Developer",duration: 3, ease: "back", repeat: -1, yoyo:true})

// GSAP - Timeline
let tl = gsap.timeline({defaults:{ease:"back", opacity:0}});
tl
.from("#avatar", {y:50, duration: 2})
.from("#tech-img",{y:50, duration: 1}, "-=0.7")

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

// Hovering the "coding word" a tool-tip will appear
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
    function(){$(this).find(".view-project").fadeToggle(500);}
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