// function to set image opacities
function setAllImages() {
    // select all image elements within the #product container
    var images = document.querySelectorAll("#product img");
    // loop through each image and set opacity to 0.5 
    images.forEach(img => img.style.opacity = "0.5");
    // log confirmation to developer console
    console.log("All images dimmed");
}

// function to safely extract XML data
function getNodeValue(obj, tag) {
    // get all XML elements with specified tag name from parent object
    const elements = obj.getElementsByTagName(tag);
    // check if any elements were found
    if (elements.length > 0) {
        // return text content of first matching element
        return elements[0].textContent;
    } else {
        // log warning if tag not found message
        console.warn(`Tag "${tag}" not found in XML`);
        // return NA 
        return "NA";
    }
}

// function to load and display XML data
function loadXMLData() {
    // create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // container variable to store content
    var container = document.getElementById("content");
    // clear previous content
    container.innerHTML = '';
    // define callback for when request completes
    xhr.onload = function () {
        // log HTTP status for debugging
        console.log("XHR Status:", xhr.status);
        // check for successful response and valid XML
        if (xhr.status === 200 && xhr.responseXML) {
            // log successful XML receipt
            console.log("XML Received:", xhr.responseXML);
            // store XML document in xmlDOC
            const xmlDoc = xhr.responseXML;
            // Get products element from XML and store it in products
            var products = xmlDoc.documentElement;
            // extract all cpu elements
            var cpuElements = products.getElementsByTagName("CPU");
            // process the first <CPU> element
            var cpu = cpuElements[0];
            // create html detail and store it in output
            var output = `
                <div class="product-info border border-success p-4 bg-dark text-white rounded">
                    <h2>${getNodeValue(cpu, 'TITLE')}</h2>
                    <p><strong>${getNodeValue(cpu, 'PRICE')}</strong></p>
                    <p>${getNodeValue(cpu, 'DESCRIPTION')}</p>
                    <p>${getNodeValue(cpu, 'MORE')}</p>
                    <button id="back-to-products" class="btn btn-success mt-3">Back to Products</button>
                </div>
            `;
            // insert detal into container
            container.innerHTML = output;
            // add back button functionality
            document.getElementById("back-to-products").addEventListener("click", () => {
                location.reload();
            });
        } else {
            // error handling
            console.error("Failed to load XML:", xhr.statusText);
            // error message
            container.innerHTML = `<p class="text-danger">Error loading product details (${xhr.status})</p>`;
        }
    };
    // handle network-level errors (e.g., no connection)
    xhr.onerror = function () {
        console.error("network error");
        container.innerHTML = `<p class="text-danger">network error. check console.</p>`;
    };
    // configure GET request for XML file
    xhr.open("GET", "./data/i9.xml", true);
    // send request with null as parameter
    xhr.send(null);
}

// event listener for image click
document.addEventListener("DOMContentLoaded", () => {
    // get id for i9 and store it in i9Image
    var i9Image = document.getElementById("i9");
    // if i9Image exist
    if (i9Image) {
        // event handler for i9 product
        i9Image.addEventListener("click", function () {
            // dim all images
            setAllImages();
            // full opacity
            this.style.opacity = "1";
            // load and display product details
            loadXMLData();
        });
    } else {
        // log detailed error if image not found
        console.error("Processor image not found");
         // list all available product images for debugging
        document.querySelectorAll("#product img").forEach(img => {
            console.log(`- ${img.id} (${img.src})`);
        });
    }
});