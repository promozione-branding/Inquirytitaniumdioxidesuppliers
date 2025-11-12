import Image from "next/image";
import React from "react";

const Whatsapp = () => {
  return (
    <>
      <a
        href="https://wa.me/918527557778?text=hey%20i%20want%20your%20service"
        className="fixed bottom-7 right-7 z-20"
      >
        <Image
          src="/image/whatsapp.webp"
          width={100}
          height={100}
          className="h-14 w-14"
          alt="whatsapp"
        />
      </a>
      <a
        href="tel:+918527557778"
        className="fixed bottom-4 left-7 z-20"
      >
        <Image
          src="/image/call.png"
          width={100}
          height={100}
          className="h-21 w-21"
          alt="call"
        />
      </a>
    </>
  );
};

export default Whatsapp;
