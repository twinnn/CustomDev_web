"use client";

export default function BottomNav() {
  const sections = [
    { id: "about-us", label: "O NÁS" },
    { id: "services", label: "SLUŽBY" },
    { id: "references", label: "REFERENCIE" },
    { id: "how-we-work", label: "AKO PRACUJEME" },
    { id: "contact-us", label: "KONTAKT" },
  ];

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="flex flex-col gap-4">
      {sections.map((section, index) => (
          <div key={index}>
            <button className="hover:underline hover:cursor-pointer" onClick={() => scrollToId(section.id)}>
              {section.label}
            </button>
          </div>
      ))}
    </nav>
  );
}
