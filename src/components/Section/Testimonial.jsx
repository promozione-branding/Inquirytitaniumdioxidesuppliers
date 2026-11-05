
"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { testimonial } from "@/data";

const certificates = [
  {
    src: "/image/certificate-1024x1020.webp",
    alt: "Certificate 1",
  },
  {
    src: "/image/new-cetificate-1-823x1024.webp",
    alt: "Certificate 2",
  },
  {
    src: "/image/certificate-3-new-882x1024.webp",
    alt: "Certificate 3",
  },
];

export default function Testimonial() {
  // Testimonials autoplay
  const testimonialAutoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // Certificates autoplay
  const certificateAutoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <>
      {/* Testimonials Section */}
      <section
        className="py-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/background-2.webp')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4">

          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-10">
            Testimonials
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[testimonialAutoplay.current]}
            className="relative w-full"
          >
            <CarouselContent className="-ml-3">

              {testimonial.map(
                ({ review, name, designation }, idx) => (
                  <CarouselItem
                    key={idx}
                    className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full flex flex-col justify-center border-2 border-yellow-500 bg-black/60 backdrop-blur-sm px-5 md:px-6 py-8 rounded-xl text-center text-white shadow-lg">

                      <p className="text-sm md:text-base mb-5">
                        {review}
                      </p>

                      <p className="font-bold text-yellow-400 text-lg md:text-xl">
                        {name}
                      </p>

                      <p className="text-gray-300 text-sm">
                        {designation}
                      </p>

                    </div>
                  </CarouselItem>
                )
              )}

            </CarouselContent>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">

              <CarouselPrevious className="static translate-y-0 bg-yellow-500 text-black border-yellow-500 hover:bg-yellow-400" />

              <CarouselNext className="static translate-y-0 bg-yellow-500 text-black border-yellow-500 hover:bg-yellow-400" />

            </div>
          </Carousel>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        id="certification"
        className="py-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/backgrounds.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
            Our <span className="text-yellow-500">Certificates</span>
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[certificateAutoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">

              {certificates.map((certificate, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex justify-center items-center p-2">

                    <Image
                      src={certificate.src}
                      width={600}
                      height={600}
                      alt={certificate.alt}
                      className="w-full max-w-[400px] h-[400px] object-contain rounded-lg shadow-lg"
                    />

                  </div>
                </CarouselItem>
              ))}

            </CarouselContent>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">

              <CarouselPrevious className="static translate-y-0 bg-yellow-500 text-black border-yellow-500 hover:bg-yellow-400" />

              <CarouselNext className="static translate-y-0 bg-yellow-500 text-black border-yellow-500 hover:bg-yellow-400" />

            </div>
          </Carousel>

        </div>
      </section>
    </>
  );
}
