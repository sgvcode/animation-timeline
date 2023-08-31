const icon = document.querySelector('.view__code');
const codeBox = document.getElementById('code-box');
let isVisible = false; // Initialize the visibility state

icon.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    if (isVisible) {
        codeBox.style.display = 'none'; // Hide the box
    } else {
        codeBox.style.display = 'block'; // Show the box
    }
    isVisible = !isVisible; // Toggle the visibility state
});