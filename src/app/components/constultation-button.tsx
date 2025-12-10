"use client"

import { useEffect } from "react"
import LogoIcon from "@/../public/logo/customdev-icon.svg"

export default function ConsultationButton() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    // Load Calendly JS
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      document.head.removeChild(link)
      document.head.removeChild(script)
    }
  }, [])

  const openCalendly = () => {
    // Check if Calendly is loaded
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-customdev/30min'
      })
    }
  }

  return (
    <button 
      className="flex gap-3 items-center hover:underline cursor-pointer"
      onClick={openCalendly}
    >
      <LogoIcon alt="CustomDev" className="h-4.75" />
      <div className="text-base">
        BEZPLATNÁ ONLINE KONZULTÁCIA
      </div>
    </button>
  )
}