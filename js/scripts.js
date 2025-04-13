/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Don't give to redirect page

    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get("email").trim();
    const message = formData.get("phone").trim();

    const successMessage = document.getElementById("submitSuccessMessage");
    const errorMessage = document.getElementById("submitErrorMessage");

    successMessage.classList.add("d-none");
    errorMessage.classList.add("d-none");

    if (!email || !phone) {
        errorMessage.classList.remove("d-none");
        return;
    }

    fetch("https://getform.io/f/bwnqkvma", {
        method: "POST",
        body: formData
    })

    .then(response => {
        if (response.ok) {
            successMessage.classList.remove("d-none");
            form.reset();
        } else {
            alert("Błąd wysyłania wiadomości!");
        }
    })
    .catch(error => {
        console.error("Ошибка:", error);
        alert("Błąd podczas wysyłania.");
    });
});
