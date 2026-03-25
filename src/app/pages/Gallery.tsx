import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X } from "lucide-react";

const categories = ["All", "Vinyl Wrap", "Ceramic Coating", "Tinting", "PPF"];

const images = [
  {
    url: "https://images.unsplash.com/photo-1577578677533-f370bbd3f1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBibGFja3xlbnwxfHx8fDE3NzMxMzA1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vinyl Wrap",
  },
  {
    url: "https://images.unsplash.com/photo-1687845541910-8987370a8225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29hdGluZyUyMGNhciUyMHNoaW5lfGVufDF8fHx8MTc3MzIyMzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ceramic Coating",
  },
  {
    url: "https://images.unsplash.com/photo-1612126413358-8ae4b09e0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwZGFya3xlbnwxfHx8fDE3NzMyMjMwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tinting",
  },
  {
    url: "https://images.unsplash.com/photo-1731872141767-17f3b3e7a1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBwYWludCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzczMjIzMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "PPF",
  },
  {
    url: "https://images.unsplash.com/photo-1763098905162-85dc8039b125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNwb3J0cyUyMGNhciUyMGRldGFpbHxlbnwxfHx8fDE3NzMyMjMwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vinyl Wrap",
  },
  {
    url: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMjMwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ceramic Coating",
  },
  {
    url: "https://images.unsplash.com/photo-1761934658038-d0e6792378b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbnxlbnwxfHx8fDE3NzMyMjMwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "PPF",
  },
  {
    url: "https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NzMxNDAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tinting",
  },
  {
    url: "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBoZWFkbGlnaHQlMjBjbG9zZXVwJTIwZGV0YWlsfGVufDF8fHx8MTc3MzE5Nzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ceramic Coating",
  },
  {
    url: "https://images.unsplash.com/photo-1760827797819-4361cd5cd353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwcHJvZmVzc2lvbmFsJTIwc2VydmljZXxlbnwxfHx8fDE3NzMxODcwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Vinyl Wrap",
  },
  {
    url: "https://images.unsplash.com/photo-1730068001928-f0983eb1ce94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwb2xpc2hpbmclMjBkZXRhaWwlMjB3b3JrfGVufDF8fHx8MTc3MzIyMzAzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "PPF",
  },
  {
    url: "https://images.unsplash.com/photo-1752959818576-b0991721789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3aGVlbCUyMGRldGFpbHxlbnwxfHx8fDE3NzMxMzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Tinting",
  },
  {
    url: "https://images.unsplash.com/photo-1771491237067-5d108e956e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBidWZmaW5nJTIwcG9saXNofGVufDF8fHx8MTc3MzIyMzA0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Ceramic Coating",
  },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
              Our Work Gallery
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our portfolio of premium auto detailing projects
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black glow-blue"
                    : "glass hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.url}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="image-zoom rounded-xl overflow-hidden glass cursor-pointer aspect-square"
                onClick={() => setLightboxImage(image.url)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-3 glass rounded-full hover:bg-white/10 transition-all"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={lightboxImage}
                alt="Gallery"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
