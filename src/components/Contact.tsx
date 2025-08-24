import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 fade-up">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-16 fade-up stagger-1">
            I'm actively seeking opportunities to start my career as a software
            developer. Let's connect and discuss how I can contribute to your
            team.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-0 fade-up stagger-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                <p className="text-muted-foreground mb-4">
                  Send me an email and I'll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() =>
                    (window.location.href = "mailto:namberdarparth@gmail.com")
                  }
                >
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  namberdarparth@gmail.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 fade-up stagger-3">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Me</h3>
                <p className="text-muted-foreground mb-4">
                  Feel free to give me a call to discuss opportunities or
                  collaborations.
                </p>
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={() => (window.location.href = "tel:+91 95887 11596")}
                >
                  <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  +91 +91 95887 11596
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="fade-up stagger-3">
            <h3 className="text-2xl font-semibold mb-6">
              Ready to Start My Career
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              As a fresh graduate with practical internship experience, I'm
              eager to apply my skills in full-stack development and contribute
              to meaningful projects. I'm open to entry-level positions,
              internships, or collaborative opportunities.
            </p>
            <Button
              size="lg"
              className="group hero-gradient border-0 text-white"
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
