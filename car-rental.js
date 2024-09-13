 document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('car-return-form');
            const carSelect = document.getElementById('carRegNumber');

            // Populate the dropdown with cars from local storage
            const cars = JSON.parse(localStorage.getItem('cars')) || [];
            cars.forEach(car => {
                const option = document.createElement('option');
                option.value = car.registrationNumber;
                option.textContent = car.registrationNumber;
                carSelect.appendChild(option);
            });

            // Calculate total function
            window.calculateTotal = () => {
                const maintenanceCost = parseFloat(form.maintenanceCost.value) || 0;
                const discount = parseFloat(form.discount.value) || 0;
                const extraKm = parseFloat(form.extraKm.value) || 0;

                // Total = (Extra Km * 100) - Maintenance Cost - Discount
                const totalLKR = (extraKm * 100) - maintenanceCost - discount;

                form.totalLKR.value = totalLKR.toFixed(2); // Display the total in the Total (LKR) box
            };

            // Handle form submission
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const formData = {
                    carRegNumber: form.carRegNumber.value,
                    userNIC: form.userNIC.value,
                    startDate: form.startDate.value,
                    returnDate: form.returnDate.value,
                    maintenanceCost: form.maintenanceCost.value,
                    discount: form.discount.value,
                    perDayCost: form.perDayCost.value,
                    extraKm: form.extraKm.value,
                    totalLKR: form.totalLKR.value,
                    noDamage: form.noDamage.checked,
                    noAccident: form.noAccident.checked,
                    noDrunkDrive: form.noDrunkDrive.checked,
                    noPoliceCase: form.noPoliceCase.checked,
                    oilRefill: form.oilRefill.checked,
                    returnTax: form.returnTax.checked,
                    remarksCar: form.remarksCar.value,
                    remarksUser: form.remarksUser.value
                };

                // Save to local storage
                const returns = JSON.parse(localStorage.getItem('returns')) || [];
                returns.push(formData);
                localStorage.setItem('returns', JSON.stringify(returns));

                alert('Car return data has been saved successfully!');
                form.reset(); // Reset the form after saving
            });

            // Print receipt function
            window.printReceipt = () => {
                window.print();
            };
        });