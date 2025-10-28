import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Star,
  ExternalLink,
  User,
} from "lucide-react";
import { Global } from "recharts";

const education = [
  {
    institution: "Assiut National University",
    faculty: "Faculty of Computers and Artificial Intelligence",
    period: "2025 - Present",
    status: "Current",
    location: "Assiut, Egypt",
    description:
      "Continuing my studies in Computer Science focusing on advanced algorithms, machine learning, and software engineering practices.",
  },
  {
    institution: "Minya National University",
    faculty: "Faculty of Computers and Artificial Intelligence",
    period: "2023 - 2025",
    status: "Transferred from it",
    location: "Minya, Egypt",
    description:
      "Built foundational knowledge in computer science, programming, and artificial intelligence concepts.",
  },
];

const courses = [
  {
    title: "Almdrasa Programming and Front-end Diploma",
    provider: "Almdrasa",
    category: "Front-end Development",
    icon: "💻",
    skills: ["HTML", "CSS", "JavaScript", "React Framework", "Python"],
    status: "Ongoing",
  },
  {
    title: "Software Development - Full Stack .NET Web Developer",
    provider: "DEPI",
    category: "Web Development",
    icon: "🌐",
    skills: [
      "ASP.NET Core",
      "Entity Framework",
      "Web APIs",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    status: "Ongoing",
  },
  {
    title: "Programming using Python",
    provider: "NTI",
    category: "Programming",
    icon: "🐍",
    skills: ["Python", "Data Structures", "OOP", "ML"],
    liveUrl: "https://www.linkedin.com/posts/activity-7376176760729784320-fVEf",
  },
  {
    title: "Getting Started with Deep Learning",
    provider: "NVIDIA DLI",
    category: "AI/ML",
    icon: "🧠",
    skills: ["Neural Networks", "TensorFlow", "Deep Learning"],
    liveUrl: "https://lnkd.in/p/e7wVkdYT",
  },
  /*{
    title: "C++ Fundamentals",
    provider: "Elzero Web School",
    category: "Programming",
    icon: "⚡",
    skills: ["C++", "Memory Management", "STL"],
  },
  {
    title: "Learn HTML5",
    provider: "Elzero Web School",
    category: "Web Development",
    icon: "🏗️",
    skills: ["HTML5", "Semantic Markup", "Accessibility"],
  },
  {
    title: "Learn CSS3",
    provider: "Elzero Web School",
    category: "Web Development",
    icon: "🎨",
    skills: ["CSS3", "Flexbox", "Grid", "Animations"],
  },
  {
    title: "Learn JavaScript",
    provider: "Elzero Web School",
    category: "Programming",
    icon: "⚡",
    skills: ["JavaScript", "DOM", "ES6+", "Async Programming"],
  },
  {
    title: "Mastering Python",
    provider: "Elzero Web School",
    category: "Programming",
    icon: "🐍",
    skills: ["Advanced Python", "Decorators", "Generators"],
  },
  {
    title: "Advanced C++",
    provider: "Mohamed El Desouki",
    category: "Programming",
    icon: "⚡",
    skills: ["Advanced C++", "Templates", "Design Patterns"],
  },
  {
    title: "Mastering Python for Beginners",
    provider: "Codezilla",
    category: "Programming",
    icon: "🚀",
    skills: ["Python Basics", "Problem Solving", "Projects"],
  },
  {
    title: "MySQL 5 Essential Trainimg",
    provider: "Elzero Web School",
    category: "Database",
    icon: "🗄️",
    skills: ["SQL", "Database Design", "Query Optimization"],
  },
  {
    title: "React Development Bootcamp",
    provider: "Udemy",
    category: "Frontend",
    icon: "⚛️",
    skills: ["React", "JSX", "State Management", "Hooks"],
  },
  {
    title: "MS SQL Server for Beginners",
    provider: "Mohamed El Desouki",
    category: "Database",
    icon: "🗄️",
    skills: ["SQL", "Database Design", "Query Optimization", "SSMS"],
  },*/
  {
    title: "Sprints X Microsoft Summer Camp - Web Development",
    provider: "Sprints",
    category: "Web Development",
    icon: "🌐",
    skills: ["Python Basics", "Problem Solving", "HTML", "CSS", "Git", "GitHup"],
    liveUrl: "https://lnkd.in/p/ePD3BS2s",
  },
];

export function Education() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const educationRef = useScrollAnimation<HTMLDivElement>();
  const coursesRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="scroll-reveal text-4xl md:text-5xl font-bold mb-6"
          >
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning through courses and
            certifications
          </p>
        </div>

        {/* Formal Education */}
        <div ref={educationRef} className="scroll-reveal mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Formal Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-lg font-medium mb-2">{edu.faculty}</p>
                      {edu.grade && (
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-muted-foreground">
                            Grade: {edu.grade}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <Badge
                        variant={
                          edu.status === "Current" ? "default" : "secondary"
                        }
                      >
                        {edu.status}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Courses & Certifications */}
        <div ref={coursesRef} className="scroll-reveal">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            Courses & Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="glass-card hover-lift group h-full flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-2xl mb-2">{course.icon}</div>
                    <Badge
                      variant={
                        course.status === "Ongoing" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {course.status || "Completed"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-3 h-3" />
                    {course.provider}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-grow">
                  {/* category badge */}
                  <Badge variant="outline" className="mb-4 text-xs w-fit">
                    {course.category}
                  </Badge>

                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-3">
                      Key Skills:
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {course.liveUrl && (
                    <Button
                      className="mt-auto bg-primary text-white hover:bg-primary/90 w-auto self-center"
                      onClick={() => window.open(course.liveUrl, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certification
                    </Button>
                    /*<Global className="w-4 h-4 mr-2" />*/
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">
                Continuous Learning Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I believe in the power of continuous learning and staying
                updated with the latest technologies. My diverse coursework from
                various platforms demonstrates my commitment to expanding my
                skill set and adapting to the ever-evolving tech landscape. Each
                course has contributed to building a solid foundation and
                practical expertise in modern development practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
