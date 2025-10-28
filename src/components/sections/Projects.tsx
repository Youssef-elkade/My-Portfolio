import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ExternalLink,
  Github,
  Database,
  Globe,
  Server,
  ShoppingCart,
  Heart,
  Truck,
  Code,
  Utensils,
} from "lucide-react";

const projects = [
  {
    title: "On-Demand Delivery Platform",
    description:
      "Work-in-progress delivery platform similar to Talabat and Mrsool. Features include shopping cart, secure checkout, real-time order tracking, and multi-vendor support.",
    category: "E-commerce Platform",
    icon: Truck,
    technologies: [
      "ASP.NET Core",
      "React",
      "MongoDB",
      "TypeScript",
      "Stripe API",
    ],
    features: [
      "Multi-vendor marketplace",
      "Real-time order tracking",
      "Secure payment processing",
      "Shopping cart & checkout",
      "Delivery route optimization",
    ],
    status: "WIP",
    type: "DEPI Project",
    liveUrl: "#",
  },
  {
    title: "PharmaCare Pharmacy",
    description:
      "A comprehensive Front-End system built for faculty project. Features inventory management, prescription tracking, sales analytics, and user authentication with role-based access control.",
    category: "Front-End Web Application",
    icon: Heart,
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Real-time inventory tracking",
      "Prescription management",
      "Sales analytics dashboard",
      "Role-based authentication",
      "PDF report generation",
    ],
    status: "Completed",
    type: "Faculty Project",
    liveUrl: "https://youssef-elkade.github.io/PharmaCare-Pharmacy/",
  },
  {
    title: "Chef Food Restaurant",
    description:
      "A modern, responsive restaurant website featuring food ordering, menu display, and reservation system. Built with pure HTML, CSS, and SCSS for optimal performance and clean design.",
    category: "Frontend Website",
    icon: Utensils,
    technologies: [
      "HTML5",
      "CSS3",
      "SCSS",
      "Responsive Design",
      "JavaScript",
      "UI",
      "UX",
    ],
    features: [
      "Fully responsive design",
      "Modern UI/UX",
      "Interactive menu",
      "Online reservation system",
      "Food ordering functionality",
    ],
    status: "Completed",
    type: "Frontend Project",
    liveUrl: "https://youssef-elkade.github.io/Chef-Food-Restaurant/",
  },
];

const additionalProjects = [
  {
    title: "Desktop Inventory App",
    tech: ["C#", "WPF", "SQL Server"],
    description: "Windows desktop application for inventory management",
  },
  {
    title: "Data Analysis Tool",
    tech: ["Python", "Pandas", "Matplotlib"],
    description: "Python tool for analyzing and visualizing business data",
  },
  {
    title: "QT Cross-Platform App",
    tech: ["C++", "QT", "SQLite"],
    description: "Cross-platform desktop application with modern UI",
  },
  {
    title: "Django REST API",
    tech: ["Python", "Django", "PostgreSQL"],
    description: "RESTful API backend with authentication and CRUD operations",
  },
];

export function Projects() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const mainProjectsRef = useScrollAnimation<HTMLDivElement>();
  const otherProjectsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="scroll-reveal text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work, from full-stack web applications
            to desktop solutions
          </p>
        </div>

        {/* Main Projects */}
        <div ref={mainProjectsRef} className="scroll-reveal space-y-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-lift group overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Icon & Status */}
                <div className="lg:col-span-1 bg-gradient-primary p-8 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <project.icon className="w-10 h-10 text-white" />
                  </div>
                  <Badge
                    className={`mb-2 ${
                    project.status === "Completed"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  {project.status}
                </Badge>
                  <p className="text-white/80 text-sm">{project.type}</p>

                  {project.liveUrl && (
                    <Button
                      className="mt-4 bg-white text-primary hover:bg-gray-100"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      View Live
                    </Button>
                  )}
                </div>

                {/* Project Details */}
                <div className="lg:col-span-2 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {project.title}
                        </CardTitle>
                        <p className="text-primary font-medium text-sm">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects 
        <div ref={otherProjectsRef} className="scroll-reveal">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="glass-card hover-lift group">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects and contributions, or get
                in touch to discuss potential collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="default"
                  className="bg-gradient-primary hover:shadow-glow"
                  onClick={() =>
                    window.open("https://github.com/Youssef-elkade", "_blank")
                  }
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
