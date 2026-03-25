import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Heart, Award, Users, Shield, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "We never compromise on the quality of our work or materials",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our top priority in everything we do",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every detail of our service",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent, dependable service you can trust",
  },
];

const team = [
  {
    name: "Raghu kurali",
    role: "Master Detailer",
    image: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMjMwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Panam",
    role: "Ceramic Coating Specialist",
    image: "https://images.unsplash.com/photo-1687845541910-8987370a8225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29hdGluZyUyMGNhciUyMHNoaW5lfGVufDF8fHx8MTc3MzIyMzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "David Thompson",
    role: "Vinyl Wrap Expert",
    image: "https://images.unsplash.com/photo-1577578677533-f370bbd3f1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBibGFja3xlbnwxfHx8fDE3NzMxMzA1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
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

export function About() {
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
            <h1 className=" pb-12 text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00d4ff] to-white bg-clip-text text-transparent">
              About Paragon Customs Garage 
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Dedicated to delivering exceptional automotive detailing services with precision and care
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="image-zoom rounded-2xl overflow-hidden glass">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NzMxNDAzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Workshop"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Paragon Customs Garage began with a simple mission: to provide the highest quality
                  automotive detailing services to luxury car owners who demand nothing but the best.
                </p>
                <p>
                  What started as a small operation has grown into one of the most trusted names in premium auto
                  detailing. Our success is built on a foundation of expertise, attention to detail, and an unwavering
                  commitment to customer satisfaction.
                </p>
                <p>
                  Today, we serve a diverse clientele of automotive enthusiasts and luxury car owners, using only
                  premium products and cutting-edge techniques to protect and enhance their valuable investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-lg glow-blue">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4 text-white/70">
                <p>
                  To deliver unparalleled automotive detailing services that exceed expectations while building lasting
                  relationships with our clients based on trust, quality, and exceptional results.
                </p>
                <p>
                  We believe every vehicle deserves to look its absolute best, and we're passionate about making that
                  vision a reality through meticulous craftsmanship and premium materials.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 image-zoom rounded-2xl overflow-hidden glass">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761934658038-d0e6792378b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXIlMjBkZXRhaWxpbmclMjBjbGVhbnxlbnwxfHx8fDE3NzMyMjMwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mission"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-white/60 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-light rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-full mb-4 glow-blue">
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-white/60 text-lg">Certified professionals with years of experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="image-zoom h-64">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#00d4ff] text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Trust Us */}
      <AnimatedSection className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-light rounded-2xl p-12 text-center border-2 border-[#00d4ff]/20 glow-blue">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-full mb-6 glow-blue">
              <Heart className="h-10 w-10 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-[#00d4ff] bg-clip-text text-transparent">
              Why Customers Trust Us
            </h2>
            <p className="text-white/70 text-lg mb-6">
              With over 8 years of experience and thousands of satisfied customers, we've built a reputation for
              excellence in the automotive detailing industry. Our commitment to using only premium products, combined
              with our team's expertise and attention to detail, ensures your vehicle receives the care it deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00d4ff] mb-2">5000+</div>
                <div className="text-white/60">Cars Detailed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00d4ff] mb-2">8+</div>
                <div className="text-white/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#00d4ff] mb-2">100%</div>
                <div className="text-white/60">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
