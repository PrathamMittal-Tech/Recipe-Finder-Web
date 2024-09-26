let darkMode = document.querySelector("#dark-mode");
let lightMode = document.querySelector("#light-mode");

let Mode = "white";

darkMode.onclick = () => {
    if (Mode=="white"){
        darkMode.style.visibility = "visible";
        lightMode.style.visibility = "hidden";
    }
}
