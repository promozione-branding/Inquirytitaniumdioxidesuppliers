import React from "react";
import Form from "../Layout/Form";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Product from "./Product";
import Welcome from "./Welcome";
import Category from "./Category";
import Industry from "./Industry";
import WhyUs from "./WhyUs";
import { ShieldCheck, PackageCheck, MessageCircleReply } from "lucide-react";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="">
  <section
  className="relative w-full hidden md:block min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/sdc.webp')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/30" />

  <div className="relative h-screen px-4 md:px-10">

    {/* FORM → RIGHT SIDE */}
    <div className="absolute right-6 top-1/2 pb-30 -translate-y-1/2 hidden md:block">
      <div className="w-[420px] max-w-[90vw] rounded-xl bg-white/90 backdrop-blur-md shadow-xl">
        <Form />
      </div>
    </div>

    {/* BUTTON → RIGHT BOTTOM */}
    <div className="absolute bottom-5 left-22 hidden md:block">
      <Dialog>
        
          <a href="https://wa.me/918527557778?text=Hello,%20I%E2%80%99m%20interested%20in%20Titanium%20Dioxide,%20please%20share%20price,%20MOQ,%20and%20delivery%20details." className="bg-[#FFCC2E] px-10 py-3 rounded-md text-lg font-semibold hover:bg-yellow-400 transition">
            Connect with Expert Now

            </a>
      

        <DialogContent className="p-0 bg-white border-none rounded-md">
          <Form />
        </DialogContent>
      </Dialog>
    </div>
  </div>
</section>

 <section
  className="relative w-full md:hidden  min-h-[41vh] bg-contain bg-no-repeat bg-center"
  style={{ backgroundImage: "url('/titanium dioxide banner.webp')" }}
>
  
</section>


{/* MOBILE FORM */}
<div className="md:hidden px-4 py-1">
  <div className="rounded-xl bg-white shadow-lg">
    <Form />
  </div>
</div>

      {/* counter  */}
      <section className="w-full bg-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl md:text-4xl font-bold">8+</p>
              <p className="text-sm md:text-base font-medium mt-1">
                Years of Experience
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-4xl font-bold">2+</p>
              <p className="text-sm md:text-base font-medium mt-1">
                Warehouses
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-4xl font-bold">100+</p>
              <p className="text-sm md:text-base font-medium mt-1">
                Employees
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-4xl font-bold">400+</p>
              <p className="text-sm md:text-base font-medium mt-1">
                Active Customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our products  */}
      <Product />

      {/* welcome */}
      <Welcome />

      {/* our Categories  */}
      <Category />

      {/* industrial served  */}
      <Industry />

      {/* Connect  */}
      <section
        id="about"
        className="w-full bg-black text-white py-8"
      >
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

            {/* Left Text Content */}
            <div>
              <a
                href="https://titaniumdioxidesuppliers.com/titanium-dioxide-supplier-in-india/"
                className="font-bold underline text-lg"
              >
                Largest Titanium Dioxide Supplier in India
              </a>

              <p className="text-yellow-500 font-bold text-3xl my-1">
                +91-8527557778
              </p>

              <p className="font-bold text-xl mt-2">
                For More Details Contact Us Now!
              </p>
            </div>

            {/* Right Button */}
            <a
              href="https://wa.me/918527557778?text=hey%20i%20want%20your%20service"
              className="bg-[#FFCC2E] px-6 py-3 text-black font-bold rounded-tl-2xl rounded-br-2xl hover:bg-yellow-400 transition"
            >
              Connect Now
            </a>

          </div>

        </div>
      </section>

      {/* why chosse us  */}
      <WhyUs />

      {/* big text  */}
      <div className="bg-[#E7E7E7] text-black pt-10 pb-5 px-3 md:block hidden">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center text-center gap-5 text-xl md:text-3xl font-bold">
          <p className="text-[#ecb50d]">Titanium Dioxide (TiO₂)</p>
          <p>Titanium Dioxide Rutile</p>
          <p className="text-[#ecb50d]">Lithopone</p>
          <p>Optical</p>
          <p className="text-[#ecb50d]">Brighter</p>
          <p>Caustic Soda</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
