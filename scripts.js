$(document).ready(function () {
    let boxes = $('li');
    let count = 0;

    // Select and Clear All
   $("#select-all").click(function () {
        $("li input:checkbox").prop("checked", true);
        var selected = new Array();
        $("input[type=checkbox]:checked").each(function () {
            selected.push(this.value);
        });
    });

   
    //Color-listing
    $(".btn-secondary").click(function(){
        var currentColor = $(this).css("background-color");
         $("li").has("input:checked").css("background-color", currentColor);
    });

    //Color-clear
    $("#clear-button").click(function(){
        $("li").has("input:checked").css("background-color", "white");

    })

    //Textbox
    $("#apply").click(function(){
        var currentText = $("#textbox").val();
        $("li").has("input:checked").children(".output-span").text(currentText);
    });


    //Remove
    var x;
    var counting = 0;
    $("#remove").click(function(){
    x = $("li").has("input:checked").detach();
    $("#display-removed").val(counting += x.length);
    });

    //Restore
    $("#restore").click(function(){
    $("ul").append(boxes);
    });


});

