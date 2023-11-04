(function () {
    const safeToAnimate = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    ).matches;
    if (!safeToAnimate) return;
  
  
    // Get the elements that we need
    const dom = {
      face: document.querySelector(".face"),
      mark: document.querySelector(".mark"),
      eye: document.querySelectorAll(".eyes"),
      innerFace: document.querySelector(".inner-face"),
      hairFront: document.querySelector(".hair-front"),
      hairBack: document.querySelectorAll(".hair-under"),
      ear: document.querySelectorAll(".ears"),
      eyebrowLeft: document.querySelector(".eyebrow-left"),
      eyebrowRight: document.querySelector(".eyebrow-right"),
      shadow: document.querySelector(".shadow"),
    };
  
    let xPosition;
    let yPosition;
  
    let storedXPosition;
    let storedYPosition;
  
    // Set up our coordinate mapping with GSAP utils!
    let mapWidth;
    let mapHeight;
    function setMaps() {
      mapWidth = gsap.utils.mapRange(0, innerWidth, -50, 50);
      mapHeight = gsap.utils.mapRange(0, innerHeight, -50, 50);
    }
    window.addEventListener("resize", setMaps);
    
    setMaps();
  
    function moveSVG() {
      // only recalculating if the value changes
      if (storedXPosition === xPosition && storedYPosition === yPosition) return;
      x = xPosition;
      y = yPosition;
  
      // if (xPosition && yPosition) {
      // dom.screenlog.innerHTML = `
      // <p> x: ${Math.round(x)}</p>
      // <p> y: ${Math.round(y)} </p>`;
      // }
  
      gsap.to(dom.face, {
        yPercent: y / 30,
        xPercent: x / 30,
      });
      gsap.to(dom.mark, {
        yPercent: y / 15,
        xPercent: x / 3,
      });
      gsap.to(dom.eye, {
        yPercent: y / 3,
        xPercent: x / 5,
      });
      gsap.to(dom.innerFace, {
        yPercent: y / 6,
        xPercent: x / 6,
      });
      gsap.to(dom.hairFront, {
        yPercent: y / 10,
        xPercent: x / 22,
      });
      gsap.to(dom.hairBack, {
        yPercent: (y / 20) * -1,
        xPercent: (x / 20) * -1,
      });
      gsap.to(dom.ear, {
        yPercent: (y / 3) * -1,
        xPercent: (x / 15) * -0.4,
      });
      gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
        yPercent: y * 2.5,
      });
      gsap.to(dom.shadow, {
        yPercent: y / 10,
      });
  
      // update the stored positions with the current positions
      storedXPosition = xPosition;
      storedYPosition = yPosition;
    }
  
    // gsap's RAF, falls back to set timeout
    gsap.ticker.add(moveSVG);
    // updating the mouse coordinates
    function updateMouseCoords(event) {
      xPosition = mapWidth(event.clientX);
      yPosition = mapHeight(event.clientY);
    }
    
    window.addEventListener("mousemove", updateMouseCoords);
    
    
    
    const blink = gsap.timeline({
      repeat: -1,
      repeatDelay: .1,
      yoyo: true
    })
    .to(".open-eyes", {
      opacity: 0, duration: 0
    }, 5);
    
    const smile = gsap.timeline({
      defaults: {
        duration: 0
      }
    })
    .paused(true)
    .reversed(true)
    .from(".open-mouth, .sparkle", {
      opacity: 0,
    })
    .to(".open-mouth, .sparkle", {
      opacity: 1,
    })
    .to({}, {duration: 0.5});

    function isBigScreen() {
      return window.innerWidth >= 767;
    }

    // create the smile animation hook
    function handleSmileEvents() {
      if(isBigScreen()) {
        $(".smile").mouseenter(function() {
            // clearTimeout($(this).data('timeout'));
            // {
                // gsap.to(".open-mouth, .sparkle", {opacity: 1, duration: 0});
                smile.play();
                blink.pause();
            // }
        }).mouseleave(function() {
            // $(this).data('timeout', setTimeout(function() {
                // gsap.to(".open-mouth, .sparkle", {opacity: 0, duration: 0});
                smile.reverse();
                blink.resume();
                // gsap.delayedCall(.5, blink.resume());
            // }, 300));
        });
      }
      else {
        $("#nav-toggle").on('click', () => {
          // console.log(smile.reversed());
          // smile.reversed(!smile.reversed());
          smile.reversed() ? blink.resume() : blink.pause();
          smile.reversed() ? smile.play() : smile.reverse();
          // smile.reversed(!smile.reversed());
        });
      }
    }
    
    $(window).on("windowWidthChanged", handleSmileEvents);
    handleSmileEvents();
  
  })();
  