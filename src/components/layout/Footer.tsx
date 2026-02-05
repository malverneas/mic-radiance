import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                <span className="text-xl font-bold text-primary-foreground">M</span>
              </div>
              <div>
                <span className="text-lg font-bold">MIC Radiology</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Advanced diagnostic imaging services with state-of-the-art technology and experienced radiologists.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/services" className="hover:text-primary-foreground transition-colors">Our Services</Link>
              <Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
              <Link to="/login" className="hover:text-primary-foreground transition-colors">Patient Portal</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>MRI Scans</span>
              <span>CT Scans</span>
              <span>Ultrasound</span>
              <span>X-Ray</span>
              <span>Mammography</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a href="tel:+27123456789" className="flex items-start gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+27 12 345 6789</span>
              </a>
              <a href="mailto:info@micradiology.co.za" className="flex items-start gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>info@micradiology.co.za</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Medical Drive, Pretoria, 0001</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2025 MIC Radiology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
