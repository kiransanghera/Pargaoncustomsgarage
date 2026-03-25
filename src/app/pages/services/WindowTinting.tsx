import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { CheckCircle, ArrowRight, Sun } from "lucide-react";

const benefits = [
  "99% UV ray protection",
  "Significant heat reduction",
  "Enhanced privacy and security",
  "Reduced glare for safer driving",
  "Interior fade protection",
  "Improved aesthetics and style",
];

const process = [
  { step: "1", title: "Consultation", description: "Choose your preferred shade and film type" },
  { step: "2", title: "Preparation", description: "Thorough cleaning of all windows" },
  { step: "3", title: "Installation", description: "Precise cutting and professional application" },
  { step: "4", title: "Curing", description: "Quality check and drying process" },
];

const pricing = [
  { name: "Standard Tint",  features: ["Front Side Windows", "5% - 35% Shade", "Lifetime Warranty", "Premium Film"] },
  { name: "Full Vehicle",  features: ["All Windows", "Custom Shade", "Lifetime Warranty", "Ceramic Film"], popular: true },
  { name: "Luxury Package",  features: ["Full Vehicle", "Windshield Strip", "Ceramic IR Film", "Lifetime Warranty"] },
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

export function WindowTinting() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1612126413358-8ae4b09e0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aW5kb3clMjB0aW50aW5nJTIwZGFya3xlbnwxfHx8fDE3NzMyMjMwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Window Tinting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="p-3 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-lg glow-blue">
              <Sun className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
              Window Tinting
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Professional tinting for privacy, UV protection, and style
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Professional Window Tinting
            </h2>
            <p className="text-white/70 text-lg">
              Our window tinting service uses premium films from industry leaders like 3M and SunTek. We offer a range
              of shades and film types to match your preferences while complying with local regulations. Experience
              superior heat rejection, UV protection, and enhanced privacy.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-light rounded-xl p-6 flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-full mb-4 glow-blue">
                  <span className="text-2xl font-bold text-black">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
               Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass rounded-xl p-8 ${pkg.popular ? "border-2 border-[#00d4ff] glow-blue" : ""}`}
              >
                {pkg.popular && (
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#00d4ff] mb-6"></div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-white/70">
                      <CheckCircle className="h-5 w-5 text-[#00d4ff] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className={`block text-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black glow-blue-hover"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-12 text-center border-2 border-[#00d4ff]/20 glow-blue">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Get Professional Window Tinting
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book your appointment today and enjoy enhanced comfort, privacy, and style
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0080ff] text-black rounded-lg glow-blue-hover"
            >
              <span>Book Appointment</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
