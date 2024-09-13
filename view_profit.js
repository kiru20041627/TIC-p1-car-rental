document.addEventListener('DOMContentLoaded', () => {
            const profitTableBody = document.getElementById('profit-table-body');
            const totalProfitElement = document.getElementById('total-profit');
            let totalProfit = 0;

            // Retrieve returns data from local storage
            const returnsData = JSON.parse(localStorage.getItem('returns')) || [];

            // Populate the table with returns data
            returnsData.forEach(entry => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${entry.carRegNumber}</td>
                    <td>${entry.userNIC}</td>
                    <td>${entry.startDate}</td>
                    <td>${entry.returnDate}</td>
                    <td>${entry.totalLKR}</td>
                    <td>${entry.remarksCar}</td>
                    <td>${entry.remarksUser}</td>
                `;
                profitTableBody.appendChild(row);

                // Update total profit
                totalProfit += parseFloat(entry.totalLKR) || 0;
            });

            // Display the total profit
            totalProfitElement.textContent = totalProfit.toFixed(2);

            // Print report function
            window.printReport = () => {
                window.print();
            };
        });