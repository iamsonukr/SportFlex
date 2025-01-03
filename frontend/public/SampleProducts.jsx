const SampleProducts = [
    {
      id: 1,
      name: 'Running Shoes',
      category: 'Footwear',
      price: 300,
      color: 'Red',
      size: 'Medium',
      gender: 'Men',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Training T-Shirt',
      category: 'Clothing',
      price: 100,
      color: 'Blue',
      size: 'Small',
      gender: 'Women',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
      rating: 4.2,
      reviews: 95
    },
    {
      id: 3,
      name: 'Premium Yoga Mat',
      category: 'Equipment',
      price: 80,
      color: 'Purple',
      size: 'Large',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2',
      rating: 4.8,
      reviews: 234
    },
    {
      id: 4,
      name: 'Sports Backpack',
      category: 'Accessories',
      price: 75,
      color: 'Black',
      size: 'Large',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      rating: 4.3,
      reviews: 167
    },
    {
      id: 5,
      name: 'Basketball Shorts',
      category: 'Clothing',
      price: 45,
      color: 'Navy',
      size: 'Medium',
      gender: 'Men',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      rating: 4.1,
      reviews: 89
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      category: 'Accessories',
      price: 199,
      color: 'White',
      size: 'Small',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df',
      rating: 4.6,
      reviews: 312
    },
    {
      id: 7,
      name: 'Tennis Racket Pro',
      category: 'Equipment',
      price: 250,
      color: 'Yellow',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1617149545429-d1ada293c659',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 8,
      name: 'Compression Leggings',
      category: 'Clothing',
      price: 85,
      color: 'Black',
      size: 'Small',
      gender: 'Women',
      image: 'https://images.unsplash.com/photo-1548663512-4a8a3864e551',
      rating: 4.4,
      reviews: 228
    },
    {
      id: 9,
      name: 'Training Gloves',
      category: 'Accessories',
      price: 35,
      color: 'Red',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee',
      rating: 4.2,
      reviews: 94
    },
    {
      id: 10,
      name: 'Hiking Boots',
      category: 'Footwear',
      price: 180,
      color: 'Brown',
      size: 'Large',
      gender: 'Men',
      image: 'https://images.unsplash.com/photo-1520219306100-ec7c8c3b1a10',
      rating: 4.6,
      reviews: 187
    },
    {
      id: 11,
      name: 'Smartwatch Pro',
      category: 'Accessories',
      price: 299,
      color: 'Silver',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d',
      rating: 4.7,
      reviews: 423
    },
    {
      id: 12,
      name: 'Yoga Pants',
      category: 'Clothing',
      price: 95,
      color: 'Grey',
      size: 'Medium',
      gender: 'Women',
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8',
      rating: 4.3,
      reviews: 276
    },
    {
      id: 13,
      name: 'Swimming Goggles',
      category: 'Equipment',
      price: 40,
      color: 'Blue',
      size: 'Small',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece',
      rating: 4.4,
      reviews: 143
    },
    {
      id: 14,
      name: 'Basketball',
      category: 'Equipment',
      price: 50,
      color: 'Orange',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf',
      rating: 4.5,
      reviews: 198
    },
    {
      id: 15,
      name: 'Running Jacket',
      category: 'Clothing',
      price: 120,
      color: 'Green',
      size: 'Large',
      gender: 'Men',
      image: 'https://images.unsplash.com/photo-1544099858-75feeb57f01b',
      rating: 4.2,
      reviews: 167
    },
    {
      id: 16,
      name: 'Sport Socks Pack',
      category: 'Accessories',
      price: 25,
      color: 'White',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82',
      rating: 4.1,
      reviews: 342
    },
    {
      id: 17,
      name: 'Cycling Helmet',
      category: 'Equipment',
      price: 150,
      color: 'Black',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1557803175-2d5c5cae3e84',
      rating: 4.8,
      reviews: 231
    },
    {
      id: 18,
      name: 'Sports Water Bottle',
      category: 'Accessories',
      price: 30,
      color: 'Blue',
      size: 'Large',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504',
      rating: 4.3,
      reviews: 418
    },
    {
      id: 19,
      name: 'Training Shoes',
      category: 'Footwear',
      price: 280,
      color: 'Grey',
      size: 'Medium',
      gender: 'Women',
      image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de',
      rating: 4.6,
      reviews: 287
    },
    {
      id: 20,
      name: 'Resistance Bands Set',
      category: 'Equipment',
      price: 45,
      color: 'MultiColor',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc',
      rating: 4.5,
      reviews: 365
    },
    {
      id: 21,
      name: 'Sport Sunglasses',
      category: 'Accessories',
      price: 89,
      color: 'Black',
      size: 'Medium',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      rating: 4.4,
      reviews: 192
    },
    {
      id: 22,
      name: 'Gym Duffel Bag',
      category: 'Accessories',
      price: 65,
      color: 'Navy',
      size: 'Large',
      gender: 'Unisex',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      rating: 4.3,
      reviews: 247
    }
  ];
  
  export default SampleProducts;