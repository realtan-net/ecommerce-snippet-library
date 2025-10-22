/**
 * Product Quatity Selector
 * Purpose: provides increment/decrement buttons for quantity selection
 * with input validatin and boundary checking
 */

(function () {
    //get all quantity selector on the page
    const quantitySelectors = document.querySelectorAll('.quantity-selector');

    quantitySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.qty-btn.minus');
        const plusBtn = selector.querySelector('.qty-btn.plus');
        const input = selector.querySelector('.qty-input');

        if(!minusBtn || !plusBtn || !input) return;

        //Get min and max values from input attributes
        const min = parseInt(input.getAttribute('min')) || 1;
        const max = parseInt(input.getAttribute('max')) || 99;

        //Function to update states based on current value
        function updateButtonsStates(){
            const value = parseInt(input.value);
            minusBtn.disabled = value <= min;
            plusBtn.disabled = value >= max;
        }

        // function to update total price (demo feature )
        function updateTotal(){
            const totalElement = document.getElementById('total');
            if(totalElement){
                const unitPrice = 25.99;
                const quantity = parseInt(input.value);
                const total = (unitPrice * quantity).toFixed(2);
                totalElement.textContent = `$` + total;
            }
        }

        //Decrease quantity
        minusBtn.addEventListener('click', function () {
            let value = parseInt(input.value);
            if (value > min) {
                input.value = value - 1;
                updateButtonsStates();
                updateTotal();
            }
        });

    
        //Increase quantity
        plusBtn.addEventListener('click', function () {
            let value = parseInt(input.value);
            if( value < max) {
                input.value = value + 1;
                updateButtonsStates();
                updateTotal();
            }
        });

        //Handle manual input
        input.addEventListener('input', function () {
            let value = parseInt(input.value);
            //Validate input 
            if (isNaN(value) || value < min) {
                input.value = min;
            } else if (value > max) {
                input.value = max;
            }

            updateButtonsStates();
            updateTotal();
        });

        //prevent non-numeric input
        input.addEventListener('keypress', function (e) {
            if(e.key && !/[0-9]/.test(e.key)){
                e.preventDefault();
            }
        });

        //initialize button states
        updateButtonsStates();
    });

})();