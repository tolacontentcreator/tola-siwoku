import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="glow-text text-primary">Entrepreneurs & Consultants</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what clients say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Testimonial Placeholder 1 */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 glow-hover">
            <CardContent className="p-8">
              <Quote className="h-10 w-10 text-primary/30 mb-6" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Working with Tola transformed how we approach automation. The AI solutions implemented have saved us countless hours and significantly improved our operational efficiency."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30" />
                <div>
                  <p className="font-semibold">Emerald Jacobs</p>
                  <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Testimonial Placeholder 2 */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 glow-hover">
            <CardContent className="p-8">
              <Quote className="h-10 w-10 text-primary/30 mb-6" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "The personal branding strategy and AI automation tools Tola provided have been game-changing for my consulting business. Revenue increased by 300% in just 6 months."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30" />
                <div>
                  <p className="font-semibold">David Meyer</p>
                  <p className="text-sm text-muted-foreground">Business Consultant</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Testimonials;
