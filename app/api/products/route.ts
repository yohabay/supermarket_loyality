import { NextResponse } from "next/server"

const products = [
  {
    id: 1,
    name: "Berlin Bar & Restaurant",
    description: "Bar & Restaurant",
    image: "/berlin-restaurant-food.png",
    discount: 15,
    distance: "135 m away",
    rating: 2.3,
    originalPrice: 570,
    discountedPrice: 190,
    currency: "BIRR",
    category: "Restaurant",
    offers: ["Discount On Every Item 35% OFF", "ከ 1.00 ሰዓት በፊት"],
  },
  {
    id: 2,
    name: "Jabdu Coffee",
    description: "Coffee & Pastries",
    image: "/ethiopian-injera-doro-wat.png",
    discount: 30,
    distance: "200 m away",
    rating: 4.8,
    originalPrice: 120,
    discountedPrice: 85,
    currency: "BIRR",
    category: "Coffee",
    offers: ["Fresh Coffee Special 30% OFF", "ከ 2.30 ሰዓት በፊት"],
  },
  {
    id: 3,
    name: "Divine Burger",
    description: "Fast Food & Burgers",
    image: "/spicy-ethiopian-berbere-kitfo.png",
    discount: 30,
    distance: "180 m away",
    rating: 4.2,
    originalPrice: 350,
    discountedPrice: 250,
    currency: "BIRR",
    category: "Fast Food",
    offers: ["Special Burger Combo 30% OFF", "ከ 1.45 ሰዓት በፊት"],
  },
  {
    id: 4,
    name: "Bete Urael Juice",
    description: "Fresh Juice Bar",
    image: "/placeholder-kkrxq.png",
    discount: 25,
    distance: "150 m away",
    rating: 4.6,
    originalPrice: 65,
    discountedPrice: 45,
    currency: "BIRR",
    category: "Beverages",
    offers: ["Fresh Juice Selection 25% OFF", "ከ 3.15 ሰዓት በፊት"],
  },
  {
    id: 5,
    name: "Addis Red Sea",
    description: "Traditional Ethiopian",
    image: "/ethiopian-injera-doro-wat.png",
    discount: 20,
    distance: "220 m away",
    rating: 4.4,
    originalPrice: 280,
    discountedPrice: 220,
    currency: "BIRR",
    category: "Traditional",
    offers: ["Traditional Dishes 20% OFF", "ከ 2.00 ሰዓት በፊት"],
  },
  {
    id: 6,
    name: "Calavies Restaurant",
    description: "International Cuisine",
    image: "/spicy-ethiopian-berbere-kitfo.png",
    discount: 40,
    distance: "300 m away",
    rating: 4.7,
    originalPrice: 420,
    discountedPrice: 250,
    currency: "BIRR",
    category: "International",
    offers: ["International Menu 40% OFF", "ከ 1.20 ሰዓት በፊት"],
  },
  {
    id: 7,
    name: "Lime Tree Restaurant",
    description: "Fine Dining",
    image: "/placeholder-kkrxq.png",
    discount: 25,
    distance: "250 m away",
    rating: 4.3,
    originalPrice: 380,
    discountedPrice: 285,
    currency: "BIRR",
    category: "Fine Dining",
    offers: ["Fine Dining Experience 25% OFF", "ከ 4.00 ሰዓት በፊት"],
  },
  {
    id: 8,
    name: "Yod Abyssinia",
    description: "Cultural Restaurant",
    image: "/ethiopian-injera-doro-wat.png",
    discount: 35,
    distance: "400 m away",
    rating: 4.9,
    originalPrice: 320,
    discountedPrice: 210,
    currency: "BIRR",
    category: "Cultural",
    offers: ["Cultural Experience 35% OFF", "ከ 2.45 ሰዓት በፊት"],
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Randomly shuffle products to simulate live data
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5)

    // Return first 6 products
    return NextResponse.json({
      success: true,
      data: shuffledProducts.slice(0, 6),
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch products" }, { status: 500 })
  }
}
