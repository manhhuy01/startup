$(document).ready(function(){
    let div = $("div").last()
    if(!$(div[0]).hasClass("body-container")){
        $(div[0]).remove();
    }
    setTimeout(function() {
        let div = $("div").last()
        if(!$(div[0]).hasClass("body-container")){
            $(div[0]).remove();
        }
    }, 2000);
})