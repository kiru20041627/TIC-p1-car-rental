        document.addEventListener('DOMContentLoaded', () => {
            const rentedCarsTableBody = document.getElementById('rented-cars-table-body');
            const approvedCars = JSON.parse(localStorage.getItem('approvedCars')) || [];
            const cars = JSON.parse(localStorage.getItem('cars')) || [];

            function updateRentedCarsTable() {
                rentedCarsTableBody.innerHTML = '';
                approvedCars.forEach(regNumber => {
                    const car = cars.find(car => car.registrationNumber === regNumber);
                    if (car) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${car.registrationNumber}</td>
                            <td>${car.model}</td>
                            <td><button class="btn-return" onclick="returnCar('${car.registrationNumber}')">Return</button></td>
                        `;
                        rentedCarsTableBody.appendChild(row);
                    }
                });
            }

            window.returnCar = (regNumber) => {
                localStorage.setItem('returnCarRegNumber', regNumber);
                window.location.href = 'car-return.html';
            };

            updateRentedCarsTable();
        });