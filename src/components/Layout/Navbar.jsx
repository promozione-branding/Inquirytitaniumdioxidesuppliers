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
    <div className=" w-full z-20 sticky top-0 bg-white flex justify-around items-center border-b-4 border-yellow-400 py-3 px-2">
      <div className="flex flex-col items-left ">
        <Image src={"/image/aanaya.webp"} width={70} height={70} alt="logo" />
        <p className="text-[13px] text-left font-medium">GSTIN- <br/> 07EHWPA7648D1ZZ</p>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <span className="bg-gray-200 p-1">
            <Menu />
          </span>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader className={"hidden"}>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center space-y-3 py-5">
            <Link
              href="/"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              About Us
            </Link>
            <Link
              href="#products"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              Products
            </Link>
            <Link
              href="#certification"
              className="hover:bg-yellow-600 w-full flex items-center justify-center "
            >
              certification
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <a
        href="https://wa.me/918527557778?text=hey%20i%20want%20your%20service"
        className="w-1/3 h-auto"
      >
        <Image
          src={"/image/whatsapp-button-2.webp"}
          width={400}
          height={400}
          alt="whatsapp-call"
        />
      </a>
    </div>
  );
};

export default Navbar;
