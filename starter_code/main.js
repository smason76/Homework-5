$(document).ready(function () {
    //    on submit read the field for city name
    $('form').submit(function (event) {
        //        alert('submitted');
        event.preventDefault();
        //get the value of the input field with id='city-type'
        var inputText = $('#city-type').val().toLowerCase().replace(/ /g, '');
        //         alert(inputText);
        var errorMessage = $('#city-type').val();
        var className = '';

        //    use an if statement for the different city names
        if (inputText == 'nyc' || inputText == 'newyork' || inputText == 'newyorkcity' || inputText == 'jfk' || inputText == 'lga') {
            //    display the correct background picture with the correct city name

            //storing the name of the css class
            className = 'nyc';
            //            alert('reset');
        } else if (inputText == 'sf' || inputText == 'sanfrancisco' || inputText == 'bayarea' || inputText == 'sfo') {
            className = 'sf';


        } else if (inputText == 'sf' || inputText == 'losangeles' || inputText == 'la' || inputText == 'lax') {
            className = 'la';


        } else if (inputText == 'austin' || inputText == 'atx') {
            className = 'austin';


        } else if (inputText == 'sf' || inputText == 'sydney' || inputText == 'syd') {
            className = 'sydney';


        } else {
            //default action

            if (inputText == '') {
                alert('The text field is blank. Please type in a city name.');
            } else {
                alert('The text: ' + errorMessage + ' was invalid, please try again.');
            }
        }

        //set the css class on the body
        $('body').attr('class', className);

        //Reset the user input field after it is submitted
        $('form').trigger('reset');
    });
});