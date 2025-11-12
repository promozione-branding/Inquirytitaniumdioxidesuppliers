import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      className=" pt-10"
      style={{
        backgroundImage: "url('/image/backgrounds.jpg')",
      }}
    >
      <div>
        <Image
          src="/image/aanaya.webp"
          width={500}
          height={500}
          alt="logo"
          className="h-32 w-auto mx-auto"
        />
        <div className="px-5 text-white mt-2 text-sm">
          At Aanya Enterprises, we are proud to be recognised as one of India’s
          most trusted suppliers and importers of premium-grade chemical
          compounds, with a special focus on{" "}
          <div className="text-yellow-400">
            <a href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide/">
              Titanium Dioxide (TiO₂)
            </a>
            ,{" "}
            <a href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide-rutile/">
              Titanium Dioxide Rutile
            </a>
            ,{" "}
            <a href="https://titaniumdioxidesuppliers.com/product-category/lithopone/">
              Lithopone
            </a>
            ,{" "}
            <a href="https://titaniumdioxidesuppliers.com/product-category/optical-brighter/">
              Optical Brighter
            </a>
            ,{" "}
            <a href="https://titaniumdioxidesuppliers.com/product-category/caustic-soda/">
              Caustic Soda
            </a>
            , and{" "}
            <a href="https://titaniumdioxidesuppliers.com/product-category/carbon/">
              Carbon
            </a>
            .
          </div>
        </div>

        <div className="px-5 py-5 flex flex-col gap-5">
          <div>
            <p className="font-bold text-white text-2xl">Userful Links</p>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/">Home</a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/about-us/">
                  About
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/products/">
                  Product
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/blogs/">Blogs</a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/contact-us/">
                  Contact Us
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/privacy-policy/">
                  Privacy Policy
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/terms-and-conditions/">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white text-2xl">Categories</p>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide/">
                  Titanium Dioxide (TiO₂)
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide-rutile/">
                  Titanium Dioxide Rutile
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/product-category/lithopone/">
                  Lithopone
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/product-category/optical-brighter/">
                  Optical Brighter
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/product-category/caustic-soda/">
                  Caustic Soda
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/product-category/carbon/">
                  Carbon
                </a>
              </li>
              <li className="text-white">
                <a href="https://titaniumdioxidesuppliers.com/product-category/calcium-carbonate/">
                  Calcium Carbonate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white text-2xl">Contact Details</p>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="text-white">
                Plot No 67/2 Kh. No. 154 Village Pooth Khurd New Delhi-110039,
                Delhi, India
              </li>
              <li className="text-white flex flex-col items-left gap-2 ">
                <a href="mailto:sales@aanyaenterprise.com">
                  sales@aanyaenterprise.com
                </a>
                <a href="mailto:info@aanyaenterprise.com">
                  info@aanyaenterprise.com
                </a>
              </li>
              <li className="text-white flex flex-col items-left gap-2">
                <a href="tel:85275%2057778">+91-85275 57778</a>
                <a href="tel:85275%2057778">+91-89201 09583</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-white text-2xl">
              Trustelite Certificate
            </p>
            <Image
              src={"/image/TRUST-ELITE-8.webp"}
              alt="award"
              width={350}
              height={350}
            />
            <p className="text-white">
              We are proud to present the TrustElite Certificate of Excellence
              to Aanya Enterprises , recognizing their commitment to exceptional
              customer service, outstanding business practices, and a dedication
              to building trust with their customers.
            </p>
          </div>
        </div>
        <div className="bg-[#FFCC2E] text-black px-5 py-3">
          <p className="font-bold my-3">Copyright © 2025 Aanya Enterprises. All Right Reserved.</p>
          <p className="font-bold">
            Website Designed By Promozione Branding Pvt. Ltd.{" "}
            <a className="underline" href="http://promozionebranding.com/">
              Website Designing Company
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
