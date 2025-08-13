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
          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer font-bold"
          >
            Features
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer font-bold"
          >
            Contact
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
                width={20}
                height={20}
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

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Download Now
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleAppStoreClick}
                >
                  <Image
                    src="/app-store-icon-white.png"
                    alt="App Store"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Download Now
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-2xl opacity-20 scale-105"></div>
                <Image
                  src="/gursha-hero-screenshot.png"
                  alt="Gursha App Interface"
                  width={240}
                  height={280}
                  className="relative rounded-3xl shadow-2xl border-4 border-white/20 w-48 sm:w-64 lg:w-80 h-auto"
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
            <div>
              <Image
                src="/restaurant-details-screen.png"
                alt="Restaurant Map Discovery"
                width={320}
                height={360}
                className="rounded-3xl shadow-2xl mx-auto"
              />
            </div>

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
                img: "/restaurant-details-screen.png",
                alt: "Restaurant Details with Offers",
              },
              {
                number: "02",
                title: "Instant Offers",
                text: "Access exclusive discounts and offers from your favorite restaurants with just one tap.",
                img: "/service-rating-screen.png",
                alt: "Service Rating Interface",
              },
              {
                number: "03",
                title: "Social Reviews",
                text: "Rate restaurants, follow other foodies, and climb the social leaderboard rankings.",
                img: "/place-rating-screen.png",
                alt: "Place Rating Interface",
              },
              {
                number: "04",
                title: "Rewards Program",
                text: "Earn points with every restaurant visit and unlock exclusive premium benefits.",
                img: "/social-review-sharing.png",
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

                {/* Mobile image (smaller) */}
                <div className="block md:hidden">
                  <Image
                    src={feature.img}
                    alt={feature.alt}
                    width={128}
                    height={208}
                    className="rounded-2xl shadow-lg mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop images (original size at bottom) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-16">
            {[
              "/restaurant-details-screen.png",
              "/service-rating-screen.png",
              "/place-rating-screen.png",
              "/social-review-sharing.png",
            ].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Feature image ${i + 1}`}
                width={224}
                height={360}
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-semibold"
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
                    width={24}
                    height={24}
                  />
                  Download for Android
                </Button>
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 text-lg font-semibold"
                  onClick={handleAppStoreClick}
                >
                  <Image
                    src="/app-store-icon-white.png"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  Download for iOS
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/gursha-hero-screenshot.png"
                  alt="Gursha Restaurant App"
                  width={240}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about Gursha App? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">info@shewaber.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Website
                  </h3>
                  <a
                    href="https://shewaber.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    shewaber.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Send Message
                </Button>
              </form>
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
                <button
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
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
                    width={20}
                    height={20}
                  />
                  Google Play
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-800 bg-transparent"
                  onClick={handleAppStoreClick}
                >
                  <Image
                    src="/app-store-icon-white.png"
                    alt="App Store"
                    width={20}
                    height={20}
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
