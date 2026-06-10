"use client";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // form State
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
        setStatus("✅ Message sent successfully! Redirecting to WhatsApp...");
        setLoading(false);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");

        // Prepare WhatsApp message using payload object keys for clean access
        const whatsappText = `Hi, I am ${name}.\n \nEmail: ${email}\n\nMessage: ${message}\n\nContact: ${phone} \n `;
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
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setStatus("Sending...");

  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const payload = Object.fromEntries(formData);

  //   try {
  //     const response = await fetch(
  //       "https://formsubmit.co/ajax/inquiry.promozione@gmail.com",
  //       {
  //         method: "POST",
  //         body: formData,
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       setStatus("✅ Message sent successfully! Redirecting to WhatsApp...");
  //       form.reset();

  //       // Prepare WhatsApp message using payload object keys for clean access
  //       const whatsappText = `Hi, I am ${payload.name}.\n \nEmail: ${payload.email}\n\nMessage: ${payload.message}\n\nContact: ${payload.contact} \n `;
  //       const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
  //         whatsappText
  //       )}`;

  //       // Delay WhatsApp redirect by 1 second to show success message
  //       setTimeout(() => {
  //         window.open(waUrl, "_blank");
  //       }, 1000);
  //     } else {
  //       // Handle HTTP error statuses (4xx, 5xx)
  //       const errorData = await response
  //         .json()
  //         .catch(() => ({ message: "Submission failed." }));
  //       console.error("Submission failed:", response.status, errorData);
  //       setStatus("❌ Failed to send. Please check your form or try again.");
  //     }
  //   } catch (error) {
  //     // Handle network errors (e.g., connection lost)
  //     console.error("FormSubmit Fatal Error:", error);
  //     setStatus("⚠️ A network error occurred. Please try later.");
  //   } finally {
  //     setLoading(false); // End loading regardless of outcome
  //   }
  // };

  return (
    <div className="h-full">
      <form
        onSubmit={handleSubmit}
        className="bg-[#4c608b] h-full px-5 py-6"
      >
        <p className="text-xl md:text-3xl mb-2 font-bold text-white text-center">
          Get Wholesale Price Today!
        </p>

        <input type="hidden" name="_nosponsor" value="true" />
        <input type="hidden" name="_cc" value="sales@aanyaenterprise.com" />

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          disabled={loading}
          className="bg-white focus:outline-none border border-black px-4 rounded py-2 my-2 w-full"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          disabled={loading}
          className="bg-white focus:outline-none border border-black px-4 rounded py-2 my-2 w-full"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          name="contact" // Used for FormData
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          placeholder="Your message..."
          rows="3"
          required
          disabled={loading}
          className="bg-white focus:outline-none border border-black w-full py-2 px-3 my-2"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FFCC2E] hover:bg-yellow-400  text-black px-5 w-full py-2 rounded mt-2"
        >
          {loading ? "Send..." : "Request Price List"}
        </button>

        {status && (
          <p
            className={`text-center mt-4 text-sm font-medium p-3 rounded-lg ${status.startsWith("✅")
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

export default Form;
