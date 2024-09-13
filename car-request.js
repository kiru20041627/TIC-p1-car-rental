 document.addEventListener('DOMContentLoaded', () => {
            const carSelect = document.getElementById('carName');
            const carDetailsDiv = document.getElementById('car-details');
            const requestButton = document.getElementById('request-button');
            const filterModel = document.getElementById('filter-model');
            const filterFuelType = document.getElementById('filter-fuel-type');
            const filterSeatCount = document.getElementById('filter-seat-count');
            const filterPriceRange = document.getElementById('filter-price-range');

            // Populate dropdown with car names from local storage
            let cars = JSON.parse(localStorage.getItem('cars')) || [];
            const carOptions = cars.map(car => ({
                value: car.registrationNumber,
                text: `${car.model} (${car.registrationNumber})`,
                ...car
            }));

            function updateCarOptions(filteredCars) {
                carSelect.innerHTML = '<option value="">Select Car</option>';
                filteredCars.forEach(car => {
                    const option = document.createElement('option');
                    option.value = car.registrationNumber;
                    option.textContent = `${car.model} (${car.registrationNumber})`;
                    carSelect.appendChild(option);
                });
            }

            function filterCars(filter) {
                const filteredCars = cars.filter(car => {
                    return (filter.model ? car.model === filter.model : true) &&
                           (filter.fuelType ? car.fuelType === filter.fuelType : true) &&
                           (filter.seatCount ? car.seatCount === filter.seatCount : true) &&
                           (filter.minPrice && filter.maxPrice ? car.price >= filter.minPrice && car.price <= filter.maxPrice : true);
                });
                updateCarOptions(filteredCars);
            }

            // Display selected car details
            carSelect.addEventListener('change', function() {
                const selectedRegNumber = this.value;
                const car = cars.find(car => car.registrationNumber === selectedRegNumber);

                if (car) {
                    carDetailsDiv.innerHTML = `
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
                        ${car.photos ? `<img src="${car.photos}" alt="Car Photo" style="width: 100px; height: auto;">` : ''}
                    `;
                } else {
                    carDetailsDiv.innerHTML = '<p>Please select a car to see details.</p>';
                }
            });

            // Handle request button click
            requestButton.addEventListener('click', function() {
                const selectedRegNumber = carSelect.value;
                if (selectedRegNumber) {
                    // Create request object
                    const request = {
                        regNumber: selectedRegNumber,
                        timestamp: new Date().toISOString()
                    };

                    // Save request to local storage
                    let requests = JSON.parse(localStorage.getItem('requests')) || [];
                    requests.push(request);
                    localStorage.setItem('requests', JSON.stringify(requests));

                    alert('Thank you for requesting the car in our service. Please wait for approval.');
                    
                    // Optionally redirect to notification page
                    // window.location.href = 'notification.html';
                } else {
                    alert('Please select a car first.');
                }
            });

            // Filter buttons functionality
            filterModel.addEventListener('click', () => {
                const model = prompt("Enter model to filter:");
                filterCars({ model });
            });

            filterFuelType.addEventListener('click', () => {
                const fuelType = prompt("Enter fuel type to filter:");
                filterCars({ fuelType });
            });

            filterSeatCount.addEventListener('click', () => {
                const seatCount = prompt("Enter seat count to filter:");
                filterCars({ seatCount });
            });

            filterPriceRange.addEventListener('click', () => {
                const minPrice = prompt("Enter minimum price:");
                const maxPrice = prompt("Enter maximum price:");
                filterCars({ minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice) });
            });

            // Initialize with all cars
            updateCarOptions(carOptions);
        });