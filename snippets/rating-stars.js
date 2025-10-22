/**
 * Product Rating Stars
 * Purpose: Displays product ratings as visual star icons with support for
 * full, half, and empty stars based on numerical rating.
 */

(function() {
    // Get all rating elements on the page
    const ratingElements = document.querySelectorAll('.product-rating');
    
    ratingElements.forEach(ratingElement => {
        // Get rating value from data attribute
        const rating = parseFloat(ratingElement.getAttribute('data-rating'));
        
        // Validate rating
        if (isNaN(rating) || rating < 0 || rating > 5) {
            console.error('Invalid rating value. Must be between 0 and 5.');
            return;
        }
        
        const starsContainer = ratingElement.querySelector('.stars');
        const ratingText = ratingElement.querySelector('.rating-text');
        
        if (!starsContainer) return;
        
        // Clear existing content
        starsContainer.innerHTML = '';
        
        // Calculate full, half, and empty stars
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        // Create full stars
        for (let i = 0; i < fullStars; i++) {
            const star = createStar('full');
            starsContainer.appendChild(star);
        }
        
        // Create half star if needed
        if (hasHalfStar) {
            const star = createStar('half');
            starsContainer.appendChild(star);
        }
        
        // Create empty stars
        for (let i = 0; i < emptyStars; i++) {
            const star = createStar('empty');
            starsContainer.appendChild(star);
        }
        
        // Update rating text
        if (ratingText) {
            ratingText.textContent = `(${rating.toFixed(1)}/5)`;
        }
    });
    
    /**
     * Creates a star element with the specified type
     * @param {string} type - 'full', 'half', or 'empty'
     * @returns {HTMLElement} Star span element
     */
    function createStar(type) {
        const star = document.createElement('span');
        star.className = `star ${type}`;
        star.setAttribute('aria-hidden', 'true');
        return star;
    }
    
    
})();
