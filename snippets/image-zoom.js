/**
 * Image Zoom o hover
 * Purpose : Allows users to zoom into product images y hovering and moving the mouse
 * to see different areas in detail
 */

(function () {
    //Get all zoom containers on the page 
    const zoomContainers = document.querySelectorAll('.zoom-container');
    zoomContainers.forEach(container => {
        const image = container.querySelector('.zoomable-image');

        if(!image) return;

        //Handle mouse move for dynamic zoom positioning
        container.addEventListener('mousemove', function (e) {
            const rect = container.getBoundingClientRect();

            //calculate mouse position realtive to the container
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            // Convert to percentage 
            const xPercent = x * 100;
            const yPercent = y * 100;

            //Set transform origin to follow mouse position
            image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        });

        // reset transform origin when mouse leaves
        container.addEventListener('mouseleave', function () {
            image.style.transformOrigin = 'center center';
        });
    });
})();