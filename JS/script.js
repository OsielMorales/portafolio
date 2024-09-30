const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

/*----------------AOS-------------------------*/
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});
/*----------------Multiple text-------------------------*/ 
const typed = new Typed('.multiple-text', {
    strings: ['Frontend', 'Marketing Digital', 'SEO', 'KPI', 'Róbotica'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
    showCursor: false,
    onEnter: (arrayPos) => {
      const textWidth = typed.element.offsetWidth;
      const containerWidth = typed.element.parentElement.offsetWidth;
  
      if (textWidth > containerWidth) {
        typed.options.backSpeed = 50;
      } else {
        typed.options.backSpeed = 100;
      }
    }
  });