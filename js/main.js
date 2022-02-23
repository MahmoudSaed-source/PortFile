// start variable 

let Menu_Mobil = document.querySelector(".menu_mobil"),
    Menu_toggle_Btn = document.querySelector(".btn_toggle"),
    Close_Btn = document.querySelector(".close_btn"),
    Btn_scroll = document.querySelector(".up_top"),
    percent_number = document.querySelector(".num"),
    percent_number1 = document.querySelector(".num1"),
    percent_number2 = document.querySelector(".num2"),
    percent_number3 = document.querySelector(".num3"),
    percent_number4 = document.querySelector(".num4"),
    percent_number5 = document.querySelector(".num5"),
    portfolio = document.querySelectorAll(".portfolio > div"),
    bolets = document.querySelectorAll(".bolets > div");



// end variable


// start menu_mobil

Menu_toggle_Btn.onclick = (e) => {

    e.stopPropagation();
    Menu_Mobil.classList.toggle("menu_open");

}


// click on button to close menu

function closeMenu() {

    Menu_Mobil.classList.remove("menu_open");

}

// Menu_Mobil.onclick = (e) => {
//     e.stopPropagation();
// }


//start  click any wear on the document to coles menu link 

document.addEventListener("click", (e) => {

    if (e.target !== Menu_Mobil && e.target !== Menu_toggle_Btn) {

        if (Menu_Mobil.classList.contains("menu_open")) {

            Menu_Mobil.classList.remove("menu_open");

        }
    }

})

//end   click any wear on the document to coles menu link 





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

// start portfolio in mobil media


// remove and add class active 
bolets.forEach((el) => {

    el.addEventListener("click", (e) => {

        bolets.forEach((el) => {
            el.classList.remove("active_bol")
        })
        el.classList.add("active_bol");
        portfolio.forEach((Elemn) => {
            if (el.dataset.id == Elemn.dataset.number) {
                portfolio.forEach((pro) => {
                    pro.classList.remove("active_project");
                })
                Elemn.classList.add("active_project");

            }
        })
    })

})


// end portfolio in mobil media