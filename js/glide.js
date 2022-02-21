const config = {
  type: "carousel",
  perView: 4,
  breakpoints: {
    900: {
      perView: 2,
      peek: 50,
    },
    768: {
      perView: 1,
      peek: 50,
    },
  },
};

new Glide(".glide", config).mount();
