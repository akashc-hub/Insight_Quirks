ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});


ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",

  scale: 0.4,
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
    + "   rotateX(" + calcX + "deg) "
    + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function () {
    transformElement(ex1Layer, position);
  });
};





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

  breakpoints: {
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


var navLink = gsap.utils.toArray(".features-title3"),
  imgWrap = document.querySelector(".img-wrapper"),
  imgItem = document.querySelector(".img-placeholder img");


function moveImg(e) {
  var mouseX = e.clientX,
    mouseY = e.clientY
  t1 = gsap.timeline();
  t1.to(imgWrap, {
    duration: 1,
    x: mouseX,
    y: mouseY,
    ease: Expo.ease
  })
}


function linkHover(e) {
  if (e.type === "mouseenter") {
    var imgSrc = e.target.dataset.src;
    var t1 = gsap.timeline();


    t1.set(imgItem, {
      attr: { src: imgSrc }
    }).to(imgWrap, {
      autoAlpha: 1,
      scale: 2
    });
  } else if (e.type === "mouseleave") {
    var t1 = gsap.timeline();
    t1.to(imgWrap, {
      autoAlpha: 0,
      scale: 0.2
    })
  }

}


function initAnimation() {
  navLink.forEach(link => {
    link.addEventListener('mouseenter', linkHover);
    link.addEventListener('mouseleave', linkHover);
    link.addEventListener('mousemove', moveImg);
  })
}

function init() {
  initAnimation();
}

window.addEventListener("load", function () {
  init();
})

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});

const msg = document.querySelector(".msg");
const sumbitbtn = document.getElementById("submitbtn");

msg.addEventListener("focus", submsg);

function submsg() {
  sumbitbtn.style.display = "block";
  sumbitbtn.style.animation = "slide 0.5s ease-in-out";
}


/*function() {
	var i = 0;
	setInterval(function() {
		$("#quote-" + i).removeClass("main");
		$("#quote-" + i).addClass("outside");
		i++;
		if(i>1) {
			for(i = 0;) {
				$("#quote" + i).removeClass("outside");
			}
			i = 0;
		}
		$("#quote" + i).addClass("main");
	}, 5000);
});*/




document.addEventListener("DOMContentLoaded", function() {
  const quotes = document.querySelectorAll(".quote");
  let currentQuote = 0;

  function showQuote(index) {
    quotes.forEach((quote, i) => {
      if (i === index) {
        quote.style.display = "block";
      } else {
        quote.style.display = "none";
      }
    });
  }

  function autoSlide() {
    showQuote(currentQuote);
    currentQuote = (currentQuote + 1) % quotes.length;
    setTimeout(autoSlide, 4000); // Change quote every 5 seconds (adjust as needed)
  }

  autoSlide();
});

(function () {
  const birthday = new Date("2023-10-14").getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Check if it's your birthday
    if (distance < 0) {
      document.getElementById("countdown").style.display = "block";

      // Add your birthday events here
      // const eventsList = document.getElementById("eventsList");
      // eventsList.innerHTML = "<li>Event 1: Event description</li><li>Event 2: Event description</li>";

      clearInterval(x);
    }
  }, 1000);
})();






const podslides = [
	{
		title: 'Socail Hiccups',
		descr: 'This powerful 21" Ferrite subwoofer brings you 3200 watts of program power (1600 W AES) with ultra-low distortion and air noise thanks to its aluminum demodulation ring and FEA optimized magnetic circuit.',
		price: '',
		src: './images/event_1.png',
		srcset: '',
		bg: '#FF6600',
	},
	{
		title: 'Git & Github Workshop',
		descr: 'We are excited to announce an upcoming workshop on Git, GitHub, and open source, where you can learn the fundamentals of version control, collaboration, and the significance of contributing to meaningful open-source projects',
		price: '',
		src: './images/event_2.png.jpg',
		srcset: '',
		bg: '#000',
	},
	{
		title: 'AppScript Workshop',
		descr: 'We conducted a Google Apps Script workshop with industry experts, and it was truly an exceptional session. We covered a variety of topics, including how to send emails from Google Sheets and much more.',
		price: '',
		src: './images/event_3.png.jpg',
		srcset: '',
		bg: '#FF0000',
	},
	// {
	// 	title: 'CP12/N',
	// 	descr: 'This ferrite compression tweeter delivers a program power of 30 Watts (15 W. AES) of high frequency response, thanks to its voice coil and its aluminum diaphragm and its precise directivity (40° conical).',
	// 	price: '45.00 &euro;',
	// 	src: './images/event_1.png',
	// 	srcset: '',
	// 	bg: '#FF8800',
	// },
	// {
	// 	title: 'T2030',
	// 	descr: 'This  ferrite dome tweeter is designed for high frequency reproduction in multi-way audio systems. It offers a program power of 30 watts (15 watts RMS); with a 1" aluminum voice coil and diaphragm.',
	// 	price: '58.50 &euro;',
	// 	src: './images/event_1.png',
	// 	srcset: '',
	// 	bg: '#FFAA00',
	// }

];

