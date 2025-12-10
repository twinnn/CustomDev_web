import AboutUsSection from "./sections/about-us";
import ContactUsSection from "./sections/contact-us";
import HowWeWorkSection from "./sections/how-we-work";
import ReferencesSection from "./sections/references";
import ServicesSection from "./sections/services";

export default function Home() {
  return (
    <div>
      <AboutUsSection />
      <ServicesSection />
      <ReferencesSection />
      <HowWeWorkSection />
      <ContactUsSection />
    </div>
  );
}
