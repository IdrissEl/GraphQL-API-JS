let clothing = [
    {
        id: "CT-1001",
        name: "Classic White Tee",
        description:
            "A soft and breathable cotton t-shirt, perfect for everyday wear.",
        size: ["S", "M", "L"],
        price: 15.99,
        image: "localhost:4000/img",
        brand_id: "BR-2001",
    },
    {
        id: "CT-1002",
        name: "Denim Jacket",
        description:
            "Stylish denim jacket with a classic fit, great for layering.",
        size: ["M", "L", "XL"],
        price: 49.99,
        image: "localhost:4000/img",
        brand_id: "BR-2002",
    },
    {
        id: "CT-1003",
        name: "Slim Fit Chinos",
        description:
            "Tailored chinos with a modern slim fit, perfect for casual or formal looks.",
        size: ["S", "M", "L", "XL"],
        price: 34.5,
        image: "localhost:4000/img",
        brand_id: "BR-2003",
    },
    {
        id: "CT-1004",
        name: "Basic Hoodie",
        description:
            "A cozy fleece hoodie available in multiple colors for comfortable lounging.",
        size: ["S", "M", "XL"],
        price: 29.99,
        image: "localhost:4000/img",
        brand_id: "BR-2004",
    },
    {
        id: "CT-1005",
        name: "Cargo Shorts",
        description:
            "Durable cargo shorts with multiple pockets, ideal for outdoor activities.",
        size: ["M", "L", "XL"],
        price: 24.99,
        image: "localhost:4000/img",
        brand_id: "BR-2005",
    },
    {
        id: "CT-1006",
        name: "Striped Polo Shirt",
        description:
            "Classic striped polo with a soft texture, perfect for smart casual settings.",
        size: ["S", "M", "L"],
        price: 19.75,
        image: "localhost:4000/img",
        brand_id: "BR-2006",
    },
    {
        id: "CT-1007",
        name: "Athletic Joggers",
        description:
            "Comfortable joggers with an elastic waistband, ideal for workouts or casual wear.",
        size: ["M", "L", "XL"],
        price: 27.49,
        image: "localhost:4000/img",
        brand_id: "BR-2007",
    },
    {
        id: "CT-1008",
        name: "Flannel Shirt",
        description:
            "Soft cotton flannel shirt with a relaxed fit, great for layering in cooler weather.",
        size: ["L", "XL"],
        price: 31.99,
        image: "localhost:4000/img",
        brand_id: "BR-2008",
    },
    {
        id: "CT-1009",
        name: "Summer Dress",
        description:
            "A lightweight, flowy summer dress with adjustable straps.",
        size: ["S", "M"],
        price: 39.99,
        image: "localhost:4000/img",
        brand_id: "BR-2009",
    },
    {
        id: "CT-1010",
        name: "Leather Belt",
        description:
            "Genuine leather belt with a sleek metallic buckle, perfect for any wardrobe.",
        size: ["M", "L"],
        price: 19.99,
        image: "localhost:4000/img",
        brand_id: "BR-2010",
    },
];

let brands = [
    {
        id: "BR-2001",
        name: "Urban Threads",
        description:
            "A modern streetwear brand known for bold designs and cutting-edge fashion.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2002",
        name: "Peak Performance",
        description:
            "Outdoor gear and athletic apparel designed for extreme conditions and high performance.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2003",
        name: "Luxe Layers",
        description:
            "Premium fabrics and timeless designs tailored for the sophisticated individual.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2004",
        name: "Eco Chic",
        description:
            "Sustainable fashion brand committed to eco-friendly materials and ethical production.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2005",
        name: "Vibe Athletics",
        description:
            "Trendy, comfortable activewear made for performance and style on the go.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2006",
        name: "Classic Couture",
        description:
            "A luxury fashion house offering exclusive, high-end clothing and accessories.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2007",
        name: "Denim Co.",
        description:
            "Iconic denim brand specializing in durable, stylish jeans for all occasions.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2008",
        name: "Minimal Studio",
        description:
            "Sleek and minimalistic designs that focus on simplicity and elegance.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2009",
        name: "Bold & Bright",
        description:
            "Vibrant and daring fashion for those who love to stand out in any crowd.",
        image: "localhost:4000/img",
    },
    {
        id: "BR-2010",
        name: "Heritage Tailors",
        description:
            "Traditional tailoring craftsmanship combined with modern fits and fabrics.",
        image: "localhost:4000/img",
    },
];

let reviews = [
    {
        id: "RV-3001",
        rating: 5,
        content:
            "Absolutely love the quality of this shirt! It fits perfectly and the fabric is so soft.",
        author: "Jessica R.",
        clothing_id: "CT-1001",
    },
    {
        id: "RV-3002",
        rating: 4,
        content:
            "Great jacket, but I wish the sleeves were a little longer. Otherwise, super stylish!",
        author: "David K.",
        clothing_id: "CT-1002",
    },
    {
        id: "RV-3003",
        rating: 3,
        content:
            "The pants are okay, but they run small. Would recommend ordering a size up.",
        author: "Maria L.",
        clothing_id: "CT-1003",
    },
    {
        id: "RV-3004",
        rating: 5,
        content:
            "Best hoodie ever! It’s warm, soft, and the color hasn’t faded after multiple washes.",
        author: "Ethan M.",
        clothing_id: "CT-1004",
    },
    {
        id: "RV-3005",
        rating: 2,
        content:
            "Not happy with the quality of these shorts. They shrank after the first wash.",
        author: "Lauren G.",
        clothing_id: "CT-1005",
    },
    {
        id: "RV-3006",
        rating: 4,
        content:
            "Love the polo shirt! Fits well and the material is breathable, perfect for summer.",
        author: "Tom W.",
        clothing_id: "CT-1006",
    },
    {
        id: "RV-3007",
        rating: 5,
        content:
            "Amazing joggers! Super comfortable and perfect for workouts or lounging.",
        author: "Sophia P.",
        clothing_id: "CT-1007",
    },
    {
        id: "RV-3008",
        rating: 3,
        content:
            "The flannel is nice, but the color isn’t as vibrant as in the pictures.",
        author: "Ben S.",
        clothing_id: "CT-1008",
    },
    {
        id: "RV-3009",
        rating: 5,
        content:
            "This dress is beautiful! The fit is perfect, and it’s great for hot weather.",
        author: "Emma T.",
        clothing_id: "CT-1009",
    },
    {
        id: "RV-3010",
        rating: 1,
        content:
            "Very disappointed with the belt. The buckle broke after just a week of use.",
        author: "Michael D.",
        clothing_id: "CT-1010",
    },
];

export default { clothing, brands, reviews }