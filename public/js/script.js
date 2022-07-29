const hamburger = document.getElementById("hamburger");
const closeHamburger = document.getElementById("hamburger-close");
const rightSide = document.querySelector(".right-side");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hidden");

    closeHamburger.classList.remove("hidden");

    rightSide.classList.remove("hidden");
})

closeHamburger.addEventListener("click", () => {
    closeHamburger.classList.toggle("hidden");

    hamburger.classList.remove("hidden");

    rightSide.classList.add("hidden");
})

if(screen.width < 865){
    const navElements = document.querySelectorAll(".nav-element");
    const navElementsBox = document.querySelectorAll(".nav-element-box");
    navElements.forEach((navElement, i) => {
        navElement.addEventListener("click", () => {
            //Rimuovo la classe "show-nav-element-box" dell'elemento chiamante, in modo tale da permettere
            //di chiuderlo se cliccato.
            if(navElementsBox[i].classList.contains("show-nav-element-box")){
                navElementsBox[i].classList.remove("show-nav-element-box");
                navElement.querySelector("picture").classList.remove("rotate");
            } else {
                //Rimuovo le classi dagl'elementi che li hanno in modo da chiuderli quando un altro
                //elemento viene cliccato
                for(let k = 0; k < navElements.length; k++){
                    if(k == i)
                        continue;
                        
                    navElementsBox[k].classList.remove("show-nav-element-box");
                    navElement.querySelector("picture").classList.remove("rotate");
                }

                navElementsBox[i].classList.add("show-nav-element-box");
                navElement.querySelector("picture").classList.add("rotate");
            }
        })
    })
}