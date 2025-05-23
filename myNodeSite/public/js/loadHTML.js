// function to set the opacity of all images inside the product container
function setAllImages() {
    const images = document.querySelectorAll("#product img");
    images.forEach(img => img.style.opacity = "0.5");
}

// function to trigger an ajax request to load html content
function loadHTML(filePath) {
    let xhr = new XMLHttpRequest();
   
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        }
        // handle the "back to rroducts" button if present
        const backButton = document.getElementById("back-to-products");
        if (backButton) {
            backButton.addEventListener("click", function () {
                // reload the product selection page
                location.reload();
            });
        }
    };

    xhr.open("GET", filePath, true);
    xhr.send(null);
}

// event Listener for loading html content when an image is clicked
document.addEventListener("DOMContentLoaded", function() {
    const gpu4090 = document.getElementById("4090");

    if (gpu4090) {
        gpu4090.addEventListener("click", function() {
            setAllImages();
            // Highlight selected image
            this.style.opacity = "1";
            // Load GPU details
            loadHTML("./data/4090.html");
        });
    }
});
