
// Number or operation case
function display(element) {
    // Add number or operation to input line
    document.querySelector("input").value += element;
}

// Equal case
document.querySelector(".equal").addEventListener('click', function() {
    var curr = document.querySelector("input").value;
    // Evaluate the equation written in the input line
    var result = eval(curr);
    document.querySelector("input").value = result;
});

// Clear case
document.querySelector(".clear").addEventListener('click', function() {
    document.querySelector("input").value = "";
});

document.querySelector(".negative").addEventListener('click', function() {
    var curr = document.querySelector("input").value;
    console.log(curr);
    var result = curr * -1;
    console.log(result);
    document.querySelector("input").value = result;
});