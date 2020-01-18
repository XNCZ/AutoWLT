var username = undefined;
var password = undefined;

function save() {
    username = $("#inputUsername").val();
    password = $("#inputPassword").val();
    $.cookie("username", username, {expires: 7});
    $.cookie("password", password, {expires: 7});
}

function load() {
    username = $.cookie("username");
    password = $.cookie("password");
    $("#inputUsername").val(username);
    $("#inputPassword").val(password);
}

$(function () {
    $("#save").click(
        function () {
            save();
        }
    );
});

$(function () {
    $("#load").click(
        function () {
            load();
        }
    )
});

$(document).ready(function () {
    load();
});