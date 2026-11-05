import { Header } from "@/components/sites/stolitsa-turfirma-ru/Header";
import { MissionSection } from "@/components/sites/stolitsa-turfirma-ru/MissionSection";
import { TouristOfferings } from "@/components/sites/stolitsa-turfirma-ru/TouristOfferings";
import { ReasonsSection } from "@/components/sites/stolitsa-turfirma-ru/ReasonsSection";
//import { NewTourPromo } from "@/components/sites/stolitsa-turfirma-ru/NewTourPromo";
import { TourGuidesSection } from "@/components/sites/stolitsa-turfirma-ru/TourGuidesSection";
import { TestimonialsSection } from "@/components/sites/stolitsa-turfirma-ru/TestimonialsSection";
import { TransportSection } from "@/components/sites/stolitsa-turfirma-ru/TransportSection";
import { RegistryBadge } from "@/components/sites/stolitsa-turfirma-ru/RegistryBadge";
import { Footer } from "@/components/sites/stolitsa-turfirma-ru/Footer";
import { Divider } from "@/components/sites/stolitsa-turfirma-ru/Divider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MissionSection />
        <Divider />
        <TouristOfferings />
        <Divider />
        <ReasonsSection />
        <Divider />
        {/* <NewTourPromo /> */}
        {/*<Divider />*/}
        <TourGuidesSection />
        <Divider />
        <TestimonialsSection />
        <Divider />
        <TransportSection />
        <Divider />
        <RegistryBadge />
      </main>
      <Footer />
    </>
  );
}
