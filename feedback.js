document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            ratingInput.value = rating;
            
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= rating) {
                    s.style.color = 'gold';
                } else {
                    s.style.color = 'gray';
                }
            });
        });
    });

    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Get existing reviews from local storage
        const reviews = JSON.parse(localStorage.getItem('feedbackReviews')) || [];
        reviews.push(data);
        
        // Save updated reviews to local storage
        localStorage.setItem('feedbackReviews', JSON.stringify(reviews));
        
        console.log(data);
        alert('Feedback submitted successfully!');
        
        // Optionally, clear the form
        form.reset();
        stars.forEach(s => s.style.color = 'gray');
    });
});
