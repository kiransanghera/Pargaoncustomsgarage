import { Link } from "react-router";
import { Car, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-[#00d4ff] to-[#0080ff] rounded-lg">
                <Car className="h-5 w-5 text-black" />
              </div>
              <span className="font-bold bg-gradient-to-r from-[#00d4ff] to-white bg-clip-text text-transparent">
                PARAGON CUSTOMS GARAGE
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Premium auto detailing and protection services for luxury vehicles.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/5 rounded-lg hover:bg-[#00d4ff]/20 hover:text-[#00d4ff] transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#00d4ff]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#00d4ff]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/vinyl-wrapping"
                  className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                >
                  Vinyl Wrapping
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ceramic-coating"
                  className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                >
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link
                  to="/services/window-tinting"
                  className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                >
                  Window Tinting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/paint-protection"
                  className="text-white/60 hover:text-[#00d4ff] transition-colors text-sm"
                >
                  Paint Protection Film
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-[#00d4ff]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/60 text-sm">
                <Phone className="h-4 w-4 text-[#00d4ff]" />
                <span>(250)516-0042 </span>
              </li>
              <li className="flex items-center space-x-2 text-white/60 text-sm">
                <Mail className="h-4 w-4 text-[#00d4ff]" />
                <span>Paragoncustomsbc@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-white/60 text-sm">
                <MapPin className="h-4 w-4 text-[#00d4ff] mt-0.5" />
                <span>Victoria,Bc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Paragon Customs Garage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
