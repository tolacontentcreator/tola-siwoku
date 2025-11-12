import { Brain, Workflow, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Generative AI Consulting",
    description: "Leverage cutting-edge AI models to create intelligent solutions that transform your business operations and customer experiences."
  },
  {
    icon: Workflow,
    title: "Automation Strategy",
    description: "Design and implement sophisticated automation workflows that eliminate repetitive tasks and maximize your team's productivity."
  },
  {
    icon: Users,
    title: "Personal Branding with AI",
    description: "Build a powerful personal brand using AI-driven content creation, social media automation, and audience engagement strategies."
  }
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="glow-text text-primary">I Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group relative bg-card border-border hover:border-primary/50 transition-all duration-300 glow-hover overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardContent className="p-8 relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
