(function () {
    const safeToAnimate = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    ).matches;
    if (!safeToAnimate) return;
  
    // Main container for the SVG
    const svg = {
      face: document.querySelector("#face"),
      mark: document.querySelector("#mark"),
      eye: document.querySelectorAll("#eyes"),
      innerFace: document.querySelector("#inner-face"),
      hairFront: document.querySelector("#hair-front"),
      hairBack: document.querySelectorAll("#hair-under"),
      ear: document.querySelectorAll("#ears"),
      eyebrowLeft: document.querySelector("#eyebrow-left"),
      eyebrowRight: document.querySelector("#eyebrow-right"),
      shadow: document.querySelector("#shadow"),
    };
  
    let xPosition;
    let yPosition;
  
    let storedXPosition;
    let storedYPosition;
  
    // Setting up coordinates/maps
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
      
      const { face, mark, eye, innerFace, hairFront, hairBack, ear, eyebrowLeft, eyebrowRight, shadow } = svg;

      gsap.to(face, {yPercent: y / 30, xPercent: x / 30,});
      gsap.to(mark, {yPercent: y / 15, xPercent: x / 3,});
      gsap.to(eye, {yPercent: y / 3, xPercent: x / 5,});
      gsap.to(innerFace, {yPercent: y / 6, xPercent: x / 6,});
      gsap.to(hairFront, {yPercent: y / 10, xPercent: x / 22,});
      gsap.to(hairBack, {yPercent: (y / 20) * -1, xPercent: (x / 20) * -1,});
      gsap.to(ear, {yPercent: (y / 3) * -1, xPercent: (x / 15) * -0.4,});
      gsap.to([eyebrowLeft, eyebrowRight], {yPercent: y * 2.5, });
      gsap.to(shadow, {yPercent: y / 10,});
  
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
      yoyo: true})
      .to("#open-eyes", {
        opacity: 0, duration: 0
      }, 5);
    
    const smile = gsap.timeline({
      defaults: {
        duration: 0
      }})
      .paused(true)
      .reversed(true)
      .from("#open-mouth, #sparkle, #teeth-color", {
      opacity: 0 })
      .to("#open-mouth, #sparkle, #teeth-color", {
      opacity: 1 })
      .to({}, {duration: 0.5});


    function isBigScreen() {
      return window.innerWidth >= 767;
    }

    // create the smile animation hook
    function handleSmileEvents() {
      if(isBigScreen()) {
        $(".smile").mouseenter(function() {
                smile.play();
                blink.pause();
        }).mouseleave(function() {
                smile.reverse();
                blink.resume();
        });
      }
      else {
        $("#nav-toggle").on('click', () => {
          smile.reversed() ? blink.pause() : blink.resume();
          smile.reversed() ? smile.play() : smile.reverse();
        });
      }
    }

    // function handleEyebrowEvents() {
    //   $(".title").mouseenter(() => {
    //     const [eyebrow, origin, rotate] = xPosition < 0
    //       ? [svg.eyebrowRight, "100% 0%", 10]
    //       : [svg.eyebrowLeft, "0% 0%", -10];
    //     gsap.to(eyebrow, { y: -2, transformOrigin: origin, rotate });
    //   }).mouseleave(() => {
    //     gsap.to([svg.eyebrowLeft, svg.eyebrowRight], { y: 0, rotate: 0 });
    //   });
    // }
    
    $(window).on("windowWidthChanged", handleSmileEvents);
    handleSmileEvents();
    // handleEyebrowEvents();
  
  })();
  