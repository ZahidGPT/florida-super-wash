import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Shield, Award } from "lucide-react";

const servicesList = [
  "Express Exterior Wash",
  "Full-Service Wash", 
  "Interior Detailing",
  "Clay Bar Treatment",
  "Ceramic Coating",
  "Engine Bay Cleaning",
  "Other / Custom Request"
];

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    service: "", 
    message: "" 
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/\\S+@\\S+\\.\\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Please enter your message";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative py-32 px-6 bg-gradient-to-br from-primary-800 to-neutral-900 text-white text-center overflow-hidden">
        <div className="relative z-10">
          <motion.h1 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Get In <span className="text-accent-400">Touch</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-lg text-white/70 max-w-2xl mx-auto">
            Questions, quotes, or just want to say hi? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Get a Free Quote</h2>
                <p className="text-neutral-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700 mb-4">Thanks, {form.name}! We'll get back to you within 24 hours.</p>
                    <p className="text-green-600 text-sm">You can also call us directly at (813) 956‑9274 for immediate assistance.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => { setForm({...form, name: e.target.value}); setErrors({...errors, name: ""}); }}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-300 bg-red-50" : "border-neutral-300"} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                          placeholder="John Smith"
                        />
                        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => { setForm({...form, email: e.target.value}); setErrors({...errors, email: ""}); }}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-300 bg-red-50" : "border-neutral-300"} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">Service Interest</label>
                        <select
                          value={form.service}
                          onChange={e => setForm({...form, service: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Message *</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={e => { setForm({...form, message: e.target.value}); setErrors({...errors, message: ""}); }}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-300 bg-red-50" : "border-neutral-300"} focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="Tell us about your car, any specific needs, or preferred appointment times..."
                      />
                      {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-primary-700">Your information is never shared with third parties. We'll only contact you regarding your inquiry.</p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.2}} className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Address</h4>
                      <p className="text-neutral-500">10070B Gibsonton Dr</p>
                      <p className="text-neutral-500">Riverview, FL 33578</p>
                      <a href="https://maps.google.com/?q=10070B+Gibsonton+Dr+Riverview+FL+33578" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-1 inline-block">Open in Google Maps →</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Phone</h4>
                      <a href="tel:(813) 956-9274" className="text-neutral-500 hover:text-primary-600 transition-colors">(813) 956‑9274</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Hours</h4>
                      <p className="text-neutral-500">Monday – Friday: 7am – 7pm</p>
                      <p className="text-neutral-500">Saturday – Sunday: 8am – 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Prefer to Call?</h3>
                <p className="text-white/80 mb-6">We're here to answer any questions and help you book a wash. Give us a ring anytime during business hours.</p>
                <a href="tel:(813) 956-9274" className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all w-full text-center">
                  <Phone className="w-5 h-5" />
                  Call (813) 956‑9274
                </a>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  {[
                    { icon: Star, title: "4.9/5.0 Rating", desc: "697+ Google Reviews" },
                    { icon: Shield, title: "Licensed & Insured", desc: "Florida Business License" },
                    { icon: Award, title: "Eco‑Friendly", desc: "Water reclamation system" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-xl transition-colors">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900">{item.title}</h4>
                        <p className="text-sm text-neutral-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Find Us in Riverview</h3>
          <p className="text-neutral-500 mb-8">Conveniently located on Gibsonton Drive with easy access from I-75 and US-301.</p>
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <p className="text-primary-700 font-semibold">10070B Gibsonton Dr, Riverview, FL 33578</p>
                <a href="https://maps.google.com/?q=10070B+Gibsonton+Dr+Riverview+FL+33578" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">Open in Google Maps →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
