document.addEventListener('DOMContentLoaded', () => {
    const reviewsTableBody = document.querySelector('#reviewsTable tbody');
    
    // Retrieve reviews from local storage
    const reviews = JSON.parse(localStorage.getItem('feedbackReviews')) || [];

    // Function to create table rows for reviews
    function renderReviews(reviews) {
        reviewsTableBody.innerHTML = ''; // Clear existing rows
        reviews.forEach(review => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${review.carRegNumber}</td>
                <td>${review.rentalDate}</td>
                <td>${review.comments}</td>
                <td>${'⭐'.repeat(Number(review.rating))}</td>
            `;
            reviewsTableBody.appendChild(row);
        });
    }

    renderReviews(reviews);
});
