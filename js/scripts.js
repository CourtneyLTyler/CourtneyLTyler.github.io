// Google maps
var map;
function initMap() {
  var myLatLng = {lat: 38.8935124, lng: -77.0499472};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 10
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

// load document first
$(document).ready(function(){
    
    // tooltips
     $(function () {
       $('#tooltip').tooltip();
     });
  
  // what happens after submit button is clicked
  $("#submit").on("click", function() {
  
    if ($('#message-box').val() == ""){
      $('#message-box').css('border', '3px red solid');
    } else {
      $('#message-box').css('border', 'none');
        var comment = $('#message-box').val();
        console.log(comment);
      $('#visible-comment').html(comment);
      $('#message-box').hide();
      $('#email').hide();
      $('#phone').hide();
      $('#name').hide();
      document.getElementsByTagName('form').reset();
      $('name').val() == ""; 
      alert('Information Submitted');
      return false;
    }
  });

// work section
    var works = [
        {
            title: "Towers of Hanoi",
            // pic: "img/tower.png",
            pic: "img/work3.jpeg",
            link: "https://courtneyltyler.github.io/GA-three-towers/"
        },
        {
            title: "Concert Diary",
            // pic: "img/cdOrig200.png",
            pic: "img/work4.jpeg",
            link: "https://concertdiary.herokuapp.com/"
        },
        {
            title: "DevBook",
            // pic: "img/devbook200.png",
            pic: "img/work2.jpeg",
            link: "http://dev-book.surge.sh/"
        },
        {
            title: "Scheduler",
            pic: "img/work6.jpeg",
            link: "#"
        }
    ];

    for(var i = 0; i < works.length; ++i ) {
        $("#work-row").append("\
        <div class='col-lg-3 col-md-3 col-sm-6 col-xs-6'>\
            <a href='" + works[i].link +"' class='work-img'>\
            <img src='" + works[i].pic +"' class='img-responsive'>\
            <span class='info'><p class='proj-title'>Title:</p>'" + works[i].title +"' </span>\
            </a>\
        </div>\
        ");
    $(".work-img").mouseenter( function() {
        $(".info", this).show();
    }).mouseleave(function(){
        $(".info", this).hide();
    });
    };

});

