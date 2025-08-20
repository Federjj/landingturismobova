$(document).ready(function () {

    function showPopup() {
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }

    function hidePopup() {
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    }

    $("#close").click(hidePopup);

    $(".btn-abrir").click(showPopup);

    setTimeout(function () {
        showPopup();
        setTimeout(hidePopup, 9000);
    }, 1000);

});