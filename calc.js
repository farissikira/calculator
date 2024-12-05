const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;

}

function clearDisplay() {

    display.value = "";

}


function calculate() {

    try {

        let result = eval(display.value);

        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(3);
        }
    }



    catch (error) {
        display.value = "Error"
    }

}


