import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

const categories = ["All", "Exterior", "Interior", "Detailing", "Before & After"];

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80", category: "Exterior", title: "Express Exterior Wash", caption: "High-pressure foam cannon application for thorough cleaning." },
  { id: 2, url: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80", category: "Exterior", title: "Hand Drying", caption: "Spot‑free microfiber drying to prevent water spots." },
  { id: 3, url: "https://images.unsplash.com/photo-1605164599901-57e69c755920?w=800&q=80", category: "Interior", title: "Interior Vacuum", caption: "Deep vacuuming of seats, carpets, and floor mats." },
  { id: 4, url: "https://images.unsplash.com/photo-1552930294-c0d190f3cf7e?w=800&q=80", category: "Before & After", title: "Paint Restoration", caption: "Clay bar treatment removes contaminants for a glass‑like finish." },
  { id: 5, url: "https://images.unsplash.com/photo-1600259828523-61b55d028889?w=800&q=80", category: "Detailing", title: "Wax Application", caption: "Hand‑applied carnauba wax for deep shine and protection." },
  { id: 6, url: "https://images.unsplash.com/photo-1507136567430-27688a3a2f4a?w=800&q=80", category: "Interior", title: "Dashboard Polish", caption: "Leather and plastic surfaces restored to like‑new condition." },
  { id: 7, url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", category: "Exterior", title: "Tire Shine", caption: "Non‑greasy tire dressing for a rich, black finish." },
  { id: 8, url: "https://images.unsplash.com/photo-1549317638-0bc25f6c9269?w=800&q=80", category: "Before & After", title: "Engine Bay Detail", caption: "Degreased and dressed engine bay — safe for all electronics." },
  { id: 9, url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80", category: "Detailing", title: "Ceramic Coating", caption: "Professional ceramic coating provides months of protection." },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goPrev = () => {
    setCurrentImage(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentImage(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-primary-800 to-neutral-900 text-white text-center overflow-hidden">
        <div className="relative z-10">
          <motion.h1 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Our <span className="text-accent-400">Gallery</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="text-lg text-white/70 max-w-2xl mx-auto">
            See the Florida Super Wash difference — before and after results speak for themselves.
          </motion.p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-neutral-400" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-primary-600 text-white shadow-md' : 'bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredImages.map((img, index) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square bg-white shadow-md"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="inline-block bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-2">
                      {img.category}
                    </div>
                    <h3 className="text-white font-heading font-semibold text-lg mb-1">{img.title}</h3>
                    <p className="text-white/80 text-sm">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400">No images found in this category. Try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "25K+", label: "Cars Washed", desc: "Since opening in 2015" },
            { value: "697+", label: "Five‑Star Reviews", desc: "On Google & Facebook" },
            { value: "99%", label: "Satisfaction Rate", desc: "Guaranteed quality" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15}}>
              <div className="text-5xl font-black text-primary-600 mb-2">{stat.value}</div>
              <h3 className="font-heading font-semibold text-xl mb-1">{stat.label}</h3>
              <p className="text-neutral-500 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors hidden sm:block"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors hidden sm:block"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-[85vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredImages[currentImage].url}
                alt={filteredImages[currentImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="bg-white/10 backdrop-blur-sm rounded-b-lg p-6 mt-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="inline-block bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {filteredImages[currentImage].category}
                    </div>
                    <h3 className="text-white font-heading font-semibold text-xl">{filteredImages[currentImage].title}</h3>
                    <p className="text-white/70 mt-1">{filteredImages[currentImage].caption}</p>
                  </div>
                  <div className="text-white text-sm">
                    {currentImage + 1} / {filteredImages.length}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
