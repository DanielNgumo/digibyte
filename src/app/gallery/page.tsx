import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PosterGallery from "@/components/PosterGallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Poster Gallery — Daniel Ngumo",
  description:
    "Browse poster graphics, event flyers, and campaign visuals by Daniel Ngumo — graphic designer based in Nairobi.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PosterGallery />
      </main>
      <Footer />
    </div>
  );
}
