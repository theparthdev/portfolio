import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-5 w-5" />
            <span className="font-semibold">Parth Namberdar</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-sm text-primary-foreground/70 mt-4 md:mt-0">
            © 2024 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;