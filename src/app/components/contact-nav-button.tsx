"use client"

export type ContactNavButtonProps = {
  text: string;
}

export default function ContactNavButton({text}: ContactNavButtonProps) {
  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <button className="flex gap-3 hover:cursor-pointer hover:underline" aria-label={text}
      onClick={() => scrollToId("contact-us")}
    >
      <img src="/icon/chat.svg" alt="Chat" className="h-6" />
      <div className="">
        {text}
      </div>
    </button>
  )
}