const navSlide = () => {
    const burgerIcon = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burgerIcon.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        //Burger Animation
        burgerIcon.classList.toggle('toggle');
        // Loop through each list item and add animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                const animationDelay = (index / 7 + 0.5) + 's';
                link.style.animation = `navLinkFade 0.5s ease forwards ${animationDelay}`;
            }
        });

    })
    
}
navSlide();