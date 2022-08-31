$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#btn-mob").toggleClass("btn-mob-active");
    $("#mainListDiv").fadeIn();
});
$('.flecha-empresas').click(function () {
    $(this).toggleClass('flecha-active');
    $("#empresa1").toggleClass("inactive");
});
$('.flecha-empresas').click(function () {
    $(this).toggleClass('activo');
    $("#empresa2").toggleClass("empresas");
});
