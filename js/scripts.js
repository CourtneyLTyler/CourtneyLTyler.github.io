// load document first
$(document).ready(function(){

    // smooth scrolling
      var $root = $('html, body');
    
      $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
    
        if (href != undefined && href != '#') {
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function () {
            window.location.hash = href;
          });
        }
    
        return false;
      });
    
    
    // tooltips
     $(function () {
       $('#tooltip').tooltip();
     });

// work section
    var works = [
        {
            title: "First Project",
            pic: "img/work2.jpeg"
        },
        {
            title: "Second Project",
            pic: "img/work4.jpeg"
        },
        {
            title: "Third Project",
            pic: "img/work3.jpeg"
        },
        {
            title: "Fourth Project",
            pic: "img/work6.jpeg"
        }
    ];

    for(var i = 0; i < works.length; ++i ) {
        $("#work-row").append("\
        <div class='col-lg-3 col-md-3 col-sm-6 col-xs-6'>\
            <a href='#' class='work-img'>\
            <img src='" + works[i].pic +"' class='img-responsive'>\
            <span class='info'><p class='proj-title'>Title:</p>'" + works[i].title +"' </span>\
            </a>\
        </div>\
        ");
        var images = $("#work-row img");
        if (i%2===0) {
        $(images[i]).css("border", "2px solid DodgerBlue");
        } else {
        $(images[i]).css("border", "2px solid salmon");
        };
    $(".work-img").mouseenter( function() {
        $(".info", this).show();
    }).mouseleave(function(){
        $(".info", this).hide();
    });
    };

});