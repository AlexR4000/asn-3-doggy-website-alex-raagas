let dayCounter = 0; // Track the number of days selected
let dailyRate = 35; // Default full-day rate
let totalCost = 0; // The total cost to be displayed
const calculatedCostElement = document.getElementById('calculated-cost'); // Element to display total cost
const dayButtons = document.querySelectorAll('.booking-page li'); // All the day buttons
const clearDaysButton = document.getElementById('clear-button'); // Clear Days button
const halfDayButton = document.getElementById('half'); // Half-day button
const fullDayButton = document.getElementById('full'); // Full-day button

/********* Colour Change for Days of the Week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element
// and update the dayCounter and recalculate the total cost
dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', () => {
        // If the day is not clicked yet, add the "clicked" class and increase the counter
        if (!dayButton.classList.contains('clicked')) {
            dayButton.classList.add('clicked'); // Add "clicked" class
            dayCounter++; // Increase dayCounter when a new day is selected
        } else {
            dayButton.classList.remove('clicked'); // Remove "clicked" class
            dayCounter--; // Decrease dayCounter if the same day is clicked again
        }
        // Recalculate total cost
        recalculateCost();
    });
});

/********* Clear Days *********/
// When the clear-button is clicked, remove the "clicked" class from all days, reset dayCounter, and recalculate total cost
clearDaysButton.addEventListener('click', () => {
    // Remove "clicked" class from all day buttons
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove('clicked');
    });
    dayCounter = 0; // Reset dayCounter
    dailyRate = 35; // Reset daily rate to full day
    fullDayButton.classList.add('clicked'); // Ensure full-day is selected by default
    halfDayButton.classList.remove('clicked'); // Ensure half-day is unselected
    recalculateCost(); // Recalculate total cost
});

/********* Change Rate (Full Day vs Half Day) *********/
// When the half-day button is clicked, set the daily rate to $20
halfDayButton.addEventListener('click', () => {
    // Check if the full-day button is already clicked, and if so, unselect it
    if (fullDayButton.classList.contains('clicked')) {
        fullDayButton.classList.remove('clicked'); // Unselect full-day button
    }
    dailyRate = 20; // Set daily rate to $20 for half-day
    halfDayButton.classList.add('clicked'); // Mark half-day button as clicked
    recalculateCost(); // Recalculate total cost
});

// When the full-day button is clicked, set the daily rate back to $35
fullDayButton.addEventListener('click', () => {
    // Check if the half-day button is already clicked, and if so, unselect it
    if (halfDayButton.classList.contains('clicked')) {
        halfDayButton.classList.remove('clicked'); // Unselect half-day button
    }
    dailyRate = 35; // Set daily rate back to $35 for full-day
    fullDayButton.classList.add('clicked'); // Mark full-day button as clicked
    recalculateCost(); // Recalculate total cost
});

/********* Calculate *********/
// Recalculate the total cost based on the number of selected days and the current daily rate
function recalculateCost() {
    totalCost = dayCounter * dailyRate; // Calculate total cost
    calculatedCostElement.innerHTML = `$${totalCost}`; // Update displayed cost
}
