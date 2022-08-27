$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#btn-mob").toggleClass("btn-mob-active");
    $("#mainListDiv").fadeIn();
});