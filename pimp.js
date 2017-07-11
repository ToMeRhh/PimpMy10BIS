(function() {
    imgs = document.getElementsByTagName("img");
    for (i = 0; i <= imgs.length; i++) {
        if (imgs[i].getAttribute("src") != "Images/block32.png") continue;
        str = imgs[i].parentNode.getAttribute("onmouseover");
        str = str.substring(str.indexOf("$('#") + 4, str.indexOf("').show"));
        str = str.split("_");
        date = str[0] + "/" + str[1] + "/" + str[2];
        res = str[3];
        sevev = str[4];
        imgs[i].setAttribute("onclick", "goToRes('" + res + "', '" + date + "', '" + sevev + "', 'None')");
        imgs[i].setAttribute("src", "Images/plus32.png");
        imgs[i].setAttribute("style", "border: 0px; padding: 0px; width: 15px; height: 15px; background-color: red;");
    }
})();
