//Google Map API
function initMap() {
    var options = {
        zoom: 18,
        center:{lat:21.028774,lng:105.781745}
    };

    var map = new google.maps.Map(document.getElementById('map'), options);
}

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