"use client";

import { useEffect, useState } from "react";
import { Autocomplete } from "./input/auto-complete";
import { Checkbox } from "./input/checkbox";
import { TextArea } from "./input/text-area";
import { TextField } from "./input/text-field";

type Notification = {
  message: string;
  type: "success" | "error";
} | null;

export default function ContactForm() {
  const [notification, setNotification] = useState<Notification>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sluzby = ["Konzultácia", "Cenová ponuka", "Referencie v obore"];
  
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // prevents page reload

    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = {
      name: formData.get("meno") as string,
      email: formData.get("email") as string,
      phone: formData.get("mobil") as string,
      service: formData.get("sluzba") as string,
      message: formData.get("sprava") as string,
    };

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setNotification({ message: "Správa bola úspešne odoslaná. Ďakujeme!", type: "success" });
      }
      else {
        throw new Error(result.error || "Nepodarilo sa odoslať správu.");
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      console.error("Error sending form:", err);
      setNotification({
        message: "Pri odosielaní správy nastala chyba. Skúste to znova neskôr.",
        type: "error",
      });
    }
    finally {
      setIsSubmitting(false);
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}
        className="flex flex-col p-6 gap-6 md:p-8 md:gap-8 border-1 border-[var(--fg-dark)]">
        <div className="text-[2rem] md:text-[2.25rem]">
          Kontaktný formulár
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-5">
          <div className="md:flex-1/2">
            <TextField id="meno" name="meno" label={"Meno *"} required />
          </div>

          <div className="md:flex-1/2">
            <TextField id="mobil" name="mobil" label={"Mobil"} type="tel" />
          </div>
        </div>

        <div>
          <TextField id="email" name="email" label={"Email *"} type="email" required />
        </div>

        <div>
          <Autocomplete id="sluzba" name="sluzba" options={sluzby} label={"O akú službu mám záujem?"} />
        </div>

        <div>
          <TextArea id="sprava" name="sprava" rows={3} label={"Správa"} type="email" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-5">
          <div className="md:flex-1/2">
            <Checkbox id="consent-checkbox" required label={
                <div className="pl-4 font-silka-400 text-[var(--fg-dark)]">
                  Súhlasím so <span className="underline">spracovaním osobných údajov.</span>
                </div>
              } />
          </div>

          <div className="md:flex-1/2 content-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex justify-center items-center bg-[var(--bg-black)] text-[var(--fg-white)] p-4 w-full rounded-md hover:cursor-pointer transition-colors ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#4C4C4C]"
              }`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Odoslať"
              )}
            </button>
          </div>
        </div>
      </form>

      {notification && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 text-white ${
            notification.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}
    </>
  );
}