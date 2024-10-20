nav_buttons = document.getElementsByClassName("not-active")
for (let i = 0; i < nav_buttons.length; i++) {
    nav_buttons[i].addEventListener("click", function(y) {
        goto(y);
    });
}


function goto(val) {
    let page = val["srcElement"]["innerHTML"].toLowerCase();
    if (page == "home") {
        page = "index";
    }
    window.location.assign(page + ".html");
}