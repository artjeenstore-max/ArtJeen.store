/* ==========================================
   ArtJeen.Store - Functional JavaScript
   ========================================== */

// 1. Product Data (Affiliate Product List)
const products = [
    // Arts & Craft
    {
        id: 1,
        name: "Premium Acrylic Paint Set",
        description: "24 colors non-toxic acrylic paint for canvas, fabric, and wood.",
        category: "Arts & Craft",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80"
    },
    {
        id: 2,
        name: "Sketching Drawing Kit",
        description: "Complete graphite pencil set with sketchbook and erasers.",
        category: "Arts & Craft",
        price: "$19.99",
        image: "https://images.unsplash.com/photo-1513544785410-4568d3b696d2?w=500&q=80"
    },
    // Fashion
    {
        id: 3,
        name: "Classic Cotton T-Shirt",
        description: "100% organic cotton crew neck t-shirt. Comfortable fit.",
        category: "Fashion",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"
    },
    {
        id: 4,
        name: "Denim Jacket",
        description: "Vintage style slim fit denim jacket for men and women.",
        category: "Fashion",
        price: "$45.99",
        image: "https://images.unsplash.com/photo-1548126032-0794f5d8d0d9?w=500&q=80"
    },
    // Shoes
    {
        id: 5,
        name: "Running Sneakers",
        description: "Lightweight breathable sports shoes for running and gym.",
        category: "Shoes",
        price: "$59.99",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    },
    {
        id: 6,
        name: "Canvas Slip-Ons",
        description: "Casual daily wear summer shoes. Easy to wear.",
        category: "Shoes",
        price: "$24.99",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80"
    },
    // Electronics
    {
        id: 7,
        name: "Wireless Bluetooth Earbuds",
        description: "Noise cancelling headphones with 20h battery life.",
        category: "Electronics",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8b5?w=500&q=80"
    },
    {
        id: 8,
        name: "Smart Watch Series 5",
        description: "Waterproof fitness tracker heart rate monitor.",
        category: "Electronics",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1579586337278-3befd0b3b05c?w=500&q=80"
    },
    // Home
    {
        id: 9,
        name: "Modern Table Lamp",
        description: "Minimalist desk lamp with LED bulb. Dimmable touch control.",
        category: "Home",
        price: "$32.99",
        image: "https://images.unsplash.com/photo-1507473888900-52e1ad1459ce?w=500&q=80"
    },
    {
        id: 10,
        name: "Bamboo Storage Box",
        description: "Eco-friendly organizer for home and office.",
        category: "Home",
        price: "$18.50",
        image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500&q=80"
    },
    // Accessories
    {
        id: 11,
        name: "Leather Wallet",
        description: "Genuine leather bifold wallet. RFID blocking.",
        category: "Accessories",
        price: "$35.00",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80"
    },
    {
        id: 12,
        name: "Sunglasses",
        description: "Polarized aviator style UV400 protection.",
        category: "Accessories",
        price: "$22.00",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80"
    },
    // Stationery
    {
        id: 13,
        name: "Spiral Notebook Pack",
        description: "5pack college ruled notebooks. 200 sheets total.",
        category: "Stationery",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&q=80"
    },
    {
        id: 14,
        name: "Gel Pen Set",
        description: "12 vibrant color gel pens for journaling and note taking.",
        category: "Stationery",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=500&q=80"
    }
];

// 2. DOM Elements
const productContainer = document.getElementById('product-grid-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.cat-btn');

// 3. Function to Render Products
function renderProducts(productList) {
    productContainer.innerHTML = ''; // Clear current products
    
    if (productList.length === 0) {
        productContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No products found.</p>';
        return;
    }

    productList.forEach(product => {
        const productHTML = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/500x500?text=ArtJeen+Product'">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <button class="btn-buy" onclick="buyProduct('${product.name}')">Buy Now</button>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

// 4. Filter Function (Search + Category)
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategoryBtn = document.querySelector('.cat-btn.active');
    const activeCategory = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'all';

    const filtered = products.filter(product => {
        // Match Category
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        
        // Match Search (Name, Description, or Category)
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                              product.description.toLowerCase().includes(searchTerm) ||
                              product.category.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

// 5. Event Listeners

// Search Button Click
searchBtn.addEventListener('click', filterProducts);

// Search Input (Real-time typing)
searchInput.addEventListener('input', filterProducts);

// Category Buttons Click
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        // Filter
        filterProducts();
    });
});

// 6. Buy Now Function (Affiliate Link Placeholder)
function buyProduct(productName) {
    // In a real scenario, this would redirect to an affiliate link
    alert(`Redirecting to purchase: ${productName}\n\n(This is a demo. In production, this links to Amazon/eBay via your affiliate ID)`);
}

// 7. Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 8. Navbar Scroll Effect (Change background on scroll)
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#131921';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = '#131921';
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
});

// 9. Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
