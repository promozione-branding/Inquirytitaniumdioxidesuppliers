"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Form from '../Layout/Form';
import Popup2 from '../Layout/Popup2';


export default function Category() {
     const [open, setOpen]=useState(false)

    return (
        <>
        <section className="mb-6">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-5">
                    Our <span className="text-yellow-500">Categories</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {/* Category 1 */}
                    <div onClick={()=>setOpen(true)} className="flex flex-col items-center">
                        <Image
                            src="/image/kronos.webp"
                            width={400}
                            height={400}
                            alt="Titanium Dioxide"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <a  target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }} href="https://wa.link/5kb0kl" className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    Titanium Dioxide
                                </a>
                            </DialogTrigger>
                             
                        </Dialog>
                    </div>

                    {/* Category 2 */}
                    <div onClick={()=>setOpen(true)} className="flex flex-col items-center">
                        <Image
                            src="/image/lithopone.webp"
                            width={400}
                            height={400}
                            alt="Lithopone"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <a  target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }} href="https://wa.link/5kb0kl" className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    Lithopone
                                </a>
                            </DialogTrigger>
                             
                        </Dialog>
                    </div>

                    {/* Category 3 */}
                    <div onClick={()=>setOpen(true)} className="flex flex-col items-center">
                        <Image
                            src="/image/rutile-titanium.webp"
                            width={400}
                            height={400}
                            alt="Titanium Dioxide Rutile"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <a  target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }} href="https://wa.link/5kb0kl" className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    T Dio. Rutile
                                </a>
                            </DialogTrigger>
                             
                        </Dialog>
                    </div>

                    {/* Category 4 */}
                    <div onClick={()=>setOpen(true)} className="flex flex-col items-center">
                        <Image
                            src="/image/castic-soda-1024x1024.webp"
                            width={400}
                            height={400}
                            alt="Caustic Soda"
                            className="border-2 border-black rounded-md mb-2"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <a  target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }} href="https://wa.link/5kb0kl" className="bg-[#FFCC2E] px-5 py-2 rounded-md font-medium hover:bg-yellow-400 transition">
                                    Caustic Soda
                                </a>
                            </DialogTrigger>
                             
                        </Dialog>
                    </div>
                </div>
            </div>
        </section>
                 {open && <Popup2 setOpen={setOpen}/>}           

        </>
    )
}
