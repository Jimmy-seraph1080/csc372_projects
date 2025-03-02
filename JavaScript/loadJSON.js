// loadJSON.js
document.addEventListener('DOMContentLoaded', function() {
    // Load reviews when page loads
    loadReviews('Data/reviews.json');
});

function loadReviews(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reviews = JSON.parse(xhr.responseText);
            let html = '<div class="reviews mt-4"><h3>Customer Reviews</h3>';
            reviews.forEach(review => {
                html += `
                    <div class="review bg-dark p-2 my-2">
                        <h5>${review.product}</h5>
                        <p>Rating: ${'★'.repeat(review.rating)}</p>
                        <p>${review.review}</p>
                    </div>
                `;
            });
            html += '</div>';
            document.getElementById('content').insertAdjacentHTML('beforeend', html);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}