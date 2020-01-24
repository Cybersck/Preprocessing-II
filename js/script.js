window.onload = resize;
window.onresize = resize;

function resize() {
    cSec = document.getElementById("content-wrapper");
    cSec2 = document.getElementById("c2");
    text = document.getElementById("text-wrapper");
    text2 = document.getElementById("text-wrapper2");
    img = document.getElementById("img-wrapper");
    img2 = document.getElementById("img-wrapper2");
    bot = document.getElementById("bottom");

    showsm = document.getElementById("show-sm");
    hidesm = document.getElementById("hide-sm"); 
    modsm = document.getElementById("mod-sm");

    if (document.body.offsetWidth < 456) {
        cSec.classList.add("mobile-content");
        cSec2.classList.add("mc");
        text.classList.add("mobile-text");
        text2.classList.add("mobile-text");
        img.classList.add("mobile-img");
        img2.classList.add("mobile-img");

        showsm.classList.remove("hideme");
        hidesm.classList.add("hideme");
        modsm.classList.add("mr-auto");
        
        bot.classList.add("botwrap");


    } else {
        cSec.classList.remove("mobile-content");
        cSec2.classList.remove("mc");
        text.classList.remove("mobile-text");
        text2.classList.remove("mobile-text");
        img.classList.remove("mobile-img");
        img2.classList.remove("mobile-img");

        showsm.classList.add("hideme");
        hidesm.classList.remove("hideme");
        modsm.classList.remove("mr-auto");

        bot.classList.remove("botwrap");
    }

}