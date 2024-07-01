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

// Ordering form
    const orderButton = document.getElementById('orderButton');
    const orderForm = document.getElementById('orderForm');
    const clayContainer = document.querySelector('.container');
    const userDetailsForm = document.getElementById('userDetailsForm');
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');

    orderButton.addEventListener('click', function () {
        // Toggle the 'visible' class of the order form
        orderForm.classList.toggle('visible');
        // Toggle the visibility of the clay container based on the visibility of the order form
        clayContainer.style.display = orderForm.classList.contains('visible') ? 'none' : 'block';
    });

    nextButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission (if the button is inside a form)
        orderForm.classList.remove('visible');
        // Show the user details form
        userDetailsForm.style.display = 'block';
    });

    backButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Hide the user details form
        userDetailsForm.style.display = 'none';

        // Show the order form
        orderForm.style.display = 'block';
    })

    // Listen for clicks on the document
    document.addEventListener('click', function (event) {
        const isClickInsideOrderForm = orderForm.contains(event.target);
        const isClickOnOrderButton = event.target === orderButton;

        // Check if the order form is currently visible
        if (orderForm.classList.contains('visible')) {
            // Check if the click is not inside the order form or on the order button
            if (!isClickInsideOrderForm && !isClickOnOrderButton) {
                // Hide the order form
                orderForm.classList.remove('visible');
                // Show the clay container
                clayContainer.style.display = 'block';
            }
        }

        const isClickInsideUserDetailForm = userDetailsForm.contains(event.target);
        const isClickOnUserDetailButton = event.target === nextButton;

        // Check if the user detail is currently visible
        if (userDetailsForm.style.display === 'block') {
            // Check if the click is not inside the user details form or on the back button
            if (!isClickInsideUserDetailForm && !isClickOnUserDetailButton) {
                // Hide the user details form
                userDetailsForm.style.display = 'none';
                // Show the clay container
                clayContainer.style.display = 'block';  
            }
        }
    });

    const userDetails = document.getElementById('userDetails');
    







