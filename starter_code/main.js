var cityPics = [
    'images/austin.jpg', 'images/citipix_skyline.jpg', 'images/la.jpg', 'images/nyc.jpg', 'images/sf.jpg', 'images/sydney.jpg'
    ];
var cityNames = [
    'Austin', 'Citipix Skyline', 'Los Angeles', 'New York City', 'San Francisco', 'Sydney'
];



$(document).ready(function () {
    //    on submit read the field for city name
    $('form').submit(function () {
        alert('submitted');
    });



});


//get the value of the input field with id='city-type'
//    use an if statement for the different city names
//    display the correct background picture with the correct city name