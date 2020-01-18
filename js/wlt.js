function getStatus() {
    if (document.getElementsByName("login").length === 1) {
        return false;
    }
    else {
        return true;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}

function signIn() {
    document.getElementsByName("name")[0].value = getCookie("name");
    document.getElementsByName("password")[0].value = getCookie("password");
    document.getElementsByName("login")[0].submit();
}

function netOpen() {
    document.getElementsByTagName("form")[0].submit();
}

function link() {
    let status = getStatus();
    if (status === false) {
        signIn();
    }
    else {
        netOpen();
    }
}

window.onload = function () {
    setTimeout(function () {
        link()
    }, 30e3);
};