import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import tolaProfile from "@/assets/tola-profile.png";

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
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                <span className="text-sm font-medium text-foreground">AI Agents Builder</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="glow-text text-primary">Tola Siwoku</span>
                <br />
                The AI Agents Builder
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground">
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
            </div>

            {/* Right: Profile Image */}
            <div className="relative">
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-ai-blue/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                {/* Profile Image */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 glow-border">
                  <img 
                    src={tolaProfile} 
                    alt="Tola Siwoku - AI Agents Builder"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
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
