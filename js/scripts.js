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

// work section
    var works = [
        {
            title: "Towers of Hanoi",
            // pic: "img/tower.png",
            pic: "img/work3.jpeg",
			link: "https://courtneyltyler.github.io/GA-three-towers/",
			info: "Towers of Hanoi: Strategy game created with HTML, CSS, and JavaScript"
        },
        {
            title: "Concert Diary",
            // pic: "img/cdOrig200.png",
            pic: "img/work4.jpeg",
			link: "https://concertdiary.herokuapp.com/",
			info: "Concert Diary: Full-Stack Web Application utilizing Mongoose, Express, Handlebars, Node"
        },
        {
            title: "DevBook",
            // pic: "img/devbook200.png",
            pic: "img/work2.jpeg",
			link: "http://dev-book.surge.sh/",
			info: "DevBook: Full-Stack Social Media Application utilizing Mongoose, Express, React, Node"
        },
        {
            title: "Scheduler",
            pic: "img/work6.jpeg",
			link: "#",
			info: "Scheduler: Full-Stack Scheduling Web Application utilizing Python, Django, Postgresql, React"
        }
    ];

    for(var i = 0; i < works.length; ++i ) {
        $("#work-row").append("\
        <div class='col-lg-3 col-md-3 col-sm-6 col-xs-6'>\
            <a href='" + works[i].link +"' class='work-img'>\
            <img src='" + works[i].pic +"' class='img-responsive'>\
            <span class='info'><p class='proj-title'>Title:</p>'" + works[i].title +"' </span>\
			</a>\
			<h4 class='project-info'>" + works[i].info +"</h3>\
        </div>\
        ");
    $(".work-img").mouseenter( function() {
        $(".info", this).show();
    }).mouseleave(function(){
        $(".info", this).hide();
    });
    };

});

