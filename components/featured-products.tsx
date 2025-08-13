"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Restaurant {
  id: number;
  name: string;
  logo: string;
}

const partnerRestaurants: Restaurant[] = [
  { id: 1, name: "Gourmet Burger", logo: "/gourmet-burger-restaurant.png" },
  { id: 2, name: "Sushi Heaven", logo: "/japanese-sushi-fresh-fish.png" },
  { id: 3, name: "Spicy Kitfo", logo: "/spicy-ethiopian-berbere-kitfo.png" },
  { id: 4, name: "Berlin Bites", logo: "/berlin-restaurant-food.png" },
  { id: 5, name: "Injera House", logo: "/ethiopian-injera-doro-wat.png" },
  { id: 6, name: "Pizza Palace", logo: "/restaurant-details.png" },
  { id: 7, name: "Taco Town", logo: "/restaurant-app-offers.png" },
  { id: 8, name: "Curry House", logo: "/restaurant-offers-screen.png" },
  { id: 9, name: "Seafood Shack", logo: "/restaurant-details-screen.png" },
  { id: 10, name: "Noodle Nook", logo: "/restaurant-app-interfaces.png" },
  { id: 11, name: "Cafe Corner", logo: "/restaurant-offers-screen.png" },
  { id: 12, name: "Steak House", logo: "/trending-discounts.png" },
];

export default function FeaturedProducts() {
  return (
    <section
      id="restaurants"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Partner Restaurants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a curated selection of top-rated restaurants with exclusive
            deals just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group"
              aria-labelledby={`restaurant-${restaurant.id}`}
            >
              <CardHeader className="p-0 mb-4">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 bg-white relative shrink-0">
                  <Image
                    src={restaurant.logo}
                    alt={`${restaurant.name} logo`}
                    fill
                    sizes="128px"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-0 text-center">
                <CardTitle
                  id={`restaurant-${restaurant.id}`}
                  className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2"
                >
                  {restaurant.name}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Hungry for more? Log in to unlock all partner restaurants and
            exclusive offers.
          </p>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.discover.shewaber",
                  "_blank"
                )
              }
            >
              View All Products in App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
