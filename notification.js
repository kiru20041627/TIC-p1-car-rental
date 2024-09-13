   document.addEventListener('DOMContentLoaded', () => {
            const requestTableBody = document.getElementById('request-table-body');
            const notificationCount = document.getElementById('notification-count');

            // Fetch requests from local storage
            const requests = JSON.parse(localStorage.getItem('requests')) || [];
            notificationCount.textContent = `New Requests: ${requests.length}`;

            function updateRequestTable() {
                requestTableBody.innerHTML = '';
                requests.forEach((request, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${request.regNumber}</td>
                        <td>${new Date(request.timestamp).toLocaleString()}</td>
                        <td class="actions">
                            <button class="btn-approve" onclick="approveRequest(${index})">Approve</button>
                            <button class="btn-reject" onclick="rejectRequest(${index})">Reject</button>
                        </td>
                    `;
                    requestTableBody.appendChild(row);
                });
            }

            function updateApprovedCars(regNumber) {
                let approvedCars = JSON.parse(localStorage.getItem('approvedCars')) || [];
                approvedCars.push(regNumber);
                localStorage.setItem('approvedCars', JSON.stringify(approvedCars));
            }

            function removeRequest(index) {
                requests.splice(index, 1);
                localStorage.setItem('requests', JSON.stringify(requests));
                updateRequestTable();
                notificationCount.textContent = `New Requests: ${requests.length}`;
            }

            window.approveRequest = (index) => {
                const regNumber = requests[index].regNumber;
                updateApprovedCars(regNumber);
                removeRequest(index);
            };

            window.rejectRequest = (index) => {
                removeRequest(index);
            };

            updateRequestTable();
        });