/**
 * Product Image Gallery with Thumbnails
 * Purpose: Allows users to browse through multiple product images by clicking
 * on thumbnails, with smooth transitions and active state indication.
 */

(function() {
    // Get all product galleries on the page
    const galleries = document.querySelectorAll('.product-gallery');
    
    galleries.forEach(gallery => {
        const mainImage = gallery.querySelector('.main-image');
        const thumbnails = gallery.querySelectorAll('.thumbnail');
        
        if (!mainImage || thumbnails.length === 0) return;
        
        // Add click event to each thumbnail
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Get the full-size image URL from data attribute
                const fullImageUrl = this.getAttribute('data-full') || this.src;
                
                // Add fade effect
                mainImage.classList.add('fade');
                
                // Change image after brief delay for smooth transition
                setTimeout(() => {
                    mainImage.src = fullImageUrl;
                    mainImage.alt = this.alt;
                    
                    // Remove fade effect
                    setTimeout(() => {
                        mainImage.classList.remove('fade');
                    }, 50);
                }, 150);
                
                // Update active state
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });
            
            // Add keyboard support for accessibility
            thumbnail.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
            
            // Make thumbnails focusable for keyboard navigation
            thumbnail.setAttribute('tabindex', '0');
        });
        
        // Preload images for better performance
        thumbnails.forEach(thumbnail => {
            const fullImageUrl = thumbnail.getAttribute('data-full');
            if (fullImageUrl) {
                const img = new Image();
                img.src = fullImageUrl;
            }
        });
    });
})();
