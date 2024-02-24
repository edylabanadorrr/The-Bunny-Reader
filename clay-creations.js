/* Burger menu */

document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger_icon');
    const navbarMenu = document.querySelector('.navbar_menu');

    burgerIcon.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });
});

/* PHOTOS JS*/
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 0
})


// Add the following JavaScript to toggle the dropdown on button click
document.getElementById("dropdownButton").addEventListener("click", function() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});