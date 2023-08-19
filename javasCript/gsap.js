function initScrollTriggerAnimation() {
    if (window.innerWidth >= 1000) {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.to(".segunda-parte", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".segunda-parte",
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      });
    }
  }
  
  // Ejecuta la función inicialmente y luego escucha los cambios de tamaño de ventana
  initScrollTriggerAnimation();
  
  window.addEventListener("resize", function () {
    // Reinicializa la animación si el ancho de la ventana es mayor o igual a 1000 píxeles
    initScrollTriggerAnimation();
  });
  