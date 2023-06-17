$(document).ready(function () {
    // Initialize Slider 1
    $('#silderOne').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    });


    // Initialize Slider 2
    $('#carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        navText:
            ["<i class='fa-solid fa-chevron-right'></i>",
                "<i class='fa fa-angle-left'></i>"]
    });

    // Initialize Slider 3
    $('#sliderThree').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        navText:
            ["<i class='fa-solid fa-chevron-right'></i>",
                "<i class='fa fa-angle-left'></i>"]
    });

    // Initialize Slider 4
    $('#Lecturers').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 500,
        rtl: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        navText:
            ["<i class='fa-solid fa-chevron-right'></i>",
                "<i class='fa fa-angle-left'></i>"]
    });
});

let poup = document.getElementById("alert").addEventListener("click", myFunction);
let poupclose = document.getElementById("close").addEventListener("click", myFunctionTow);
let popupalert = document.getElementById("popubdate").addEventListener("click", myFunctionTree);
let closepop = document.getElementById("closepop").addEventListener("click", myFunctionFour);
function myFunction() {
    document.getElementById("popupalert").classList.add('active');
}
function myFunctionTow() {
    document.getElementById("popupalert").classList.remove('active');
}
function myFunctionTree() {
    document.getElementById("poupubapdeate").classList.add('active');
}
function myFunctionFour() {
    document.getElementById("poupubapdeate").classList.remove('active');
}


