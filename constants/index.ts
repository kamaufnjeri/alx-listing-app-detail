import { PropertyProps } from "@/interfaces";

export const API_URL = 'https://api.example.com/properties';
export const PLACEHOLDER_IMAGE = '/assets/placeholder.jpg';


export const PROPERTYLISTINGSAMPLE: PropertyProps [] = [
  {
    name: "Modern Apartment",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.5,
    category: ["Apartment", "Modern"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/images/image-1.jpg",
    discount: "10% off",
    reviews: [
      { name: "Alice", comment: "Great place!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Bob", comment: "Loved the view!", avatar: "/images/avatar-2.jpg", rating: 4 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Cozy Cottage",
    address: {
      state: "London",
      city: "London",
      country: "UK"
    },
    rating: 4.7,
    category: ["Cottage", "Cozy"],
    price: 1500,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "3"
    },
    image: "/images/image-2.jpg",
    discount: "15% off",
    reviews: [
      { name: "Chris", comment: "Very cozy and comfortable!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Dana", comment: "Perfect getaway spot.", avatar: "/images/avatar-2.jpg", rating: 4.5 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Luxury Villa",
    address: {
      state: "Los Angeles",
      city: "Los Angeles",
      country: "USA"
    },
    rating: 4.8,
    category: ["Villa", "Luxury"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "10"
    },
    image: "/images/image-3.jpg",
    discount: "20% off",
    reviews: [
      { name: "Emma", comment: "Absolutely stunning!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Frank", comment: "Worth every penny.", avatar: "/images/avatar-2.jpg", rating: 4.8 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "City Loft",
    address: {
      state: "Paris",
      city: "Paris",
      country: "France"
    },
    rating: 4.6,
    category: ["Loft", "City"],
    price: 3000,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "6"
    },
    image: "/images/image-4.jpg",
    discount: "5% off",
    reviews: [
      { name: "Grace", comment: "Amazing ambiance!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Hank", comment: "Great for business trips.", avatar: "/images/avatar-2.jpg", rating: 4.6 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Beach House",
    address: {
      state: "Malibu",
      city: "Malibu",
      country: "USA"
    },
    rating: 4.9,
    category: ["House", "Beach"],
    price: 4000,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "8"
    },
    image: "/images/image-5.jpg",
    discount: "10% off",
    reviews: [
      { name: "Ivy", comment: "Loved the ocean view!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Jack", comment: "Perfect for families.", avatar: "/images/avatar-2.jpg", rating: 4.9 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Mountain Cabin",
    address: {
      state: "Aspen",
      city: "Aspen",
      country: "USA"
    },
    rating: 4.4,
    category: ["Cabin", "Mountain"],
    price: 1800,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/images/image-6.jpg",
    discount: "7% off",
    reviews: [
      { name: "Kate", comment: "Great escape to nature.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Leo", comment: "Peaceful and quiet.", avatar: "/images/avatar-2.jpg", rating: 4.4 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Downtown Studio",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.7,
    category: ["Studio", "Downtown"],
    price: 2500,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "3"
    },
    image: "/images/image-7.jpg",
    discount: "12% off",
    reviews: [
      { name: "Mia", comment: "Great location!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Noah", comment: "Very stylish.", avatar: "/images/avatar-2.jpg", rating: 4.7 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Penthouse Suite",
    address: {
      state: "Dubai",
      city: "Dubai",
      country: "UAE"
    },
    rating: 4.9,
    category: ["Suite", "Penthouse"],
    price: 7000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "8"
    },
    image: "/images/image-8.jpg",
    discount: "15% off",
    reviews: [
      { name: "Olivia", comment: "Luxury at its finest.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Paul", comment: "Amazing views!", avatar: "/images/avatar-2.jpg", rating: 4.9 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  }, {
    name: "Coastal Apartment",
    address: {
      state: "Sydney",
      city: "Sydney",
      country: "Australia"
    },
    rating: 4.6,
    category: ["Apartment", "Coastal"],
    price: 2200,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/images/image-9.jpg",
    discount: "10% off",
    reviews: [
      { name: "Quinn", comment: "Loved the beach view!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Rachel", comment: "Perfect for a weekend getaway.", avatar: "/images/avatar-2.jpg", rating: 4.6 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Rustic Bungalow",
    address: {
      state: "Nashville",
      city: "Nashville",
      country: "USA"
    },
    rating: 4.4,
    category: ["Bungalow", "Rustic"],
    price: 1700,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/images/image-10.jpg",
    discount: "5% off",
    reviews: [
      { name: "Sam", comment: "Charming and cozy!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Taylor", comment: "Quiet and peaceful.", avatar: "/images/avatar-2.jpg", rating: 4.4 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Skyscraper Loft",
    address: {
      state: "Singapore",
      city: "Singapore",
      country: "Singapore"
    },
    rating: 4.8,
    category: ["Loft", "Skyscraper"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "6"
    },
    image: "/images/image-11.jpg",
    discount: "12% off",
    reviews: [
      { name: "Victoria", comment: "Modern and luxurious.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Wesley", comment: "Incredible views of the city.", avatar: "/images/avatar-2.jpg", rating: 4.8 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Forest Cabin",
    address: {
      state: "Vancouver",
      city: "Vancouver",
      country: "Canada"
    },
    rating: 4.5,
    category: ["Cabin", "Forest"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/images/image-12.jpg",
    discount: "8% off",
    reviews: [
      { name: "Xavier", comment: "Peaceful retreat in nature.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Yasmine", comment: "Perfect place for relaxation.", avatar: "/images/avatar-2.jpg", rating: 4.5 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Desert Villa",
    address: {
      state: "Dubai",
      city: "Dubai",
      country: "UAE"
    },
    rating: 4.7,
    category: ["Villa", "Desert"],
    price: 4000,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "8"
    },
    image: "/images/image-13.jpg",
    discount: "10% off",
    reviews: [
      { name: "Zane", comment: "Luxury in the desert!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Aisha", comment: "An unforgettable experience.", avatar: "/images/avatar-2.jpg", rating: 4.7 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Urban Apartment",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.6,
    category: ["Apartment", "Urban"],
    price: 2500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "5"
    },
    image: "/images/image-14.jpg",
    discount: "8% off",
    reviews: [
      { name: "Leona", comment: "Modern and centrally located.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Milo", comment: "Great for business travelers.", avatar: "/images/avatar-2.jpg", rating: 4.6 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Island Resort",
    address: {
      state: "Bali",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.9,
    category: ["Resort", "Island"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "10"
    },
    image: "/images/image-15.jpg",
    discount: "20% off",
    reviews: [
      { name: "Nina", comment: "Paradise on earth!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Oscar", comment: "The best vacation spot.", avatar: "/images/avatar-2.jpg", rating: 4.9 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Historic Manor",
    address: {
      state: "Dublin",
      city: "Dublin",
      country: "Ireland"
    },
    rating: 4.8,
    category: ["Manor", "Historic"],
    price: 3500,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "6"
    },
    image: "/images/image-16.jpg",
    discount: "12% off",
    reviews: [
      { name: "Peter", comment: "A step back in time.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Quinn", comment: "Beautiful historical property.", avatar: "/images/avatar-2.jpg", rating: 4.8 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Tropical Villa",
    address: {
      state: "Phuket",
      city: "Phuket",
      country: "Thailand"
    },
    rating: 4.7,
    category: ["Villa", "Tropical"],
    price: 4500,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "8"
    },
    image: "/images/image-17.jpg",
    discount: "15% off",
    reviews: [
      { name: "Kai", comment: "A true island getaway.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Lila", comment: "Exquisite tropical experience.", avatar: "/images/avatar-2.jpg", rating: 4.7 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Mountain Retreat",
    address: {
      state: "Aspen",
      city: "Aspen",
      country: "USA"
    },
    rating: 4.8,
    category: ["Cabin", "Mountain"],
    price: 3800,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "10"
    },
    image: "/images/image-18.jpg",
    discount: "10% off",
    reviews: [
      { name: "Ryan", comment: "Breathtaking mountain views.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Harper", comment: "Perfect for large families.", avatar: "/images/avatar-2.jpg", rating: 4.8 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "City Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.9,
    category: ["Apartment", "City"],
    price: 5000,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "6"
    },
    image: "/images/image-19.jpg",
    discount: "12% off",
    reviews: [
      { name: "Elena", comment: "Luxurious and central location.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Chris", comment: "Ideal for business and leisure.", avatar: "/images/avatar-2.jpg", rating: 4.9 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Art Deco Studio",
    address: {
      state: "Paris",
      city: "Paris",
      country: "France"
    },
    rating: 4.6,
    category: ["Studio", "Art Deco"],
    price: 3200,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/images/image-20.jpg",
    discount: "7% off",
    reviews: [
      { name: "Leo", comment: "Chic and stylish design.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Mila", comment: "Perfect for a weekend escape.", avatar: "/images/avatar-2.jpg", rating: 4.6 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  }
    
];
