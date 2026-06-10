import { industriesServedData } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function Industry() {
  return (
    <section className="w-full bg-[#FEF3E2] py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="md:block hidden">
              <Image
                src="/image/industry.jpg"
                width={700}
                height={700}
                alt="Industries Served"
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>

            <div>
              <h2 className="text-black text-3xl md:text-4xl font-bold mb-5 text-center md:text-left">
                Industries Served
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {industriesServedData.map(({ img, title }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center"
                  >
                    <Image
                      src={img}
                      width={56}
                      height={56}
                      alt={title}
                      className="mb-2"
                    />
                    <p className="font-medium text-sm md:text-base">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
