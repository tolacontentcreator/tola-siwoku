import { Linkedin, Mail, Facebook, Instagram, Globe } from "lucide-react";
import tolaLogo from "@/assets/tola-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center gap-3">
            <img src={tolaLogo} alt="Tola Siwoku Logo" className="h-16 w-16" />
            <h3 className="text-xl font-bold">
              Tola Siwoku <span className="text-primary">| AI Agents Builder</span>
            </h3>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/tolasiwoku/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:border-primary transition-all duration-300 glow-hover"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/ladyteee2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:border-primary transition-all duration-300 glow-hover"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/tolasiwoku"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:border-primary transition-all duration-300 glow-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://aimastery.vonza.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-border hover:border-primary transition-all duration-300 glow-hover"
              aria-label="AI Mastery Website"
            >
              <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:hello@ladyteee2020.com"
              className="group p-3 rounded-full border border-border hover:border-primary transition-all duration-300 glow-hover"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Tola Siwoku | AI Agents Builder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
