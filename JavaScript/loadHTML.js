// loadHTML.js
document.addEventListener('DOMContentLoaded', function() {
    // Trigger when a product image is clicked
    document.querySelectorAll('.product').forEach(img => {
        img.addEventListener('click', function() {
            loadPromotion('Data/promotions.html');
        });
    });
});

function loadPromotion(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Insert promotion below the clicked product
            const promotionDiv = document.createElement('div');
            promotionDiv.innerHTML = xhr.responseText;
            this.parentElement.appendChild(promotionDiv);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}