function switchScreen(divs, current, delta)
{
    var nDivs = divs.length;
    var time = 400;
    
    var next = (current + delta + nDivs) % nDivs;
    var currentDiv = $(divs[current]);
    var nextDiv = $(divs[next]);

    nextDiv.css("left", (delta * 100) + "%");
    currentDiv.animate({left: (-1 * delta * 100) + "%"}, time);
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
});