import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clapperboard,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useState } from 'react'

const navItems = ['Services', 'Portfolio', 'Process', 'Why Us', 'Contact']

const services = [
  {
    icon: Code2,
    title: 'Mobile App Development',
    text: 'Polished iOS, Android, and cross-platform apps built for reliable launches and long-term growth.',
  },
  {
    icon: Globe2,
    title: 'Website Development',
    text: 'Fast, accessible websites and web apps with premium UX, clean content structure, and conversion focus.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Solutions',
    text: 'Custom AI assistants, knowledge systems, analytics workflows, and practical automation for teams.',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    text: 'Internal systems that reduce manual work across operations, reporting, customer service, and sales.',
  },
  {
    icon: Layers3,
    title: 'Digital Transformation',
    text: 'Strategy, systems integration, and modern workflows that help businesses operate with clarity.',
  },
  {
    icon: Clapperboard,
    title: 'Advertisement Video Production',
    text: 'Brand-led promotional videos, launch assets, and campaign visuals for digital channels.',
  },
]

const portfolio = [
  {
    tag: 'Fintech',
    title: 'Mobile banking experience',
    description: 'A secure account dashboard and agent workflow designed for fast customer onboarding.',
  },
  {
    tag: 'Operations',
    title: 'Business automation portal',
    description: 'A workflow hub for approvals, reporting, task routing, and performance visibility.',
  },
  {
    tag: 'Brand Growth',
    title: 'Digital campaign production',
    description: 'Launch videos and web landing pages crafted for stronger online acquisition.',
  },
]

const process = [
  ['Discover', 'Map business goals, audience needs, system requirements, and success metrics.'],
  ['Design', 'Create polished user flows, interfaces, architecture, and delivery milestones.'],
  ['Build', 'Develop with modern React, scalable APIs, automation logic, and quality checks.'],
  ['Launch', 'Deploy, measure, improve, and support the product after release.'],
]

