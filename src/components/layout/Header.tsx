import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = ["/login", "/register", "/forgot-password"].includes(location.pathname);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top bar with contact info */}
      <div className="hidden md:block gradient-hero">
        <div className="container flex h-8 items-center justify-between text-sm text-primary-foreground/90">
          <div className="flex items-center gap-6">
            <a href="tel:+27123456789" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +27 12 345 6789
            </a>
            <a href="mailto:info@micradiology.co.za" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" />
              info@micradiology.co.za
            </a>
          </div>
          <p className="text-primary-foreground/70">Mon - Fri: 7:00 AM - 6:00 PM | Sat: 8:00 AM - 1:00 PM</p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-md">
            <span className="text-xl font-bold text-primary-foreground">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">MIC Radiology</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Diagnostic Imaging Center</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary hover:text-foreground ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth buttons */}
        {!isAuthPage && (
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild className="gradient-primary shadow-md hover:shadow-lg transition-shadow">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        )}

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-secondary ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/login" onClick={() => setIsOpen(false)}>Sign In</Link>
                </Button>
                <Button asChild className="w-full gradient-primary">
                  <Link to="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
                </Button>
              </div>
              <div className="pt-4 border-t text-sm text-muted-foreground">
                <a href="tel:+27123456789" className="flex items-center gap-2 py-2">
                  <Phone className="h-4 w-4" />
                  +27 12 345 6789
                </a>
                <a href="mailto:info@micradiology.co.za" className="flex items-center gap-2 py-2">
                  <Mail className="h-4 w-4" />
                  info@micradiology.co.za
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
