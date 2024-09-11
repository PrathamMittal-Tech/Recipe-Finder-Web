let lightMode = document.querySelector("#dark-mode");
let darkMode = document.querySelector("#light-mode");

changeMode = 'white';

darkMode.onclick = () => {
    if (changeMode==='white'){
        document.body.style.backgroundColor = "#0f0f0f";
        document.querySelector("#light")
        changeMode == 'black';
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}
