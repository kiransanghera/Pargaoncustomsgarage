import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Sparkles,
  Shield,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Vinyl Wrapping",
    description: "Transform your vehicle with premium vinyl wraps in any color or finish.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1577578677533-f370bbd3f1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBibGFja3xlbnwxfHx8fDE3NzMxMzA1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/vinyl-wrapping",
  },
  {
    title: "Ceramic Coating",
    description: "Ultimate protection with a long-lasting, high-gloss ceramic shield.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1687845541910-8987370a8225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29hdGluZyUyMGNhciUyMHNoaW5lfGVufDF8fHx8MTc3MzIyMzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/ceramic-coating",
  },
  {
    title: "Window Tinting",
    description: "Professional tinting for privacy, UV protection, and style.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1612126413358-8ae4b09e0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwZGFya3xlbnwxfHx8fDE3NzMyMjMwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/window-tinting",
  },
  {
    title: "Paint Protection Film",
    description: "Invisible protection against chips, scratches, and environmental damage.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1731872141767-17f3b3e7a1a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBwYWludCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzczMjIzMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/services/paint-protection",
  },
];

const features = [
  {
    icon: Shield,
    title: "Premium Products",
    description: "We use only the highest quality materials and products",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Our team consists of industry-certified experts",
  },
  {
    icon: CheckCircle,
    title: "Long-Lasting Protection",
    description: "Guaranteed durability and protection for years",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "100% satisfaction guarantee on all our services",
  },
];

const testimonials = [
  {
    name: "Michael Chen",
    rating: 5,
    text: "Absolutely incredible service! My Tesla looks brand new with the ceramic coating. The attention to detail is unmatched.",
    vehicle: "Tesla Model S",
  },
  {
    name: "Sarah Williams",
    rating: 5,
    text: "The vinyl wrap on my Mercedes exceeded all expectations. Professional team and stunning results!",
    vehicle: "Mercedes-Benz AMG GT",
  },
  {
    name: "David Rodriguez",
    rating: 5,
    text: "Best detailing service in the area. The PPF installation was flawless and my car is perfectly protected.",
    vehicle: "Porsche 911",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1763098905162-85dc8039b125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNwb3J0cyUyMGNhciUyMGRldGFpbHxlbnwxfHx8fDE3NzMyMjMwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMjMwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1761934658038-d0e6792378b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbnxlbnwxfHx8fDE3NzMyMjMwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NzMxNDAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBoZWFkbGlnaHQlMjBjbG9zZXVwJTIwZGV0YWlsfGVufDF8fHx8MTc3MzE5Nzc2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1771491237067-5d108e956e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBidWZmaW5nJTIwcG9saXNofGVufDF8fHx8MTc3MzIyMzA0MHww&ixlib=rb-4.1.0&q=80&w=1080",
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

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760827797819-4361cd5cd353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwcHJvZmVzc2lvbmFsJTIwc2VydmljZXxlbnwxfHx8fDE3NzMxODcwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent"
          >
            Premium Auto Detailing & Protection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            Protect, Enhance, and Transform Your Car with Professional Detailing Services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/booking"
              className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-lg glow-blue-hover inline-flex items-center justify-center space-x-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 glass text-white rounded-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00d4ff] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <AnimatedSection className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose from our range of professional detailing services designed for luxury vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link} className="group block">
                  <div className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="image-zoom h-48 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-[#00d4ff]/10 rounded-lg group-hover:bg-[#00d4ff]/20 transition-colors">
                          <service.icon className="h-5 w-5 text-[#00d4ff]" />
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-[#00d4ff] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white/60 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center text-[#00d4ff] text-sm group-hover:translate-x-2 transition-transform">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Why Choose Paragon Customs Garage 
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-light rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-full mb-4 glow-blue">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative">
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-[#ffd700] fill-[#ffd700]" />
                ))}
              </div>
              <p className="text-white/80 text-lg md:text-xl text-center mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="font-semibold text-[#00d4ff]">{testimonials[currentTestimonial].name}</p>
                <p className="text-white/60 text-sm">{testimonials[currentTestimonial].vehicle}</p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 glass rounded-full hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-[#00d4ff]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 glass rounded-full hover:bg-white/10 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-[#00d4ff]" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-[#00d4ff] w-8" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Preview */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-white/60 text-lg">Precision detailing that speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="image-zoom rounded-xl overflow-hidden aspect-square glass"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 px-8 py-4 glass rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-12 text-center border-2 border-[#00d4ff]/20 glow-blue">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book your appointment today and experience premium auto detailing
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-lg glow-blue-hover"
            >
              <span>Book Your Car Detailing Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
