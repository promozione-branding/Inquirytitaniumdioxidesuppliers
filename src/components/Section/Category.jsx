import Image from 'next/image'
import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Form from '../Layout/Form';

export default function Category() {
    return (
        <section className="mb-6">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-5">
                    Our <span className="text-yellow-500">Categories</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {/* Category 1 */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/image/kronos.webp"
                            width={400}
                            height={400}
                            alt="Titanium Dioxide"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    Titanium Dioxide
                                </button>
                            </DialogTrigger>
                            <DialogContent className="m-0 p-0 bg-white border-none rounded-md">
                                <Form />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Category 2 */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/image/lithopone.webp"
                            width={400}
                            height={400}
                            alt="Lithopone"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    Lithopone
                                </button>
                            </DialogTrigger>
                            <DialogContent className="m-0 p-0 bg-white border-none rounded-md">
                                <Form />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Category 3 */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/image/rutile-titanium.webp"
                            width={400}
                            height={400}
                            alt="Titanium Dioxide Rutile"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    T Dio. Rutile
                                </button>
                            </DialogTrigger>
                            <DialogContent className="m-0 p-0 bg-white border-none rounded-md">
                                <Form />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Category 4 */}
                    <div className="flex flex-col items-center">
                        <Image
                            src="/image/castic-soda-1024x1024.webp"
                            width={400}
                            height={400}
                            alt="Caustic Soda"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    Caustic Soda
                                </button>
                            </DialogTrigger>
                            <DialogContent className="m-0 p-0 bg-white border-none rounded-md">
                                <Form />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
    )
}
