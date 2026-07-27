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
  | 'arrow-right'
  | 'menu'
  | 'close'

/** 24×24 stroke icon paths (lucide-style), rendered by `LandingIcon`. */
export const iconPaths: Record<IconName, string> = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  note: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/>',
  documents:
    '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M9 15l2 2 4-4"/>',
  pill: '<path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  refresh: '<path d="M3 12a9 9 0 1 0 9-9 9.7 9.7 0 0 0-6.7 2.8L3 8"/><path d="M3 3v5h5"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  'chevron-down': '<path d="M6 9l6 6 6-6"/>',
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
}

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
