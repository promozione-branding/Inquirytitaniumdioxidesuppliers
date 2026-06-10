import Image from 'next/image'
import React from 'react'
import Form from '../Layout/Form'

export default function FormSection() {
  return (
      <section className="py-6 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Image */}
            <div className="md:w-1/2 justify-center md:justify-start md:flex hidden">
              <Image
                src="/image/get-in-touch-1.webp"
                width={700}
                height={700}
                alt="Get in touch"
                className="w-full max-w-md rounded-2xl shadow-lg object-contain"
              />
            </div>

            {/* Right Form */}
            <div className="md:w-1/2 w-full bg-white rounded-2xl shadow-lg p-0 md:p-8">

              <Form />
            </div>

          </div>
        </div>
      </section>
  )
}
