// Function to set the opacity of all images inside the #product container
function setAllImages() {
    const images = document.querySelectorAll("#product img");
    images.forEach(img => img.style.opacity = "0.5");
}

// Function to trigger an Ajax request to load HTML content
function loadHTML(filePath) {
    let xhr = new XMLHttpRequest();
   
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("details").innerHTML = xhr.responseText; // Load into "details"
        }
    };

    xhr.open("GET", filePath, true);
    xhr.send(null);
}

// Event Listener for loading HTML content when an image is clicked
document.addEventListener("DOMContentLoaded", function() {
    const gpu4090 = document.getElementById("4090");

    if (gpu4090) {
        gpu4090.addEventListener("click", function() {
            setAllImages();
            this.style.opacity = "1"; // Highlight selected image
            loadHTML("data/gpu-content.html"); // Load GPU details
        });
    }
});
