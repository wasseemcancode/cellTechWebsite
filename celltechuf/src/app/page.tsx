import ReviewForm from '@/components/ReviewForm'
import ReviewsList from '@/components/ReviewsList'

export default function Home() {
  return (
    <div className="min-h-screen gradient-primary gradient-mesh relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full blur-3xl animate-float animate-delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full blur-3xl animate-float animate-delay-400"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full blur-2xl animate-float animate-delay-300"></div>
      </div>

      {/* Enhanced Header */}
      <header className="glass-card border-b border-white/10 relative z-10 animate-slide-in-left">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <img 
                  src="/ctlogo.png" 
                  alt="Cell Tech @ UF Logo" 
                  className="w-20 h-20 rounded-3xl shadow-2xl transform rotate-2 hover-lift animate-pulse-glow glow-on-hover object-cover"
                />
              </div>
              <div className="animate-fade-in-up animate-delay-200">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mb-2">Cell Tech @ UF</h1>
                <p className="text-blue-100 font-body font-medium text-lg mb-3">Expert iPhone Repair Services</p>
                <div className="flex items-center gap-3">
                  <div className="flex text-orange-400 text-lg">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-blue-200 font-medium">Trusted by 50+ satisfied UF students</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 animate-slide-in-right animate-delay-300">
              <a
                href="tel:239-321-4052"
                className="group gradient-accent glow-on-hover button-press text-white px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 focus-ring"
              >
                <span className="text-xl">📞</span>
                <span>Call Now</span>
              </a>
              <a
                href="sms:239-321-4052"
                className="group gradient-accent glow-on-hover button-press text-white px-8 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 focus-ring"
              >
                <span className="text-xl">💬</span>
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative z-10 pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Fast, Affordable
              <span className="block text-gradient animate-fade-in-up animate-delay-100">
                iPhone Repairs
              </span>
            </h2>
            <p className="text-2xl md:text-3xl font-body text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Professional repair services right on campus for University of Florida students
            </p>
          </div>

          {/* Enhanced Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
            {[
              { icon: '📱', title: 'Screen Replacement', desc: 'Cracked or broken screens' },
              { icon: '🔋', title: 'Battery Replacement', desc: 'Poor battery life' },
              { icon: '📸', title: 'Camera Repair', desc: 'Blurry or broken cameras' },
              { icon: '🔌', title: 'Charging Port', desc: 'Won\'t charge properly' }
            ].map((service, i) => (
              <div key={i} className={`glass-card rounded-3xl p-8 group hover-lift animate-fade-in-up animate-delay-${(i + 1) * 100}`}>
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500 animate-wave">
                  {service.icon}
                </div>
                <h3 className="text-white font-heading font-bold mb-3 text-base md:text-lg">
                  {service.title}
                </h3>
                <p className="text-blue-200 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto mb-16">
            <div className="text-center glass-card rounded-2xl p-8 hover-lift animate-scale-in animate-delay-400">
              <div className="text-5xl font-heading font-bold text-gradient mb-4">200+</div>
              <div className="text-blue-100 text-lg font-medium">Repairs Completed</div>
            </div>
            <div className="text-center glass-card rounded-2xl p-8 hover-lift animate-scale-in animate-delay-500">
              <div className="text-5xl font-heading font-bold text-gradient mb-4">3hr</div>
              <div className="text-blue-100 text-lg font-medium">Average Turnaround</div>
            </div>
            <div className="text-center glass-card rounded-2xl p-8 hover-lift animate-scale-in animate-delay-600">
              <div className="text-5xl font-heading font-bold text-gradient mb-4">100%</div>
              <div className="text-blue-100 text-lg font-medium">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up">
              Meet Your Technician
            </h3>
            <p className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto font-body animate-fade-in-up animate-delay-200 leading-relaxed">
              Get to know the expert behind Cell Tech @ UF
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Profile */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="relative inline-block mb-8">
                <img 
                  src="/wasseem%202.png" 
                  alt="Wasseem Barghouthi" 
                  className="w-64 h-64 mx-auto lg:mx-0 rounded-full object-cover shadow-2xl animate-pulse-glow hover-lift glow-on-hover border-4 border-orange-400/20"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-accent rounded-full flex items-center justify-center animate-wave shadow-xl">
                  <span className="text-white text-3xl">🔧</span>
                </div>
              </div>
              <h4 className="text-4xl font-heading font-bold text-white mb-4">Wasseem Barghouthi</h4>
              <p className="text-gradient font-body font-bold text-xl mb-6">Certified iPhone Repair Specialist</p>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="flex text-orange-400 text-2xl">
                  {'★'.repeat(5)}
                </div>
                <span className="text-blue-100 text-lg font-body font-medium">200+ Successful Repairs</span>
              </div>
            </div>

            {/* Enhanced About Content */}
            <div className="space-y-8 animate-slide-in-right animate-delay-200">
              <div className="glass-card rounded-3xl p-8 hover-lift">
                <h5 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-4">
                  <span className="text-orange-400 text-3xl">🎓</span>
                  Experience & Education
                </h5>
                <p className="text-blue-100 font-body leading-relaxed text-lg">
                  As a University of Florida student studying Electrical Engineering, I understand the importance of having a working phone on campus. With over 2 years of experience in mobile device repair and 200+ successful repairs, I&apos;ve built a reputation for quality work and honest pricing.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 hover-lift">
                <h5 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-4">
                  <span className="text-orange-400 text-3xl">🛠️</span>
                  Why Trust Me?
                </h5>
                <div className="space-y-4">
                  {[
                    'Certified in iPhone repair techniques',
                    'Use only high-quality replacement parts',
                    'Transparent pricing with no hidden fees',
                    'Quick turnaround - most repairs in 3 hours',
                    'Fellow UF student who understands your needs'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4 text-blue-100 font-body text-lg">
                      <span className="text-orange-400 text-xl mt-1">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 hover-lift border-orange-300/20 bg-gradient-to-br from-orange-500/10 to-orange-600/10">
                <h5 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-4">
                  <span className="text-orange-400 text-3xl">💬</span>
                  My Promise to You
                </h5>
                <p className="text-white font-body leading-relaxed italic text-lg">
                  &quot;I treat every device like it&apos;s my own. Your phone is important to you, and I understand that. That&apos;s why I provide honest assessments, fair pricing, and quality repairs that last. As a fellow Gator, I&apos;m here to help keep you connected!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Section */}
      <section className="relative z-10 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up">
              What UF Students Say
            </h3>
            <p className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto font-body animate-fade-in-up animate-delay-200 leading-relaxed">
              Real reviews from real students who trust us with their devices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 animate-slide-in-left">
              <div className="glass-card rounded-3xl p-8">
                <h4 className="text-3xl font-heading font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-orange-400 text-4xl">⭐</span>
                  Customer Reviews
                </h4>
                <ReviewsList />
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-in-right animate-delay-200">
              <div className="glass-card rounded-3xl p-8">
                <h4 className="text-3xl font-heading font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-orange-400 text-4xl">✍️</span>
                  Share Your Experience
                </h4>
                <ReviewForm />
              </div>
              
              {/* Enhanced Why Choose Us */}
              <div className="glass-card rounded-3xl p-8 border-orange-300/20 bg-gradient-to-br from-orange-500/10 to-orange-600/10 hover-lift">
                <h4 className="text-2xl font-heading font-bold text-white mb-6">Why Choose Cell Tech @ UF?</h4>
                <div className="space-y-4">
                  {[
                    'On-campus convenience',
                    'Student-friendly pricing',
                    'Quick turnaround times',
                    'Quality parts & warranty',
                    'Experienced technicians'
                  ].map((reason, i) => (
                    <div key={i} className="flex items-center gap-4 text-white text-lg">
                      <span className="text-orange-400 text-xl">✓</span>
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 glass-card border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <img 
                  src="/ctlogo.png" 
                  alt="Cell Tech @ UF Logo" 
                  className="w-16 h-16 rounded-2xl shadow-lg object-cover"
                />
                <div>
                  <h4 className="text-2xl font-heading font-bold text-white">Cell Tech @ UF</h4>
                  <p className="text-blue-200 text-lg">iPhone Repair Experts</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up animate-delay-200">
              <h5 className="font-heading font-bold text-white mb-6 text-xl">Contact Info</h5>
              <div className="space-y-4">
                <p className="text-blue-100 flex items-center justify-center md:justify-start gap-3 text-lg">
                  <span className="text-2xl">📞</span>
                  <a href="tel:239-321-4052" className="hover:text-orange-400 transition-colors font-medium">239-321-4052</a>
                </p>
                <p className="text-blue-100 flex items-center justify-center md:justify-start gap-3 text-lg">
                  <span className="text-2xl">✉️</span>
                  <a href="mailto:wasseemb2007@gmail.com" className="hover:text-orange-400 transition-colors font-medium">wasseemb2007@gmail.com</a>
                </p>
                <p className="text-blue-100 flex items-center justify-center md:justify-start gap-3 text-lg">
                  <span className="text-2xl">📍</span>
                  <span className="font-medium">University of Florida Campus</span>
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up animate-delay-400">
              <h5 className="font-heading font-bold text-white mb-6 text-xl">Quick Actions</h5>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:239-321-4052"
                  className="gradient-accent glow-on-hover button-press text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block focus-ring"
                >
                  Call for Quote
                </a>
                <a
                  href="sms:239-321-4052"
                  className="gradient-accent glow-on-hover button-press text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block focus-ring"
                >
                  Text Us Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center animate-fade-in-up animate-delay-600">
            <p className="text-blue-200 text-lg font-medium">
              © 2024 Cell Tech @ UF. Serving University of Florida students with expert iPhone repair services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
