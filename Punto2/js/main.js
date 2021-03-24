function start() {
    $('.carousel').carousel({
        interval: 3000
    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
}

start();
