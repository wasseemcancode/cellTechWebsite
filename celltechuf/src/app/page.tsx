import ReviewForm from '@/components/ReviewForm'
import ReviewsList from '@/components/ReviewsList'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-orange-200/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform rotate-3">
                  CT
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⚡</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-800 tracking-tight">Cell Tech @ UF</h1>
                <p className="text-gray-600 font-medium">Expert iPhone Repair Services</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-orange-500">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-gray-500">Trusted by UF students</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:239-321-4052"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span className="text-lg">📞</span>
                <span>Call Now</span>
              </a>
              <a
                href="sms:239-321-4052"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span className="text-lg">💬</span>
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Fast, Affordable
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                iPhone Repairs
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional repair services right on campus for University of Florida students
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[
              { icon: '📱', title: 'Screen Replacement', desc: 'Cracked or broken screens' },
              { icon: '🔋', title: 'Battery Replacement', desc: 'Poor battery life' },
              { icon: '📸', title: 'Camera Repair', desc: 'Blurry or broken cameras' },
              { icon: '🔌', title: 'Charging Port', desc: 'Won\'t charge properly' }
            ].map((service, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm md:text-base">
                  {service.title}
                </h3>
                <p className="text-blue-200 text-xs md:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-blue-200 text-sm">Repairs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24hr</div>
              <div className="text-blue-200 text-sm">Average Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-blue-200 text-sm">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What UF Students Say
            </h3>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Real reviews from real students who trust us with their devices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-orange-400">⭐</span>
                  Customer Reviews
                </h4>
                <ReviewsList />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-orange-400">✍️</span>
                  Share Your Experience
                </h4>
                <ReviewForm />
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/30">
                <h4 className="text-xl font-bold text-white mb-4">Why Choose Cell Tech @ UF?</h4>
                <div className="space-y-3">
                  {[
                    'On-campus convenience',
                    'Student-friendly pricing',
                    'Quick turnaround times',
                    'Quality parts & warranty',
                    'Experienced technicians'
                  ].map((reason, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <span className="text-orange-400">✓</span>
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
      <footer className="relative z-10 bg-blue-900/80 backdrop-blur-sm border-t border-blue-700/50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold">
                  CT
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Cell Tech @ UF</h4>
                  <p className="text-blue-300 text-sm">iPhone Repair Experts</p>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Contact Info</h5>
              <div className="space-y-2">
                <p className="text-blue-200 flex items-center justify-center md:justify-start gap-2">
                  <span>📞</span>
                  <a href="tel:239-321-4052" className="hover:text-orange-400 transition-colors">239-321-4052</a>
                </p>
                <p className="text-blue-200 flex items-center justify-center md:justify-start gap-2">
                  <span>✉️</span>
                  <a href="mailto:wasseemb2007@gmail.com" className="hover:text-orange-400 transition-colors">wasseemb2007@gmail.com</a>
                </p>
                <p className="text-blue-200 flex items-center justify-center md:justify-start gap-2">
                  <span>📍</span>
                  <span>University of Florida Campus</span>
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Quick Actions</h5>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:239-321-4052"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-block"
                >
                  Call for Quote
                </a>
                <a
                  href="sms:239-321-4052"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-block"
                >
                  Text Us Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700/50 mt-8 pt-8 text-center">
            <p className="text-blue-300 text-sm">
              © 2024 Cell Tech @ UF. Serving University of Florida students with expert iPhone repair services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
