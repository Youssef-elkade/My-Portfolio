import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Code2,
  Database,
  Globe,
  Server,
  Layers,
  Terminal,
  Palette,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-blue-500",
    skills: [
      { name: "C++", level: 90 },
      { name: "C#", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    color: "text-green-500",
    skills: [
      { name: "ASP.NET Core", level: 90 },
      { name: "Django", level: 85 },
      { name: "React", level: 80 },
      { name: "Flask ", level: 75 },
      /*{ name: "ASP.NET Core", level: 85 },*/
      { name: "QT", level: 70 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-purple-500",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "T-SQL", level: 75 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "text-orange-500",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Responsive Design", level: 85 },
    ],
  },
];

const tools = [
  "Visual Studio",
  "VS Code",
  "Git",
  "Docker",
  "Postman",
  "MongoDB Compass",
  "SQL Server Management Studio",
  "Figma",
  "Chrome DevTools",
  "Windows Forms",
  "WPF",
];

export function Skills() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>();
  const toolsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="scroll-reveal text-4xl md:text-5xl font-bold mb-6"
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef}
          className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="glass-card hover-lift group h-full"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-2 rounded-lg bg-gradient-primary`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div ref={toolsRef} className="scroll-reveal text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              Tools & Technologies
            </h3>
            <p className="text-muted-foreground">
              Development tools and technologies I use regularly
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                <Zap className="w-3 h-3 mr-2 group-hover:text-secondary-foreground transition-colors" />
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "3+", label: "Years Learning", icon: "🎓" },
            { number: "6+", label: "Programming Languages", icon: "💻" },
            { number: "15+", label: "Technologies", icon: "⚡" },
            { number: "10+", label: "Projects Completed", icon: "🚀" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="glass-card text-center group hover-lift"
            >
              <CardContent className="p-6">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
