"use strict";
{
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('#main-image');
    const nextButton = document.querySelector('#next');
    const previousButton = document.querySelector('#previous');
    let activeIndex = 0;
    nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', () => {
        var _a, _b;
        (_a = thumbnails[activeIndex]) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        activeIndex = (++activeIndex) % thumbnails.length;
        (_b = thumbnails[activeIndex]) === null || _b === void 0 ? void 0 : _b.classList.add('active');
        if (mainImage)
            mainImage.src = thumbnails[activeIndex].src;
    });
    previousButton === null || previousButton === void 0 ? void 0 : previousButton.addEventListener('click', () => {
        var _a, _b;
        (_a = thumbnails[activeIndex]) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        activeIndex = activeIndex <= 0 ? thumbnails.length - 1 : activeIndex - 1;
        (_b = thumbnails[activeIndex]) === null || _b === void 0 ? void 0 : _b.classList.add('active');
        if (mainImage)
            mainImage.src = thumbnails[activeIndex].src;
    });
    thumbnails.forEach((thumbnail, index) => {
        thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.addEventListener('click', () => {
            var _a;
            (_a = thumbnails[activeIndex]) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
            activeIndex = index;
            thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.classList.add('active');
            if (mainImage)
                mainImage.src = thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.src;
        });
    });
}
