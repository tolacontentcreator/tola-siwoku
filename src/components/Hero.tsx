import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 ai-grid-bg" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <span className="text-sm font-medium text-foreground">AI Agents Builder</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="glow-text text-primary">Tola Siwoku</span>
            <br />
            The AI Agents Builder
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            I help founders scale with AI-Powered Automation and Outcomes.
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-hover"
              asChild
            >
              <a href="https://aimastery.vonza.com/m/phone-consultation" target="_blank" rel="noopener noreferrer">
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-3xl animate-glow" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-ai-blue/10 blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
