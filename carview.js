document.addEventListener('DOMContentLoaded', () => {
    const carList = document.getElementById('car-list');
    const filterFuelType = document.getElementById('filter-fuel-type');
    const filterModel = document.getElementById('filter-model');
    const filterManufacturedYear = document.getElementById('filter-manufactured-year');
    const resetFilters = document.getElementById('reset-filters');

    function displayCars(cars) {
        carList.innerHTML = '';
        cars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.className = 'car-item';
            carItem.innerHTML = `
                ${car.photos ? `<img src="${car.photos}" alt="Car Photo">` : ''}
                <div class="details">
                    <h3>${car.model} (${car.manufacturedYear})</h3>
                    <p><strong>Registration Number:</strong> ${car.registrationNumber}</p>
                    <p><strong>Price:</strong> $${car.price}</p>
                    <p><strong>Color:</strong> ${car.color}</p>
                    <p><strong>Seats:</strong> ${car.seatCount}</p>
                    <p><strong>Fuel Type:</strong> ${car.fuelType}</p>
                    <p><strong>Insurance Date:</strong> ${car.insuranceDate}</p>
                    <p><strong>Last Oil Change (km):</strong> ${car.lastOilChange}</p>
                    <p><strong>Description:</strong> ${car.description}</p>
                    <p><strong>RC Book Copy:</strong> ${car.rcBookCopy}</p>
                    <p><strong>Modified Details:</strong> ${car.modifiedDetails}</p>
                    <p><strong>Extra Remarks:</strong> ${car.extraRemarks}</p>
                </div>
            `;
            carList.appendChild(carItem);
        });
    }

    function filterCars() {
        const fuelType = filterFuelType.value;
        const model = filterModel.value.toLowerCase();
        const manufacturedYear = filterManufacturedYear.value;

        let cars = JSON.parse(localStorage.getItem('cars')) || [];

        if (fuelType !== 'All') {
            cars = cars.filter(car => car.fuelType === fuelType);
        }

        if (model) {
            cars = cars.filter(car => car.model.toLowerCase().includes(model));
        }

        if (manufacturedYear) {
            cars = cars.filter(car => car.manufacturedYear == manufacturedYear);
        }

        displayCars(cars);
    }

    filterFuelType.addEventListener('change', filterCars);
    filterModel.addEventListener('input', filterCars);
    filterManufacturedYear.addEventListener('input', filterCars);
    resetFilters.addEventListener('click', () => {
        filterFuelType.value = 'All';
        filterModel.value = '';
        filterManufacturedYear.value = '';
        filterCars();
    });

    // Initial display
    filterCars();
});
