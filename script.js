console.log("SpendWise JavaScript loaded successfully!");

// Collect budget information
let budget = Number(prompt("Enter your budget:"));
let expenseAmount = Number(prompt("Enter the expense amount:"));
let expenseCategory = prompt("Enter the expense category:");


// Calculate remaining balance
function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}

let remainingBalance = calculateRemainingBalance(budget, expenseAmount);

// Display the information
console.log("===== SpendWise Budget Summary =====");
console.log("Budget:", budget);
console.log("Expense Amount:", expenseAmount);
console.log("Expense Category:", expenseCategory);
console.log("Remaining Balance:", remainingBalance);

alert("Your remaining balance is: " + remainingBalance);
console.log("Test Balance:", calculateRemainingBalance(2000, 500));