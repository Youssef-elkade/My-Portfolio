import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, ArrowUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

/* Fixed Home Arrow Button */
function FixedHomeArrow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setIsAtTop(false);
      } else {
        setIsVisible(false);
        setIsAtTop(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground hover:scale-110"
          : "opacity-0 translate-y-10 pointer-events-none"
      } ${
        isAtTop
          ? "bg-muted text-muted-foreground"
          : "bg-secondary text-secondary-foreground"
      }`}
      aria-label="Back to home"
    >
      <ArrowUp className="w-6 h-6 transition-transform duration-300 ease-in-out" />
    </button>
  );
}

export function Hero() {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 opacity-40">
            {/* Floating Code Elements */}
            <div className="absolute top-20 left-10 animate-float text-primary/50 font-mono text-lg font-semibold">
              &lt;/&gt;
            </div>
            <div
              className="absolute top-40 right-20 animate-float text-primary/40 font-mono text-2xl font-bold"
              style={{ animationDelay: "1s" }}
            >
              {}
            </div>
            <div
              className="absolute bottom-40 left-20 animate-float text-primary/60 font-mono text-base font-medium"
              style={{ animationDelay: "2s" }}
            >
              function()
            </div>
            <div
              className="absolute bottom-20 right-10 animate-float text-primary/45 font-mono text-sm font-medium"
              style={{ animationDelay: "0.5s" }}
            >
              console.log()
            </div>

            {/* Geometric Shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/30 rotate-45 animate-float"></div>
            <div
              className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/20 rounded-full animate-float shadow-glow"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-primary rounded-lg animate-float shadow-elegant"
              style={{ animationDelay: "2.5s" }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Initial */}
          {/*  image removed
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
          <span className="text-white font-bold text-4xl">Y</span>
        </div> */}

          {/* Title */}
          <h1
            ref={titleRef}
            className="scroll-reveal text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text bg-gradient-to-r from-blue-500  to-purple-600 ">
              {" "}
              {/* animate-pulse-glow */}
              Youssef Mostafa Mohamed
            </span>
          </h1>

          {/* Subtitle with Typing Effect */}
          <div
            ref={subtitleRef}
            className="scroll-reveal text-xl md:text-2xl text-muted-foreground mb-4"
          >
            <span className="block font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Youssef Elkade
            </span><br/>
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Full Stack Developer
            </span>
            <span className="mx-2">•</span>
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Desktop Application Developer
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable, user-friendly systems using
            modern frameworks like
            <span className="text-primary font-medium"> .NET</span>,
            <span className="text-primary font-medium"> Django</span>,
            <span className="text-primary font-medium"> React</span>, and
            <span className="text-primary font-medium"> QT</span>
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="scroll-reveal flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/Youssef-elkade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:shadow-card transition-all duration-300 hover-lift"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="http://www.linkedin.com/in/youssef-mostafa-elkade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:shadow-card transition-all duration-300 hover-lift"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:youssefmostafaelkade@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:shadow-card transition-all duration-300 hover-lift"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>
      <FixedHomeArrow />
    </>
  );
}
