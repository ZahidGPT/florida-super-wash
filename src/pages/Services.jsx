import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Sparkles, Car, Shield, Zap, SprayCan, Check, ArrowRight, Clock, Award, Users, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Express Exterior Wash",
    desc: "Quick and thorough exterior wash with our premium pH-balanced soap, spot-free rinse, and air dry. Perfect for a fast refresh.",
    price: "From 2",
    features: ["Spot-free rinse", "Premium soap", "Tire shine", "Window cleaning", "Under 15 minutes", "No appointment needed"],
    color: "primary"
  },
  {
    icon: Car,
    title: "Full-Service Wash",
    desc: "Complete interior and exterior wash package. Includes tire shine, window cleaning, vacuum, dashboard wipe-down, and air freshener.",
    price: "From 5",
    features: ["Interior vacuum", "Dashboard polish", "Floor mat cleaning", "Air freshener", "Tire shine", "Exterior wash"],
    color: "accent"
  },
  {
    icon: Sparkles,
    title: "Interior Detailing",
    desc: "Deep cleaning of your car's interior — full vacuum, shampoo of seats & carpets, leather conditioning, and dashboard restoration.",
    price: "From 0",
    features: ["Leather conditioning", "Carpet shampoo", "Dashboard restoration", "Odor elimination", "UV protection", "2+ hour service"],
    color: "primary"
  },
  {
    icon: Shield,
    title: "Clay Bar Treatment",
    desc: "Removes embedded contaminants from your paint surface for an ultra-smooth finish that's ready for wax or ceramic coating.",
    price: "From 0",
    features: ["Paint decontamination", "Removes rail dust/tar", "Prep for wax/coating", "Restores smoothness", "1–2 hour service", "Hand-applied"],
    color: "accent"
  },
  {
    icon: Zap,
    title: "Ceramic Coating",
    desc: "Long-lasting paint protection with our professional ceramic coating. Repels water, UV rays, and dirt for months of effortless shine.",
    price: "From 50",
    features: ["9+ months protection", "Hydrophobic surface", "UV resistance", "Easy cleaning", "Professional-grade", "Paint warranty"],
    color: "primary"
  },
  {
    icon: SprayCan,
    title: "Engine Bay Cleaning",
    desc: "Safe and thorough engine bay degreasing and detailing. Keeps your engine looking clean and helps spot leaks early.",
    price: "From 5",
    features: ["Degreasing", "Safe for electronics", "Dressings applied", "Leak inspection", "30‑45 minutes", "Protective coating"],
    color: "accent"
  },
];

const steps = [
  { number: "01", title: "Drive In or Book Online", desc: "Pull up to our Gibsonton Drive location — no appointment needed. Or schedule ahead for priority service." },
  { number: "02", title: "Choose Your Package", desc: "Pick the service that fits your needs and budget. Our team will explain every step." },
  { number: "03", title: "Relax & Watch the Magic", desc: "Grab a coffee in our lounge or run errands while we make your car look brand new." },
  { number: "04", title: "Drive Away Shining", desc: "Pick up your spotless ride, pay conveniently, and enjoy that new‑car feeling all over again." },
];

export default function Services() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-primary-800 to-neutral-900 text-white text-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80" alt="Car wash services" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative z-10">
          <motion.h1 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Our <span className="text-accent-400">Services</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-lg text-white/70 max-w-2xl mx-auto">
            From a quick rinse to a full detail — professional car care at prices that make sense.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Complete Car Care Solutions</h2>
          <p className="section-subtitle">We offer a full range of washing, detailing, and protection services to keep your vehicle looking its best.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((s, i) => (
              <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} whileHover={{y:-5}} className="card group">
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${s.color === 'primary' ? 'bg-primary-50' : 'bg-accent-50'}`}>
                    <s.icon className={`w-7 h-7 ${s.color === 'primary' ? 'text-primary-500' : 'text-accent-500'}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                  <p className="text-neutral-500 mb-5 leading-relaxed">{s.desc}</p>
                  
                  <div className="space-y-3 mb-6">
                    {s.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-neutral-600">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-5 border-t border-neutral-100">
                    <span className="text-lg font-bold text-primary-600">{s.price}</span>
                    <a href="tel:(813) 956-9274" className="flex items-center gap-1 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Four simple steps to a spotless ride.</p>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}} className="text-center relative">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6 mx-auto relative z-10">
                  <span className="text-5xl font-black text-white">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-neutral-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-neutral-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: "Fast Turnaround", desc: "Most washes completed in under 20 minutes. We respect your time." },
            { icon: Award, title: "Premium Products", desc: "We use only professional‑grade soaps, waxes, and equipment." },
            { icon: Users, title: "Trained Experts", desc: "Every team member receives ongoing training in the latest techniques." },
            { icon: ShieldCheck, title: "Satisfaction Guarantee", desc: "If you're not happy, we'll make it right — no questions asked." },
          ].map((item, i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-neutral-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</motion.h2>
        <motion.p initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Call us today or just drive in — we're always ready to make your car shine.</motion.p>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:(813) 956-9274" className="inline-block bg-white text-accent-600 font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all text-lg">
            Call (813) 956-9274
          </a>
          <Link to="/contact" className="inline-block border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
            Send a Message
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
