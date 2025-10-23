# Mini Code Snippet Library for E-Commerce Product Pages

## Overview
This library provides a collection of reusable, self-contained code snippets designed to enhance product page functionalities for e-commerce platforms. Each snippet is built with simplicity and practicality in mind, using only vanilla JavaScript and open-source libraries where necessary.

## Table of Contents
1. [Image Zoom on Hover](#1-image-zoom-on-hover)
2. [Product Quantity Selector](#2-product-quantity-selector)
3. [Price Display with Discount Calculator](#3-price-display-with-discount-calculator)
4. [Product Image Gallery with Thumbnails](#4-product-image-gallery-with-thumbnails)
5. [Add to Cart Animation](#5-add-to-cart-animation)
6. [Product Rating Stars](#6-product-rating-stars)

---

## 1. Image Zoom on Hover

### Purpose
Allows customers to view product details more closely by zooming into the product image when hovering over it.

### Usage
Include the HTML structure and link the CSS and JavaScript files in your product page.

```html
<link rel="stylesheet" href="snippets/image-zoom.css">
<div class="zoom-container">
    <img src="path/to/product-image.jpg" alt="Product" class="zoomable-image">
</div>
<script src="snippets/image-zoom.js"></script>
```

### Example Scenario
A customer shopping for a watch wants to see the intricate details of the watch face. By hovering over the product image, they can zoom in to examine the craftsmanship before making a purchase decision.

### Files
- `snippets/image-zoom.html` - Example implementation
- `snippets/image-zoom.css` - Styling
- `snippets/image-zoom.js` - Functionality

---

## 2. Product Quantity Selector

### Purpose
Provides an intuitive interface for customers to select the quantity of items they wish to purchase, with increment/decrement buttons.

### Usage
Include the HTML structure and link the JavaScript file.

```html
<link rel="stylesheet" href="snippets/quantity-selector.css">
<div class="quantity-selector">
    <button class="qty-btn minus">-</button>
    <input type="number" class="qty-input" value="1" min="1" max="99">
    <button class="qty-btn plus">+</button>
</div>
<script src="snippets/quantity-selector.js"></script>
```

### Example Scenario
A customer wants to buy 3 t-shirts in the same size and color. Instead of typing the number, they can simply click the plus button twice to increase the quantity from 1 to 3.

### Files
- `snippets/quantity-selector.html` - Example implementation
- `snippets/quantity-selector.css` - Styling
- `snippets/quantity-selector.js` - Functionality

---

## 3. Price Display with Discount Calculator

### Purpose
Automatically displays the original price, discount percentage, and final price with visual emphasis on savings.

### Usage
Include the HTML structure with data attributes for pricing information.

```html
<link rel="stylesheet" href="snippets/price-display.css">
<div class="price-display" data-original-price="99.99" data-discount-percent="20">
    <span class="original-price"></span>
    <span class="discount-badge"></span>
    <span class="final-price"></span>
    <span class="savings-text"></span>
</div>
<script src="snippets/price-display.js"></script>
```

### Example Scenario
During a seasonal sale, a product originally priced at $99.99 is discounted by 20%. The snippet automatically calculates and displays the final price ($79.99) and shows "Save $20.00" to emphasize the deal.

### Files
- `snippets/price-display.html` - Example implementation
- `snippets/price-display.css` - Styling
- `snippets/price-display.js` - Functionality

---

## 4. Product Image Gallery with Thumbnails

### Purpose
Creates an interactive image gallery where customers can click thumbnail images to view different product angles or variations.

### Usage
Include the HTML structure with main image and thumbnail list.

```html
<link rel="stylesheet" href="snippets/image-gallery.css">
<div class="product-gallery">
    <div class="main-image-container">
        <img src="path/to/main-image.jpg" alt="Product" class="main-image">
    </div>
    <div class="thumbnail-container">
        <img src="path/to/thumb1.jpg" alt="View 1" class="thumbnail active">
        <img src="path/to/thumb2.jpg" alt="View 2" class="thumbnail">
        <img src="path/to/thumb3.jpg" alt="View 3" class="thumbnail">
    </div>
</div>
<script src="snippets/image-gallery.js"></script>
```

### Example Scenario
A customer shopping for a backpack wants to see it from different angles - front, back, side, and interior. They can click on thumbnail images to switch between these views in the main image area.

### Files
- `snippets/image-gallery.html` - Example implementation
- `snippets/image-gallery.css` - Styling
- `snippets/image-gallery.js` - Functionality

---

## 5. Add to Cart Animation

### Purpose
Provides visual feedback when a product is added to the cart, creating a satisfying user experience with a smooth animation.

### Usage
Include the HTML button and link the necessary files.

```html
<link rel="stylesheet" href="snippets/add-to-cart.css">
<button class="add-to-cart-btn" data-product-id="123">
    <span class="btn-text">Add to Cart</span>
    <span class="btn-icon">🛒</span>
</button>
<script src="snippets/add-to-cart.js"></script>
```

### Example Scenario
A customer clicks "Add to Cart" for a smartphone case. The button briefly shows a checkmark and "Added!" message with a subtle animation, confirming the action without requiring a page reload.

### Files
- `snippets/add-to-cart.html` - Example implementation
- `snippets/add-to-cart.css` - Styling
- `snippets/add-to-cart.js` - Functionality

---

## 6. Product Rating Stars

### Purpose
Displays product ratings as interactive star icons, allowing customers to quickly assess product quality.

### Usage
Include the HTML structure with a data attribute for the rating value.

```html
<link rel="stylesheet" href="snippets/rating-stars.css">
<div class="product-rating" data-rating="4.5">
    <div class="stars"></div>
    <span class="rating-text"></span>
</div>
<script src="snippets/rating-stars.js"></script>
```

### Example Scenario
A product has an average rating of 4.5 out of 5 stars from customer reviews. The snippet displays 4 full stars, 1 half star, and shows "(4.5/5)" next to the stars for clarity.

### Files
- `snippets/rating-stars.html` - Example implementation
- `snippets/rating-stars.css` - Styling
- `snippets/rating-stars.js` - Functionality

---

## Installation

1. Clone or download this repository
2. Copy the `snippets` folder to your project
3. Include the relevant HTML, CSS, and JavaScript files in your product pages as shown in the usage examples above

## Browser Compatibility

All snippets are built with vanilla JavaScript and CSS3, compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open-source and available for use in any e-commerce project.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or additional snippets.
