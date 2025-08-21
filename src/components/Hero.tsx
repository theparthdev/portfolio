import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70 z-10" />
      
      <div className="container mx-auto px-6 text-center z-20 relative">
        <div className="max-w-4xl mx-auto fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Parth Namberdar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 fade-up stagger-1">
            Aspiring Software Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-up stagger-2">
            Computer Applications student with hands-on experience in full-stack development, 
            passionate about creating innovative solutions with modern web technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 fade-up stagger-3">
            <Button size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View Work
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-16 fade-up stagger-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:namberdarparth@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;