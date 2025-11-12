"use client";
import { useState } from "react";

const PopForm = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/inquiry.promozione@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully! Redirecting to WhatsApp...");
        form.reset();

        // Prepare WhatsApp message using payload object keys for clean access
        const whatsappText = `Hi, I am ${payload.name}.\n \nEmail: ${payload.email}\n\nMessage: ${payload.message}\n\nContact: ${payload.contact} \n `;
        const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
          whatsappText
        )}`;

        // Delay WhatsApp redirect by 1 second to show success message
        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);
      } else {
        // Handle HTTP error statuses (4xx, 5xx)
        const errorData = await response
          .json()
          .catch(() => ({ message: "Submission failed." }));
        console.error("Submission failed:", response.status, errorData);
        setStatus("❌ Failed to send. Please check your form or try again.");
      }
    } catch (error) {
      // Handle network errors (e.g., connection lost)
      console.error("FormSubmit Fatal Error:", error);
      setStatus("⚠️ A network error occurred. Please try later.");
    } finally {
      setLoading(false); // End loading regardless of outcome
    }
  };
  return (
    <div className=" px-1 ">
      <form
        onSubmit={handleSubmit}
        className="bg-yellow-600 px-5 py-4 rounded-tl-4xl rounded-br-4xl mt-14"
      >
        <p className="text-3xl font-bold text-white text-center mb-7">
          Get in <span className="text-yellow-400">Touch</span>
        </p>

        <input type="hidden" name="_nosponsor" value="true" />
        <input type="hidden" name="_cc" value="sales@aanyaenterprise.com" />

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          disabled={loading}
          className="bg-white focus:outline-none border border-black px-4 rounded py-2 my-2 w-full"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          disabled={loading}
          className="bg-white focus:outline-none border border-black px-4 rounded py-2 my-2 w-full"
        />
        <input
          type="tel"
          name="contact"
          minLength={10}
          maxLength={10}
          pattern="[0-9]{10}"
          id="contact"
          placeholder="Phone (10 digits)"
          required
          disabled={loading}
          className="bg-white focus:outline-none border border-black px-4 rounded py-2 my-2 w-full"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Your message..."
          rows="4"
          required
          disabled={loading}
          className="bg-white focus:outline-none border border-black w-full py-2 px-3 my-2"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-5 w-full py-2 rounded"
        >
          {loading ? "Send..." : "Send"}
        </button>

        {status && (
          <p
            className={`text-center mt-4 text-sm font-medium p-3 rounded-lg ${
              status.startsWith("✅")
                ? "bg-green-100 text-green-800"
                : status.startsWith("❌")
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default PopForm;
