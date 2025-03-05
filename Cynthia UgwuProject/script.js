function firstPage() {
  let tl = gsap.timeline();

  // Animate nav from above with opacity fade-in
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
  });
  elem.addEventListener("mouseenter", () => {
    // Add a slight delay or check if the image is really out of view
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: "ease-in",
    });
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

// Update time every second
setInterval(updateTime, 1000);

// Initial call to show time immediately
updateTime();
