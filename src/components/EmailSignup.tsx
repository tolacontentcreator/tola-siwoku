import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Success!",
      description: "You've been added to the AI insights list.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-ai-blue/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            
            {/* Card */}
            <div className="relative bg-card border border-primary/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join My <span className="glow-text text-primary">AI Insights</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Get free weekly strategies to scale your business using AI.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 border-border focus:border-primary"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 glow-hover"
                >
                  Subscribe
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
