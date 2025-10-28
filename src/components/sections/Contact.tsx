import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink
} from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "youssefmostafaelkade@gmail.com",
    link: "mailto:youssefmostafaelkade@gmail.com",
    description: "Send me an email for project inquiries"
  },
  {
    icon: Linkedin, 
    title: "LinkedIn",
    value: "Youssef Mostafa Mohamed",
    link: "http://www.linkedin.com/in/youssef-mostafa-elkade",
    description: "Connect with me professionally"
  },
  {
    icon: Github,
    title: "GitHub", 
    value: "Youssef-elkade",
    link: "https://github.com/Youssef-elkade",
    description: "Check out my code repositories"
  }
]

export function Contact() {
  const titleRef = useScrollAnimation<HTMLHeadingElement>()
  const formRef = useScrollAnimation<HTMLDivElement>()
  const infoRef = useScrollAnimation<HTMLDivElement>()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Hi Youssef,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:youssefmostafaelkade@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="scroll-reveal text-4xl md:text-5xl font-bold mb-6"
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? I'm always open to discussing new opportunities, 
            interesting projects, and innovative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className="scroll-reveal"
          >
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Send Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion / Job Opportunity / Collaboration"
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                      rows={6}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div 
            ref={infoRef}
            className="scroll-reveal space-y-6"
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <p className="text-muted-foreground">
                  Prefer direct contact? Reach out through any of these channels.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <a 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-all duration-300 hover-lift"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all duration-300">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">
                          {info.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Location & Availability
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Based in Egypt, available for remote work and collaborations. 
                  Open to both full-time opportunities and freelance projects.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Available for work</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <span>Response time: 24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, need technical consultation, or just want to connect, 
                I'm always excited to meet new people and explore new opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="default"
                  className="bg-gradient-primary hover:shadow-glow"
                  onClick={() => window.open('http://www.linkedin.com/in/youssef-mostafa-elkade', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:youssefmostafaelkade@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Directly
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
