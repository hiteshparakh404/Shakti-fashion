import Navbar from "../../components/Navbar";
import ContactForm from "../../components/forms/ContactForm";
import Footer from "../../components/Footer";

export default function FormPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  );
}
