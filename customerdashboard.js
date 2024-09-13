 document.addEventListener('DOMContentLoaded', () => {
            const userName = localStorage.getItem('loggedInUser');
            if (userName) {
                document.getElementById('user-name').textContent = userName;
            } else {
                document.getElementById('user-name').textContent = 'Guest';
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const url = this.getAttribute('data-url');
                document.getElementById('contentFrame').src = url;
            });
        });