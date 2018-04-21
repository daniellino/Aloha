$(document).ready(function() {

    // Flickity
    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false
    });


    $('#sign-up-form').on('submit', function(evt) {
        evt.preventDefault();
        var userEmail = $('#your-email').val();

        if (userEmail != "") {
            alert("thank you for sub")
        } else {
            alert("wrong!")
        }
    });



});