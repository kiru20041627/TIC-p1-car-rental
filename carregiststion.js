document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('car-registration-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const carData = {
            model: form.model.value,
            registrationNumber: form['registration-number'].value,
            manufacturedYear: form['manufactured-year'].value,
            price: form.price.value,
            color: form.color.value,
            seatCount: form['seat-count'].value,
            fuelType: form['fuel-type'].value,
            insuranceDate: form['insurance-date'].value,
            lastOilChange: form['last-oil-change'].value,
            photos: form.photos.files[0] ? URL.createObjectURL(form.photos.files[0]) : null,
            description: form.description.value,
            rcBookCopy: form['rc-book-copy'].value,
            modifiedDetails: form['modified-details'].value,
            extraRemarks: form['extra-remarks'].value
        };

        let cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push(carData);
        localStorage.setItem('cars', JSON.stringify(cars));

        // Optionally redirect to another page or show a confirmation
        window.location.href = 'carview.html'; // Redirect to the page displaying cars
    });

    document.getElementById('back-to-home').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to home page
    });
});
