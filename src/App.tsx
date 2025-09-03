import {
  CheckCircle2,
  CreditCard,
  Gift,
  Instagram,
  Linkedin,
  ShoppingBag,
  Tag,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 overflow-hidden"
        id="home"
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 sm:px-6">
          {/* Left: Headlines and CTA */}
          <div className="text-left md:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
              Get Rewarded for Your Loyalty With Our{" "}
              <span className="text-orange-600">Supermarket App</span>{" "}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-md mb-6">
              Start earning points and unlocking exclusive rewards every time
              you shop. Our loyalty app makes it easy to save money and get more
              from your everyday purchases.
            </p>

            <div className="flex flex-row gap-3 sm:gap-2 justify-center lg:justify-start px-2">
              <a
                href="#"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src="/playstorebutton.png"
                  alt="Google Play"
                  width={150}
                  height={60}
                  style={{
                    width: "150px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                />
                <span style={{ fontSize: "10px" }}>Comming soon...</span>
              </a>

              <a href="#" className="flex flex-col items-center">
                <img
                  src="/applebutton.png"
                  alt="App Store"
                  width={150}
                  height={60}
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

          {/* Right: App Screenshot Mockup */}
          <div className="mt-12 md:mt-0 flex justify-center relative">
            <div className="relative">
              <img
                src="/photo_2025-09-03_13-34-41-portrait.png"
                alt="Supermarket Loyalty App Interface"
                width={260}
                height={520}
                className="rounded-xl "
                style={{ width: "260px", height: "520px", objectFit: "cover" }}
              />
              {/* Delivery Badge */}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Left: Circular Background + App Image */}
          <div className="flex-1 flex justify-center mb-10 md:mb-0 relative">
            {/* Circle wrapper */}
            <div
              className="relative"
              style={{
                width: "340px",
                height: "340px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(194,232,206,0.35) 60%, rgba(255,255,255,0) 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden", // ensures the image stays inside the circle
              }}
            >
              {/* Phone mockup inside the circle */}
              <img
                src="/photo_2025-09-03_13-34-35-portrait.png"
                alt="Supermarket Loyalty App"
                className="rounded-xl shadow-2xl object-contain"
                style={{
                  width: "50%", // reduce size so full image fits
                  height: "auto",
                  zIndex: 10,
                }}
              />
            </div>
          </div>

          {/* Right: About Content */}
          <div className="flex-1 max-w-xl md:pl-12 text-left">
            <div className="flex items-center gap-2 mb-2"></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Your Shopping, More Rewarding.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              We're more than just a supermarket app — we're your partner in
              saving. Our loyalty program is designed to give back to you, our
              valued customer, with points, discounts, and special offers every
              time you shop.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-7">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-sm font-medium text-gray-800">
                  Earn Points on Every Purchase
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-sm font-medium text-gray-800">
                  Exclusive Member-Only Offers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-sm font-medium text-gray-800">
                  Personalized Rewards
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-sm font-medium text-gray-800">
                  24/7 Customer Support
                </span>
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-7 py-3 rounded-2xl shadow-lg cursor-pointer">
              Check in App
            </button>
          </div>
        </div>
      </section>

      {/* Shop Smarter Section */}

      <section className="px-4 sm:px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            Smart Features for Savvy Shoppers
          </h2>
          {/* Description */}
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Everything you need to make your shopping more rewarding, from
            tracking your points to discovering new offers.
          </p>

          {/* Cards and Mobile Mockup Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Left side cards */}
            <div className="flex flex-col gap-6">
              <div className="bg-orange-50 rounded-xl px-7 py-6 shadow hover:shadow-md transition">
                <div className="mb-4">
                  <ShoppingBag className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Shop & Earn Points
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  Automatically earn loyalty points with every purchase you make
                  in-store.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl px-7 py-6 shadow hover:shadow-md transition">
                <div className="mb-4">
                  <Tag className="w-7 h-7 text-pink-500" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Exclusive Offers
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  Access special discounts and promotions available only to our
                  loyalty app members.
                </p>
              </div>
            </div>

            {/* Center mobile mockup */}
            <div className="flex flex-col justify-center">
              <div className="mx-auto md:mt-8 md:mb-8">
                <img
                  src="/photo_2025-09-03_13-34-33-portrait.png"
                  alt="Supermarket Loyalty App mobile preview"
                  style={{
                    width: "230px",
                    height: "420px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Bottom card */}
              <div className="bg-orange-50 rounded-xl px-7 py-6 shadow hover:shadow-md transition mt-6">
                <div className="mb-4">
                  <Gift className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Store & Use Discounts
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  Securely store your earned discounts and apply them to future
                  purchases with ease.
                </p>
              </div>
            </div>

            {/* Right side cards */}
            <div className="flex flex-col gap-6">
              <div className="bg-orange-50 rounded-xl px-7 py-6 shadow hover:shadow-md transition">
                <div className="mb-4">
                  <CheckCircle2 className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Easy Redemption
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  Redeem your points for discounts, free products, and more,
                  directly from the app.
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl px-7 py-6 shadow hover:shadow-md transition">
                <div className="mb-4">
                  <CreditCard className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Supermarket Loyalty Card
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  Keep all your rewards, offers, and points in one secure place
                  with our digital loyalty card feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F6] relative px-0 pt-12 pb-0 flex flex-col items-center justify-center">
        {/* Swirl background SVG */}
        <svg
          className="absolute left-0 top-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 960 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,190 Q480,-100 960,190"
            stroke="#EAEAEC"
            strokeWidth="80"
            fill="none"
          />
        </svg>
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto w-full">
          {/* Phone Image */}
          <div className="flex-1 flex justify-center md:justify-start items-center md:items-start mb-6 md:mb-0">
            <img
              src="/photo_2025-09-03_13-34-37-portrait.png"
              alt="App screenshot"
              className="w-[240px] h-[480px] object-contain"
            />
          </div>
          {/* Text + Buttons */}
          <div className="flex-1 flex flex-col items-center md:items-start px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
              Unlock a World of Savings and Rewards
            </h2>
            <p className="text-base text-gray-700 mb-6 text-left max-w-md">
              Get a feel for the intuitive design and smooth user flow of our
              loyalty app. From tracking your points to redeeming rewards, every
              screen is thoughtfully crafted to enhance your shopping
              experience.
            </p>
            <div className="flex flex-row gap-3 sm:gap-2 justify-center lg:justify-start px-2">
              <a
                href="#"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <img
                  src="/playstorebutton.png"
                  alt="Google Play"
                  width={150}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "10px" }}>Comming soon...</span>
              </a>

              <a href="#" className="flex flex-col items-center">
                <img
                  src="/applebutton.png"
                  alt="App Store"
                  width={150}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "10px" }}>Comming soon...</span>
              </a>
            </div>
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
                <img
                  src="/shewaberlogo.png"
                  alt="shewaber rewards logo"
                  width={120}
                  height={50}
                  style={{
                    width: "100px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-400">
                Shop, Save & Redeem with Shewaber Rewards.
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
                  href="#"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <img
                    src="/playstorebutton.png"
                    alt="Google Play"
                    width={150}
                    height={54}
                    style={{ objectFit: "contain" }}
                  />
                  <span style={{ fontSize: "10px" }}>Coming soon...</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Shewaber Rewards. All rights reserved.
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