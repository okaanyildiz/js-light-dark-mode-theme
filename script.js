const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");
const toggleSwitch = document.querySelector("input[type='checkbox']");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Dynamically Switch Theme
// Save theme data to the Local Storage
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightMode();
    }
}

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = "rgb(0 0 0 / .4)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    imageMode("dark");
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = "rgb(255 255 255 / .4)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    textBox.style.backgroundColor = "rgb(0 0 0 / .4)";
    imageMode("light");
}

// Switch between light or dark images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

// Check local storage for current theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currenTheme === "dark") {
        toggleSwitch.checked = true;
    }
}
