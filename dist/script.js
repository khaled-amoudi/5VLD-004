$(document).ready(function () {
    "use strict";

        

    // toggle class dark in <html class="dark">
    $('.mode-switch').click(function () {
        document.documentElement.classList.toggle("dark");


        if(document.documentElement.classList.contains('dark')){
            $(".mode-img").prop("src", 'src/imgs/sun-2.png');
        } else {
            $(".mode-img").prop("src", 'src/imgs/moon-2.png');
        }

    });


});