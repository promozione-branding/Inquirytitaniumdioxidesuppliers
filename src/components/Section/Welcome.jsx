import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Image from 'next/image';
import PopForm from '../Layout/PopForm';

export default function Welcome() {
    return (
        <section className="w-full bg-[#FEF3E2] py-6">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Image */}
                    <div className="flex justify-center">
                        <Image
                            src="/image/Untitled-design-2025-05-07T124930.965.png"
                            width={700}
                            height={700}
                            alt="Aanya Enterprise Building"
                            className="rounded-xl shadow-md object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div>

                        <p className="text-sm font-bold text-yellow-500 uppercase tracking-wide">
                            Welcome to Aanya Enterprise
                        </p>

                        <h2 className="font-extrabold text-2xl md:text-3xl mt-2 mb-4">
                            India’s Leading Titanium Dioxide Supplier
                        </h2>

                        <p className="text-sm md:text-base font-medium text-gray-800 leading-relaxed">
                            At Aanya Enterprises, we are proud to be recognised as one of India’s
                            most trusted TiO₂ suppliers and importers of premium-grade chemical
                            compounds, with a special focus on Titanium Dioxide (TiO₂), Titanium
                            Dioxide Rutile, Lithopone, Optical Brighter, Caustic Soda, and Carbon.
                            Our high-performance products drive innovation across industries from
                            coatings and plastics to paper and industrial catalysts.
                        </p>

                        <p className="text-sm md:text-base font-medium text-gray-800 leading-relaxed mt-3 md:block hidden">
                            Operating with a future-ready mindset, we continue to expand our
                            global reach and invest in quality, sustainability, and reliability.
                            Whether you’re a local manufacturer or an international enterprise,
                            Aanya Enterprise delivers products that meet the highest performance
                            and compliance standards.
                        </p>

                        <h3 className="my-4 font-bold text-lg text-zinc-800">
                            Our Core Strengths
                        </h3>

                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
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

                        {/* CTA */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="mt-6 text-lg font-medium bg-[#FFCC2E] px-5 py-2 rounded-md hover:bg-yellow-400 text-black transition">
                                    Check Ready Stock & Rates
                                </button>
                            </DialogTrigger>
                            <DialogContent className="m-0 p-0 bg-transparent border-none">
                                <PopForm />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
    )
}
