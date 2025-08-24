import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 fade-up">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-0 fade-up stagger-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">
                    Bachelor of Computer Applications
                  </h4>
                  <p className="text-muted-foreground">
                    Panipath Institute of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Currently Pursuing
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 fade-up stagger-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Summer Intern</h4>
                  <p className="text-muted-foreground">
                    DNK Media - Siyadnk Software Pvt. Ltd.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Full-stack Development Focus
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-0 fade-up stagger-3">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+91 95887 11596</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>namberdarparth@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
