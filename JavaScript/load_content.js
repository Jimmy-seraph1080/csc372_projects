// Function to load an external HTML file into a specified div using AJAX
function loadShopContent() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Define the function to run when the request state changes
    xhr.onreadystatechange = function() {
        // Check if the request is complete (readyState 4) and successful (status 200)
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Insert the loaded HTML content into the div with ID "dynamic-content"
            document.getElementById("dynamic-content").innerHTML = xhr.responseText;
        }
    };
    
    // Prepare the AJAX request (GET request for the shop.html file, asynchronous)
    xhr.open("GET", "shop-content.html", true);
    
    // Send the request to fetch the file
    xhr.send(null);
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the image elements using their IDs
    const donQuixoteImg = document.getElementById("card-img-top");


    if (donQuixoteImg) {
        donQuixoteImg.addEventListener("click", function() {
            setAllImagesOpacity();
            this.style.opacity = "1";
            loadHTML("data/shop-content.html");
        });
    }
});