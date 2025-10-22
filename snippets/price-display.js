/**
 * Price Display with Discount Calculator
 * Purpose: Automatically calculates and displays discounted prices, savings amount,
 * and discount percentage with visual emphasis.
 */

(function() {
    // Get all price display elements on the page
    const priceDisplays = document.querySelectorAll('.price-display');
    
    priceDisplays.forEach(display => {
        // Get pricing data from data attributes
        const originalPrice = parseFloat(display.getAttribute('data-original-price'));
        const discountPercent = parseFloat(display.getAttribute('data-discount-percent'));
        
        // Validate data
        if (isNaN(originalPrice) || isNaN(discountPercent)) {
            console.error('Invalid price or discount data');
            return;
        }
        
        // Calculate discounted price
        const discountAmount = originalPrice * (discountPercent / 100);
        const finalPrice = originalPrice - discountAmount;
        
        // Get display elements
        const originalPriceEl = display.querySelector('.original-price');
        const discountBadgeEl = display.querySelector('.discount-badge');
        const finalPriceEl = display.querySelector('.final-price');
        const savingsTextEl = display.querySelector('.savings-text');
        
        // Format currency
        function formatCurrency(amount) {
            return '$' + amount.toFixed(2);
        }
        
        // Update display elements
        if (originalPriceEl) {
            originalPriceEl.textContent = formatCurrency(originalPrice);
        }
        
        if (discountBadgeEl) {
            discountBadgeEl.textContent = discountPercent + '% OFF';
        }
        
        if (finalPriceEl) {
            finalPriceEl.textContent = formatCurrency(finalPrice);
        }
        
        if (savingsTextEl) {
            savingsTextEl.textContent = 'Save ' + formatCurrency(discountAmount);
        }
    });
})();
