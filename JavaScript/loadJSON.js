// function to load and parse JSON data using ajax
function loadJSON(filePath) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status == 200) {
            displayProduct(JSON.parse(xhr.responseText));
        }
    };

    xhr.open("GET", filePath, true);
    xhr.send(null);
}

// function to display JSON data in details section
function displayProduct(product) {
    let output = `
        <div class="border-success p-4 bg-dark text-white rounded">
        <h2>${getNodeValue(cpu, 'TITLE')}</h2>
        <p><strong>${getNodeValue(cpu, 'PRICE')}</strong></p>
        <p>${getNodeValue(cpu, 'DESCRIPTION')}</p>
        <p>${getNodeValue(cpu, 'MORE')}</p>
        <button id="back-to-products" class="btn btn-success mt-3">Back to Products</button>
    `;

    // insert the content into the "details" section
    document.getElementById("content").innerHTML = output;

    // add event listener to go back to product list
    document.getElementById("back-to-products").addEventListener("click", function() {
        // reload the product selection
        location.reload();
    });
}

// event listener for JSON content loading when clicking on ram image
document.addEventListener("DOMContentLoaded", function() {
    const ram = document.getElementById("ram");
    if (ram) {
        ram.addEventListener("click", function() {
            setAllImages();
            //highlight selected image and change opacity of image to 1
            this.style.opacity = "1";
            // load RAM details from JSON
            loadJSON("data/ram.json");
        });
    }
});
