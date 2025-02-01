$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_yes = $("#yes-btn"); 

    envelope.click(function () {
        open();
    });

    btn_open.click(function () {
        open();
    });

    btn_reset.click(function () {
        close();
    });

    btn_yes.click(function () {
        // Open the Bootstrap modal when the "Yes ❤️" button is clicked
        $("#yesModal").modal('show');
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});
