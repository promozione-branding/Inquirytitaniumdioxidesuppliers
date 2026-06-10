import { whyChooseUs, whyChooseUs2 } from '@/data'
import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function WhyUs() {
    return (<>
        <section className="relative py-6">
            {/* Blurred Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
                style={{ backgroundImage: "url('/image/background-2.webp')" }}
            ></div>

            {/* Overlay to dim slightly */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative max-w-7xl mx-auto px-4 text-center z-10">

                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
                    We <span className="text-yellow-500">Deals in</span>
                </h2>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-5 items-center justify-items-center">

                    <Image
                        src="/image/logo14.webp"
                        width={200}
                        height={200}
                        className="h-24 w-24 object-contain"
                        alt="brand-logo"
                    />
                    <Image
                        src="/image/logo13-1.webp"
                        width={200}
                        height={200}
                        className="h-24 w-24 object-contain"
                        alt="brand-logo"
                    />
                    <Image
                        src="/image/logo13.webp"
                        width={200}
                        height={200}
                        className="h-24 w-24 object-contain"
                        alt="brand-logo"
                    />
                    <Image
                        src="/image/logo1-3.webp"
                        width={200}
                        height={200}
                        className="h-24 w-24 object-contain"
                        alt="brand-logo"
                    />
                    <Image
                        src="/image/logo2.webp"
                        width={200}
                        height={200}
                        className="h-24 w-24 object-contain"
                        alt="brand-logo"
                    />
                    <Image
                        src="/image/logo4.webp"
                        width={200}
                        height={200}
                        className="h-24 w-24 object-contain"
                        alt="brand-logo"
                    />

                </div>
            </div>
        </section>

        <section className="bg-white py-6 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-5 px-3">
                Why Choose <span className="text-yellow-500">Anaya Enterprise</span>
            </h2>

            <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                    {whyChooseUs?.concat(whyChooseUs2 || []).map(({ img, title, para }, idx) => (
                        <CarouselItem
                            key={idx}
                            className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                        >
                            <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
                                <Image
                                    src={img}
                                    width={300}
                                    height={300}
                                    alt={title}
                                    className="h-14 w-auto mb-4"
                                />

                                <p className="text-lg font-bold mb-2">{title}</p>

                                <p className="text-sm text-gray-700 border px-4 py-2 rounded w-full">
                                    {para}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation arrows */}
            </Carousel>
        </section>
    </>
    )
}
