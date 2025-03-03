$(document).ready(function() {
    // ssd image click handler
    $('#ssd').on('click', function(e) {
        e.preventDefault();
        
        // dim all images
        $('#product img').not(this).css('opacity', '0.5');
        
        // highlight clicked image change css of image to opacity 1
        $(this).css('opacity', '1');

        // load content with animation
        $('#content').hide().load('Data/ssd.html', function(response, status) {
            if (status === "success") {
                // add back button
                $(this).append(
                    '<button id="back-to-products" class="btn btn-success mt-3">Back to Products</button>'
                );
                // slide down effect
                $(this).slideDown(500);
            }
        });

        // event delegation for dynamically added back button
        $(document).on('click', '#back-to-products', function() {
            $('#content').slideUp(500, function() {
                // reset images and reload
                $('#product img').css('opacity', '1');
                location.reload();
            });
            return false;
        });
    });
});