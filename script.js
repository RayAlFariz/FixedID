
/*toggle class active
const navbarNav = document.querySelector(".navbar .navbar-nav");

//ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
*/
// HTML elements
const sidebar = document.querySelector('.navbar .navbar-nav');
const sidebarToggle = document.querySelector('#menu');

// Toggle sidebar visibility
function toggleSidebar() {
  sidebar.classList.toggle('active');
}

// Event listener for sidebar toggle button
sidebarToggle.addEventListener('click', toggleSidebar);
