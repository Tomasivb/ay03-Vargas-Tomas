$(document).ready(function(){
    var boton1= $(".boton1");
    var boton2= $(".boton2");
    var boton3= $(".boton3");
    var boton4= $(".boton4");
    boton1.click(function(){
        $("#titulo").text("Hola Mundo");

    });
    boton2.click(function(){
        $("#titulo").text("Memes");
    })
    boton3.click(function(){
        $("#subt").fadeTo("fast",0);
        $("#subt2").css("background","turquoise");
        $("#subt2").css("color","black");
    });
    boton4.click(function(){
        $("#subt").fadeTo("fast",1);
        $("#subt2").css("background","transparent")
        $("#subt2").css("color","transparent")
    });
    var divs= $(".div")
    divs.mouseenter(function(){
        $(this).css("background", "red");
    });
    divs.mouseleave(function(){
        $(this).css("background","yellow")
    });
})