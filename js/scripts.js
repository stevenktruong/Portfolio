function switchScreen(divs, current, delta)
{
    var nDivs = divs.length;
    var time = 400;
    
    var next = (current + delta + nDivs) % nDivs;
    var currentDiv = $(divs[current]);
    var nextDiv = $(divs[next]);

    nextDiv.css("left", (delta * 100) + "%");
    currentDiv.animate({left: (-1 * delta * 100) + "%"}, time);
    $("html, body").css("background-color", currentDiv.css("background-color"));
    nextDiv.animate({left: "0%"}, time);

    return next;
}

$(document).ready(function() {
    
    var divs = $("#container .screen").toArray();
    var current = 0;
    $(".nav-arrow").click(function() {
        if (!$(divs[current]).is(":animated"))
        {
            var delta = 1;
            if ($(this).is("#left-arrow"))
                delta = -1;

            current = switchScreen(divs, current, delta);
        }
    });
    
    $(document).keydown(function(key) {
        if (!$(divs[current]).is(":animated") && (key.which == 37 || key.which == 39))
        {
            var delta = 1;
            if (key.which == 37)
                delta = -1;

            current = switchScreen(divs, current, delta);
        }
    });
    
    $(document).swipe( {swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        var delta = 1;
        if (direction == "right")
            delta = -1;
        
        if (direction == "left" || direction == "right")
            current = switchScreen(divs, current, delta);
    }});
    
    var skillPanels = $(".skill-screen").toArray();
    var animatedDiv = -1;
    $(".skill-name").click(function() {
        var skillName = $(this).attr("id");
        if (animatedDiv == -1 || !$(skillPanels[animatedDiv]).is(":animated"))
        {
            for (i = 0; i < skillPanels.length; i++)
            {
                if ($(skillPanels[i]).attr("class").indexOf(skillName) !== -1)
                {
                    $(skillPanels[i]).css("z-index", 11);
                    $(skillPanels[i]).css("display", "block");
                    $(skillPanels[i]).animate({"margin-top": "0vh"}, 400, function() {
                        for (j = 0; j < skillPanels.length; j++)
                        {
                            if (j !== i)
                                $(skillPanels[j]).css("margin-top", "-100vh");
                            
                            $(skillPanels[j]).css("z-index", 10);
                            $(skillPanels[j]).css("display", "hidden");
                        }
                    });
                    
                    animatedDiv = i;
                    break;
                }
            }
        }
    });
});