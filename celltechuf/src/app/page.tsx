import ReviewForm from '@/components/ReviewForm'
import ReviewsList from '@/components/ReviewsList'
import {
  Phone,
  MessageCircle,
  Smartphone,
  BatteryCharging,
  Camera,
  Plug,
  GraduationCap,
  Wrench,
  Check,
  Quote,
  Star,
  PenLine,
  Mail,
  MapPin,
} from 'lucide-react'

const services = [
  { icon: Smartphone, title: 'Screen Replacement', desc: 'Cracked or broken screens' },
  { icon: BatteryCharging, title: 'Battery Replacement', desc: 'Poor battery life' },
  { icon: Camera, title: 'Camera Repair', desc: 'Blurry or broken cameras' },
  { icon: Plug, title: 'Charging Port', desc: "Won't charge properly" },
]

const trustPoints = [
  'Certified in iPhone repair techniques',
  'Use only high-quality replacement parts',
  'Transparent pricing with no hidden fees',
  'Quick turnaround - most repairs in 3 hours',
  'Fellow UF student who understands your needs',
]

const whyChooseUs = [
  'On-campus convenience',
  'Student-friendly pricing',
  'Quick turnaround times',
  'Quality parts & warranty',
  'Experienced technicians',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      {/* Header */}
      <header className="border-b border-line relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/ctlogo.png"
                alt="Cell Tech @ UF Logo"
                className="w-14 h-14 rounded-xl object-cover border border-line shadow-sm"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-heading text-ink">Cell Tech @ UF</h1>
                <p className="text-ink-soft font-body text-sm">Expert iPhone Repair Services</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 pr-4 border-r border-line">
                <div className="flex text-orange text-sm">
                  {'★'.repeat(5)}
                </div>
                <span className="text-xs text-ink-muted font-medium font-body whitespace-nowrap">Trusted by 50+ satisfied UF students</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="tel:239-321-4052"
                  className="btn btn-primary button-press focus-ring px-5 py-2.5 text-sm"
                >
                  <Phone className="w-4 h-4" strokeWidth={2} />
                  <span>Call Now</span>
                </a>
                <a
                  href="sms:239-321-4052"
                  className="btn btn-outline button-press focus-ring px-5 py-2.5 text-sm"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  <span>Text Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-20 md:pt-28 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-heading text-ink mb-6 leading-[1.05]">
              Fast, Affordable
              <span className="block text-orange">iPhone Repairs</span>
            </h2>
            <p className="text-lg md:text-xl font-body text-ink-soft max-w-2xl mx-auto leading-relaxed">
              Professional repair services right on campus for University of Florida students
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16 max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            {services.map((service, i) => (
              <div key={i} className="card hover-lift rounded-2xl p-6 text-left">
                <div className="w-10 h-10 rounded-full bg-blue-soft text-blue flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-ink font-semibold mb-1.5 text-sm md:text-base font-body">
                  {service.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed font-body">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-line max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            <div className="text-center px-3 md:px-8">
              <div className="text-4xl md:text-5xl font-heading text-ink mb-2">200+</div>
              <div className="label-caption">Repairs Completed</div>
            </div>
            <div className="text-center px-3 md:px-8">
              <div className="text-4xl md:text-5xl font-heading text-ink mb-2">3hr</div>
              <div className="label-caption">Average Turnaround</div>
            </div>
            <div className="text-center px-3 md:px-8">
              <div className="text-4xl md:text-5xl font-heading text-ink mb-2">100%</div>
              <div className="label-caption">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 md:py-28 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-heading text-ink mb-4">
              Meet Your Technician
            </h3>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto font-body leading-relaxed">
              Get to know the expert behind Cell Tech @ UF
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="relative inline-block mb-8">
                <img
                  src="/wasseem%202.png"
                  alt="Wasseem Barghouthi"
                  className="w-52 h-52 mx-auto lg:mx-0 rounded-full object-cover border border-line shadow-sm"
                />
                <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-surface border border-line rounded-full flex items-center justify-center shadow-sm">
                  <Wrench className="w-6 h-6 text-blue" strokeWidth={1.75} />
                </div>
              </div>
              <h4 className="text-3xl font-heading text-ink mb-2">Wasseem Barghouthi</h4>
              <p className="text-orange font-body font-semibold text-sm tracking-wide uppercase mb-4">Certified iPhone Repair Specialist</p>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="flex text-orange text-lg">
                  {'★'.repeat(5)}
                </div>
                <span className="text-ink-muted text-sm font-body">200+ Successful Repairs</span>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-slide-in-right animate-delay-200">
              <div className="card rounded-2xl p-6 md:p-7">
                <h5 className="text-lg font-semibold text-ink mb-3 flex items-center gap-3 font-body">
                  <span className="w-9 h-9 rounded-full bg-blue-soft text-blue flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  Experience & Education
                </h5>
                <p className="text-ink-soft font-body leading-relaxed">
                  As a University of Florida student studying Electrical Engineering, I understand the importance of having a working phone on campus. With over 2 years of experience in mobile device repair and 200+ successful repairs, I&apos;ve built a reputation for quality work and honest pricing.
                </p>
              </div>

              <div className="card rounded-2xl p-6 md:p-7">
                <h5 className="text-lg font-semibold text-ink mb-4 flex items-center gap-3 font-body">
                  <span className="w-9 h-9 rounded-full bg-blue-soft text-blue flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  Why Trust Me?
                </h5>
                <div className="space-y-3">
                  {trustPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-ink-soft font-body">
                      <Check className="w-5 h-5 text-orange mt-0.5 shrink-0" strokeWidth={2} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 md:p-7 bg-blue-soft border border-blue/20">
                <h5 className="text-lg font-semibold text-ink mb-3 flex items-center gap-3 font-body">
                  <span className="w-9 h-9 rounded-full bg-surface text-blue flex items-center justify-center shrink-0">
                    <Quote className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  My Promise to You
                </h5>
                <p className="text-ink font-heading italic leading-relaxed text-lg">
                  &quot;I treat every device like it&apos;s my own. Your phone is important to you, and I understand that. That&apos;s why I provide honest assessments, fair pricing, and quality repairs that last. As a fellow Gator, I&apos;m here to help keep you connected!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 pb-20 md:pb-28 border-t border-line">
        <div className="max-w-6xl mx-auto px-6 pt-20 md:pt-28">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-heading text-ink mb-4 animate-fade-in-up">
              What UF Students Say
            </h3>
            <p className="text-ink-soft text-lg max-w-2xl mx-auto font-body leading-relaxed animate-fade-in-up animate-delay-100">
              Real reviews from real students who trust us with their devices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 animate-slide-in-left">
              <div className="card rounded-2xl p-6 md:p-7">
                <h4 className="text-lg font-semibold text-ink mb-6 flex items-center gap-3 font-body">
                  <span className="w-9 h-9 rounded-full bg-blue-soft text-blue flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  Customer Reviews
                </h4>
                <ReviewsList />
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right animate-delay-200">
              <div className="card rounded-2xl p-6 md:p-7">
                <h4 className="text-lg font-semibold text-ink mb-6 flex items-center gap-3 font-body">
                  <span className="w-9 h-9 rounded-full bg-blue-soft text-blue flex items-center justify-center shrink-0">
                    <PenLine className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  Share Your Experience
                </h4>
                <ReviewForm />
              </div>

              {/* Why Choose Us */}
              <div className="rounded-2xl p-6 md:p-7 bg-orange-soft border border-orange/20">
                <h4 className="text-lg font-semibold text-ink mb-5 font-body">Why Choose Cell Tech @ UF?</h4>
                <div className="space-y-3">
                  {whyChooseUs.map((reason, i) => (
                    <div key={i} className="flex items-center gap-3 text-ink font-body">
                      <Check className="w-5 h-5 text-orange shrink-0" strokeWidth={2} />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-line bg-paper-soft">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img
                  src="/ctlogo.png"
                  alt="Cell Tech @ UF Logo"
                  className="w-12 h-12 rounded-lg object-cover border border-line"
                />
                <div>
                  <h4 className="text-lg font-heading text-ink">Cell Tech @ UF</h4>
                  <p className="text-ink-muted text-sm font-body">iPhone Repair Experts</p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="label-caption mb-4">Contact Info</h5>
              <div className="space-y-3">
                <p className="flex items-center justify-center md:justify-start gap-2.5 text-ink-soft text-sm font-body">
                  <Phone className="w-4 h-4 text-ink-muted shrink-0" strokeWidth={1.75} />
                  <a href="tel:239-321-4052" className="hover:text-blue transition-colors">239-321-4052</a>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2.5 text-ink-soft text-sm font-body">
                  <Mail className="w-4 h-4 text-ink-muted shrink-0" strokeWidth={1.75} />
                  <a href="mailto:wasseemb2007@gmail.com" className="hover:text-blue transition-colors">wasseemb2007@gmail.com</a>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2.5 text-ink-soft text-sm font-body">
                  <MapPin className="w-4 h-4 text-ink-muted shrink-0" strokeWidth={1.75} />
                  <span>University of Florida Campus</span>
                </p>
              </div>
            </div>

            <div>
              <h5 className="label-caption mb-4">Quick Actions</h5>
              <div className="flex flex-col items-center md:items-start gap-3">
                <a
                  href="tel:239-321-4052"
                  className="btn btn-primary button-press focus-ring px-6 py-2.5 text-sm w-full md:w-auto"
                >
                  Call for Quote
                </a>
                <a
                  href="sms:239-321-4052"
                  className="btn btn-outline button-press focus-ring px-6 py-2.5 text-sm w-full md:w-auto"
                >
                  Text Us Now
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-line mt-10 pt-6 text-center">
            <p className="text-ink-muted text-sm font-body">
              © 2024 Cell Tech @ UF. Serving University of Florida students with expert iPhone repair services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
