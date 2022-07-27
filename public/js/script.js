const hamburger = document.getElementById("hamburger");
const closeHamburger = document.getElementById("hamburger-close");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("block");
    hamburger.classList.toggle("hidden");

    closeHamburger.classList.remove("hidden");
    closeHamburger.classList.add("block");

    nav.classList.remove("hidden");
    nav.classList.toggle("show-nav");
})

closeHamburger.addEventListener("click", () => {
    closeHamburger.classList.toggle("hidden");
    closeHamburger.classList.toggle("block");

    hamburger.classList.add("block");
    hamburger.classList.remove("hidden");

    nav.classList.remove("show-nav");
    nav.classList.add("hidden");
})

if(screen.width < 768){
    const navElements = document.querySelectorAll(".nav-element");
    const navElementsBox = document.querySelectorAll(".nav-element-box")
    const arrows = document.querySelectorAll("")
    navElements.forEach((navElement, i) => {
        navElement.addEventListener("click", () => {
            if(navElementsBox[i].classList.contains("show-nav-element-box"))
                navElementsBox[i].classList.remove("show-nav-element-box");
            else{
                for(let k = 0; k < 3; k++){
                    if(k == i)
                        navElementsBox[i].classList.add("show-nav-element-box");
                    else
                        navElementsBox[k].classList.remove("show-nav-element-box");
                }
            }
        })
    })
}