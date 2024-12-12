let countInput = document.querySelector("#countInput");
let countUp = document.querySelector("#countUp");
let count = 0;

countUp.addEventListener("click", function () {
    count = count + 1;
    countInput.value = count;
})

