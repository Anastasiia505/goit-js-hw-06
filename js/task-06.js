const formInputEl = document.querySelector("#validation-input");

formInputEl.addEventListener("blur", (e) => {
    if (e.target.value.length === Number(formInputEl.dataset.length)) {
        formInputEl.classList.add("valid");
        formInputEl.classList.remove("invalid");
    }
    else {
        formInputEl.classList.remove("valid");
        formInputEl.classList.add("invalid");
    }
 
    });


