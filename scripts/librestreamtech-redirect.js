function parseRedirectParams(redirectLink) {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('p');
    const environment = urlParams.get('e');

    var url = "https://onsight.librestream.com/";
    if (environment == "vld") {
        url = "https://oam.vld.libreeng.com/"
    }

    if (param !== null) {
        url = url + param;
    }

    redirectLink.href = url;

    if (param !== null) {
        window.location.replace(url);
    }
}