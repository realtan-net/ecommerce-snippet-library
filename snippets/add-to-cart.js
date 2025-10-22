/**
 * Add to Cart Animation
 * Purpose: Provides visual feedback when adding products to cart with
 * smooth animations and state changes.
 */

(function() {
    // Get all add-to-cart buttons on the page
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent multiple clicks during animation
            if (this.classList.contains('adding')) return;
            
            // Create ripple effect at click position
            createRipple(e, this);
            
            // Add loading/processing state
            this.classList.add('adding');
            
            // Get product ID for potential AJAX call
            const productId = this.getAttribute('data-product-id');
            
            // Simulate adding to cart (replace with actual AJAX call in production)
            setTimeout(() => {
                // Change to success state
                this.classList.remove('adding');
                this.classList.add('added');
                
                const textElement = this.querySelector('.btn-text');
                const originalText = textElement.textContent;
                textElement.textContent = 'Added!';
                
                // Optional: Trigger custom event for cart update
                const cartEvent = new CustomEvent('productAdded', {
                    detail: { productId: productId }
                });
                document.dispatchEvent(cartEvent);
                
                // Reset button after delay
                setTimeout(() => {
                    this.classList.remove('added');
                    textElement.textContent = originalText;
                }, 2000);
                
            }, 600);
        });
    });
    
    /**
     * Creates a ripple effect at the click position
     */
    function createRipple(event, button) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        // Calculate ripple position
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Example: Listen for custom cart event
    document.addEventListener('productAdded', function(e) {
        console.log('Product added to cart:', e.detail.productId);
        // Here you would update cart count, show notification, etc.
    });
})();
