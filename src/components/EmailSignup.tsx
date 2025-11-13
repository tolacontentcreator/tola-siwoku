const EmailSignup = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-ai-blue/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            
            {/* Card */}
            <div className="relative bg-card border border-primary/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Hi, I'm Tola and I Teach <span className="glow-text text-primary">Foundational AI Programs</span> and I also Build <span className="glow-text text-primary">AI Agents</span>.
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I solve problems and help business owners and founders in their businesses and organizations with <span className="text-foreground font-semibold">AI-powered automation and outcomes</span>.
                </p>
                
                <p>
                  With over a decade of experience in brand development, content strategy, software implementation and tech automation, I teach founders how to <span className="text-foreground font-semibold">automate their brilliance</span>, manage their time, and have maximum productivity output.
                </p>
                
                <p>
                  I bring clarity to how executive teams and CEOs lead and manage their organizations.
                </p>
                
                <p>
                  What I teach isn't based on theory but from <span className="text-primary font-semibold">practical processes</span> in my own business and for my clients.
                </p>
                
                <p className="text-foreground font-semibold text-xl">
                  My goal is to provide my clients with the positive results they desire and deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-ai-blue/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
};

export default EmailSignup;
