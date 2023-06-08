const formEl = document.querySelector(".login-form");
const btnEl = document.querySelector("button");
const profile = {};
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.elements.email.value === "" || e.target.elements.password.value === "") {
        alert("Не всі поля заповнені");
    }
    else {
        profile.email = e.target.elements.email.value;;
        profile.password = e.target.elements.password.value;
        console.log(profile);
        formEl.reset();
    }

});


