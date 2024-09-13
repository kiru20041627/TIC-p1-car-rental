document.addEventListener('DOMContentLoaded', function() {
    const userTableBody = document.querySelector('#userTable tbody');

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Function to render user data in the table
    function renderUsers() {
        userTableBody.innerHTML = ''; // Clear existing rows

        users.forEach((user, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.nic}</td>
                <td>${user.address}</td>
                <td>${user.contact}</td>
                <td>${user.license}</td>
                <td><a href="${user.addressProof}" target="_blank">View Proof</a></td>
                <td>${user.username}</td>
                <td>
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Delete</button>
                </td>
            `;

            userTableBody.appendChild(row);
        });
    }

    // Function to handle editing a user
    window.editUser = function(index) {
        const user = users[index];
        if (user) {
            // Redirect to an edit form or populate a form for editing
            // For simplicity, just log the user data
            console.log('Editing user:', user);
            alert(`Edit user: ${user.name}`);
        }
    };

    // Function to handle deleting a user
    window.deleteUser = function(index) {
        if (confirm('Are you sure you want to delete this user?')) {
            users.splice(index, 1); // Remove user from array
            localStorage.setItem('users', JSON.stringify(users)); // Update local storage
            renderUsers(); // Re-render table
        }
    };

    // Initial render of users
    renderUsers();
});
