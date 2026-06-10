import Navbar from "../components/Layout/Navbar";
import Hero from "@/components/Section/Hero";
import Footer from "@/components/Layout/Footer";
import Whatsapp from "@/components/Layout/Whatsapp";
import FormSection from "@/components/Section/FormSection";
import Testimonial from "@/components/Section/Testimonial";
import UnlockSection from "@/components/Section/UnlockSection";
import PopupForm from "@/components/Section/AutoPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <UnlockSection />
      <FormSection />
      <Whatsapp />
      <Footer />
      <PopupForm />
    </>
  );
}
