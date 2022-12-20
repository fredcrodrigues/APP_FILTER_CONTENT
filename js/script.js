const input = document.querySelector(".filter input");
const cards = document.querySelector(".row .card");

console.log(cards);

input.addEventListener('inputs', function(e) {
    console.log(e.target.value);
})