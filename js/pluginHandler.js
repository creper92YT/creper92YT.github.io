new TypeIt(".header-write", {
    speed: 70,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 0
  })
    .type(" Front-End Developer")
    .pause(1000)
    .move(-10)
    .delete(9)
    .type('Discord Bot')
    .move('END')
    .pause(1000)
    .move(-10)
    .delete(11)
    .type('Roblox')
    .move('END')
    .pause(500)
    .go();

ScrollReveal({ reset: false, interval: 10})
ScrollReveal().reveal('.section-title', { delay: 150 });
ScrollReveal().reveal('.about-img', { delay: 300});
ScrollReveal().reveal('.load1', { delay: 100});
ScrollReveal().reveal('.load2', { delay: 200});
ScrollReveal().reveal('.load3', { delay: 300});
ScrollReveal().reveal('.load4', { delay: 400});