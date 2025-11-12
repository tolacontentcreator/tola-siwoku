const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Entrepreneurs <span className="glow-text text-primary">Through AI</span>
            </h2>
          </div>
          
          {/* Content Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-ai-blue/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                My mission is to <span className="text-foreground font-semibold">empower entrepreneurs</span> to harness the transformative power of AI — so they can <span className="text-primary font-semibold">automate more, work less, and earn more</span>.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
                Through my work, I help founders integrate AI into their business models and build scalable systems that drive outcomes.
              </p>
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

export default About;
