import { motion } from "framer-motion";
import { Award, Users, Heart, Clock, Shield, Star, CheckCircle, MapPin } from "lucide-react";

const values = [
  { icon: Award, title: "Quality First", desc: "We use premium products and follow meticulous processes to ensure every car leaves spotless." },
  { icon: Users, title: "Community Focus", desc: "We're part of Riverview. Supporting local causes and treating every neighbor like family." },
  { icon: Heart, title: "Customer Care", desc: "Your satisfaction is our top priority. If you're not happy, we'll make it right — period." },
  { icon: Shield, title: "Integrity", desc: "Honest pricing, transparent service, and no hidden fees. We earn your trust every wash." },
  { icon: Clock, title: "Efficiency", desc: "Respect for your time means fast, thorough service without cutting corners." },
  { icon: Star, title: "Excellence", desc: "Continuous training and improvement to deliver the best car wash experience possible." },
];

const milestones = [
  { year: "2015", event: "Florida Super Wash founded by brothers Sam & Steve." },
  { year: "2017", event: "Expanded to full‑service detailing and ceramic coatings." },
  { year: "2019", event: "Reached 10,000 cars washed milestone." },
  { year: "2021", event: "Renovated facility with new equipment and lounge." },
  { year: "2023", event: "Earned 500+ five‑star Google reviews." },
  { year: "2024", event: "Launched eco‑friendly water reclamation system." },
];

const team = [
  { initials: "SS", name: "Sam Stevens", role: "Co‑Founder & Operations", bio: "25+ years in automotive care. Passionate about process and customer experience." },
  { initials: "SC", name: "Steve Carter", role: "Co‑Founder & Detailing", bio: "Master detailer trained in ceramic coating and paint correction." },
  { initials: "MJ", name: "Maria Johnson", role: "Service Manager", bio: "Keeps the team smiling and the schedule running smoothly." },
  { initials: "TL", name: "Tyler Lee", role: "Lead Washer", bio: "Expert in exterior washing and foam cannon techniques." },
];

const awards = [
  { emoji: "🏆", title: "Best Car Wash", org: "Riverview Chamber of Commerce", year: "2023" },
  { emoji: "⭐", title: "Google Top Rated", org: "Google Reviews", year: "2022‑2024" },
  { emoji: "🌿", title: "Eco‑Friendly Business", org: "Florida Green Alliance", year: "2024" },
  { emoji: "🤝", title: "Community Partner", org: "Local Schools & Charities", year: "Ongoing" },
];

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-primary-800 to-neutral-900 text-white text-center overflow-hidden">
        <div className="relative z-10">
          <motion.h1 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Our <span className="text-accent-400">Story</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-lg text-white/70 max-w-2xl mx-auto">
            Serving the Riverview community with premium car care since 2015.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Who We Are</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Florida Super Wash S and S was founded in 2015 by brothers <strong>Sam and Steve</strong>, two car enthusiasts who believed Riverview deserved a premium, customer‑first car wash experience.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Starting with two pressure washers and a dream, we've grown into Riverview's most trusted car wash — washing over <strong>25,000 vehicles</strong> and earning a <strong>3.9‑star rating</strong> with <strong>697+ reviews</strong>.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Today, we're proud to offer everything from a quick exterior rinse to professional ceramic coatings, all delivered with the same friendly, hometown service we started with.
              </p>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.2}} className="relative">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Team at work" className="rounded-2xl shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-black">25K+</div>
                <div className="text-sm font-medium">Cars Washed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-neutral-50">
        <h2 className="section-title">Our Values</h2>
        <p className="section-subtitle">The principles that drive every wash we deliver.</p>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                <v.icon className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{v.title}</h3>
              <p className="text-neutral-500">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <h2 className="section-title">Our Journey</h2>
        <p className="section-subtitle">Key milestones from our founding to today.</p>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 w-0.5 bg-primary-100 h-full -translate-x-1/2"></div>
          
          {milestones.map((mile, i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}} className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white z-10 -translate-x-1/2"></div>
              
              {/* Year */}
              <div className={`w-1/3 md:w-2/5 text-right pr-10 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left md:pl-10 md:pr-0'}`}>
                <span className="text-2xl font-black text-primary-600">{mile.year}</span>
              </div>
              
              {/* Card */}
              <div className="w-2/3 md:w-3/5 bg-neutral-50 rounded-2xl p-6 shadow-sm">
                <p className="text-neutral-700">{mile.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section bg-neutral-50">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">The friendly faces behind every clean car.</p>
        
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                {member.initials}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-neutral-500 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="section bg-white">
        <h2 className="section-title">Awards & Recognition</h2>
        <p className="section-subtitle">We're proud to be recognized for quality and community service.</p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((a, i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="flex items-center gap-4 bg-neutral-50 rounded-2xl p-5 border border-neutral-100">
              <span className="text-3xl">{a.emoji}</span>
              <div>
                <h4 className="font-semibold text-neutral-900">{a.title}</h4>
                <p className="text-sm text-neutral-500">{a.org}</p>
                <p className="text-xs text-neutral-400 mt-1">{a.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-bold mb-4">Visit Us Today</motion.h2>
        <motion.p initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          <MapPin className="inline-block w-5 h-5 mr-2" />
          10070B Gibsonton Dr, Riverview, FL 33578 • (813) 956‑9274
        </motion.p>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:(813) 956-9274" className="inline-block bg-white text-primary-600 font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all text-lg">
            Call Now
          </a>
          <a href="https://maps.google.com/?q=10070B+Gibsonton+Dr+Riverview+FL+33578" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
            Get Directions
          </a>
        </motion.div>
      </section>
    </div>
  );
}
