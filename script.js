document.addEventListener("DOMContentLoaded", function() {
    const modeBTN = document.getElementById("mode");
    const buttons = document.querySelectorAll("button");
    modeBTN.addEventListener("click", function() {
        document.body.classList.toggle("darkmode");
        document.querySelector("main").classList.toggle("darkmode")
        document.getElementById("display").classList.toggle("darkmode");
        for (let i=0; i <buttons.length; i++) buttons[i].classList.toggle("darkmode");
        if (document.body.classList.contains("darkmode")) modeBTN.innerHTML = "<i class='bx bxs-sun'></i>";
        else modeBTN.innerHTML = "<i class='bx bxs-moon'></i>";
    });
});

const screen = document.getElementById("display");
function display(char) {
    screen.value += char;
} 
function calculate() {
    const input = screen.value;
    var expression = "";
    for (let i=0; i<input.length; i++) {
        if (input[i] === '^') expression += '**';
        else if (input[i] === '×') expression += '*';
        else if (input[i] === '÷') expression += '/';
        else expression += input[i];
    }
    try {
        screen.value = eval(expression);
    } catch {
        alert("Invalid Expression or No Real Solution");
    }
}
function clearDisplay() {
    screen.value = "";
}
function del() {
    var input = screen.value;
    var temp = "";
    for (let i=0; i<input.length-1; i++) {
        temp += input[i];
    } screen.value = temp;
}