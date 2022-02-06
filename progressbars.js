function finish(){
    // Fill ProgressBar 
    var elem = document.getElementsByClassName("percentage");
    for(var i = 0; i<elem.length ; i++){
        elem[i].style.width = "100%";
    }
    // Change Percentage Text 
    var textElem = document.getElementsByClassName("percentageText");
    for(var i = 0; i<textElem.length ; i++){
        textElem[i].innerHTML = "100%";

    }
}