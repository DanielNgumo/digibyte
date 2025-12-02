import TermsOfService from "@/components/TermsOfService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <TermsOfService />
      <Footer />
    </div>
  );
}