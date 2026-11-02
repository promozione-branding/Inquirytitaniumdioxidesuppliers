"use client"
import { productDetails } from '@/data'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Image from 'next/image';
import Popup2 from '../Layout/Popup2';

export default function Product() {

    const [open, setOpen]=useState(false)
    return (
        <>        <section id="products" className="w-full bg-[#EDEDF3] py-6 mx-auto md:px-15 px-2">
            <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-5">
                Our <span className="text-yellow-500">Products</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {productDetails?.map(({ image, title, link, desc }, idx) => (
                    <div
                        onClick={()=>{setOpen(true)}}
                        key={idx}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition px-4 py-3 flex flex-col items-center text-center"
                    >
                        <Image
                            src={image}
                            width={300}
                            height={300}
                            alt={title}
                            className="w-full h-full object-contain border border-gray-200 rounded-lg"
                        />

                        <p className="text-sm mt-4 text-gray-700">
                            {title}
                        </p>

                        <p className="font-medium text-sm mt-2 mb-2">
                            {desc}
                        </p>

                        <Dialog>
                            
                                <a  target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}  href="https://wa.me/8527557778" className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    Get Best Price
                                </a>
                            
                            
                        </Dialog>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4">
                <Dialog>
                   
                        <a  href="https://wa.me/8527557778" className="bg-yellow-500 px-5 py-2 rounded-md font-medium hover:bg-yellow-600 text-black transition">
                            Get Free Quote & Sample
                        </a>
                    
                    
                </Dialog>
            </div>
        </section>
         {open && <Popup2 setOpen={setOpen}/>}           
        </>

    )
}
