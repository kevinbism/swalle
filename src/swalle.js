let swalles;
let prevBtn;
let nextBtn;
let pagination;
let currentImg = 0;
let interval;
let time;

function initSwalle(img, prev, next, paginationEl, setTime) {
  swalles = document.querySelectorAll(img);
  prevBtn = prev;
  nextBtn = next;
  pagination = paginationEl;
  time = setTime || 5000;
  if (!swalles.length) return;

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);

  addEvent(prevBtn, 'click', () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
  });

  addEvent(nextBtn, 'click', () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
  });

  createPagination(pagination);
  startAutoplay();
}

function imageShow(index) {
  swalles[currentImg].classList.remove('active');
  swalles[index].classList.add('active');
  currentImg = index;
  updatePagination(pagination);
}

function nextSlide() {
  const nextImg = (currentImg + 1) % swalles.length;
  imageShow(nextImg);
}

function prevSlide() {
  const prevImg = (currentImg - 1 + swalles.length) % swalles.length;
  imageShow(prevImg);
}

function createPagination(el) {
  if (!el) return;

  const container = getEl(el);
  const className = el.replace('.', '');

  for (let i = 0; i < swalles.length; i++) {
    const bullet = document.createElement('span');
    bullet.classList.add(`${className}-item`);

    bullet.addEventListener('click', () => {
      stopAutoplay();
      imageShow(i);
      startAutoplay();
    });

    if (i === currentImg) {
      bullet.classList.add(`${className}-item-active`);
    }
    container.appendChild(bullet);
  }
}

function updatePagination(el) {
  if (!el) return;

  const bullets = document.querySelectorAll(`${el}-item`);

  bullets.forEach((bullet, index) => {
    bullet.classList.remove(`${el.replace('.', '')}-item-active`);

    if (index === currentImg) {
      bullet.classList.add(`${el.replace('.', '')}-item-active`);
    }
  });
}

function startAutoplay() {
  interval = setInterval(nextSlide, time);
}

function stopAutoplay() {
  clearInterval(interval);
}

let touchStartX = null;
let touchEndX = null;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  const minSwipeDistance = 50;
  const swipeDistance = touchEndX - touchStartX;
  stopAutoplay();

  if (swipeDistance > minSwipeDistance) {
    prevSlide();
  } else if (swipeDistance < -minSwipeDistance) {
    nextSlide();
  }

  startAutoplay();
}

function getEl(el, context = document) {
  return typeof el === 'string' ? context.querySelector(el) : el;
}

function addEvent(selector, event, callback) {
  const element = getEl(selector);
  if (element) {
    element.addEventListener(event, callback);
  }
}
