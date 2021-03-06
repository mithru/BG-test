var hotspotsVisible = true;

function toggleHotspots(){
    if(hotspotsVisible) mvHoverOff();
    else mvHoverOn();
}

function mvHoverOff() {
    hotspotsVisible = false;
    document.getElementById('btn-toggle').style.backgroundImage = "url(../images/info-icon2.png)";
    let list= document.getElementsByClassName('hs-element');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility= "hidden";
    }

    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "auto");
}

function mvHoverOn() {
    hotspotsVisible = true;
    document.getElementById('btn-toggle').style.backgroundImage = "url(../images/info-icon.png)";
    let list= document.getElementsByClassName('hs-element');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility= "visible";
    }
    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "none");
}

function hs_show(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id).style.animationName = "slide-in";
    document.getElementById(id).style.bottom = "0";

}

function hs_hide(id) {
//    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.animationName = "slide-out";
    document.getElementById(id).style.bottom = "-200";
//    document.getElementById(id).style.animationPlayState = "running";
}
