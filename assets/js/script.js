const hero = document.querySelector(".hero")

function init() {
    for (let i = 0; i < 9; i++) {
        hero.innerHTML += `<div class="hero-still"> </div>`
    }
    deneme()

}

let id = 0

function deneme() {
    const herostills = document.querySelectorAll(".hero-still")

    for (const herostill of herostills) {
        herostill.addEventListener("click", function () {
            let verilenid = id++
            console.log(verilenid);
            let sonuc = verilenid % 2
            if (sonuc === 0) {
                herostill.classList.add("hero-x-still")
            }
            else {
                herostill.classList.add("hero-o-still")
            }
        })
    }

    // if (this.data.set.id)
}
init();
