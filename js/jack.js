var $root = $('html, body');
$('a.slide').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        //window.location.hash = href;
    });
    return false;
});

$('.nav a').on('click', function(){
    $(".navbar-toggle").click();
});

$('#memtip').tooltip({
   title : "Say what?! Memphis is Jack's hometown, but more importantly it is the 'SuperHub' of FedEx. Two words: Tennessee Brewery."
});

$('#worktip').tooltip({
   title : "By no means is this a reflection of Jack's willingness to work for anyone else!"
});