ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
    reset: false
});


ScrollReveal().reveal(".fade-in", {
    duration: 3000,
    origin: "bottom",
    distance: "200px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",

    scale:0.4,
    rotate: {
        x: 20,
        z: -10
    }
    
});


// async function getRandomInspirationQuote() {
//     try {
//         const response = await fetch('https://zenquotes.io/api/random');
//         const data = await response.json();
//         console.log("response: " + JSON.stringify(data));
//         // Extract the random quote and author from the response.
//         const randomQuote = data[0].q;
//         const randomAuthor = data[0].a;

//         // Update the content of the <span> with the quote and author.
//         const rolltext = document.getElementById("rolltext");
//         rolltext.innerHTML = `"${randomQuote}" - ${randomAuthor}`;
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }
let constrain = 20;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};



const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Check the user's preference from local storage
const userPreference = localStorage.getItem('mode');

// Set the initial mode based on user preference or default to light mode
if (userPreference === 'dark') {
  body.classList.add('dark-mode');
} else {
  body.classList.add('light-mode');
}

// Function to toggle between dark mode and light mode
function toggleMode() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('mode', 'light'); // Store user preference
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark'); // Store user preference
  }
}

// Event listener for the mode toggle button
modeToggle.addEventListener('click', toggleMode);

 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
