// Function to load and parse XML data using Ajax
function loadXML() {
    let xhr = new XMLHttpRequest();

    // Define function to handle state changes
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            displayProducts(xhr.responseXML);
        }
    };

    // Prepare and send the request to fetch the XML file
    xhr.open("GET", "data/loadXMLs.xml", true);
    xhr.send();
}

// Function to parse XML data and display it in the existing "details" section
function displayProducts(xml) {
    let products = xml.getElementsByTagName("product");
    let output = "<div class='text-start'>";

    // Loop through each product in the XML file
    for (let i = 0; i < products.length; i++) {
        let name = products[i].getElementsByTagName("name")[0].textContent;
        let category = products[i].getElementsByTagName("category")[0].textContent;
        let price = products[i].getElementsByTagName("price")[0].textContent;
        let description = products[i].getElementsByTagName("description")[0].textContent;
        let image = products[i].getElementsByTagName("image")[0].textContent;

        // Update details section with the XML product details
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

    // Insert the generated content into the existing "details" section
    document.getElementById("details").innerHTML = output;
}

// Event Listener to trigger XML loading when an image is clicked
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("i9").addEventListener("click", function() {
        loadXML();
    });
});
