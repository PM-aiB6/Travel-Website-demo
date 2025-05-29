// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;

        if (!name || !email) {
            alert("Please fill in all fields!");
            event.preventDefault(); // Prevent form submission if fields are empty
        } else {
            alert("Your booking has been submitted!");
        }
    });
});
