import PrivacyPolicy from "@/components/PrivacyPolicy";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}