// Get references to the input fields and the form
const form = document.querySelector('form');
const ageInput = document.getElementById('age');
const policyDeductableInput = document.getElementById('policy_deductable');
const ageAtIncidentInput = document.getElementById('age_at_incident');
const incidentMonthInput = document.getElementById('incident_month');
const incidentYearInput = document.getElementById('incident_year');

// Add an event listener to the form submission
form.addEventListener('submit', function (event) {
    // Perform basic form validation
    if (!validateNumberInput(ageInput) ||
        !validateNumberInput(policyDeductableInput) ||
        !validateNumberInput(ageAtIncidentInput) ||
        !validateNumberInput(incidentMonthInput) ||
        !validateNumberInput(incidentYearInput)) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Validate a number input field
function validateNumberInput(inputElement) {
    const value = inputElement.value;
    if (isNaN(value) || value.trim() === '') {
        alert(`${inputElement.placeholder} must be a valid number.`);
        return false;
    }
    return true;
}
