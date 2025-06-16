$(document).ready(function(){
    //!The shineLoop function uses the chaining technique to utilize multiple animate event methods in the same function//
    function shineLoop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000) .animate({backgroundPositionX: '-8000'}, 3000);
    };

    //!setInterval will repeat the shineloop function and 0 sets the delayed amount of time between each repeat//
    setInterval(shineLoop, 0);

    //!Shrinks header size when the document is scrolled down by 50 pixels.//
    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");   
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({
        //!Triggers the image to slide down one after the other when the users mouse eneters the div area with the classiccars ID.//
        mouseenter: function(){
            $("#titleOne").show(1000);
            $("titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //!Triggers the images to slide up and hide each title.//
        mouseleave: function(){
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //!Creates a toggle effect on each FAQ question by checking each elements sibling so they dont all display whe one question is clicked.*//
    $('div.question').on('click', function(){
        $(this).next().slideToggle('slow');
    });
})