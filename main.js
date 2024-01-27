import './style.css';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Slider.js';
import '@ui5/webcomponents/dist/Input.js';

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

function calculateCosts() {
    const annualSalary = parseInt(annualSalaryInput.value);
    if (isNaN(annualSalary) || annualSalary <= 0) {
        return;
    }
    const salaryPerHour = annualSalary / 230 / 8; // TODO: configure values
    const commutingCostPerDay = commutingTimeSlider.value / 60 * 2 * salaryPerHour;    
    const annualCosts = Math.round(commutingCostPerDay * (mandateDaysSlider.value - personalDaysSlider.value) * 52 / 100) *100;
    const resultText = document.getElementById('resultText');
    const raiseRequired = Math.round(annualCosts / annualSalary * 10000) / 100;
    if (annualCosts <= 0) {
        resultText.innerText = "All fine, no additional costs for you!";
    } else {
        resultText.innerText = "Your additional annual costs are " + annualCosts + " €! That would be a " + raiseRequired + "% salary raise!";
    }
    
    
}