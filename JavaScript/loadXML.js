// Function to set image opacities
function setAllImages() {
    const images = document.querySelectorAll("#product img");
    images.forEach(img => img.style.opacity = "0.5");
    console.log("All images dimmed");
}

// Function to safely extract XML data
function getNodeValue(obj, tag) {
    const elements = obj.getElementsByTagName(tag);
    if (elements.length > 0) {
        return elements[0].textContent;
    } else {
        console.warn(`Tag "${tag}" not found in XML`);
        return "N/A";
    }
}

// Function to load and display XML data
function loadXMLData() {
    const xhr = new XMLHttpRequest();
    const container = document.getElementById("content");
    container.innerHTML = ''; // Clear previous content

    xhr.onload = function () {
        console.log("XHR Status:", xhr.status);
        if (xhr.status === 200 && xhr.responseXML) {
            console.log("XML Received:", xhr.responseXML);
            const xmlDoc = xhr.responseXML;
            const products = xmlDoc.documentElement; // Root <products> element
            
            // Extract all <CPU> elements
            const cpuElements = products.getElementsByTagName("CPU");
            console.log("Found CPUs:", cpuElements.length);

            if (cpuElements.length === 0) {
                container.innerHTML = `<p class="text-danger">No CPU data found in XML</p>`;
                return;
            }

            // Process the first <CPU> element
            const cpu = cpuElements[0];
            const output = `
                <div class="product-info bg-dark text-white p-4 rounded">
                    <h2>${getNodeValue(cpu, 'TITLE')}</h2>
                    <p><strong>${getNodeValue(cpu, 'PRICE')}</strong></p>
                    <p>${getNodeValue(cpu, 'DESCRIPTION')}</p>
                    <p>${getNodeValue(cpu, 'MORE')}</p>
                    <button id="back-to-products" class="btn btn-success mt-3">Back to Products</button>
                </div>
            `;

            container.innerHTML = output;

            // Add back button functionality
            document.getElementById("back-to-products").addEventListener("click", () => {
                location.reload();
            });

        } else {
            console.error("Failed to load XML:", xhr.statusText);
            container.innerHTML = `<p class="text-danger">Error loading product details (${xhr.status})</p>`;
        }
    };

    xhr.onerror = function () {
        console.error("Network error");
        container.innerHTML = `<p class="text-danger">Network error. Check console.</p>`;
    };

    xhr.open("GET", "Data/i9.xml", true);
    xhr.send(null);
}

// Event listener for image click
document.addEventListener("DOMContentLoaded", () => {
    const i9Image = document.getElementById("i9");
    console.log("DOM loaded. Image element:", i9Image);

    if (i9Image) {
        i9Image.addEventListener("click", function () {
            console.log("Image clicked");
            setAllImages();
            this.style.opacity = "1";
            loadXMLData();
        });
    } else {
        console.error("Image with ID 'i9' not found in HTML");
    }
});