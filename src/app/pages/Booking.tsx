import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Car, Send } from "lucide-react";

export function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carModel: "",
    service: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // ✅ FormData for Formspree
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("_replyto", formData.email);
      form.append("phone", formData.phone);
      form.append("carModel", formData.carModel);
      form.append("service", formData.service);
      form.append("date", formData.date);
      form.append("message", formData.message);
      form.append("_subject", "New Booking Request 🚗");
      form.append("_template", "table");

      const res = await fetch("https://formspree.io/f/meerwjzo", {
        method: "POST",
        headers: {
          Accept: "application/json", // 🔥 CORS FIX
        },
        body: form,
      });

      if (res.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          carModel: "",
          service: "",
          date: "",
          message: "",
        });

        // auto hide success
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("❌ Failed to send booking");
      }
    } catch (error) {
      alert("⚠️ Network error");
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-center items-center mb-6 gap-3">
              <div className="p-3 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-lg">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-5xl font-bold text-white">
                Book Appointment
              </h1>
            </div>
            <p className="text-white/70">
              Schedule your premium auto detailing service today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg">
            {submitted ? (
              <div className="text-center py-10">
                <Car className="mx-auto mb-4 text-blue-400" size={50} />
                <h2 className="text-2xl font-bold text-white mb-2">
                  Booking Received!
                </h2>
                <p className="text-white/70">
                  We’ll contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input name="name" required placeholder="Name"
                  value={formData.name} onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white" />

                <input name="phone" required placeholder="Phone"
                  value={formData.phone} onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white" />

                <input name="email" required placeholder="Email"
                  value={formData.email} onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white" />

                <input name="carModel" required placeholder="Car Model"
                  value={formData.carModel} onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white" />

                <select name="service" required
                  value={formData.service} onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white">
                  <option value="">Select Service</option>
                  <option value="Vinyl Wrapping">Vinyl Wrapping</option>
                  <option value="Ceramic Coating">Ceramic Coating</option>
                  <option value="Window Tinting">Window Tinting</option>
                  <option value="Paint Protection">Paint Protection</option>
                </select>

                <input type="date" name="date" required
                  value={formData.date} onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white" />

                <textarea name="message" placeholder="Message"
                  value={formData.message} onChange={handleChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white" />

                <button type="submit" disabled={isSubmitting}
                  className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded text-white font-semibold flex justify-center items-center gap-2">
                  {isSubmitting ? "Sending..." : <> <Send size={18}/> Book Now </>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

