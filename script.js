document.addEventListener('DOMContentLoaded', function() {
    var barLine = document.querySelector('.bar-line');
    var barMenu = document.querySelector('.bar-menu');

    barLine.addEventListener('click', function() {
        toggleMenu();
    });

    function toggleMenu() {
        barMenu.classList.toggle('active');
    }
});
