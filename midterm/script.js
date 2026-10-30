
// Get HTML elements
const searchInput = document.getElementById("search-input");
const sortButton = document.getElementById("sort-price");
const productGrid = document.querySelector(".product-grid");
const noProducts = document.getElementById("no-products");

// Get existing product cards
const products = document.querySelectorAll(".product-card");

// Premium price limit
const premiumLimit = 61 * 100;

// Sorting direction
let ascending = true;


// =================================
// 1. ADD PREMIUM LABELS
// =================================

products.forEach(function(product) {

    const priceText = product.querySelector(".product-price").textContent;

    const price = Number(priceText.replace(/[^0-9]/g, ""));

    if (price > premiumLimit) {

        const label = document.createElement("span");

        label.textContent = "Premium";
        label.className = "premium-label";

        product.querySelector(".card-details").appendChild(label);

    }

});


// =================================
// 2. SEARCH AND CATEGORY FILTER
// =================================

function filterProducts() {

    const searchText = searchInput.value.toLowerCase();

    let visibleCount = 0;

    products.forEach(function(product) {

        const name = product.querySelector(".product-name")
            .textContent.toLowerCase();

        const matchesSearch = name.includes(searchText);

        if (matchesSearch) {
            product.style.display = "";
            visibleCount++;
        } else {
            product.style.display = "none";
        }

    });

    // Check which products are actually visible after CSS filtering
    const actuallyVisible = Array.from(products).some(function(product) {
        return product.style.display !== "none" &&
               getComputedStyle(product).display !== "none";
    });

    if (!actuallyVisible) {
        productGrid.style.display = "none";
        noProducts.style.display = "block";
    } else {
        productGrid.style.display = "grid";
        noProducts.style.display = "none";
    }

}

// Search event
searchInput.addEventListener("input", filterProducts);

// =================================
// 3. SORT PRODUCTS BY PRICE
// =================================

sortButton.addEventListener("click", function() {

    // Convert existing product cards into an array
    const productArray = Array.from(products);

    // Sort according to price
    productArray.sort(function(a, b) {

        const priceA = Number(
            a.querySelector(".product-price").textContent.replace(/[^0-9]/g, "")
        );

        const priceB = Number(
            b.querySelector(".product-price").textContent.replace(/[^0-9]/g, "")
        );

        if (ascending) {

            return priceA - priceB;

        }

        else {

            return priceB - priceA;

        }

    });


    // Move existing cards using appendChild
    productArray.forEach(function(product) {

        productGrid.appendChild(product);

    });


    // Reverse sorting direction
    ascending = !ascending;

    // Apply search and category filters again
    filterProducts();

});

// Initial filtering
filterProducts();
