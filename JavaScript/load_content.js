// Function to set the opacity of all image elements to 0.5
function setAllImages() {
    // Restricting selection to images inside the #book container
    const images = document.querySelectorAll("#product img");
    images.forEach(function(img) {
        img.style.opacity = "0.5";
    });
}


// Function to trigger an Ajax request to load HTML content from a given file path
function loadHTML(filePath) {
    xhr = new XMLHttpRequest();
   
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
           
        }
    };
    xhr.open("GET", filePath, true);
    xhr.send(null);
}


document.addEventListener("DOMContentLoaded", function() {
    // Get the image elements using their IDs
    const gpu4090 = document.getElementById("4090");
    const i9 = document.getElementById("i9");

    if (gpu4090) {
        gpu4090.addEventListener("click", function() {
            setAllImages();
            loadHTML("data/shop-content.html");
        });
    }

    if (i9) {
        gpu4090.addEventListener("click", function() {
            setAllImages();
            loadHTML("data/shop-content.xml");
        });
    }
});
