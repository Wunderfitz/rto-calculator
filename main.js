import './style.css';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Slider.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/CheckBox.js';
import '@ui5/webcomponents/dist/MessageStrip.js';

const annualSalaryInput = document.getElementById('annualSalaryInput');
annualSalaryInput.addEventListener('input', () => {
    calculateCosts();
});
const mandateDaysSlider = document.getElementById('mandateDaysSlider');
mandateDaysSlider.addEventListener('input', () => {
    calculateCosts();
});
const personalDaysSlider = document.getElementById('personalDaysSlider');
personalDaysSlider.addEventListener('input', () => {
    calculateCosts();
});
const commutingTimeSlider = document.getElementById('commutingTimeSlider');
commutingTimeSlider.addEventListener('input', () => {
    calculateCosts();
});
const travelDistanceSlider = document.getElementById('travelDistanceSlider');
travelDistanceSlider.addEventListener('input', () => {
    calculateCosts();
});
const costsPerRideCheckbox = document.getElementById('costsPerRideCheckbox');
costsPerRideCheckbox.addEventListener('change', () => {
    calculateCosts();
});
const additionalCostsInput = document.getElementById('additionalCostsInput');
additionalCostsInput.addEventListener('input', () => {
    calculateCosts();
});

function calculateCosts() {
    const resultText = document.getElementById('resultText');
    const annualSalary = parseInt(annualSalaryInput.value);
    const costsPerMonth = parseInt(additionalCostsInput.value);
    if (isNaN(annualSalary) || annualSalary <= 0 || isNaN(costsPerMonth) || costsPerMonth < 0) {
        return;
    }
    if (mandateDaysSlider.value - personalDaysSlider.value <= 0) {
        resultText.innerText = "OK, no changes for you, right?";
        return;
    }
    const salaryPerHour = annualSalary / 230 / 8; // TODO: make configurable
    const commutingCostPerDay = commutingTimeSlider.value / 60 * 2 * salaryPerHour;
    const costsPerRide = costsPerRideCheckbox.checked ? travelDistanceSlider.value * 0.2 : 0; // Very simplified, TODO: make configurable
    const annualCosts = Math.round(((costsPerRide * 2 + commutingCostPerDay) * (mandateDaysSlider.value - personalDaysSlider.value) * 52 + (costsPerMonth * 12 )) / 100) * 100;
    
    const raiseRequired = Math.round(annualCosts / annualSalary * 10000) / 100;
    if (annualCosts <= 0) {
        resultText.innerText = "All fine, no additional costs for you!";
    } else {
        resultText.innerText = "Your additional annual costs are about " + annualCosts + " €! That would be a " + raiseRequired + "% salary raise!";
    }
    
    
}