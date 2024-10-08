let headerSearch = document.querySelector(".header-search");
let footerSearch = document.querySelector("#contact-input");
let searchbtn = document.querySelector("#search-img");

searchbtn.onclick = () => {
  headerSearch.value = "";
};

let clearFunc = (inputVar) => {
    inputVar.addEventListener("keypress", event => {
        if (event.key === "Enter" || event.keyCode === 13) {
            inputVar.value = "";
        }
      });
}

clearFunc(headerSearch);
clearFunc(footerSearch);
