"use client";
import React from "react";
import Form from "../Layout/Form";
import Image from "next/image";
import {
  faq,
  industriesServedData,
  productDetails,
  testimonial,
  whyChooseUs,
  whyChooseUs2,
} from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import PopForm from "../Layout/PopForm";

const Hero = () => {
  return (
    <div className="py-5">
      <h1 className="text-4xl text-center font-bold font-OsWald px-4 ">
        India's Leading Titanium Dioxide Supplier
      </h1>
      <p className="font-Outfit text-md mt-5 text-center px-4 ">
        Aanya Enterprises is India’s leading Supplier, Importer and Trader of
        high-quality Titanium Dioxide. Trusted by industries for reliable
        performance, purity, and global Supply strength
      </p>

      <Form />

      {/* counter  */}
      <div className="bg-[#997A1B] text-white grid grid-cols-2 gap-4 px-5 py-5">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">8+</p>
          <p className="font-medium text-center">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">2+</p>
          <p className="font-medium text-center">Warehouses</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">100+</p>
          <p className="font-medium text-center">Employees</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">400+</p>
          <p className="font-medium text-center">Active Customers</p>
        </div>
      </div>

      {/* our products  */}

      <div id="products" className="bg-[#EDEDF3] flex items-center flex-col ">
        <p className="text-black text-4xl font-bold text-center py-5">
          Our <span className="text-yellow-500">Products</span>
        </p>

        <div className="grid grid-cols-2 gap-5 items-center px-4 ">
          {productDetails?.map(({ image, title, link, desc }, idx) => (
            <div
              key={idx}
              className="mb-5 flex items-center justify-center flex-col px-7"
            >
              <Image
                className="w-32 h-32 border-2 border-black rounded-lg"
                src={image}
                width={500}
                height={500}
                alt="product"
              />
              <p className="text-[13px] mt-3 text-gray-500 ">{title}</p>
              <p className="font-medium my-2 text-sm mb-5">{desc}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-[#FFCC2E] px-4 py-2 rounded-sm font-medium ">
                    Read more
                  </button>
                </DialogTrigger>
                <DialogContent className={"m-0 p-0 bg-transparent border-none"}>
                  <PopForm />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[#FFCC2E] border px-5 py-3 rounded-sm border-black font-medium my-8 ">
              View More Products
            </button>
          </DialogTrigger>
          <DialogContent className={"m-0 p-0 bg-transparent border-none"}>
            <PopForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* welcome   */}

      <div className="px-3 py-6 bg-[#FEF3E2]">
        <Image
          src="/image/Untitled-design-2025-05-07T124930.965.png"
          width={1000}
          height={1000}
          alt="image of building"
        />
        <div className="mt-5 px-5 ">
          <p className=" text-lg font-lg font-bold text-yellow-400">
            Welcome to Aanya Enterprise
          </p>
          <p className="font-extrabold text-2xl my-3">
            India’s Leading Titanium Dioxide Supplier
          </p>
          <p className="text-sm font-medium">
            At Aanya Enterprises, we are proud to be recognised as one of
            India’s most trusted tio2 suppliers and importers of premium-grade
            chemical compounds, with a special focus on Titanium Dioxide (TiO₂),
            Titanium Dioxide Rutile, Lithopone, Optical Brighter, Caustic Soda,
            and Carbon. Our high-performance products drive innovation across
            industries from coatings and plastics to paper and industrial
            catalysts. Operating with a future-ready mindset, we continue to
            expand our global reach and invest in quality, sustainability, and
            reliability. Whether you’re a local manufacturer or an international
            enterprise, Aanya Enterprise delivers products that meet the highest
            performance and compliance standards.
          </p>

          <p className="my-3 font-bold text-xl text-zinc-800">
            Our Core Strengths
          </p>

          <ul className="list-disc">
            <li>
              Leading supplier of{" "}
              <span className="font-bold">Titanium Dioxide</span> in India
            </li>
            <li>
              Reliable importer of specialty pigments and industrial chemicals
            </li>
            <li>Strong global partnerships and logistics network</li>
            <li>Quality assurance and on-time delivery</li>
          </ul>

          <Dialog>
            <DialogTrigger asChild>
              <button className="text-2xl font-medium bg-[#FFCC2E] border-black border px-6 my-5 rounded-tl-3xl rounded-br-3xl py-2">
                Learn More
              </button>
            </DialogTrigger>
            <DialogContent className={"m-0 p-0 bg-transparent border-none"}>
              <PopForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* our cirtification  */}
      <div
        id="certification"
        className="py-8 px-3"
        style={{
          backgroundImage: "url('/image/backgrounds.jpg')",
          objectFit: "cover",
        }}
      >
        <p className="text-white text-4xl font-bold text-center mb-5">
          Our <span className="text-yellow-500">Certificates</span>
        </p>

        <Image
          src={"/image/certificate-1024x1020.webp"}
          width={1000}
          height={1000}
          alt="cirtification"
        />
        <Image
          src={"/image/new-cetificate-1-823x1024.webp"}
          width={1000}
          height={1000}
          alt="cirtification"
          className="my-5"
        />
        <Image
          src={"/image/certificate-3-new-882x1024.webp"}
          width={1000}
          height={1000}
          alt="cirtification"
          className="my-5"
        />
      </div>

      {/* unlock next -level purity & UV Protext  */}
      <div
        className="mb-10 py-5"
        style={{
          backgroundImage: "url('/image/get-in-touch-d.webp')",
          objectFit: "cover",
        }}
      >
        <p className="text-white text-4xl font-bold text-center py-5">
          Unlock Next-Level{" "}
          <span className="text-yellow-500">Purity & UV Protection</span>
        </p>

        <div>
          {/* first para  */}
          <div className="bg-gradient-to-t from-white to-white/70 via-50% mx-4 py-5 px-5 rounded-2xl mb-5 ">
            <p className="text-center font-bold text-xl mb-4">
              Elevating Titanium Dioxide: Our Purity & Performance Promise
            </p>
            <p className="border-b-2">
              <span className="font-bold ">
                Unmatched Purity, Guaranteed Performance
              </span>{" "}
              from Your Trusted Titanium Dioxide Importer and Titanium Dioxide
              Manufacturer We guarantee our Titanium Dioxide boasts exceptional
              purity, ranging from{" "}
              <span className="font-bold">99.0% to 100.5% TiO$_2$</span> on a
              dried basis. This ensures consistent, high-quality results for
              your applications. As leading titanium dioxide suppliers in India
              titanium dioxide traders in India, we uphold the highest
              standards.
            </p>
          </div>

          {/* second para  */}
          <div className="bg-gradient-to-t from-white to-white/70 via-50% mx-4 py-5 px-5 rounded-2xl mb-5 ">
            <p className="text-center font-bold text-xl mb-4">
              Attenuation Grade: Advanced UV Protection with Rutile Titanium
              Dioxide Pigment and TiO2 Rutile Powder
            </p>
            <p>
              When it comes to UV attenuation, our specialized grade of rutile
              titanium dioxide, including ti pure rutile titanium dioxide and
              titanium iv oxide rutile, delivers. With 99.0% to 100.5% TiO$_2$
              on an ignited basis, it's engineered for superior light blocking.
            </p>
            <p className="border-b-2">
              <span className="font-bold">Transparent Labeling:</span> If UV
              attenuation is your goal and additives are used, we clearly label
              the name and amount of each to ensure full transparency.
            </p>
          </div>

          {/* third para  */}
          <div className="bg-gradient-to-t from-white to-white/70 via-50% mx-4 py-5 px-5 rounded-2xl mb-5 ">
            <p className="text-center font-bold text-xl mb-4">
              Rigorous Quality Assurance from Your Reliable Titanium Dioxide
              Wholesaler
            </p>
            <p className="border-b-2">
              Every batch of our Titanium Dioxide undergoes stringent testing to
              meet the highest standards. As a prominent titanium dioxide trader
              in India, we ensure:
            </p>
            <p>
              <span className="font-bold">Loss on Drying:</span> Minimal
              moisture content, losing no more than 0.5% of its weight when
              dried at 105°C for 3 hours.
            </p>
            <p>
              <span className="font-bold">Standard Grade: </span> Ignited at
              800°C ± 25°C, it loses no more than 0.5% of its weight, proving
              its inherent stability.
            </p>
            <p className="border-b">
              <span className="font-bold"> Attenuation Grade:</span> For our
              specialized UV-attenuation material, a 4g sample ignited at 800°C
              ± 25°C loses no more than 13% of its weight, accounting for
              beneficial coatings and treatments.
            </p>
          </div>

          {/* fourth para  */}
          <div className="bg-gradient-to-t from-white to-white/70 via-50% mx-4 py-5 px-5 rounded-2xl mb-5">
            <p className="text-center font-bold text-xl mb-4">
              A Non-Negotiable Limit for Unquestionable Safety
            </p>
            <p>
              <span className="font-bold">
                Analytical Precision for Ultra-Trace Detection:
              </span>{" "}
              Detecting Arsenic at such low levels demands highly sensitive and
              specialized analytical techniques. We primarily utilize Hydride
              Generation Atomic Absorption Spectrometry (HGAAS) or Inductively
              Coupled Plasma-Mass Spectrometry (ICP-MS).
            </p>
            <p>
              <span className="font-bold">HGAAS:</span> This method involves
              converting arsenic compounds into a volatile hydride gas, which is
              then swept into an atomization cell for absorption measurement. It
              offers excellent sensitivity for arsenic detection.
            </p>
            <p>
              <span className="font-bold">ICP-MS</span> This powerful technique
              can detect elements, including arsenic, down to parts per trillion
              levels, offering superior sensitivity and multi-elemental analysis
              capabilities.
            </p>

            <p className="border-b">
              <span className="font-bold"> Attenuation Grade:</span> For our
              specialized UV-attenuation material, a 4g sample ignited at 800°C
              ± 25°C loses no more than 13% of its weight, accounting for
              beneficial coatings and treatments.
            </p>
          </div>
        </div>
      </div>

      {/* our Categories  */}

      <div className="mb-10">
        <p className="text-black text-4xl font-bold text-center py-5">
          Our <span className="text-yellow-500">Categories</span>
        </p>

        <div className="grid grid-cols-2 px-5 gap-5">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/image/kronos.webp"}
              width={500}
              height={500}
              alt="image"
              className="border-black border-2"
            />
            <a
              href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide/"
              className="underline text-lg font-bold mt-4 text-center"
            >
              Titanium Dioxide
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/image/lithopone.webp"}
              width={500}
              height={500}
              alt="image"
              className="border-black border-2"
            />
            <a
              href="https://titaniumdioxidesuppliers.com/product-category/lithopone/"
              className="underline text-lg font-bold mt-4 text-center"
            >
              Lithopone
            </a>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/image/rutile-titanium.webp"}
              width={500}
              height={500}
              alt="image"
              className="border-black border-2"
            />
            <a
              href="https://titaniumdioxidesuppliers.com/product-category/titanium-dioxide-rutile/"
              className="underline text-lg font-bold mt-4 text-center"
            >
              Titanium Dioxide Rutile
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={"/image/castic-soda-1024x1024.webp"}
              width={500}
              height={500}
              alt="image"
              className="border-black border-2"
            />
            <a
              href="https://titaniumdioxidesuppliers.com/product-category/caustic-soda/"
              className="underline text-lg font-bold mt-4 text-center"
            >
              Caustic Soda
            </a>
          </div>
        </div>
      </div>

      {/* industrial served  */}
      <div className="">
        <Image
          src={"/image/industry.jpg"}
          width={500}
          height={500}
          alt="industry image"
          className="h-auto w-full"
        />

        <div className="bg-[#FEF3E2]">
          <p className="text-black text-4xl font-bold text-center py-5">
            Industries Served
          </p>

          <div className="px-5 py-5 grid grid-cols-2 gap-8">
            {industriesServedData.map(({ img, title }, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center flex-col"
              >
                <Image
                  src={img}
                  width={400}
                  height={400}
                  alt={title}
                  className="h-14 w-14"
                />
                <p className="font-medium text-center">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connect  */}
      <div id="about" className="bg-black text-white py-8 px-4 text-center">
        <a
          href="https://titaniumdioxidesuppliers.com/titanium-dioxide-supplier-in-india/"
          className="font-bold underline text-lg"
        >
          Largest Titanium Dioxide Supplier in India
        </a>

        <p className="text-yellow-500 font-bold text-3xl my-1">
          +91-8527557778
        </p>
        <p className="font-bold text-xl my-4">
          For More Details Contact Us Now!
        </p>
        <a
          className="bg-[#FFCC2E] px-5 py-2 text-black font-bold  rounded-tl-2xl rounded-br-2xl"
          href="https://wa.me/918527557778?text=hey%20i%20want%20your%20service"
        >
          Connect Now
        </a>
      </div>

      {/* we deal in   */}
      <div
        style={{
          backgroundImage: "url('/image/background-2.webp')",
        }}
      >
        <p className="text-4xl font-bold text-center py-6">
          We <span className="text-yellow-500">Deals in</span>
        </p>

        <div className="grid grid-cols-3 px-4 space-y-5 ">
          <Image
            src={"/image/logo14.webp"}
            width={200}
            height={200}
            className="h-24 w-24"
            alt="brand-logo"
          />
          <Image
            src={"/image/logo13-1.webp"}
            width={200}
            height={200}
            alt="brand-logo"
            className="h-24 w-24"
          />
          <Image
            src={"/image/logo13.webp"}
            width={200}
            height={200}
            alt="brand-logo"
            className="h-24 w-24"
          />
          <Image
            src={"/image/logo1-3.webp"}
            width={200}
            height={200}
            alt="brand-logo"
            className="h-24 w-24"
          />
          <Image
            src={"/image/logo2.webp"}
            width={200}
            height={200}
            alt="brand-logo"
            className="h-24 w-24"
          />
          <Image
            src={"/image/logo4.webp"}
            width={200}
            height={200}
            alt="brand-logo"
            className="h-24 w-24"
          />
        </div>
      </div>

      {/* why chosse us  */}
      <div className="bg-[#EEEEED] pb-10">
        <p className="text-4xl font-bold text-center py-6 px-3">
          Why Choose <span className="text-yellow-500">Anaya Enterprise</span>
        </p>

        <div className="grid grid-cols-1 space-y-4 gap-5 mt-2">
          {whyChooseUs?.map(({ img, title, para }, idx) => (
            <div className="flex flex-col items-center" key={idx}>
              <Image
                src={img}
                width={300}
                height={300}
                alt={title}
                className="h-14 w-auto"
              />

              <p className="text-lg my-3 font-bold">{title}</p>
              <p className="border text-center">{para}</p>
            </div>
          ))}
        </div>

        <Image
          src={"/image/why-choose-us.webp"}
          width={500}
          height={500}
          alt="why choose us image"
          className="my-5"
        />

        <div className="grid grid-cols-1 space-y-4 gap-5 mt-2">
          {whyChooseUs2?.map(({ img, title, para }, idx) => (
            <div className="flex flex-col items-center" key={idx}>
              <Image
                src={img}
                width={300}
                height={300}
                alt={title}
                className="h-14 w-auto"
              />

              <p className="text-lg my-3 font-bold">{title}</p>
              <p className="border text-center">{para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* big text  */}
      <div className="bg-[#E7E7E7] text-black pt-10 text-4xl font-bold flex flex-col gap-5 px-3 pb-5">
        <p className="text-[#ecb50d]">Titanium Dioxide (TiO₂)</p>
        <p className="">Titanium Dioxide Rutile</p>
        <p className="text-[#ecb50d]">Lithopone</p>
        <p className="">Optical </p>
        <p className="">Brighter </p>
        <p className="">Caustic Soda </p>
      </div>

      {/* testimonials  */}
      <div
        className="py-8"
        style={{ backgroundImage: "url('/image/background-2.webp')" }}
      >
        <p className="text-white text-center text-4xl font-bold">
          Testimonials
        </p>

        <Carousel className="px-2 overflow-hidden">
          <CarouselContent>
            {testimonial.map(({ review, name, designation }, idx) => (
              <CarouselItem
                key={idx}
                className={"flex flex-col items-center justify-center"}
              >
                <div
                  className="border-2 border-yellow-500 px-3 py-5 text-white bg-black/50
                "
                >
                  <p>{review}</p>
                  <p className="text-center font-bold my-2 text-yellow-400">
                    {name}
                  </p>
                  <p className="text-center font-mono">{designation}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* faq  */}
      <div
        className="py-4 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/image/industry.webp')",
          backgroundSize: "cover", // Optional, but recommended for background images
          backgroundPosition: "center", // Optional
        }}
      >
        <Image
          src={"/image/get-in-touch-d.webp"}
          width={400}
          height={400}
          alt={"image"}
          className="p-4 rounded-2xl"
        />

        <p className="text-4xl font-bold text-center py-6">
          Frequently Asked <span className="text-yellow-500">Question</span>
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faq.map(({ ques, ans }, idx) => (
            <AccordionItem value={ques} key={idx}>
              <AccordionTrigger className={"bg-yellow-500 px-5"}>
                {ques}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance px-4">
                <p>{ans}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* last section  */}
      <div className="py-4 ">
        <Image
          src={"/image/get-in-touch-1.webp"}
          width={400}
          height={400}
          alt={"image"}
          className="p-4 rounded-2xl"
        />

        <Form />
      </div>
    </div>
  );
};

export default Hero;
