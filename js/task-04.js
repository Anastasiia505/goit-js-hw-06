const valueEl = document.querySelector("#value");
const descBtnEl = document.querySelector("[data-action='decrement']");
const incBtnEl = document.querySelector("[data-action='increment']");


let value = 0;
const handleDescBtnClick= ()=> {
    value -= 1;
    valueEl.textContent = value;
};
 const handleIncBtnClick =()=> {
    value += 1;
    valueEl.textContent = value;
};
descBtnEl.addEventListener("click",handleDescBtnClick);
incBtnEl.addEventListener("click",handleIncBtnClick);