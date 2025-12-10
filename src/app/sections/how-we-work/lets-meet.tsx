import ConsultationButton from "@/app/components/constultation-button";

export default function LetsMeet() {
  return (
    <div className="w-full bg-[var(--bg-bright2)] flex flex-col md:flex-row gap-16 px-5 md:py-16 md:px-0 items-center text-[var(--fg-dark)]">
      <img src="arrow-decoration-d.svg" alt="Chat" className="md:hidden w-[14.25rem]" />
      <img src="arrow-decoration-r.svg" alt="Chat" className="hidden md:block h-[19.6875rem]" />
      <div className="flex-1 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <div className="text-[2.5rem] md:text-[4.5rem] text-center">
            Stretnime sa
          </div>
          <div className="text-[0.9375rem] md:text-base text-center font-silka-400">
            Máte nápad, ktorý chcete rozvinúť? Kontaktujte nás alebo si dohodnite online konzultáciu.
          </div>
        </div>
        <ConsultationButton />
      </div>
      <img src="arrow-decoration-l.svg" alt="Chat" className="hidden md:block h-[19.6875rem]" />
      <img src="arrow-decoration-u.svg" alt="Chat" className="md:hidden w-[14.25rem]" />
    </div>
  );
}
