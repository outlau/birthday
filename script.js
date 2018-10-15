var cookie;
var prog = 0;

$(document).ready(function(){
    document.cookie = "progress=0";
    //var cookie =  decodeURIComponent(document.cookie);
    //var prog = cookie.split(";")[0].split("=")[1];
    loadCircles(prog);

    $('#enter-form').submit(function(e){
        var pw = $('.pw').val();
        
        e.preventDefault();
        console.log(pws);
        var index = pws.indexOf(pw);

        console.log(index);
        if(index >= 0) {
            pws.splice(index, 1);
            prog++;
            //document.cookie = "progress="+prog;
            success();
            loadCircles(prog);
        } else {

            incorrect();
        }



        console.log(pws);
        /*
        $.ajax({
            type: 'POST', 
            url: './validate.php',
            data: {send:JSON.stringify({'password' : pw, 'progress' : prog})},
            dataType: 'json',
            success: function (data) { 
                console.log(data);
                if(data.success == true){
                }else{
                }
                    
                console.log(data);
                console.log("ret: "+data.success);
            }
        });
        */
    })
});

var pws = ["12","823","46"];

function success(){
    $("#success").show();
    $("#success").fadeOut( 3000, function() {
        $(this).hide();
    });
    if(prog >= 3){
        win();
    }

}

function incorrect(){
    var div = $("#incorrect");
    div.show();
    div.stop(true);
    div.fadeIn(0);
    div.fadeOut( 3000, function() {
        $(this).hide();
    });
}

function win(){
    $("#main").hide();
    $("#video-div").show();
    var vid = document.getElementById("video");


    vid.play();


}

function loadCircles(progress){
    var circleParents = document.getElementsByClassName("circle-parent");
    [].forEach.call(circleParents, function(el) {
        el.innerHTML = "";
    });
    var i = 0;
    [].forEach.call(circleParents, function(el) {
        var circle = document.createElement("div");
        circle.className = "circle";
        if(i<progress)
            circle.className += " circle-done";
        else
            circle.className += " circle-notdone";
        i++;
        el.append(circle);
    });
}