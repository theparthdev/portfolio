import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      icon: "🎨"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      icon: "⚙️"
    },
    {
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
      icon: "🔧"
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS", "Vercel", "Render"],
      icon: "☁️"
    },
    {
      title: "Authentication & Security",
      skills: ["JWT", "bcrypt", "Role-based Access Control"],
      icon: "🔐"
    },
    {
      title: "Routing & Navigation",
      skills: ["React Router DOM", "TanStack Router"],
      icon: "🧭"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 fade-up">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 fade-up stagger-1">
            Technologies I've learned and worked with during my internship at DNK Media
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className={`glass-card border-0 hover:shadow-lg transition-all duration-300 fade-up stagger-${index + 1}`}>
                <CardHeader className="text-center pb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="skill-tag">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center fade-up stagger-3">
            <div className="inline-flex items-center space-x-2 text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Currently expanding my skillset and building projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;