// Get the button element by its ID
var myBtn = document.getElementById('ajaxBtn');

// Add event listener to trigger the Ajax request when the button is clicked
myBtn.addEventListener('click', makeRequest, false);

// Function to extract text content from XML elements
function getNodeValue(obj, tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

// Function to handle the Ajax request
function makeRequest() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Get the content container where data will be displayed
    var container = document.getElementById('content');
    container.innerHTML = ''; // Clear existing content

    // When the response has loaded
    xhr.onload = function () {
        // Check if the server status is OK (200)
        if (xhr.status === 200) {
            // Parse the XML response
            var response = xhr.responseXML;

            // Get <content> elements from the XML file
            var content = response.getElementsByTagName('content');

            // Loop through the XML content elements
            for (var i = 0; i < content.length; i++) {
                // Declare variables for header and paragraphs
                var header, paragraph;

                // Create and add header element
                header = document.createElement('h1');
                header.appendChild(document.createTextNode(getNodeValue(content[i], 'header')));
                container.appendChild(header);

                // Create and add paragraph 1
                paragraph = document.createElement('p');
                paragraph.appendChild(document.createTextNode(getNodeValue(content[i], 'p1')));
                container.appendChild(paragraph);

                // Create and add paragraph 2
                paragraph = document.createElement('p');
                paragraph.appendChild(document.createTextNode(getNodeValue(content[i], 'p2')));
                container.appendChild(paragraph);

                // Create and add paragraph 3
                paragraph = document.createElement('p');
                paragraph.appendChild(document.createTextNode(getNodeValue(content[i], 'p3')));
                container.appendChild(paragraph);
            }
        }
    };

    // Prepare the request (GET request to fetch `data.xml`, asynchronous)
    xhr.open('GET', 'data/loadXML.xml', true);
    
    // Send the request
    xhr.send(null);
}
