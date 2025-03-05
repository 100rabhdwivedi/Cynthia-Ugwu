function firstPage() {
  let tl = gsap.timeline();

  // Animate nav from above with opacity fade-in
  tl.to(".loadingpage",{
    y: -1500,
    opacity: 0,
    duration: 1.5,
    ease: "ease-in-out",
    delay:1,
    display:"none"
    
  })
  tl.from("nav", {
    y: -10,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
    // Animate the heading h1 inside the .bounding container
    .to(".bounding h1", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power4.out",
      stagger: 0.3,
      // delay: -0.5
    })
    .to(".firstfooter", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: -2,
      ease: "power4.out",
    });
}
firstPage();

var cursor = document.querySelector(".minicursor");
function cursorFollower(xscale, yscale) {
  window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      duration: 0.5,
      ease: "ease-In",
    });
  });
}
cursorFollower();

document.querySelectorAll(".elem").forEach((elem) => {
  // Set up the mouseleave event for the entire .elem
  elem.addEventListener("mouseleave", () => {
    // Add a slight delay or check if the image is really out of view
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: "ease-in",
    });
    gsap.to(elem,{
      color: "#fff",
      paddingLeft: " 0px",  
      paddingRight: "0px",
      duration: 0.5,
      ease: "ease-in ",
      // innerText:"",
    })
    gsap.to(cursor,{
      scale:1,
      duration: 0.5,
      ease: "elastic.out",
      innerText:"",
    })
  });
  elem.addEventListener("mouseenter", () => {
    // Add a slight delay or check if the image is really out of view
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "ease-in",
    });
    gsap.to(elem,{
      color: "rgba(80, 80, 80, 0.4)",
      paddingLeft: " 20px",  
      paddingRight: "20px",
      duration: 0.5,
      ease: "ease-in ",
      // innerText:"",
    })
    gsap.to(cursor,{
      scale:5,
      duration: 0.5,
      ease: "elastic.out",
      innerText:"View",
      
    })
  });

  var rot = 0;
  var diffRot = 0;

  // Set up mousemove to track the mouse position within .elem
  elem.addEventListener("mousemove", (dets) => {
    var diffY = dets.clientY - elem.getBoundingClientRect().top;
    diffRot = dets.clientX - rot;
    rot = dets.clientX;

    // console.log(diffY);  // Optional for debugging the mouse position

    gsap.to(elem.querySelector("img"), {
      top: diffY,
      left: dets.clientX,
      duration: 0.5,
      ease: "ease-in",
      rotate: gsap.utils.clamp(-20, 20, diffRot),
    });
    
   
  });
});

function arrowBord() {
  document.querySelectorAll(".bord").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
         borderBottom:"1px solid white",
         duration: 0.5,
         ease: "elastic.out",
         borderInlineWidth:'100%'
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        borderBottom: "0px solid black",
      });
    });
    
  });
}
arrowBord();

function Marquee(){
  var marquee = document.querySelector('.marquee');
  gsap.to(marquee, {
    x: '-100%',
    ease: "linear",
    repeat: -1,
    duration: 40,
    
  })
}
Marquee()

function updateTime() {
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  document.getElementById("india-time").innerText =
    new Date().toLocaleTimeString("en-US", options);
}

var menu = document.querySelector('.menu');
var smallnav = document.querySelector('.smallnav');
var cross = document.querySelector('.smallnav .text-right i');

menu.addEventListener('click', () => {
  let tl = gsap.timeline();

  tl.to(smallnav, {
    opacity: 1,
    duration: 0.5,
    ease: "power4.out",
    display: "block", // Show the small nav
  });


  tl.to('.smallnav a', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
  });

  gsap.to(menu, {
    opacity: 0,
    display: 'none', 
    duration: 0.5,
    ease: "power4.out",
  });

  console.log("Menu clicked");
});

// Close button functionality
cross.addEventListener('click', () => {
  let tl = gsap.timeline();

  tl.to(smallnav, {
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
    display: "none", // Hide the small nav
  });

  tl.to(menu, {
    opacity: 1,
    display: 'block',
    duration: 0.5,
    ease: "power4.out",
  });

  console.log("Cross clicked");
});


// Update time every second
setInterval(updateTime, 1000);

// Initial call to show time immediately
updateTime();
