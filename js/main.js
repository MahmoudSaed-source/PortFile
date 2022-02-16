// start menu_mobil
let Menu_Mobil = document.querySelector(".menu_mobil"),
    Menu_toggle_Btn = document.querySelectorAll(".btn_toggle span")
Close_Btn = document.querySelector(".close_btn"),
    Btn_scroll = document.querySelector(".up_top"),
    percent_number = document.querySelector(".num"),
    percent_number1 = document.querySelector(".num1"),
    percent_number2 = document.querySelector(".num2"),
    percent_number3 = document.querySelector(".num3"),
    percent_number4 = document.querySelector(".num4"),
    percent_number5 = document.querySelector(".num5"),



    function display_menu() {
        Menu_Mobil.classList.remove("menu_open");

    }

Menu_toggle_Btn.forEach(el => {
    el.addEventListener("click", () => {
        Menu_Mobil.classList.toggle("menu_open");
    })
})


// end menu mobil


//   start scroll top
window.onscroll = function() { Scroll_top() };

function Scroll_top() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {

        Btn_scroll.style.display = "block"
    } else {
        Btn_scroll.style.display = "none"
    }
}


// button scroll to
Btn_scroll.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})

// end  scroll top

// start function progress bar count

function count_percent(element, percent, time) {

    let count = 0;

    setInterval(() => {

        if (count == percent) {
            clearInterval();
        } else {
            count += 1;
            element.innerHTML = count;
        }

    }, time)

}

count_percent(percent_number, 85, 70)
count_percent(percent_number1, 80, 69)
count_percent(percent_number2, 80, 69)
count_percent(percent_number3, 85, 70)
count_percent(percent_number4, 85, 70)
count_percent(percent_number5, 60, 77)
    // end function progress bar count