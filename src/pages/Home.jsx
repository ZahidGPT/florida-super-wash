import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Droplets, Sparkles, Car, Star, Clock, Award, ChevronRight } from 'lucide-react';

const services = [
  { icon: Droplets, title: 'Exterior Wash', desc: 'Gentle yet thorough exterior cleaning with premium soap and spot-free rinse.' },
  { icon: Sparkles, title: 'Interior Detailing', desc: 'Deep vacuum, dashboard polish, and leather conditioning for a like-new feel.' },
  { icon: Car, title: 'Full-Service Wash', desc: 'Complete exterior and interior package – our most popular service.' },
  { icon: Award, title: 'Wax & Shine', desc: 'Premium carnuba wax coat for lasting protection and a showroom finish.' },
];

const testimonials = [
  { name: 'Marcus T.', text: 'Best car wash in Riverview! They always do an amazing job and the price is fair.', rating: 5 },
  { name: 'Jessica L.', text: 'I\'ve been coming here for years. Consistent quality, friendly staff every time.', rating: 5 },
  { name: 'Derek R.', text: 'The full-service wash is worth every penny. My truck came back looking brand new!', rating: 4 },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900"></div>
        <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1920&q=80" alt="Car Wash" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Your Car Deserves<br /><span className="text-accent-400">The Best Wash</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}} className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Premium hand wash and detailing services in Riverview, FL. 3.9★ rating with 697+ happy customers.
          </motion.p>
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(813) 956-9274" className="btn-accent text-lg">Call Now — (813) 956-9274</a>
            <Link to="/services" className="inline-block border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">View Services</Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent"></div>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-50 py-10 -mt-1">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '697+', label: 'Happy Reviews', icon: Star },
            { value: '3.9★', label: 'Google Rating', icon: Star },
            { value: '8+', label: 'Years of Service', icon: Clock },
            { value: '25K+', label: 'Cars Washed', icon: Car },
          ].map((s, i) => (
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="flex flex-col items-center gap-2">
              <s.icon className="w-6 h-6 text-primary-500" />
              <span className="text-2xl md:text-3xl font-bold text-neutral-900">{s.value}</span>
              <span className="text-sm text-neutral-500">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-white">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">From a quick exterior rinse to a full detail — we've got your ride covered.</p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} whileHover={{y:-5}} className="card p-6 text-center group">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                <s.icon className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            View All Services <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Why Riverview Trusts Us</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: '💧', title: 'Premium Products', desc: 'We use only the highest quality soaps, waxes, and cleaners — safe for all paint types.' },
            { icon: '⚡', title: 'Fast Turnaround', desc: 'Get back on the road fast. Most washes completed in under 20 minutes.' },
            { icon: '❤️', title: 'Customer First', desc: 'Friendly staff, fair prices, and a satisfaction guarantee every single time.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}} className="text-center p-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-neutral-50">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Don't just take our word for it — see why 697+ customers left us a review.</p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{y:-5}} className="card p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-300'}`} />
                ))}
              </div>
              <p className="text-neutral-600 mb-4 leading-relaxed italic">"{t.text}"</p>
              <p className="font-semibold text-neutral-900">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Ready for a Spotless Ride?
        </motion.h2>
        <motion.p initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-lg text-neutral-500 mb-8">
          Walk in today or call ahead — we're always ready to make your car shine.
        </motion.p>
        <motion.a initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}} href="tel:(813) 956-9274" className="btn-accent text-lg">
          Call (813) 956-9274
        </motion.a>
      </section>
    </div>
  );
}
