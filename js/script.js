$(document).ready(function() {

    // Flickity
    $('.main-carousel').flickity({
        // cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        // selectedAttraction: 0.2,
        // friction: 1,
        dragThreshold: 10
            // freeScroll: true
            // groupCells: 1
            // autoPlay: true
            // rightToLeft: true
    });

    $('.sign-up-form').on('submit', function(evt) {
        evt.preventDefault();
        var userEmail = $('#your-email').val();

        if (userEmail != "") {
            alert("Thank you for subscribing!")
        } else {
            alert("Please provide a valid e-mail address.")
        }
    });

    // ==================================soft scroll from CSS Tricks by  CHRIS COYIER===================================
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


});