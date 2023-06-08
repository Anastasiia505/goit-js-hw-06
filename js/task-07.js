const formInputEl = document.querySelector("#font-size-control"); 
const textOutputEl = document.querySelector("#text"); 
 textOutputEl.style.fontSize = formInputEl.value+"px";
formInputEl.addEventListener("input", () => {
    textOutputEl.style.fontSize = formInputEl.value + "px";
});
console.log(formInputEl.value);