class PodSliders {

	constructor(elm) {
		this.elm_wrap   = elm;
		this.elm_text   = elm.querySelector('.podslider_text');
		this.elm_image  = elm.querySelector('.podslider_images');
		this.elm_title  = elm.querySelector('.podslider_title');
		this.elm_descr  = elm.querySelector('.podslider_descr');
		this.elm_price  = elm.querySelector('.podslider_price');
		this.elm_noxt   = elm.querySelector('.podslider_noxt');
		this.elm_next   = elm.querySelector('.podslider_next');
		this.elm_curr   = elm.querySelector('.podslider_curr');
		this.elm_prev   = elm.querySelector('.podslider_prev');
		this.elm_prov   = elm.querySelector('.podslider_prov');
		this.elm_goprev = elm.querySelector('.podslider_goprev');
		this.elm_gonext = elm.querySelector('.podslider_gonext');

		this.elm_curr.addEventListener('transitionend', this.stopped.bind(this));

		const varname = elm.dataset.slides;
		this.slides  = eval(varname) || [];
		this.idx_min = 0;
		this.idx_cur = 0;
		this.idx_max = this.slides.length-1;

		const resized = (entries) => {
			this.elm_wrap.style.setProperty('--grid-size-x', (this.elm_image.offsetWidth / 8)+'px');
			this.elm_wrap.style.setProperty('--grid-size-y', (this.elm_image.offsetHeight / 8)+'px');
		};
		resized();
		(new ResizeObserver(resized)).observe(this.elm_image);

		this.render(false);
    this.elm_wrap.classList.add('shown')
		this.elm_goprev.addEventListener('click', this.render.bind(this, -1));
		this.elm_gonext.addEventListener('click', this.render.bind(this, +1));
	}

	render(moves) {
		const slides = this.get_slides(this.idx_cur);

		if(moves===false) {
			this.elm_prov.src = slides[0].blob || slides[0].src;
			this.elm_prev.src = slides[1].blob || slides[1].src;
			this.elm_curr.src = slides[2].blob || slides[2].src;
			this.elm_next.src = slides[3].blob || slides[3].src;
			this.elm_noxt.src = slides[4].blob || slides[4].src;
		} else {
			if(-1===moves) if(--this.idx_cur<this.idx_min) this.idx_cur = this.idx_max;
			if(+1===moves) if(++this.idx_cur>this.idx_max) this.idx_cur = this.idx_min;
			const cname = moves<0 ? 'backward' : 'foreward';
			this.elm_prov.classList.add(cname);
			this.elm_prev.classList.add(cname);
			this.elm_curr.classList.add(cname);
			this.elm_next.classList.add(cname);
			this.elm_noxt.classList.add(cname);
		}

		this.elm_title.innerHTML = slides[2].title;
		this.elm_descr.innerHTML = slides[2].descr;
		this.elm_price.innerHTML = slides[2].price;
		this.elm_wrap.style.background = slides[2].bg;

	}

	stopped() {
		this.elm_prov.classList.remove('foreward'); this.elm_prov.classList.remove('backward');
		this.elm_prev.classList.remove('foreward'); this.elm_prev.classList.remove('backward');
		this.elm_curr.classList.remove('foreward'); this.elm_curr.classList.remove('backward');
		this.elm_next.classList.remove('foreward'); this.elm_next.classList.remove('backward');
		this.elm_noxt.classList.remove('foreward'); this.elm_noxt.classList.remove('backward');
		this.render(false);
	}

	get_slides(idx) {
		let x1, x2, x3, x4, x5;
		const slides = [];
		x1 = idx-2; if(x1<this.idx_min) x1 = x1 + this.idx_max + 1; slides.push(this.slides[x1]);
		x2 = idx-1; if(x2<this.idx_min) x2 = x2 + this.idx_max + 1; slides.push(this.slides[x2]);
		x3 = idx;                                                   slides.push(this.slides[x3]);
		x4 = idx+1; if(x4>this.idx_max) x4 = x4 - this.idx_max - 1; slides.push(this.slides[x4]);
		x5 = idx+2; if(x5>this.idx_max) x5 = x5 - this.idx_max - 1; slides.push(this.slides[x5]);
		console.log(idx, '>', x1, x2, x3, x4, x5);
		return slides;
	}

}

document.querySelectorAll('.podslider_wrap').forEach(elm => new PodSliders(elm));
