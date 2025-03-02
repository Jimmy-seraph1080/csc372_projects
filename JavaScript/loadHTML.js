// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the button that will trigger the AJAX request
    var loadBtn = document.getElementById("recommendBtn");

    // Add an event listener to the button
    loadBtn.addEventListener("click", function () {
        // Create an XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Define what happens when the request is completed
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Insert the loaded HTML into the content section
                document.getElementById("content").innerHTML += xhr.responseText;
            }
        };

        // Prepare the request
        xhr.open("GET", "promotions.html", true);

        // Send the request
        xhr.send();
    });
});
