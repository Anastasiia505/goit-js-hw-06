
const listLiEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listLiEl.length}`);
listLiEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent} 
    \nElements: ${el.lastElementChild.children.length}`);

});
