const slidesContainer = document.querySelector('.events__list');
const slide = document.querySelector('.events__list-item');
const prevButton = document.querySelector('.events__button--previous');
const nextButton = document.querySelector('.events__button--next');
const slidesCount = document.querySelectorAll('.events__list-item').length;

prevButton.style.opacity = 0.5;

let countStart = 1;

nextButton.addEventListener('click', () => {
    slidesContainer.scrollLeft += slidesContainer.clientWidth;
    
    nextButton.disabled = true;
    setTimeout(() => {nextButton.disabled = false}, 500);

    countStart++;

    if (countStart !== 1) {
        prevButton.style.opacity = 1;
        prevButton.disabled = false;
    }
    if (countStart === 4) {
        nextButton.style.opacity = 0.5;
        nextButton.disabled = true;
    }
});

prevButton.addEventListener('click', () => {
    slidesContainer.scrollLeft -= slidesContainer.clientWidth;

    prevButton.disabled = true;
    setTimeout(() => {prevButton.disabled = false}, 500);
    countStart--;

    if (countStart === 1) {
        prevButton.style.opacity = 0.5;
        prevButton.disabled = true;
    }
    if (countStart !== 4) {
        nextButton.style.opacity = 1;
        nextButton.disabled = false;
    }
});