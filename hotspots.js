function mvHoverOff() {
    let list= document.getElementsByClassName('hs-element');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility= "hidden";
    }
    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "auto");
}

function mvHoverOn() {
    let list= document.getElementsByClassName('hs-element');
    for (var i = 0; i < list.length; i++) {
        list[i].style.visibility= "visible";
    }
    document.getElementsByTagName("model-viewer")[0].setAttribute('interaction-prompt', "none");
}

function hs_show(id) {
    document.getElementById(id).style.display = "block";
}

function hs_hide(id) {
    document.getElementById(id).style.display = "none";
}
