"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleAppStoreClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Auto-close after 3 seconds
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 py-4 transition-colors duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        } sticky top-0 z-50 border-b ${
          isScrolled ? "border-orange-100" : "border-transparent"
        }`}
      >
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
            Why Choose Gursha?
          </button>
        </div>

        <Button
          variant="ghost"
          className="flex items-center gap-0 font-bold text-orange-600 text-sm sm:text-base px-2 sm:px-4 cursor-pointer hover:text-orange-600"
          style={{ columnGap: "0px" }}
          onClick={() => window.open("https://shewaber.com/", "_blank")}
        >
          <span>Join Now</span>
          <Image
            src="/forwardarrow.png"
            alt="Forward Arrow"
            width={18}
            height={18}
            style={{
              objectFit: "contain",
              filter:
                "invert(42%) sepia(98%) saturate(2625%) hue-rotate(357deg) brightness(96%) contrast(101%)", // orange tint
            }}
          />
        </Button>
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
                Discover new Restaurants with friends{" "}
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Restaurant Offers
                </span>{" "}
                Near You */}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Join other foodies & Start exploring top new spots in Addis
                together.
              </p>

              <div className="flex flex-row gap-3 sm:gap-2 justify-center lg:justify-start px-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.discover.shewaber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/playstorebutton.png"
                    alt="Google Play"
                    width={150}
                    height={60}
                    layout="fixed"
                    style={{
                      width: "150px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                </a>

                <a
                  href="#"
                  onClick={handleAppStoreClick}
                  className="flex flex-col items-center"
                >
                  <Image
                    src="/applebutton.png"
                    alt="App Store"
                    width={150}
                    height={60}
                    layout="fixed"
                    style={{
                      width: "150px",
                      height: "60px",
                      objectFit: "contain",
                    }}
                  />
                  <span style={{ fontSize: "10px" }}>Comming soon...</span>
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end max-w-[280px] mx-auto">
              <div className="relative">
                {/* Removed gradient glow */}
                <Image
                  src="/gursha-hero-screenshot.png"
                  alt="Gursha App Interface"
                  width={200}
                  height={420}
                  layout="fixed"
                  style={{ width: "200px", height: "420px", objectFit: "fill" }}
                  className="relative rounded-3xl shadow-2xl border-4 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white" id="">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              We connect food lovers with new restaurants
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                {/* Restaurant SVG */}
                <img
                  src="/resturants.svg"
                  alt="Restaurants"
                  className="h-8 w-8 text-gray-400"
                />
                <div className="text-5xl lg:text-5xl font-bold text-black">
                  300+
                </div>
              </div>
              <div className="text-gray-600 font-medium">Restaurants</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-1">
                {/* Reward SVG */}
                <img
                  src="/reward.svg"
                  alt="Offers"
                  className="h-8 w-8 text-gray-400"
                />
                <div className="text-5xl lg:text-5xl font-bold text-black">
                  100+
                </div>
              </div>
              <div className="text-gray-600 font-medium">
                Offers added every month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section
        className="px-6 py-12 md:py-20 bg-gradient-to-br from-orange-50 to-red-50 "
        id="restaurants"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              The App for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Exploring New Places
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Why food lovers choose Gursha App
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discover new restaurants",
                text: "Restaruants near you haven't tried before",
                // img: "/photo_2025-08-13_16-15-08-portrait.png",
                alt: "Explore Top New Restaurants",
              },
              {
                number: "02",
                title: "Exclusive Discounts & Offers",
                text: "Try new places & save money on your first visit!",
                // img: "/photo_2025-08-13_16-15-11-portrait.png",
                alt: "Exclusive Cool Offers",
              },
              {
                number: "03",
                title: "Rank Restaurants",
                text: "Rank restaurants, follow other foodies & invite your friends to join the party!",
                // img: "/photo_2025-08-13_16-15-11-left.png",
                alt: "Place Rating Interface",
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
                {/* <div className="block md:hidden max-w-[280px] mx-auto">
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
                </div> */}
              </div>
            ))}
          </div>
          {/* Desktop images */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-16">
            {[
              "/photo_2025-08-13_16-15-08-portrait.png",
              "/photo_2025-08-13_16-15-11-left.png",
              "/photo_2025-08-13_16-15-13-portrait.png",
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo & Description */}
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
                Food, Friends & Offers all in One App.
              </p>
            </div>
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.tiktok.com/@shewaber.app"
                  className="hover:brightness-100"
                  target="_blank"
                >
                  <img
                    src="/tiktok.png"
                    alt="TikTok"
                    className="h-6 w-6 filter brightness-0 invert opacity-50 hover:opacity-100"
                  />
                </a>

                <a
                  href="https://www.instagram.com/gursha.app/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/shewaber-app/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            {/* Download App */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Download App</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.discover.shewaber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/playstorebutton.png"
                    alt="Google Play"
                    width={150}
                    height={54}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 mt-8">
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
