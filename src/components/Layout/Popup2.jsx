"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Popup2({setOpen}) {
//   const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 

    

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("Sending...");

    try {
      const formData = {
        platform: "Titanium Dioxide Supplier Landing page",
         supplierToken: "6a19599b79a7cd6dff26a4c5",
        platformEmail: "sales@aanyaenterprise.com",
        name,
        phone,
        email,
        message,
        place: "NA",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Message sent successfully!");

        const whatsappText = `Hi, I am ${name}.

Email: ${email}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
          whatsappText
        )}`;

        setName("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setOpen(false);
          window.open(waUrl, "_blank");
        }, 1000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-[#FFCC2E] hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
      >
        Request Price List
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 bg-white w-8 h-8 rounded-full text-black font-bold"
            >
              ×
            </button>

            <form
              onSubmit={handleSubmit}
              className="bg-[#4c608b] px-6 py-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
                Get Factory-Direct Price List!
              </h2>

              <p className="text-center text-white/80 mb-5">
                Fill the form and get instant quotation.
              </p>

              <input
                type="text"
                placeholder="Name"
                value={name}
                required
                disabled={loading}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border rounded-lg px-4 py-3 mb-3 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border rounded-lg px-4 py-3 mb-3 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                required
                disabled={loading}
                maxLength={10}
                pattern="[0-9]{10}"
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
                className="w-full bg-white border rounded-lg px-4 py-3 mb-3 focus:outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                value={message}
                required
                disabled={loading}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border rounded-lg px-4 py-3 mb-4 focus:outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFCC2E] hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg"
              >
                {loading ? "Sending..." : "Request Price List"}
              </button>

              {status && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center font-medium ${
                    status.startsWith("✅")
                      ? "bg-green-100 text-green-700"
                      : status.startsWith("❌")
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}