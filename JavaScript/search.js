document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchBtn").addEventListener("click", function () {
        var query = document.getElementById("searchBar").value.toLowerCase();
        var productDetails = document.getElementById("productDetails");

        // Clear previous results
        productDetails.innerHTML = "";

        if (query.includes("rtx 4090")) {
            loadHTML("4090.html");
        } else if (query.includes("intel i9")) {
            loadXML("i9.xml");
        } else if (query.includes("corsair ram")) {
            loadJSON("ram.json");
        } else if (query.includes("amd rx")) {
            loadJQuery("amd-rx.jq");
        } else {
            productDetails.innerHTML = "<p class='text-center text-danger'>Product not found.</p>";
        }
    });

    function loadHTML(file) {
        fetch(file)
            .then(response => response.text())
            .then(data => document.getElementById("productDetails").innerHTML = data)
            .catch(error => console.error("Error loading HTML:", error));
    }

    function loadXML(file) {
        fetch(file)
            .then(response => response.text())
            .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
            .then(data => {
                var name = data.getElementsByTagName("name")[0].textContent;
                var price = data.getElementsByTagName("price")[0].textContent;
                var desc = data.getElementsByTagName("description")[0].textContent;
                document.getElementById("productDetails").innerHTML = `<div class="product-info bg-dark text-white p-4 rounded">
                    <h2>${name}</h2><p><strong>Price:</strong> ${price}</p><p>${desc}</p></div>`;
            })
            .catch(error => console.error("Error loading XML:", error));
    }

    function loadJSON(file) {
        fetch(file)
            .then(response => response.json())
            .then(data => {
                document.getElementById("productDetails").innerHTML = `<div class="product-info bg-dark text-white p-4 rounded">
                    <h2>${data.name}</h2><p><strong>Price:</strong> ${data.price}</p><p>${data.description}</p></div>`;
            })
            .catch(error => console.error("Error loading JSON:", error));
    }

    function loadJQuery(file) {
        $("#productDetails").load(file, function (response, status) {
            if (status == "error") {
                $("#productDetails").html("<p class='text-center text-danger'>Error loading product.</p>");
            }
        });
    }
});