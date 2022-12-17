const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const navigationMenu = document.querySelector("nav");
openNav.addEventListener("click", function() {
    this.style.display = "none";
    navigationMenu.style.display = "block";
    closeNav.style.display = "block";
});
closeNav.addEventListener("click", function() {
    this.style.display = "none";
    navigationMenu.style.display = "none";
    openNav.style.display = "block";
});

let downs = Array.from(document.querySelectorAll(".down"));
downs.forEach(d => {
    d.addEventListener("click", function() {
        this.children[1].style.display = "flex"
    });
});

// show reviews

const bullets = Array.from(document.querySelectorAll(".bullet"));
const reviews = Array.from(document.querySelectorAll(".review"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function (){
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(review.dataset.id == this.id) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide");
            }
        })
        this.classList.add("active");
    });
});


const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if(window.scrollY == 0) {
        header.style.backgroundColor = "transparent";
    }
    if(window.scrollY > 150) {
        header.style.backgroundColor = "#67b0d1";
    }
})