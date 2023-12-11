// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// Page transition
window.onload = () => {
    const anchors = document.querySelectorAll('a');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        console.log(target);
  
        transition_el.classList.add('is-active');
  
        console.log(transition_el);
  
        setInterval(() => {
          window.location.href = target;
        }, 500);
      })
    }
  };

// Locomotive scroll
const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// Scroll trigger
const boxes = gsap.utils.toArray('.scroll');
boxes.forEach(scroll => {
  gsap.to(scroll, { 
    x: 300,
    scrollTrigger: {
      trigger: box,
      scrub: true
    }
  })
});

// arrow bounce
gsap.to(".arrow2",{y:100, delay: 1, duration: 2, ease: "bounce.inout", repeat: -1,});

// Appear from the top
gsap.to(".appear-top", { top: 50, opacity:1,})

// Verticle header change - index page
var line = $('.line');

var tl = new TimelineLite({
			onComplete: function(){
				tl.restart();
			}
		});

 
TweenLite.defaultEase = Circ.easeInOut;

var time = 0.9;
var y = 100;

tl.add(TweenMax.staggerFromTo( line, time,
			{
				opacity: 0,
				y: y,
			},
			{	
				opacity: 1,
				y: 0,
			}, 2))
	.add(TweenMax.staggerTo(line, time,
			{
				delay: time,
				opacity: 0,
				y: -y,
			}, 2), 1.3);
