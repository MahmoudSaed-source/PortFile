// start menu_mobil
let Menu_Mobil = document.querySelector(".menu_mobil"),
    Menu_toggle_Btn = document.querySelectorAll(".btn_toggle span")
Close_Btn = document.querySelector(".close_btn");
console.log(Menu_toggle_Btn)

function display_menu() {
    Menu_Mobil.classList.remove("menu_open");

}

Menu_toggle_Btn.forEach(el => {
    el.addEventListener("click", () => {
        Menu_Mobil.classList.toggle("menu_open");
    })
})


// end menu mobil