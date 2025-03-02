// loadJQuery.js
$(document).ready(function() {
    // Load recommendations when "Recommend" button is clicked
    $('#recommendBtn').click(function() {
        $('#content').fadeOut(300, function() {
            $(this).load('Data/recommendations.html', function() {
                $(this).fadeIn(300);
            });
        });
    });
});