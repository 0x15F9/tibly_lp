import doctorPatientImage from '../assets/landing/doctor-patient.webp'
import type { IconName } from '../data/landing'

export const WHATSAPP_URL =
  'https://wa.me/2300000000?text=Hello%20Tibly%2C%20I%27d%20like%20to%20see%20Tibly%20running%20for%20my%20practice.'

export interface LandingCard {
  title: string
  body: string
  icon?: IconName
}

export interface MediaItem extends LandingCard {
  icon: IconName
  image: {
    src: string
    alt: string
    label: string
  }
}

export const landingContent = {
  brand: {
    name: 'Tibly',
    homeLabel: 'Tibly home',
    navLabel: 'Primary navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skipLink: 'Skip to main content',
  },
  navigation: [
    { label: 'How it helps', href: '#outcome' },
    { label: 'See it work', href: '#product' },
    { label: 'Why Tibly', href: '#why' },
    { label: 'Founding practices', href: '#offer' },
  ],
  headerCta: {
    label: 'Talk to us',
    href: '#contact',
  },
  hero: {
    headline: ['Spend the consultation with your patient —', 'not the screen.'],
    subhead:
      'Streamline your practice. Keep every patient record and document ready in one fast workflow.',
    trustLines: [
      'In real, daily use in a Mauritian practice for three years.',
      'Over 6,000 patient records.',
      'Over 12,000 consultations.',
    ],
    primaryCta: {
      label: 'See Tibly in your practice',
      href: WHATSAPP_URL,
      ariaLabel: 'See Tibly in your practice via WhatsApp',
    },
    secondaryCta: {
      label: 'Watch the 70-second demo',
      href: '#demo-video',
    },
    screenshot: {
      src: '/landing/timeline-screen.svg',
      alt: 'Tibly patient timeline showing consultations, results and follow-ups in one record',
      browserLabel: 'app.tibly.net · Patient timeline',
    },
  },
  whoFor: {
    eyebrow: 'Made to meet you where you are',
    heading: "Whether you're beginning or switching",
    intro:
      'Starting a practice, running one on paper, or moving off another system — Tibly fits the way you already work.',
    cards: [
      {
        icon: 'note' as IconName,
        label: '01',
        title: 'New or paper practice',
        body: "We configure Tibly around how you consult and set it up with you. You're seeing patients on it within the week.",
      },
      {
        icon: 'refresh' as IconName,
        label: '02',
        title: 'Moving from another system',
        body: 'We bring your existing records across for you — free for founding practices.',
      },
    ],
  },
  problem: {
    eyebrow: 'The consultation comes first',
    heading: "A consultation is a conversation. Your tools shouldn't interrupt it.",
    pains: [
      "You're typing while they're talking. Every minute heads-down in the device is a minute the patient feels unheard — and they notice.",
      'The note, the prescription, the certificate — all written up mid-visit, click by click, while the patient waits.',
      "And you're doing it half-blind, trying to recall what you decided at the last visit.",
    ],
    image: {
      src: doctorPatientImage,
      alt: 'A Mauritian doctor fully engaged in conversation with a patient',
    },
  },
  outcome: {
    eyebrow: 'A calmer way to work',
    heading: 'Tibly does the work in the background, so you stay in the room.',
    cards: [
      {
        icon: 'user' as IconName,
        title: 'Ready before they sit down',
        body: 'The last visit, results and follow-ups are already on screen. No hunting.',
      },
      {
        icon: 'pen' as IconName,
        title: 'The note writes itself',
        body: 'History carries forward; your usual plans, medicines and dosages fill in from favourites.',
      },
      {
        icon: 'documents' as IconName,
        title: 'Paperwork in one click',
        body: 'Prescriptions, medical certificates, leave and admission letters, receipts — generated, populated, ready to print or send. Emails and calendar entries build themselves.',
      },
    ] satisfies LandingCard[],
    payoff: 'The admin takes seconds — so the consultation stays about the patient.',
  },
  seeItWork: {
    eyebrow: 'See it work',
    heading: "Three things you'll feel on day one.",
    rows: [
      {
        icon: 'list' as IconName,
        title: 'Patient timeline',
        body: 'The whole clinical story on one screen — every visit, result and follow-up, in order.',
        image: {
          src: '/landing/timeline-screen.svg',
          alt: 'Tibly patient timeline interface',
          label: 'Patient timeline',
        },
      },
      {
        icon: 'note' as IconName,
        title: 'Guided consultation',
        body: 'Move through it section by section, reorder with a drag, save anything as a favourite.',
        image: {
          src: '/landing/consult-screen.svg',
          alt: 'Tibly guided consultation interface',
          label: 'Guided consultation',
        },
      },
      {
        icon: 'documents' as IconName,
        title: 'One-click documents',
        body: 'Certificate, prescription, receipt — done in the room, handed over before they leave.',
        image: {
          src: '/landing/documents-screen.svg',
          alt: 'Tibly one-click document interface',
          label: 'One-click documents',
        },
      },
    ] satisfies MediaItem[],
    video: {
      title: 'Watch a full consultation come together',
      duration: '70 seconds',
      playLabel: 'Play the 70-second Tibly demo',
      poster: '/landing/video-poster.svg',
      sourceUrl: '',
      unavailableLabel: 'Demo video coming soon',
    },
  },
  why: {
    eyebrow: 'Why Tibly is different',
    heading: 'Built from practice, not theory.',
    items: [
      {
        icon: 'check' as IconName,
        title: 'Proven, not promised',
        body: 'Three years of daily use in a real practice. Not a beta.',
      },
      {
        icon: 'documents' as IconName,
        title: 'Built for Mauritius',
        body: 'Localities, French documents, rupee receipts, insurance status.',
      },
      {
        icon: 'pen' as IconName,
        title: 'Configured to you',
        body: 'Fields and layout shaped around how you actually consult.',
      },
      {
        icon: 'refresh' as IconName,
        title: 'Every cabinet, one record',
        body: "For practices that work across sites, nothing's left behind.",
      },
      {
        icon: 'arrow-right' as IconName,
        title: 'Yours to leave with',
        body: 'Export your data any time. The records are yours, always.',
      },
    ] satisfies LandingCard[],
  },
  proof: {
    label: 'From the consulting room',
    quote:
      "[ e.g. It's halved the time I spend per consultation, and nothing slips between visits. ]",
    name: 'Dr. [Full Name]',
    clinic: '[clinic]',
    town: '[town]',
    photo: '/landing/doctor-placeholder.svg',
    photoAlt: 'Portrait placeholder for the Tibly practice testimonial',
    support:
      "Three years in a demanding practice. If it keeps up there, it'll keep up with yours.",
  },
  offer: {
    eyebrow: 'A considered start',
    heading: 'Founding practices',
    body: 'Be one of the first practices on Tibly. Three months free to start. We configure it around how you consult and bring you on ourselves — and founding practices keep founding pricing and priority support as we grow.',
    foundingPracticeCount: '[N]',
    scarcityPrefix: 'Limited to the',
    scarcitySuffix: 'practices we can onboard this quarter.',
    cta: {
      label: 'See it in your practice',
      href: WHATSAPP_URL,
      ariaLabel: 'See Tibly in your practice via WhatsApp',
    },
  },
  trust: {
    heading: 'Privacy is part of the practice.',
    lines: [
      'Patient data is handled under the Mauritius Data Protection Act.',
      'Tibly logs what happened, never what was said — clinical content stays in your records.',
    ],
  },
  finalCta: {
    heading: 'The best way to judge Tibly is to see your own practice running on it.',
    whatsapp: {
      eyebrow: 'The direct route',
      body: 'Tell us how you work today. We will show you the parts of Tibly that matter to your practice.',
      label: 'Message us on WhatsApp',
      href: WHATSAPP_URL,
      ariaLabel: 'Message Tibly on WhatsApp',
    },
    form: {
      heading: 'Prefer we reach out?',
      intro: 'Leave the minimum we need to contact you.',
      fields: {
        name: {
          label: 'Name',
          placeholder: 'Dr. Full Name',
          requiredMessage: 'Please enter your name.',
        },
        practice: {
          label: 'Practice',
          placeholder: 'Practice or clinic',
          requiredMessage: 'Please enter your practice.',
        },
        phone: {
          label: 'Phone',
          placeholder: 'e.g. 5 900 0000',
          requiredMessage: 'Please enter a valid phone number.',
        },
      },
      submitLabel: 'Send',
      successHeading: 'Thank you. We have your details.',
      successBody: 'We will be in touch shortly.',
      privacy: 'Used only to contact you about Tibly.',
    },
  },
  footer: {
    description:
      'A calmer clinical and patient-management platform for private practices in Mauritius.',
    copyright: 'Tibly · Mauritius',
    privacy: 'Private, login-only clinical platform',
  },
} as const

export type LandingContent = typeof landingContent
