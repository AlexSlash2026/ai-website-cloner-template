import { Header } from "@/components/sites/stolitsa-turfirma-ru/Header";
import { MissionSection } from "@/components/sites/stolitsa-turfirma-ru/MissionSection";
import { TouristOfferings } from "@/components/sites/stolitsa-turfirma-ru/TouristOfferings";
import { ReasonsSection } from "@/components/sites/stolitsa-turfirma-ru/ReasonsSection";
import { TourGuidesSection } from "@/components/sites/stolitsa-turfirma-ru/TourGuidesSection";
import { TransportSection } from "@/components/sites/stolitsa-turfirma-ru/TransportSection";
import { TestimonialsSection } from "@/components/sites/stolitsa-turfirma-ru/TestimonialsSection";
import { Footer } from "@/components/sites/stolitsa-turfirma-ru/Footer";
import { Divider } from "@/components/sites/stolitsa-turfirma-ru/Divider";

export default function Home() {
  return (
    <main>
      <Header />
      
      <MissionSection />
      <Divider />
      
      <TouristOfferings />
      <Divider />
      
      <ReasonsSection />
      <Divider />
      
      <TourGuidesSection />
      <Divider />
      
      <TransportSection />
      <Divider />
      
      <TestimonialsSection />
          
      <Footer />
    </main>
  );
}