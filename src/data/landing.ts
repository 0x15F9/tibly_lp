export type IconName =
  | 'search'
  | 'user'
  | 'note'
  | 'documents'
  | 'pill'
  | 'list'
  | 'refresh'
  | 'pen'
  | 'check'
  | 'chevron-down'
  | 'chevrons-down'
  | 'arrow-right'
  | 'menu'
  | 'close'
  | 'whatsapp'
  | 'quote'
  | 'clock'
  | 'alert'
  | 'info'
  | 'play'

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Platform', href: '#product' },
  { label: 'How it works', href: '#how' },
  { label: 'For your practice', href: '#doctors' },
  { label: 'FAQ', href: '#faq' },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '4', label: 'core modules' },
  { value: '6+', label: 'document types' },
  { value: '1', label: 'record per patient' },
  { value: 'Minutes', label: 'to a finished visit' },
]

export interface Pillar {
  icon: IconName
  title: string
  body: string
  points: string[]
}

export const pillars: Pillar[] = [
  {
    icon: 'search',
    title: 'Patient management & search',
    body: 'Find anyone in the list instantly, and create or edit records without friction.',
    points: [
      'Fast search across your whole patient list',
      'Demographics, insurance, bio & occupation',
      'Structured social & medical history',
    ],
  },
  {
    icon: 'user',
    title: 'Patient profile & history',
    body: 'One connected view of the patient — everything from every visit in a single place.',
    points: [
      'Full history and every past consultation',
      'Vitals trends and prior investigations (echo)',
      'Carry context forward into a new visit',
    ],
  },
  {
    icon: 'note',
    title: 'Consultation workspace',
    body: 'Complaint, examination, vitals and plan — captured as fast as you can think.',
    points: [
      'ECG, echo, ETT, pacemaker & vitals',
      'Reusable favorites and default values',
      'Drag-and-drop ordering + prefill',
    ],
  },
  {
    icon: 'documents',
    title: 'Prescriptions & documents',
    body: 'Polished, print-ready paperwork generated straight from the visit.',
    points: [
      'Rx grouped by clinical category, with defaults',
      'Test orders and results',
      'Certificates, claims, fee notes & summaries',
    ],
  },
]

export interface Step {
  title: string
  body: string
}

export const steps: Step[] = [
  {
    title: 'Intake',
    body: 'Search or create the patient, capture demographics and history. Insurance and referrals are structured, not scribbled.',
  },
  {
    title: 'Consult',
    body: 'Record the complaint, examination and vitals, then build the plan — with favorites, defaults and prefill doing the typing.',
  },
  {
    title: 'Documents',
    body: 'Generate prescriptions, test orders, certificates and summaries in a click, ready to print or email — professionally laid out.',
  },
]

export interface Benefit {
  icon: IconName
  title: string
  body: string
}

export const benefits: Benefit[] = [
  {
    icon: 'pill',
    title: 'Your medicines, ready to go',
    body: 'Tailor your own medicine lists with default morning / afternoon / night dosages and favorites.',
  },
  {
    icon: 'list',
    title: 'Reorder everything',
    body: 'Drag-and-drop ordering across medicine lists, history options and document layouts — it stays how you like it.',
  },
  {
    icon: 'refresh',
    title: 'Prefill from the last visit',
    body: 'Bring relevant context forward so a follow-up starts with what matters already in place.',
  },
  {
    icon: 'pen',
    title: 'You control the output',
    body: 'Decide what your PDFs say and how they look — prescriptions, claims, fee notes and certificates on your terms.',
  },
]

export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Is Tibly a public app patients can sign up for?',
    answer:
      "No. Tibly is a private, login-only tool for a physician and clinic staff. It's built for running a practice, not a consumer-facing portal.",
  },
  {
    question: 'Is it only for cardiologists?',
    answer:
      'Tibly is cardiology-focused out of the box — ECG, echo, exercise tolerance and pacemaker findings are first-class — but the medicine lists, history options and visit reasons are all yours to tailor, so it fits solo specialists and generalists too.',
  },
  {
    question: 'Can I use my own medicines, phrasing and templates?',
    answer:
      'Yes. You tailor your own medicine lists with default dosages, your medical-history options and visit reasons, and you control document output — everything reorderable by drag-and-drop.',
  },
  {
    question: 'What documents can it produce?',
    answer:
      'Prescriptions, test orders, medical certificates, insurance claims, fee notes and consultation summary emails — all generated from the visit and laid out professionally for printing.',
  },
  {
    question: 'How is my patient data handled?',
    answer:
      "Access is login-only and private to your practice. We'll walk through exactly how your data is stored and handled during your demo.",
  },
]

export const testimonial = {
  quote:
    '“Tibly cut the admin around every consultation. By the time the patient leaves, the notes, prescription and summary are already done — I get my afternoons back.”',
  name: 'Dr. [Name Placeholder]',
  role: 'Consultant Cardiologist',
}
