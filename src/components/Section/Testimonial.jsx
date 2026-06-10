import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { testimonial } from '@/data';

export default function Testimonial() {
    return (<>
        <section className="py-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/image/background-2.webp')" }}
        >
            {/* Overlay for readability */}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-10 z-10 relative">
                    Testimonials
                </h2>

                {/* Carousel */}
                <Carousel className="relative z-10">
                    <CarouselContent className="px-2 overflow-visible md:overflow-hidden ">
                        {testimonial.map(({ review, name, designation }, idx) => (
                            <CarouselItem
                                key={idx}
                                className="flex justify-center items-center px-4 md:px-6 basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <div
                                    className="border-2 border-yellow-500 bg-black/60 backdrop-blur-sm px-6 py-8 rounded-xl max-w-md text-center text-white shadow-lg"
                                >
                                    <p className="text-sm md:text-base mb-4">{review}</p>
                                    <p className="font-bold text-yellow-400 text-lg md:text-xl">{name}</p>
                                    <p className="text-gray-300 text-sm">{designation}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Arrows */}
                    <div className="md:flex justify-between items-center mt-6 px-4 hidden">
                    </div>
                </Carousel>
            </div>
        </section>

        {/* our certification  */}
        <section
            id="certification"
            className="py-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/image/backgrounds.jpg')" }}
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-5">
                    Our <span className="text-yellow-500">Certificates</span>
                </h2>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
                    <Image
                        src="/image/certificate-1024x1020.webp"
                        width={600}
                        height={600}
                        alt="Certificate 1"
                        className="rounded-lg shadow-lg mx-auto"
                    />

                    <Image
                        src="/image/new-cetificate-1-823x1024.webp"
                        width={600}
                        height={600}
                        alt="Certificate 2"
                        className="rounded-lg shadow-lg mx-auto"
                    />

                    <Image
                        src="/image/certificate-3-new-882x1024.webp"
                        width={600}
                        height={600}
                        alt="Certificate 3"
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </div>

            </div>
        </section>
    </>
    )
}
