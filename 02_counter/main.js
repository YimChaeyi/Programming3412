// const h1 = document.querySelector("h1");
// const button = document.querySelector("button");
const h1 = document.getElementById("redult")
// const plusButton = document.getElementsByClassName("plusButton")[0];

let count = 0;

// button.addEventListener("click", () => {
//     count++;
//     h1.textContent = count;
// };

// button.onclick= () => {
//     count++;
//     h1.innerHTML = count;
// };
h1.innerHTML = count;
function plus(){
    count++;
    h1.innerHRML = count;
}