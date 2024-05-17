{
    const thumbnails: NodeListOf<HTMLImageElement> = document.querySelectorAll('.thumbnail');
    const mainImage: HTMLImageElement | null = document.querySelector('#main-image');
    const nextButton: HTMLButtonElement | null = document.querySelector('#next');
    const previousButton: HTMLButtonElement | null = document.querySelector('#previous');
    let activeIndex: number = 0;

    nextButton?.addEventListener('click', () => {
        thumbnails[activeIndex]?.classList.remove('active');
        activeIndex = (++activeIndex) % thumbnails.length;
        thumbnails[activeIndex]?.classList.add('active');
        if (mainImage) mainImage.src = thumbnails[activeIndex].src;
    });

    previousButton?.addEventListener('click', () => {
        thumbnails[activeIndex]?.classList.remove('active');
        activeIndex = activeIndex<=0? thumbnails.length-1 : activeIndex-1;
        thumbnails[activeIndex]?.classList.add('active');
        if (mainImage) mainImage.src = thumbnails[activeIndex].src;
    });

    thumbnails.forEach((thumbnail:HTMLImageElement|null, index:number) => {
        thumbnail?.addEventListener('click', () => {
            thumbnails[activeIndex]?.classList.remove('active');
            activeIndex = index;
            thumbnail?.classList.add('active');
            if (mainImage) mainImage.src = thumbnail?.src;
        });
    });
}