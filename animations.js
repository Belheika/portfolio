function initStickers() {
    const bookContainer = document.querySelector('.book-container');
    const stickers = document.querySelectorAll('.sticker');
    gsap.set(stickers, {
        opacity: 0.5,
        scale: 0.7,
        zIndex: 1
    });
    bookContainer.addEventListener('mouseenter', () => {
        gsap.to(stickers, {
            x: (i) => [-472, 400, -480, 494, -480, 466, 200][i],
            y: (i) => [-300, -300, 0, -40, 300, 300, -300][i],
            rotation: (i) => [-3, 15, -3, 25, -15, 10, 20][i],
            scale: 0.7,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "sine.inOut"
        });
    });
}

document.addEventListener('DOMContentLoaded', initStickers);
