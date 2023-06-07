const formInputEl = document.querySelector("#font-size-control"); 
const textOutputEl = document.querySelector("#text"); 
formInputEl.addEventListener("input", () => {
    textOutputEl.style.fontSize = formInputEl.value + "px";
});
