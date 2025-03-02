// Function to set the opacity of all image elements to 0.5
function setAllImagesOpacity() {
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
    const donQuixoteImg = document.getElementById("4090");


    if (donQuixoteImg) {
        donQuixoteImg.addEventListener("click", function() {
            setAllImagesOpacity();
            this.style.opacity = "1";
            loadHTML("shop-content.html");
        });
    }
});
