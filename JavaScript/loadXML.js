// Function to load and parse XML data using Ajax
function loadXML(filePath) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            displayProducts(xhr.responseXML);
        }
    };

    // Prepare and send the request to fetch the XML file
    xhr.open("GET", "data/shop-content.xml", true);
    xhr.send(null);
}

// Function to parse XML data and display it dynamically in "details" section
function displayProducts(xml) {
    let products = xml.getElementsByTagName("product");
    let output = "<div class='text-start'>";

    // Loop through each product and extract details
    for (let i = 0; i < products.length; i++) {
        let name = products[i].getElementsByTagName("name")[0].textContent;
        let category = products[i].getElementsByTagName("category")[0].textContent;
        let price = products[i].getElementsByTagName("price")[0].textContent;
        let description = products[i].getElementsByTagName("description")[0].textContent;
        let image = products[i].getElementsByTagName("image")[0].textContent;

        output += `
            <div class="border border-success p-3 mb-3 bg-dark text-white">
                <h5>${name}</h5>
                <p><strong>Category:</strong> ${category}</p>
                <p>${description}</p>
                <p class="fw-bold text-success">${price}</p>
                <img src="${image}" class="img-fluid mt-2" width="200" alt="${name}">
            </div>
        `;
    }

    output += "</div>";

    // Insert the generated content into the "details" section
    document.getElementById("details").innerHTML = output;
}

// Event Listener for XML content loading when clicking on images
document.addEventListener("DOMContentLoaded", function() {
    const gpu4090 = document.getElementById("4090");
    const i9 = document.getElementById("i9");
    const ram = document.getElementById("ram");

    if (i9) {
        i9.addEventListener("click", function() {
            setAllImages();
            this.style.opacity = "1"; // Highlight selected image
            loadXML("data/cpu-content.xml"); // Load CPU details from XML
        });
    }
});