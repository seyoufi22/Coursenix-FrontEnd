document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const signInBtn = document.querySelector('.sign-in-btn');
    const profileBtn = document.querySelector('.profile-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle dropdown menu
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });

    // Prevent dropdown from closing when clicking inside
    dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Function to toggle auth elements visibility
    window.toggleAuthElements = function(isLoggedIn) {
        if (isLoggedIn) {
            signInBtn.style.display = 'none';
            profileBtn.parentElement.style.display = 'block';
        } else {
            signInBtn.style.display = 'block';
            profileBtn.parentElement.style.display = 'none';
        }
    };

    // Example of how to use the toggle function (for backend integration)
    // window.toggleAuthElements(true);  // When user logs in
    // window.toggleAuthElements(false); // When user logs out
}); 