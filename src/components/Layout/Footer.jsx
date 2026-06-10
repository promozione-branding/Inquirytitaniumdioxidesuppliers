import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="pt-12 text-white bg-cover bg-center relative"
      style={{ backgroundImage: "url('/image/backgrounds.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <Image
            src="/image/aanaya.webp"
            width={300}
            height={300}
            alt="logo"
            className="h-28 w-auto mx-auto mb-4"
          />

          <p className="text-sm max-w-4xl mx-auto">
            At Aanya Enterprises, we are proud to be recognised as one of India’s
            most trusted suppliers and importers of premium-grade chemical
            compounds, with a special focus on{" "}
            <span className="text-yellow-400 font-semibold">
              <a href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide/">Titanium Dioxide (TiO₂)</a>,{" "}
              <a href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide-rutile/">Titanium Dioxide Rutile</a>,{" "}
              <a href="https://titaniumdioxidesuppliers.com/product-category/lithopone/">Lithopone</a>,{" "}
              <a href="https://titaniumdioxidesuppliers.com/product-category/optical-brighter/">Optical Brighter</a>,{" "}
              <a href="https://titaniumdioxidesuppliers.com/product-category/caustic-soda/">Caustic Soda</a>,{" "}
              <a href="https://titaniumdioxidesuppliers.com/product-category/carbon/">Carbon</a>
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/about-us/" className="hover:text-yellow-400">About</a></li>
              <li><a href="/products/" className="hover:text-yellow-400">Products</a></li>
              <li><a href="/blogs/" className="hover:text-yellow-400">Blogs</a></li>
              <li><a href="/contact-us/" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="/privacy-policy/" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions/" className="hover:text-yellow-400">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/product-category/titanium-dioxide/" className="hover:text-yellow-400">Titanium Dioxide</a></li>
              <li><a href="/product-category/titanium-dioxide-rutile/" className="hover:text-yellow-400">TiO₂ Rutile</a></li>
              <li><a href="/product-category/lithopone/" className="hover:text-yellow-400">Lithopone</a></li>
              <li><a href="/product-category/optical-brighter/" className="hover:text-yellow-400">Optical Brighter</a></li>
              <li><a href="/product-category/caustic-soda/" className="hover:text-yellow-400">Caustic Soda</a></li>
              <li><a href="/product-category/carbon/" className="hover:text-yellow-400">Carbon</a></li>
              <li><a href="/product-category/calcium-carbonate/" className="hover:text-yellow-400">Calcium Carbonate</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Details</h4>
            <p className="text-sm mb-3">
              Plot No 67/2, Kh. No. 154, Village Pooth Khurd,
              New Delhi – 110039, India
            </p>
            <p className="text-sm space-y-1">
              <a href="mailto:sales@aanyaenterprise.com" className="block hover:text-yellow-400">
                sales@aanyaenterprise.com
              </a>
              <a href="mailto:info@aanyaenterprise.com" className="block hover:text-yellow-400">
                info@aanyaenterprise.com
              </a>
              <a href="tel:+918527557778" className="block hover:text-yellow-400">
                +91-85275 57778
              </a>
              <a href="tel:+918920109583" className="block hover:text-yellow-400">
                +91-89201 09583
              </a>
            </p>
          </div>

          {/* Certificate */}
          <div>
            <h4 className="text-xl font-bold mb-4">TrustElite Certificate</h4>
            <Image
              src="/image/TRUST-ELITE-8.webp"
              alt="TrustElite Certificate"
              width={100}
              height={100}
              className="mb-3"
            />
            <p className="text-sm">
              Recognizing Aanya Enterprises for exceptional customer service,
              ethical business practices, and commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFCC2E] text-black text-center py-4 px-4 flex justify-around flex-wrap relative">
        <p className="font-bold text-sm">
          © 2025 Aanya Enterprises. All Rights Reserved.
        </p>
        <p className="font-bold text-sm">
          Website Designed by{" "}
          <a
            href="http://promozionebranding.com/"
            className="underline"
            target="_blank"
          >
            Promozione Branding Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
