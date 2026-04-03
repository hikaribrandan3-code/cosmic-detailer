import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/alien-icon.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

interface NavbarProps {
  onQuoteClick: () => void;
}

const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Area 51 Detailing" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">AREA 51</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`font-mono text-sm uppercase tracking-wider transition-colors hover:text-primary ${location.pathname === l.path ? "text-primary" : "text-muted-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
          <Button onClick={onQuoteClick} className="bg-primary text-primary-foreground font-display uppercase tracking-wider hover:opacity-90">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground lg:hidden">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(l => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-sm uppercase tracking-wider ${location.pathname === l.path ? "text-primary" : "text-muted-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
            <Button onClick={() => { onQuoteClick(); setMobileOpen(false); }} className="bg-primary text-primary-foreground font-display uppercase tracking-wider">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
