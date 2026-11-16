
/* ========================================
   1. MOBILE NAVIGATION MENU
======================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the navigation menu
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";
    });
});


/* ========================================
   2. AUTOMATIC COPYRIGHT YEAR
======================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ========================================
   3. DEMO BOOKING FORM
======================================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    // Prevent the browser from submitting the form normally
    event.preventDefault();

    // Collect the values entered by the user
    const formData = new FormData(bookingForm);

    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const date = formData.get("date") || "Not specified";
    const message = formData.get("message") || "Not provided";

    // Build the enquiry email
    const subject = encodeURIComponent(
        "Drone service enquiry: " + service
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nService: " + service +
        "\nPreferred date: " + date +
        "\n\nProject details:\n" + message
    );

    // Replace this placeholder with your real business email
    const businessEmail = "hello@yourdronebusiness.com";

    // Open the user's default email application
    window.location.href =
        "mailto:" + businessEmail +
        "?subject=" + subject +
        "&body=" + body;
});
