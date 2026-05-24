/* --- DATA CONFIGURATION --- */

// 1. PRODUCT DATA MANAGEMENT
// Edit this array to add or modify products.
// Supports: Online Image URLs or Local paths like "images/product1.jpg"
const products = [
    // --- ART SUPPLIES (Main Category) ---
    {
        id: 1,
        name: "Professional Sakura Sketch Pen Set",
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Premium quality sketch pens for artists and illustrators. Smooth flow and vibrant colors.",
        price: "₹799",
        category: "Art Supplies",
        rating: 4.8,
        badge: "Best Seller",
        affiliate: "https://amazingcreator.com/affiliate/sakura-pen"
    },
    {
        id: 2,
        name: "Winsor & Newton Oil Paint Set",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "High viscosity oil colors for professional artwork. 12-piece set.",
        price: "₹2,500",
        category: "Art Supplies",
        rating: 4.9,
        badge: "Trending",
        affiliate: "https://amazingcreator.com/affiliate/oil-paint"
    },
    {
        id: 3,
        name: "Moleskine Hardcover Sketchbook",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f07a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Premium lay-flat sketchbook suitable for graphite and charcoal.",
        price: "₹650",
        category: "Art Supplies",
        rating: 4.6,
        badge: "New",
        affiliate: "https://amazingcreator.com/affiliate/sketchbook"
    },
    {
        id: 4,
        name: "Copic Markers Multiset",
        image: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Ultimate blending markers for comic and manga artists.",
        price: "₹4,200",
        category: "Art Supplies",
        rating: 4.9,
        badge: "Best Seller",
        affiliate: "https://amazingcreator.com/affiliate/copic"
    },

    // --- ELECTRONICS ---
    {
        id: 5,
        name: "Wacom Intuos Drawing Tablet",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91e74e9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Medium size digitizer for digital art creation.",
        price: "₹6,500",
        category: "Electronics",
        rating: 4.7,
        badge: "Trending",
        affiliate: "https://amazingcreator.com/affiliate/wacom"
    },
    {
        id: 6,
        name: "Apple iPad Air 2024",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Powerful tablet for designers and note-takers.",
        price: "₹59,900",
        category: "Electronics",
        rating: 4.9,
        badge: "New",
        affiliate: "https://amazingcreator.com/affiliate/ipad"
    },

    // --- LIFESTYLE & OTHERS ---
    {
        id: 7,
        name: "Ergonomic Desk Chair",
        image: "https://images.unsplash.com/photo-1505843490538-51304cbb1054?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Comfortable mesh chair for long creative sessions.",
        price: "₹8,999",
        category: "Lifestyle",
        rating: 4.5,
        badge: "",
        affiliate: "https://amazingcreator.com/affiliate/chair"
    },
    {
        id: 8,
        name: "Minimalist Watch",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Elegant timepiece for the modern creator.",
        price: "₹1,299",
        category: "Accessories",
        rating: 4.3,
        badge: "",
        affiliate: "https://amazingcreator.com/affiliate/watch"
    },
    {
        id: 9,
        name: "Sony WH-1000XM4 Headphones",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Noise cancelling wireless headphones.",
        price: "₹18,990",
        category: "Electronics",
        rating: 4.9,
        badge: "Best Seller",
        affiliate: "https://amazingcreator.com/affiliate/sony-headphones"
    },
    {
        id: 10,
        name: "Mechanical Gaming Keyboard",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b91a45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "RGB backlit keyboard for coders and gamers.",
        price: "₹3,500",
        category: "Gaming",
        rating: 4.6,
        badge: "Trending",
        affiliate: "https://amazingcreator.com/affiliate/keyboard"
