// ==========================================
// 1. PRODUCT DATA SYSTEM (Easy to Edit)
// ==========================================

const products = [
    {
        name: "Professional Artist Sketch Kit",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
        description: "High-quality sketch pencils, charcoal set, and paper pad for professionals.",
        price: "₹1,299",
        category: "Arts & Craft Supplies",
        affiliateLink: "https://example.com/sketch-kit",
        featured: true
    },
    {
        name: "Acrylic Paint Set - 24 Colors",
        image: "https://images.unsplash.com/photo-1518895312252-25b03aee1a7f?w=500&q=80",
        description: "Non-toxic acrylic paints suitable for canvas, wood, and fabric.",
        price: "₹899",
        category: "Arts & Craft Supplies",
        affiliateLink: "https://example.com acrylic-paints",
        featured: false
    },
    {
        name: "Premium Cotton T-Shirt",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        description: "100% organic cotton, breathable fabric. Perfect for daily wear.",
        price: "₹599",
        category: "Fashion & Clothing",
        affiliateLink: "https://example.com/tshirt",
        featured: true
    },
    {
        name: "Denim Jacket - Classic Fit",
        image: "https://images.unsplash.com/photo-1523205565295-f8e916256112?w=500&q=80",
        description: "Vintage style denim jacket with multiple pockets.",
        price: "₹1,499",
        category: "Fashion & Clothing",
        affiliateLink: "https://example.com/denim-jacket",
        featured: false
    },
    {
        name: "Running Sneakers - Air Cushion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        description: "Lightweight running shoes with air cushion technology.",
        price: "₹2,199",
        category: "Shoes & Footwear",
        affiliateLink: "https://example.com/sneakers",
        featured: true
    },
    {
        name: "Casual Canvas Shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
        description: "Stylish canvas shoes for casual outings. Durable and comfortable.",
        price: "₹899",
        category: "Shoes & Footwear",
        affiliateLink: "https://example.com/canvas-shoes",
        featured: false
    },
    {
        name: "Wireless Bluetooth Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        description: "Noise-canceling headphones with 30-hour battery life.",
        price: "₹2,999",
        category: "Electronics & Gadgets",
        affiliateLink: "https://example.com/headphones",
        featured: true
    },
    {
        name: "Smart Watch - Fitness Tracker",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
        description: "Track heart rate, steps, and sleep. Waterproof design.",
        price: "₹3,499",
        category: "Electronics & Gadgets",
        affiliateLink: "https://example.com/smart-watch",
        featured: true
    },
    {
        name: "Minimalist Table Lamp",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
        description: "Modern LED table lamp with touch dimmer.",
        price: "₹1,199",
        category: "Home & Lifestyle",
        affiliateLink: "https://example.com/lamp",
        featured: false
    },
    {
        name: "Soft Cotton Bed Sheets",
        image: "https://images.unsplash.com/photo-1616627180082-1f088458321b?w=500&q=80",
        description: "400 thread count Egyptian cotton bed sheets. Fade resistant.",
        price: "₹1,899",
        category: "Home & Lifestyle",
        affiliateLink: "https://example.com/bedsheets",
        featured: true
    },
    {
        name: "Leather Wallet - Slim Design",
        image: "https://images.unsplash.com/photo-1627123424574-181ce5171c98?w=500&q=80",
        description: "Genuine leather wallet with RFID protection.",
        price: "₹699",
        category: "Accessories & Gifts",
        affiliateLink: "https://example.com/wallet",
        featured: false
    },
    {
        name: "Designer Sunglasses",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
        description: "UV400 protection with polarized lenses. Stylish frame.",
        price: "₹899",
        category: "Accessories & Gifts",
        affiliateLink: "https://example.com/sunglasses",
        featured: true
    }
];

// Fallback image for broken URLs
const fallbackImage = "https://placehold.co/400x400/131313/FFF?text=No+Image";

// ==========================================
// 2. DOM ELEMENTS
// ==========================================

const mainGrid = document.getElementById('mainProductGrid');
const newArrivalsGrid = document.getElementById('newArrivalsGrid');
const featuredGrid = document.getElementById('featuredGrid');
const searchInput = document.getElementById('searchInput');
const categoryTitle = document.getElementById('currentCategoryTitle');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

// ==========================================
// 3. FUNCTIONS
// ==========================================

// Generate Product Card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='${fallbackImage}'">
                <span class="category-tag">${product.category}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <a href="${product.affiliateLink}" target="_blank" class="buy-btn">
                    Buy Now <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
}

// Render Products to Grid
function renderProducts(gridElement, productList) {
    if (productList.length === 0) {
        gridElement.innerHTML = '<p class="no-products">No products found.</p>';
        return;
    }
    gridElement.innerHTML = productList.map(product => createProductCard(product)).join('');
}

// Filter Products by Category
function filterProducts(category) {
    const titleMap = {
        "All": "All Products",
        "Arts & Craft Supplies": "Arts & Craft Supplies",
        "Fashion & Clothing": "Fashion & Clothing",
        "Shoes & Footwear": "Shoes & Footwear",
        "Electronics & Gadgets": "Electronics & Gadgets",
        "Home & Lifestyle": "Home & Lifestyle",
        "Accessories & Gifts": "Accessories & Gifts"
    };

    categoryTitle.innerText = titleMap[category] || "All Products";

    if (category === 'All') {
        renderProducts(mainGrid, products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(mainGrid, filtered);
    }
    
    // Smooth scroll
    document.getElementById('all-products').scrollIntoView({ behavior: 'smooth' });
}

// Search Functionality
function handleSearch(query) {
    const lowerQuery = query.toLowerCase().trim();

    if (lowerQuery === "") {
        filterProducts("All");
        return;
    }

    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) || 
        product.category.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery)
    );

    categoryTitle.innerText = `Search Results for "${query}"`;
    renderProducts(mainGrid, filtered);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

// ==========================================
// 4. INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Render All Products
    renderProducts(mainGrid, products);

    // Render New Arrivals (First 4 products)
    renderProducts(newArrivalsGrid, products.slice(0, 4));

    // Render Featured Products (Filter by featured: true)
    const featuredProducts = products.filter(p => p.featured);
    renderProducts(featuredGrid, featuredProducts);

    // Search Event Listener
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // Mobile Menu Click
    mobileToggle.addEventListener('click', toggleMobileMenu);
});

// Scroll to Top Button Visibility
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
