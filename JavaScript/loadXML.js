// loadXML.js
document.addEventListener('DOMContentLoaded', function() {
    // Trigger on hover over product cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', function() {
            loadSpecs('Data/specs.xml', this.id);
        });
    });
});

function loadSpecs(url, productId) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            const product = xmlDoc.querySelector(`product[id='${productId}']`);
            if (product) {
                const specs = `
                    <p class="text-info">Price: ${product.querySelector('price').textContent}</p>
                    <p>Specs: ${product.querySelector('specs').textContent}</p>
                `;
                document.getElementById(productId).insertAdjacentHTML('afterend', specs);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}