//load 
$(document).ready(function() {
    // SSD click
    $('#ssd').click(function() {
        // dim other images
        setAllImages(); 
        // change opacity css
        $(this).css('opacity', '1');
        // fadeout effect
        $('#content').fadeOut(300, function() {
            // load ssd.html
            $(this).load('./data/ssd.html', function() {
                // add back button functionality
                $('#back-to-products').click(function() {
                    location.reload();
                });
                // fadein effect
                $(this).fadeIn(300);
            });
        });
    });

    // Function to set all images to dimmed state
    function setAllImages() {
        $('#product img').css('opacity', '0.5');
    }
});