const testimonials = [
  {
    quote:
      'AI TECH TZ helped us turn a scattered manual workflow into a clean digital system our team actually enjoys using.',
    name: 'Operations Lead',
    company: 'Dar es Salaam Services Group',
  },
  {
    quote:
      'Their team thinks beyond design. They understood the business process and delivered a website that feels premium and practical.',
    name: 'Founder',
    company: 'Tanzania Growth Brand',
  },
  {
    quote:
      'The video campaign and landing page gave our launch a more professional presence and better customer response.',
    name: 'Marketing Manager',
    company: 'Regional Retail Company',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-signal">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-steel sm:text-lg">{description}</p>
    </motion.div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-3" aria-label="AI TECH TZ home">
          <img src="/assets/ai-tech-tz-logo.jpeg" alt="AI TECH TZ logo" className="h-11 w-11 rounded-full object-cover" />
          <span className="text-lg font-bold tracking-tight text-ink">AI TECH TZ</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href="tel:0795448801" className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 lg:flex">
          <Phone className="h-4 w-4" />
          0795448801
        </a>
        {!open && (
          <button
            type="button"
            aria-label="Open navigation menu"
            className="fixed right-5 top-4 z-[70] grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink shadow-[0_16px_36px_rgba(15,23,42,0.22)] transition hover:border-slate-300 hover:bg-cloud focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ml-auto h-full w-full max-w-sm bg-white p-6 shadow-soft"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-bold text-ink">AI TECH TZ</span>
                <button type="button" aria-label="Close navigation menu" onClick={() => setOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="grid gap-5">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-medium text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a href="tel:0795448801" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-white">
                  <Phone className="h-4 w-4" />
                  Call 0795448801
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,164,0.14),_transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65, ease: 'easeOut' }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-steel shadow-sm">
            <Sparkles className="h-4 w-4 text-signal" />
            Premium technology partner in Tanzania
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Build smarter digital products for a faster business.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-steel">
            AI TECH TZ designs and develops mobile apps, websites, AI solutions, business automation systems, digital transformation programs, and advertisement videos for ambitious teams.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Work
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-8">
            {[
              ['6+', 'Core services'],
              ['24/7', 'Digital support mindset'],
              ['TZ', 'Local market focus'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-ink">{value}</dt>
                <dd className="mt-1 text-sm text-steel">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
        >
          <div className="hero-panel">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm text-white/60">AI TECH TZ delivery suite</p>
                <p className="text-lg font-semibold text-white">Product Command Center</p>
              </div>
              <Bot className="h-8 w-8 text-gold" />
            </div>
            <div className="grid gap-4 p-5">
              <img src="/assets/digital-platform.jpeg" alt="Abstract connected digital platform interface" className="h-56 w-full rounded-lg object-cover opacity-90" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Metric label="Automation Load" value="72%" />
                <Metric label="Launch Readiness" value="94%" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/10 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                  <ShieldCheck className="h-4 w-4 text-signal" />
                  Active delivery tracks
                </div>
                {['Mobile app sprint', 'AI support workflow', 'Campaign video edits'].map((item) => (
                  <div key={item} className="flex items-center justify-between border-t border-white/10 py-3 text-sm text-white/75">
                    <span>{item}</span>
                    <CheckCircle2 className="h-4 w-4 text-signal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/10 p-4">
      <p className="text-sm text-white/60">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="section bg-white">
      <SectionHeading
        eyebrow="Services"
        title="Technology services designed for business outcomes"
        description="From customer-facing products to internal systems, every service is shaped around clarity, speed, usability, and measurable value."
      />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            className="service-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-70px' }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <div className="mb-7 grid h-12 w-12 place-items-center rounded-lg bg-signal/10 text-signal">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-4 leading-7 text-steel">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="section bg-cloud">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected digital work patterns"
        description="A premium presentation of the kind of outcomes AI TECH TZ creates across software, automation, AI, and campaign production."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-3">
        {portfolio.map((item, index) => (
          <motion.article
            key={item.title}
            className="portfolio-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">{item.tag}</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
            <p className="mt-4 leading-7 text-steel">{item.description}</p>
            <div className="mt-8 h-44 overflow-hidden rounded-lg bg-ink">
              <img
                src={index === 2 ? '/assets/production-accent.jpeg' : '/assets/digital-platform.jpeg'}
                alt=""
                className="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section bg-white">
      <SectionHeading
        eyebrow="Process"
        title="A calm, structured path from idea to launch"
        description="The process keeps stakeholders aligned while giving designers, developers, and content producers room to do excellent work."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-4">
        {process.map(([title, text], index) => (
          <motion.div
            key={title}
            className="relative rounded-lg border border-line bg-white p-6 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <span className="mb-8 inline-grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-4 leading-7 text-steel">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const points = [
    'Local understanding of Tanzanian customers and business operations',
    'Premium interface design paired with practical engineering decisions',
    'Clear communication from strategy through delivery and support',
    'Solutions built for performance, accessibility, maintainability, and growth',
  ]

  return (
    <section id="why-us" className="section bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Why choose us</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Built with the discipline of a product team and the polish of a premium studio.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            AI TECH TZ blends software development, automation thinking, AI capability, and media production into one focused partner for modern businesses.
          </p>
        </motion.div>
        <div className="grid gap-4">
          {points.map((point, index) => (
            <motion.div
              key={point}
              className="flex gap-4 rounded-lg border border-white/10 bg-white/10 p-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-signal" />
              <p className="leading-7 text-white/80">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section bg-cloud">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted for clarity, execution, and polish"
        description="Clients value the ability to translate business needs into digital products, workflows, and campaign assets that feel complete."
      />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.figure
            key={item.name}
            className="rounded-lg border border-line bg-white p-7 shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <blockquote className="leading-8 text-steel">"{item.quote}"</blockquote>
            <figcaption className="mt-8 border-t border-line pt-5">
              <p className="font-semibold text-ink">{item.name}</p>
              <p className="mt-1 text-sm text-steel">{item.company}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-signal">Contact</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Ready to build a smarter digital presence?
          </h2>
          <p className="mt-6 text-lg leading-8 text-steel">
            Talk to AI TECH TZ about your app, website, AI system, automation workflow, transformation project, or advertisement video.
          </p>
          <div className="mt-9 grid gap-4">
            <a href="tel:0795448801" className="contact-line">
              <Phone className="h-5 w-5 text-signal" />
              <span>
                <strong>Phone:</strong> 0795448801
              </span>
            </a>
            <div className="contact-line">
              <MapPin className="h-5 w-5 text-coral" />
              <span>
                <strong>Location:</strong> Kimara Stopover, Dar es Salaam, Tanzania
              </span>
            </div>
            <a href="https://wa.me/255795448801" className="contact-line">
              <MessageCircle className="h-5 w-5 text-signal" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
        <motion.form
          className="rounded-lg border border-line bg-cloud p-6 shadow-soft sm:p-8"
          onSubmit={(event) => event.preventDefault()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          aria-label="Project inquiry form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label className="field">
              <span>Phone or email</span>
              <input type="text" name="contact" autoComplete="email" placeholder="How we can reach you" />
            </label>
            <label className="field sm:col-span-2">
              <span>Service</span>
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="field sm:col-span-2">
              <span>Project details</span>
              <textarea name="message" rows="5" placeholder="Tell us what you want to build" />
            </label>
          </div>
          <button type="submit" className="btn-primary mt-6 w-full justify-center">
            Send Inquiry
            <Rocket className="h-5 w-5" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/ai-tech-tz-logo.jpeg" alt="" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold">AI TECH TZ</p>
            <p className="text-sm text-white/60">Premium technology solutions in Tanzania</p>
          </div>
        </div>
        <p className="text-sm text-white/60">Phone: 0795448801 · Kimara Stopover, Dar es Salaam, Tanzania</p>
      </div>
    </footer>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 })

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-signal" style={{ scaleX }} />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
