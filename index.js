var numberOfNumButtons = document.querySelectorAll(".numbers").length;
var op = "";
var n1 = "";
var n1_end = false;
var n2 = "";

// Number case
for (var i = 0; i < numberOfNumButtons; i++)
{
    document.querySelectorAll(".numbers")[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        if (document.querySelector(".input").textContent === " Enter number ")
        {
            // Will always be first operand, at the beginning
            document.querySelector(".input").textContent = buttonInnerHTML;
            n1 = buttonInnerHTML;
        }
        else
        {
            // Change into the number typed, depending on which operand is the current one (n1 or n2)
            if(n1_end === true)
            {
                // If n1 ended and currently on n2
                if(document.querySelector(".input").textContent === "")
                {
                    // If starting n2
                    document.querySelector(".input").textContent = buttonInnerHTML;
                    n2 = buttonInnerHTML;
                }
                else
                {
                    // Add digits for n2
                    document.querySelector(".input").textContent += buttonInnerHTML;
                    n2 = n2.concat(buttonInnerHTML);
                }

            }
            else
            {
                // Add digits to n1 if it has not ended
                document.querySelector(".input").textContent += buttonInnerHTML;
                n1 = n1.concat(buttonInnerHTML);
            }
            
        }
        
    });
}

function Calculation(n1, n2) {
    // Calculate each operation based on operands and operation
    var result;
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case 'x':
            result = n1 * n2;
            break;
        case ':':
            result = n1 / n2;
            break;
    }
    console.log(n1);
    console.log(n2);
    console.log(result);
    return result;
}

// Operation case
var numberOperationButtons = document.querySelectorAll(".operation").length;
for (var i = 0; i < numberOperationButtons; i++)
{
    document.querySelectorAll(".operation")[i].addEventListener('click', function () {
        // Set global variable to be the current operation and prepare for n2
        op = this.innerHTML;
        n1_end = true;
        document.querySelector(".input").textContent = "";
        
    });
}

// Equal case
document.querySelector(".equal").addEventListener('click', function() {
    document.querySelector(".input").textContent = Calculation(Number(n1), Number(n2)).toString();
});

// Clear case
document.querySelector(".clear").addEventListener('click', function() {
    document.querySelector(".input").textContent = " Enter number ";
    n1 = "";
    n2 = "";
    op = "";
    n1_end = false;
});
