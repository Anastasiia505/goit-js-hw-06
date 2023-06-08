const formInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output"); 
formInputEl.addEventListener("input", (e) => {
    if (e.target.value.trim() === "") {
        userNameOutputEl.textContent = "Anonymous";
    }
    else {
        userNameOutputEl.textContent = e.target.value.trim();
    }
 }
);