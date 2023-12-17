// CAROUSEL
const wrapper = document.querySelector('#carousel-row');
const carouselBox = document.querySelector('#carousel-box');
const children = wrapper.querySelectorAll('.testimonial');
const leftArr = document.querySelector('.testimonials__arrow--left');
const rightArr = document.querySelector('.testimonials__arrow--right');

let counter = 0; //keeps track of how much we've moved the cards
let infiniteCounter = 0; //helps us know if we're moving left or right

const tabPort = window.matchMedia("(max-width: 900px)");
const phone = window.matchMedia("(max-width: 600px)");
const tabLand = window.matchMedia("(max-width: 1200px)");

carouselBox.addEventListener('click', function (e) {
  wrapper.style.transition = '.3s ease all';
  if (e.target.classList.contains('testimonials__arrow--left')) {
     infiniteCounter = -1;
    if (phone.matches) {
      counter += 107.5;
      wrapper.style.transform = `translateX(${counter}%)`;
    } else if (tabPort.matches) {
      counter += 55.3;
      wrapper.style.transform = `translateX(${counter}%)`;
    } else if (tabLand.matches) {
      counter += 35.5;
      wrapper.style.transform = `translateX(${counter}%)`;
    } else {
      counter += 34.5;
      wrapper.style.transform = `translateX(${counter}%)`;
    }
  }

  if (e.target.classList.contains('testimonials__arrow--right')) {
    infiniteCounter = 1;
    if (phone.matches) {
      counter -= 107.5;
      wrapper.style.transform = `translateX(${counter}%)`;
    } else if (tabPort.matches) {
      counter -= 55.3;
       wrapper.style.transform = `translateX(${counter}%)`;
    } else if (tabLand.matches) {
      counter -= 35.5;
      wrapper.style.transform = `translateX(${counter}%)`;
    } else {
      counter -= 34.5;
      wrapper.style.transform = `translateX(${counter}%)`;
    }
  }
});

const infiniteCarousel = function () {
  wrapper.style.transition = 'none';
  counter = 0;

  if (infiniteCounter === 1) {
    wrapper.appendChild(wrapper.firstElementChild); //removes the first review element from the wrapper and appends it to the end
    wrapper.style.transform = `translateX(0%)`; //positioning the carousel as if the first review is the current one
  }

  if (infiniteCounter === -1) {
    wrapper.style.transform = `translateX(0%)`; //positioning the carousel as if the last review is the current one
    wrapper.prepend(wrapper.lastElementChild); //removes the last review element from the wrapper and prepends it to the beginning
  }
}

wrapper.addEventListener('transitionend', infiniteCarousel);

// MODAL WINDOW
const modal = document.querySelector('#modal');
const modalContent = document.querySelector(".modal__content");
const btnsOpenModal = document.querySelectorAll(".btn-open-modal");
const btnCloseModal = document.querySelector(".modal__close");

const openModal = function () {
  modal.classList.add('visible');
  modalContent.classList.add('visible--content');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
  modal.classList.remove('visible');
  modalContent.classList.remove('visible--content');
};

modal.addEventListener("click", closeModal);
btnCloseModal.addEventListener('click', closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains(".visible") ) {
      closeModal();
    }
  }
});

// NAVIGATION
// const navList = document.querySelector('.navigation__list');

// if (phone.matches) {
//   navList.classList.add('hidden')
// }

// window.addEventListener("resize", function () {
//   if (phone.matches) {
//     navList.classList.add('hidden');
//   } else {
//     navList.classList.remove('hidden');
//   }
// });
