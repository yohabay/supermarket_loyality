"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleAppStoreClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Auto-close after 3 seconds
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Coming Soon!
            </h3>
            <p className="text-gray-600">
              The Gursha App for iOS is coming soon to the App Store.
            </p>
            <Button
              className="mt-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="flex items-center space-x-2">
          <Image
            src="/gursha-app-logo.png"
            alt="Gursha App Logo"
            width={32}
            height={32}
            layout="fixed"
            style={{ width: "32px", height: "32px", objectFit: "fill" }}
            className="rounded-lg"
          />
          <span className="font-bold text-xl text-gray-900">Gursha App</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer font-bold"
          >
            Home
          </button>
          <button
            onClick={() =>
              document
                .getElementById("restaurants")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer font-bold"
          >
            Restaurants
          </button>
          <button
            onClick={() =>
              document
                .getElementById("offers")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer font-bold"
          >
            Offers
          </button>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            className="text-orange-600 text-sm sm:text-base px-2 sm:px-4"
            onClick={() => window.open("https://shewaber.com/", "_blank")}
          >
            Join
          </Button>
          <div className="flex gap-2">
            <Button
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-sm sm:text-base px-3 sm:px-6"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.discover.shewaber",
                  "_blank"
                )
              }
            >
              <Image
                src="/google-play-icon-white.png"
                alt="Google Play"
                width={35}
                height={30}
                layout="fixed"
                style={{ width: "35px", height: "30px", objectFit: "fill" }}
                className="mr-2"
              />
              Dowload
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Amazing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Restaurant Offers
                </span>{" "}
                Near You
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Join thousands of food lovers saving money at their favorite
                restaurants. Get exclusive discounts, discover new places, and
                never miss a great deal again.
              </p>

              <div className="flex flex-row gap-3 sm:gap-2 justify-center lg:justify-start px-2">
                <Button
                  size="lg"
                  className="w-full max-w-[160px] sm:max-w-[200px] lg:max-w-[260px] bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 sm:px-2 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.discover.shewaber",
                      "_blank"
                    )
                  }
                >
                  <Image
                    src="/google-play-icon-white.png"
                    alt="Google Play"
                    width={35}
                    height={30}
                    layout="fixed"
                    style={{ width: "35px", height: "30px", objectFit: "fill" }}
                  />
                  Download Now
                </Button>

                <Button
                  size="lg"
                  className="w-full max-w-[160px] sm:max-w-[200px] lg:max-w-[260px] bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleAppStoreClick}
                >
                  <Image
                    src="/applelogo.png"
                    alt="App Store"
                    width={24}
                    height={24}
                    layout="fixed"
                    style={{ width: "24px", height: "24px", objectFit: "fill" }}
                  />
                  Download Now
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end max-w-[280px] mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-2xl opacity-20 scale-105"></div>
                <Image
                  src="/gursha-hero-screenshot.png"
                  alt="Gursha App Interface"
                  width={240}
                  height={420}
                  layout="fixed"
                  style={{ width: "240px", height: "420px", objectFit: "fill" }}
                  className="relative rounded-3xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white" id="restaurants">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              We Connect Food Lovers With Amazing Restaurant Deals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">
                300+
              </div>
              <div className="text-gray-600 font-medium">
                Partner Restaurants
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Happy Food Lovers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section
        className="px-6 py-20 bg-gradient-to-br from-orange-50 to-red-50"
        id="offers"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image - hidden on mobile, shown only on large screens */}
            <div className="hidden lg:flex justify-center lg:justify-end max-w-[280px] mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-2xl opacity-20 scale-105"></div>
                <Image
                  src="/app-map-interface.png"
                  alt="Gursha App Interface"
                  width={240}
                  height={420}
                  layout="fixed"
                  style={{ width: "240px", height: "420px", objectFit: "fill" }}
                  className="relative rounded-3xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Explore Exclusive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Restaurant Offers
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Get access to special discounts and deals that are only
                available through our app. Save up to 50% on your favorite
                meals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Interactive Map View
                    </h3>
                    <p className="text-gray-600">
                      Explore restaurants on an interactive map with real-time
                      offer indicators and distance information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Instant Offer Access
                    </h3>
                    <p className="text-gray-600">
                      Tap on any restaurant pin to see available offers and
                      claim them with just one tap.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg">
                Explore Offers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="px-6 py-12 md:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Features That Make
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Dining Better
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of food lovers choose Gursha for their
              dining adventures and savings.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Restaurant Discovery",
                text: "Find restaurants near you with our interactive map and location-based search features.",
                img: "/photo_2025-08-13_16-15-08-portrait.png",
                alt: "Restaurant Details with Offers",
              },
              {
                number: "02",
                title: "Instant Offers",
                text: "Access exclusive discounts and offers from your favorite restaurants with just one tap.",
                img: "/photo_2025-08-13_16-15-11-portrait.png",
                alt: "Service Rating Interface",
              },
              {
                number: "03",
                title: "Social Reviews",
                text: "Rate restaurants, follow other foodies, and climb the social leaderboard rankings.",
                img: "/photo_2025-08-13_16-15-11-left.png",
                alt: "Place Rating Interface",
              },
              {
                number: "04",
                title: "Rewards Program",
                text: "Earn points with every restaurant visit and unlock exclusive premium benefits.",
                img: "/photo_2025-08-13_16-15-16-left.png",
                alt: "Social Review Sharing",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {feature.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.text}</p>

                {/* Mobile image */}
                <div className="block md:hidden max-w-[280px] mx-auto">
                  <Image
                    src={feature.img}
                    alt={feature.alt}
                    width={280}
                    height={320}
                    layout="fixed"
                    style={{
                      width: "180px",
                      height: "320px",
                      objectFit: "fill",
                    }}
                    className="rounded-2xl shadow-lg mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop images */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-16">
            {[
              "/photo_2025-08-13_16-15-08-portrait.png",
              "/photo_2025-08-13_16-15-11-left.png",
              "/photo_2025-08-13_16-15-13-portrait.png",
              "/photo_2025-08-13_16-15-16-left.png",
            ].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Feature image ${i + 1}`}
                width={180}
                height={320}
                layout="fixed"
                style={{ width: "180px", height: "320px", objectFit: "fill" }}
                className="rounded-3xl shadow-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Gursha Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                {" "}
                Gursha App
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of food lovers who are saving money and discovering
              amazing restaurants every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 font-bold text-2xl">%</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Exclusive Restaurant Offers
              </h3>
              <p className="text-gray-600">
                Access special discounts and deals that are only available
                through our app. Save up to 50% on your favorite meals.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 font-bold text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Social Food Community
              </h3>
              <p className="text-gray-600">
                Connect with fellow food enthusiasts, share reviews, and climb
                the leaderboard by discovering great restaurants.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-orange-600 font-bold text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Smart Rating System
              </h3>
              <p className="text-gray-600">
                Rate food, place, and service separately to help others make
                better dining decisions and earn rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Download Gursha App & Start Saving Today
                </h2>
                <p className="text-xl text-orange-100 leading-relaxed">
                  Join thousands of food lovers who are already discovering
                  amazing restaurants and saving money on every meal. Download
                  now and get your first exclusive offer!
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-base sm:text-lg font-semibold min-w-[140px]"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.discover.shewaber",
                      "_blank"
                    )
                  }
                >
                  <Image
                    src="/google-play-icon-white.png"
                    alt="Google Play"
                    width={28}
                    height={24}
                    style={{ objectFit: "fill" }}
                  />
                  Android
                </Button>

                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-base sm:text-lg font-semibold min-w-[140px]"
                  onClick={handleAppStoreClick}
                >
                  <Image
                    src="/applelogo.png"
                    alt="App Store"
                    width={20}
                    height={20}
                    style={{ objectFit: "fill" }}
                  />
                  iOS
                </Button>
              </div>
            </div>

            <div className="relative max-w-[280px] mx-auto">
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/gursha-hero-screenshot.png"
                  alt="Gursha Restaurant App"
                  width={180}
                  height={320}
                  layout="fixed"
                  style={{ width: "180px", height: "320px", objectFit: "fill" }}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/gursha-app-logo.png"
                  alt="Gursha Logo"
                  width={32}
                  height={32}
                  layout="fixed"
                  style={{ width: "32px", height: "32px", objectFit: "fill" }}
                  className="rounded-lg"
                />
                <span className="font-bold text-xl">Gursha App</span>
              </div>
              <p className="text-gray-400">
                Discover amazing restaurant offers and save money on your
                favorite meals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("restaurants")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Restaurants
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("offers")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Offers
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">For Restaurants</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Join as Partner
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Restaurant Dashboard
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Create Offers
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Analytics
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Download App</h4>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-800 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.discover.shewaber",
                      "_blank"
                    )
                  }
                >
                  <Image
                    src="/google-play-icon-white.png"
                    alt="Google Play"
                    width={35}
                    height={30}
                    layout="fixed"
                    style={{ width: "35px", height: "30px", objectFit: "fill" }}
                    className="mr-2"
                  />
                  Google Play
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-800 bg-transparent"
                  onClick={handleAppStoreClick}
                >
                  <Image
                    src="/applelogo.png"
                    alt="App Store"
                    width={20}
                    height={20}
                    layout="fixed"
                    style={{ width: "20px", height: "20px", objectFit: "fill" }}
                    className="mr-2"
                  />
                  App Store
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Gursha. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
