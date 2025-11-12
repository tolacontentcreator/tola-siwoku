import tolaLogo from "@/assets/tola-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={tolaLogo} alt="Tola Siwoku Logo" className="h-12 w-12" />
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">Tola Siwoku</span>
              <span className="text-primary font-semibold"> | AI Agents Builder</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-hover"
              asChild
            >
              <a href="https://aimastery.vonza.com/m/phone-consultation" target="_blank" rel="noopener noreferrer">
                Work With Me
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-border hover:border-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="https://aimastery.vonza.com/m/phone-consultation" target="_blank" rel="noopener noreferrer">
                Work With Me
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
