document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.wrapper img');
    console.log(slides)
    let slideInd = 0;
    const prevButton = document.querySelector('.image-slider .prev')
    const nextButton = document.querySelector('.image-slider .next')
    let intervalId = null;
    console.log('hello')

    if (slides.length > 0) {
        slides[slideInd].classList.add('dispImg');
        intervalId = setInterval(nextSlide, 5000);
    }

    function showSlide(ind) {
        if (ind >= slides.length) {
            slideInd = 0;
        } else if (ind < 0) {
            slideInd = slides.length - 1;
        } else {
            slideInd = ind;
        }
        slides.forEach(slide => {
            slide.classList.remove('dispImg');
        });
        slides[slideInd].classList.add('dispImg');
    }

    function prevSlide() {
        clearInterval(intervalId);
        slideInd--;
        showSlide(slideInd);
    }

    function nextSlide() {
        slideInd++;
        showSlide(slideInd);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});

