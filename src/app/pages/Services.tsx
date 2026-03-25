import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Sparkles, Shield, Sun, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Vinyl Wrapping",
    description: "Transform your vehicle's appearance with premium vinyl wraps. Choose from thousands of colors, finishes, and textures to create a truly unique look.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1577578677533-f370bbd3f1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBibGFja3xlbnwxfHx8fDE3NzMxMzA1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/vinyl-wrapping",
    features: ["Color Change Wraps", "Matte & Gloss Finishes", "Chrome & Metallic", "Custom Graphics"],
  },
  {
    title: "Ceramic Coating",
    description: "Ultimate protection with a long-lasting ceramic shield. Hydrophobic properties, UV protection, and a brilliant shine that lasts for years.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1687845541910-8987370a8225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29hdGluZyUyMGNhciUyMHNoaW5lfGVufDF8fHx8MTc3MzIyMzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/ceramic-coating",
    features: ["9H Hardness", "Hydrophobic Protection", "UV Resistance", "5-Year Warranty"],
  },
  {
    title: "Window Tinting",
    description: "Professional window tinting for privacy, comfort, and style. Premium films that block UV rays and reduce heat while maintaining clarity.",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1612126413358-8ae4b09e0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwZGFya3xlbnwxfHx8fDE3NzMyMjMwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/window-tinting",
    features: ["99% UV Block", "Heat Rejection", "Lifetime Warranty", "Multiple Shade Options"],
  },
  {
    title: "Paint Protection Film",
    description: "Invisible protection against chips, scratches, and environmental damage. Self-healing technology keeps your paint looking pristine.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1731872141767-17f3b3e7a1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBwYWludCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzczMjIzMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/paint-protection",
    features: ["Self-Healing Technology", "Crystal Clear Finish", "10-Year Warranty", "Full or Partial Coverage"],
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
             <h1 className="pb-12 text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
  Premium Auto Detailing Services
</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Professional services designed to protect, enhance, and transform your luxury vehicle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <AnimatedSection key={service.title}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="image-zoom rounded-2xl overflow-hidden glass">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-lg glow-blue">
                      <service.icon className="h-8 w-8 text-black" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-white/70 text-lg mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-2 glass-light rounded-lg px-4 py-3"
                      >
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full"></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-lg glow-blue-hover"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-12 text-center border-2 border-[#00d4ff]/20 glow-blue">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Contact us for a free consultation and we'll help you choose the perfect service for your vehicle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-lg glow-blue-hover"
              >
                <span>Book Appointment</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 glass text-white rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
