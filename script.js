// ========================
// HAMBURGER MENU
// ========================

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show-menu");
}

// ========================
// LANGUAGE TOGGLE
// ========================

let currentLanguage = localStorage.getItem("language") || "en";

function applyLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("language", language);

    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(element => {

        if (language === "en") {
            element.innerHTML = element.getAttribute("data-en");
        } else {
            element.innerHTML = element.getAttribute("data-es");
        }

    });

    const langButton = document.getElementById("languageButton");

    if (langButton) {
        langButton.textContent =
            language === "en"
            ? "ES"
            : "EN";
    }
}

function toggleLanguage() {

    if (currentLanguage === "en") {
        applyLanguage("es");
    } else {
        applyLanguage("en");
    }

}

// ========================
// LOAD SAVED LANGUAGE
// ========================

document.addEventListener("DOMContentLoaded", () => {

    applyLanguage(currentLanguage);

});

// ========================
// FUTURE FEATURE PLACEHOLDERS
// ========================

// Game Filters
function filterGames(category) {

    console.log("Future game filter:", category);

}

// Review Submission
function submitReview() {

    console.log("Future review submission");

}

// Wishlist
function addToWishlist(gameName) {

    console.log("Future wishlist:", gameName);

}
