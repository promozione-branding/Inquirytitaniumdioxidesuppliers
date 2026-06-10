"use client";
import { Menu, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-20 bg-white border-b-4 border-yellow-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:p-0 px-2 py-2">
        {/* Logo + GST */}
        <div className="flex items-center md:gap-2">
          <Image src="/image/aanaya.webp" width={100} height={60} alt="logo" />
          <p className="md:text-sm text-xs font-medium leading-tight">
            GSTIN- <br /> 07EHWPA7648D1ZZ
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-lg">
          <Link href="/" className="hover:text-yellow-600">Home</Link>
          <Link href="#about" className="hover:text-yellow-600">About Us</Link>
          <Link href="#products" className="hover:text-yellow-600">Products</Link>
          <Link href="#certification" className="hover:text-yellow-600">
            Certification
          </Link>
        </div>

        {/* Desktop WhatsApp */}
        <a
        target="_blank"
         href="https://wa.link/5kb0kl"
          className="hidden md:block w-40"
        >
          <Image
            src="/image/whatsapp-button-2.webp"
            width={400}
            height={120}
            alt="whatsapp-call"
          />
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          <a
              target="_blank"

            href="https://wa.link/5kb0kl"
            className="w-25"
          >
            <Image
              src="/image/whatsapp-button-2.webp"
              width={100}
              height={100}
              alt="whatsapp"
              className="h-10"
            />
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button className="bg-gray-200 p-2 rounded-md">
                <Menu />
              </button>
            </SheetTrigger>

            <SheetContent side="top">
              <div className="flex flex-col items-center space-y-4 py-6 text-lg">
                <Link href="/" className="hover:text-yellow-600">Home</Link>
                <Link href="#about" className="hover:text-yellow-600">About Us</Link>
                <Link href="#products" className="hover:text-yellow-600">Products</Link>
                <Link href="#certification" className="hover:text-yellow-600">
                  Certification
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
