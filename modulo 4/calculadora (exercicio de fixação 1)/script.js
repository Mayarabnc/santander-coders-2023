let displayValue = '';

        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById('display').textContent = displayValue;
        }

        function clearDisplay() {
            displayValue = '';
            document.getElementById('display').textContent = '0';
            document.getElementById('display').style.backgroundColor = '#b6b6b6';
        }

        function calculateResult() {
            try {
                displayValue = eval(displayValue);
                document.getElementById('display').textContent = displayValue;
        
                if (displayValue >= 20) {
                    document.getElementById('display').style.backgroundColor = 'green';
                } else {
                    document.getElementById('display').style.backgroundColor = 'orange'; 
                }
            } catch (error) {
                document.getElementById('display').textContent = 'Erro';
            }
        }