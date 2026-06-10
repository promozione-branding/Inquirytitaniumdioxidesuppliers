import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function UnlockSection() {
    return (
        <section className="mb-6 py-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/image/get-in-touch-d.webp')" }}
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-5">
                    Unlock Next-Level{" "}
                    <span className="text-yellow-500">Purity & UV Protection</span>
                </h2>

                <Carousel className="relative z-10 w-full">
                    <CarouselContent className="px-2 -ml-4 overflow-visible md:overflow-hidden">

                        {/* Card 1 */}
                        <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                            <div className="bg-gradient-to-t from-white to-white/70 rounded-2xl p-6">
                                <p className="text-center font-bold text-lg mb-4">
                                    Elevating Titanium Dioxide: Our Purity & Performance Promise
                                </p>
                                <p className="border-b pb-3 text-sm leading-relaxed">
                                    <span className="font-bold">
                                        Unmatched Purity, Guaranteed Performance
                                    </span>{" "}
                                    from your trusted Titanium Dioxide importer and manufacturer. We
                                    guarantee exceptional purity ranging from{" "}
                                    <span className="font-bold">99.0% to 100.5% TiO₂</span> on a dried
                                    basis, ensuring consistent high-quality results.
                                </p>
                            </div>
                        </CarouselItem>

                        {/* Card 2 */}
                        <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                            <div className="bg-gradient-to-t from-white to-white/70 rounded-2xl p-6">
                                <p className="text-center font-bold text-lg mb-4">
                                    Advanced UV Protection with Rutile Titanium Dioxide
                                </p>
                                <p className="text-sm leading-relaxed mb-3">
                                    Our specialized rutile titanium dioxide delivers superior UV
                                    attenuation with 99.0% to 100.5% TiO₂ on an ignited basis,
                                    engineered for exceptional light blocking.
                                </p>
                                <p className="border-b pb-3 text-sm">
                                    <span className="font-bold">Transparent Labeling:</span> All additives
                                    are clearly disclosed for complete transparency.
                                </p>
                            </div>
                        </CarouselItem>

                        {/* Card 3 */}
                        <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                            <div className="bg-gradient-to-t from-white to-white/70 rounded-2xl p-6">
                                <p className="text-center font-bold text-lg mb-4">
                                    Rigorous Quality Assurance
                                </p>
                                <p className="border-b pb-3 text-sm leading-relaxed mb-3">
                                    Every batch undergoes stringent testing to meet the highest industry
                                    standards.
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold">Loss on Drying:</span> ≤ 0.5% at 105°C
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold">Standard Grade:</span> ≤ 0.5% loss at
                                    800°C
                                </p>
                                <p className="text-sm border-b pb-3">
                                    <span className="font-bold">Attenuation Grade:</span> ≤ 13% loss with
                                    coatings
                                </p>
                            </div>
                        </CarouselItem>

                        {/* Card 4 */}
                        <CarouselItem className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                            <div className="bg-gradient-to-t from-white to-white/70 rounded-2xl p-6">
                                <p className="text-center font-bold text-lg mb-4">
                                    Non-Negotiable Safety Standards
                                </p>
                                <p className="text-sm leading-relaxed mb-3">
                                    <span className="font-bold">
                                        Ultra-Trace Arsenic Detection
                                    </span>{" "}
                                    using advanced analytical techniques for unquestionable safety.
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold">HGAAS:</span> High-sensitivity arsenic
                                    detection
                                </p>
                                <p className="text-sm">
                                    <span className="font-bold">ICP-MS:</span> Parts-per-trillion detection
                                    with multi-element analysis
                                </p>
                            </div>
                        </CarouselItem>

                    </CarouselContent>

                    {/* Navigation Arrows */}
                    <div className="md:flex justify-between items-center mt-6 px-4 hidden">
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
