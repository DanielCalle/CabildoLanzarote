$( document ).ready(function() {
    $("#menu-inicio").click(function() {
        $(".pure-menu-selected").addClass("pure-menu-item");
        $(".pure-menu-selected").removeClass("pure-menu-selected");
        $("#menu-inicio").addClass("pure-menu-selected");
        $(".contenedores").hide(100).delay(100);
        $("#inicio").show(300);
    });
    $("#menu-objetivo").click(function() {
        $(".pure-menu-selected").addClass("pure-menu-item");
        $(".pure-menu-selected").removeClass("pure-menu-selected");
        $("#menu-objetivo").addClass("pure-menu-selected");
        $(".contenedores").hide(100).delay(100);
        $("#objetivo").show(300);
    });
    $("#menu-similares").click(function() {
        $(".pure-menu-selected").addClass("pure-menu-item");
        $(".pure-menu-selected").removeClass("pure-menu-selected");
        $("#menu-similares").addClass("pure-menu-selected");
        $(".contenedores").hide(100).delay(100);
        $("#similares").show(300);
    });
    $("#menu-diseño").click(function() {
        $(".pure-menu-selected").addClass("pure-menu-item");
        $(".pure-menu-selected").removeClass("pure-menu-selected");
        $("#menu-diseño").addClass("pure-menu-selected");
        $(".contenedores").hide(100).delay(100);
        $("#diseño").show(300);
    });
    $("#menu-implementacion").click(function() {
        $(".pure-menu-selected").addClass("pure-menu-item");
        $(".pure-menu-selected").removeClass("pure-menu-selected");
        $("#menu-implementacion").addClass("pure-menu-selected");
        $(".contenedores").hide(100).delay(100);
        $("#implementacion").show(300);
    });

    console.log("hola");

});