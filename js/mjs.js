//Google Map API
<<<<<<< HEAD
function initMap() {
    var options = {
        zoom: 8,
        center:{lat:42.3601,lng:-781.0589}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
};

=======
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(21.028774, 105.781745), zoom: 18
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
>>>>>>> a82767be8efb684b821f12af1f6a056b50243f8c
// noUI slider
var priceslid = document.getElementById('price-filter');
var range_all_sliders = {
    'min': [     0 ],
    '10%': [   500,  500 ],
    '50%': [  4000, 1000 ],
    'max': [ 10000 ]
};


noUiSlider.create(priceslid, {
    start: [0, 10000],
    connect: [false, true, false],
    range: {
        'min': [     0 ],
        '10%': [   500,  500 ],
        '50%': [  4000, 1000 ],
        'max': [ 10000 ]
    },
    pips: {
        mode: 'range',
        density: 3
    }
});