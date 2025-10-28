import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Code2, Database, Globe, Server, Smartphone, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building complete web applications with modern frameworks"
  },
  {
    icon: Smartphone,
    title: "Desktop Applications",
    description: "Creating cross-platform desktop solutions with QT and .NET"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Expertise in SQL and NoSQL database architecture"
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Modern web development with React and ASP.NET Core"
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Scalable server-side applications and APIs"
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Optimizing applications for speed and efficiency"
  }
]

const technologies = [
  "C++", "C#", "Python", "Java", "JavaScript", "TypeScript",
  ".NET", "Django", "React", "QT", "ASP.NET Core", 
  "MongoDB", "MySQL", "T-SQL", "Node.js", "HTML5", "CSS3"
]

export function About() {
  const titleRef = useScrollAnimation()
  const contentRef = useScrollAnimation()
  const highlightsRef = useScrollAnimation()
  const techRef = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="scroll-reveal text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="gradient-text">Me</span>
          </h2>
          <p 
            ref={contentRef}
            className="scroll-reveal text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Passionate Junior Full-Stack & Desktop Application Developer dedicated to creating efficient, scalable solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Bio Text */}
          <div className="space-y-6">
            <Card className="glass-card hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am Youssef Mostafa Mohamed, a passionate Junior Full-Stack Developer and Desktop 
                  Application Developer with strong skills in both web and desktop development.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I specialize in building scalable, user-friendly systems using modern frameworks such as 
                  <span className="text-primary font-medium"> .NET</span>, 
                  <span className="text-primary font-medium"> Django</span>, 
                  <span className="text-primary font-medium"> QT</span>, and 
                  <span className="text-primary font-medium"> React</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a solid foundation in C++, C#, Python, Java, and JavaScript, I enjoy tackling 
                  challenging problems and creating efficient solutions. I'm always eager to learn new 
                  technologies, improve my coding practices, and contribute to impactful projects.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div 
            ref={highlightsRef}
            className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <Card key={index} className="glass-card hover-lift group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div 
          ref={techRef}
          className="scroll-reveal text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
