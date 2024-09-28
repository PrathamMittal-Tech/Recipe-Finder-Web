let input = document.querySelector("#contact-input");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        input.innerText = "";
    }
  });