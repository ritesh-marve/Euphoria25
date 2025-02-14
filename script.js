        window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY; // Get how much the user scrolled
    let image = document.querySelector(".moving-image");
    // Move the image horizontally based on scroll
    image.style.transform = `translateX(${scrollValue * 1.5}px)`; // Increase speed by 1.5x
});