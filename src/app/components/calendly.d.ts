// Type definitions for Calendly widget
interface CalendlyPopupSettings {
  url: string
  prefill?: {
    name?: string
    email?: string
    firstName?: string
    lastName?: string
    customAnswers?: Record<string, string>
  }
  utm?: {
    utmCampaign?: string
    utmSource?: string
    utmMedium?: string
    utmContent?: string
    utmTerm?: string
  }
  pageSettings?: {
    backgroundColor?: string
    hideEventTypeDetails?: boolean
    hideLandingPageDetails?: boolean
    primaryColor?: string
    textColor?: string
    hideGdprBanner?: boolean
  }
}

interface CalendlyBadgeSettings extends CalendlyPopupSettings {
  text: string
  color: string
  textColor: string
  branding?: boolean
}

interface Calendly {
  initPopupWidget: (settings: CalendlyPopupSettings) => void
  initBadgeWidget: (settings: CalendlyBadgeSettings) => void
  closePopupWidget: () => void
  destroyBadgeWidget: () => void
  showPopupWidget: (url: string) => void
}

interface Window {
  Calendly?: Calendly
}