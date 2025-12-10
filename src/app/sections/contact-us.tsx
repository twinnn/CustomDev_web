import CustomDevFull from "@/../public/logo/customdev-full.svg";
import BottomNav from "../components/bottom-nav";
import ContactForm from "../components/contact-form";

export default function ContactUsSection() {
  return (
    <section id="contact-us">
      {/* kontaktujte nas */}
      <div className="w-full bg-[var(--bg-white)] text-[var(--fg-dark)] flex flex-col md:flex-row \
        px-5 py-24 md:px-12 md:py-30 gap-8">
          <div className="flex flex-col md:flex-1/2 justify-between">
            <div className="flex flex-col gap-8">
              <div className="text-[2.5rem] md:text-[4.5rem]">
                Kontaktujte nás
              </div>
              <div className="font-silka-400 text-center md:text-left">
                Vyplňte formulár, napíšte mail alebo nám zavolajte.
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-3">
                <img src="/icon/phone.svg" alt="Phone" className="h-6" />
                <div className="text-[1.5rem]">
                  +421 910 497 597
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <img src="/icon/email.svg" alt="Phone" className="h-6" />
                <div className="text-[1.5rem]">
                  info@customdev.sk
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1/2">
            <ContactForm />
          </div>
      </div>
      {/* kontakt */}
      <div className="w-full bg-[var(--bg-white)] text-[var(--fg-dark)] flex flex-col gap-16 px-5 pb-16 md:px-12 md:pt-18 md:pb-30 md:gap-24">
        <CustomDevFull className="w-full" />
        <div className="flex flex-col md:flex-row flex-1 w-full gap-10 md:gap-24 font-silka-400">
          <div className="order-3 md:order-4 md:flex-1/4 flex flex-col gap-4">
            CustomDev, s. r. o.<br />
            <br />
            IČO: 52493105<br />
            DIČ: 2121061525<br />
            IČ DPH: SK2121061525<br />
            <br />
            Bottova 1919/14<br />
            900 42 Alzbetin Dvor - Miloslavov
          </div>
          <div className="order-2 md:order-2 md:flex-1/4">
          Ochrana osobných údajov<br />
          <br />
          Cookies
          </div>
          <div className="order-1 md:order-3 md:flex-1/4">
            <BottomNav />
          </div>
          <div className="order-4 md:order-1 md:flex-1/4">
            Všetky práva vyhradené. 2025.<br />
            Navrhol www.michaelmuzik.com
          </div>
        </div>
      </div>
    </section>
  );
}
