window.addEventListener("scroll", (e) => {
    document.body.style.cssText = `--scrollTop:${this.scrollY}px`
})

const hederMenu = document.querySelector(".header-menu")
const hederBurger = document.querySelector(".header-icon")
function toggleBurger() {
    hederMenu.classList.toggle("active");
    hederBurger.classList.toggle("active");
}
hederBurger.addEventListener("click", toggleBurger)

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

window.onload = function () {
    const parallax = document.querySelector(".aside")
    const greeting = document.querySelector(".greeting")
    const addition = document.querySelector(".addition")

    if (greeting) {
        const middle = document.querySelector(".greeting-images__middle")
        const front = document.querySelector(".greeting-images__front")

        const forMiddle = 20;
        const forFront = 40;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallax() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            middle.style.cssText = `transform: translate(${positionX / forMiddle}%,${positionY / forMiddle}%);`;
            front.style.cssText = `transform: translate(${positionX / forFront}%,${positionY / forFront}%);`;

            requestAnimationFrame(setMouseParallax)
        }
        setMouseParallax()

        greeting.addEventListener("mousemove", (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        })
    }

    if (addition) {
        const front = document.querySelector(".addition-image__front")

        const forFront = 20;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 300;

        function setMouseParallax() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            front.style.cssText = `transform: translate(${positionX / forFront}%,${positionY / forFront}%);`;

            requestAnimationFrame(setMouseParallax)
        }
        setMouseParallax()

        addition.addEventListener("mousemove", (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        })
    }

    if (parallax) {
        const middle = document.querySelector(".aside-images__middle")
        const front = document.querySelector(".aside-images__front")

        const forMiddle = 40;
        const forFront = 20;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 300;

        function setMouseParallax() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;
            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            middle.style.cssText = `transform: translate(${positionX / forMiddle}%,${positionY / forMiddle}%);`;
            front.style.cssText = `transform: translate(${positionX / forFront}%,${positionY / forFront}%);`;

            requestAnimationFrame(setMouseParallax)
        }
        setMouseParallax()

        parallax.addEventListener("mousemove", (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        })
    }
}

const image = document.querySelectorAll(".slider-img");
const sliderLine = document.querySelector(".slider-line")
let count = 0;
let width;

function init() {
    width = document.querySelector(".slider").offsetWidth
    sliderLine.style.width = width * image.length + "px";
    image.forEach(item => {
        item.style.width = width + "px";
        item.style.height = "auto";
    })
    rollSlider()
}
init()
window.addEventListener("resize", init);

document.querySelector(".slider-prev").addEventListener("click", () => {
    count--
    if (count < 0) {
        count = image.length - 1;
    }
    rollSlider()
})

document.querySelector(".slider-next").addEventListener("click", () => {
    count++
    if (count >= image.length) {
        count = 0;
    }
    rollSlider()
})

function rollSlider() {
    sliderLine.style.transform = "translate(-" + count * width + "px)"
}