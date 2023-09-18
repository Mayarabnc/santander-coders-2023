let displayValue = '';

        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById('display').textContent = displayValue;
        }

        function clearDisplay() {
            displayValue = '';
            document.getElementById('display').textContent = '0';
        }

        function calculateResult() {
            try {
                displayValue = eval(displayValue);
                document.getElementById('display').textContent = displayValue;
            } catch (error) {
                document.getElementById('display').textContent = 'Erro';
            }
        }