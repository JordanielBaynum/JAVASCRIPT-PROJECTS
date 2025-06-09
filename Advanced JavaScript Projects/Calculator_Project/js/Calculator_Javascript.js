//!Creates an object to keep track of values//
const Calculator = {
    //!This will display 0 on the calculator screen//
    Display_Value: '0',
    //!This will hold the first operand for any expressions, we set it to null for now//
    First_Operand: null,
    //!This checks whether or not the second operand has been input//
    Wait_Second_Operand: false,
    //!This will hold the operator, we set it to null for now//
    Operator: null,
};

//!This modifies values each time a button is clicked//
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    //!We are checking if Wait_Second_Operand is true and set Display_Value to the key that was clicked//
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //!This overwrites Display_Value if the current value is 0 or it appends the digit to the value//
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//!This section handles decimal points//
function Input_Decimal(dot) {
    //!This checks if Wait_Second_Operand is true and sets Display_Value to 0 before appending the decimal point//
    if (Calculator.Wait_Second_Operand === true) return;
    //!This checks if Display_Value already contains a decimal point, if not it appends the decimal point//
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//!This section handles operators//
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, Operator } = Calculator;
    //!When an operator key is pressed, we convert Display_Value to a number and assign it to First_Operand if it is null//
    const Value_of_Input = parseFloat(Display_Value);

    //!Checks if an operator already exists and if Wait_Second_Operand is true, then updates the operator//
    if (Operator && Calculator.Wait_Second_Operand) {
        Calculator.Operator = Next_Operator;
        return;
    }

    //!If First_Operand is null, we assign Value_of_Input to it, otherwise we perform a calculation//
    if (First_Operand === null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (Operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[Operator](Value_Now, Value_of_Input);
        //!If result is a decimal, we convert it to a string with 7 decimal places//
        result = Number(result).toFixed(9);
        //!This will remove any trailing zeros from the result//
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    //!This sets Wait_Second_Operand to true and updates the operator//
    Calculator.Wait_Second_Operand = true;
    Calculator.Operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

//!This function resets the calculator to its initial state//
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.Operator = null;
}

//!This function updates the calculator display//
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

//!This function handles button clicks//
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    //!If the clicked element is not a button, we exit the function//
    if (!target.matches('button')) {
        return;
    }

    //!This gets the value of the clicked button//
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    //!If the clicked button is a digit, we call Input_Digit() and update the display//
    Input_Digit(target.value);
    Update_Display();
});
