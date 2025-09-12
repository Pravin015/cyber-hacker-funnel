import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Users, Award, Shield, Target, Phone, Mail, Play } from "lucide-react";
import heroImage from "@/assets/cyber-hero-bg.jpg";
import trainerImage from "@/assets/trainer-shivam.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-secondary text-secondary-foreground cyber-glow-green">
                🔥 Limited Time Offer - Only ₹99
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
                Learn to Hack Ethically & Build a 6-Figure Cybersecurity Career 🚀
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                3-Hour Live Masterclass by India's Top Bug Bounty Hunter – Learn real-world hacking skills for just ₹99 (instead of ₹999).
              </p>
              <a href="https://rzp.io/rzp/Y8oreyCw" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="mb-6">
                  🔥 Reserve My Spot for ₹99
                </Button>
              </a>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-secondary">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Certificate + 3 Job Calls Guaranteed</span>
              </div>
            </div>
            
            {/* Video Section */}
            <div className="relative">
              <Card className="p-2 border-2 border-primary cyber-glow">
                <div className="relative bg-muted rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                  {/* Demo Video Placeholder */}
                  <div className="absolute inset-0 bg-gradient-cyber-dark flex items-center justify-center">
                    <div className="text-center">
                      <Play className="h-16 w-16 text-primary mx-auto mb-4 cyber-pulse" />
                      <p className="text-lg font-semibold">Watch Workshop Preview</p>
                      <p className="text-sm text-muted-foreground">Click to see what you'll learn</p>
                    </div>
                  </div>
                  {/* YouTube embed will go here */}
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Ethical Hacking Workshop Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Workshop Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Introduction to Ethical Hacking & Cybersecurity Careers
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Clock className="h-6 w-6 text-primary cyber-pulse" />
              <span className="text-xl">⏳ Limited Time Offer Ends Soon!</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 border-2 border-primary cyber-glow">
              <h3 className="text-2xl font-bold mb-6 text-primary">What You'll Learn:</h3>
              <div className="space-y-4">
                {[
                  "Introduction to Ethical Hacking",
                  "Web App Hacking",
                  "Mobile App Hacking", 
                  "Social Media Hacking",
                  "Freelancing in Cybersecurity",
                  "Career & Salary Growth in Cybersecurity"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="text-center">
              <div className="mb-8">
                <span className="text-2xl text-muted-foreground line-through">₹999</span>
                <span className="text-6xl font-bold text-secondary ml-4">₹99</span>
              </div>
              <p className="text-xl mb-8">Worth ₹999, yours at just ₹99 for a limited time!</p>
              <a href="https://rzp.io/rzp/Y8oreyCw" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="xl">
                  👉 Book My Seat Now for ₹99
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Content Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Course Breakdown</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive deep into each module and discover what makes this workshop so valuable
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="intro-hacking" className="border-2 border-muted rounded-lg px-6">
                <AccordionTrigger className="text-left text-xl font-semibold hover:text-primary">
                  🔐 Introduction to Ethical Hacking
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg space-y-3 pt-4">
                  <p>• Understanding the fundamentals of cybersecurity and ethical hacking</p>
                  <p>• Legal framework and responsible disclosure practices</p>
                  <p>• Setting up your hacking environment and essential tools</p>
                  <p>• Types of vulnerabilities and attack vectors</p>
                  <p>• How to think like a security professional</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="web-hacking" className="border-2 border-muted rounded-lg px-6">
                <AccordionTrigger className="text-left text-xl font-semibold hover:text-primary">
                  🌐 Web App Hacking
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg space-y-3 pt-4">
                  <p>• OWASP Top 10 vulnerabilities explained</p>
                  <p>• SQL Injection, XSS, and CSRF attacks</p>
                  <p>• Authentication and session management flaws</p>
                  <p>• Directory traversal and file inclusion attacks</p>
                  <p>• Live demonstration on real-world applications</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mobile-hacking" className="border-2 border-muted rounded-lg px-6">
                <AccordionTrigger className="text-left text-xl font-semibold hover:text-primary">
                  📱 Mobile App Hacking
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg space-y-3 pt-4">
                  <p>• Android and iOS application security testing</p>
                  <p>• Reverse engineering mobile applications</p>
                  <p>• API security testing for mobile backends</p>
                  <p>• Static and dynamic analysis techniques</p>
                  <p>• Common mobile vulnerabilities and exploits</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="social-hacking" className="border-2 border-muted rounded-lg px-6">
                <AccordionTrigger className="text-left text-xl font-semibold hover:text-primary">
                  👥 Social Media Hacking
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg space-y-3 pt-4">
                  <p>• Social engineering techniques and psychology</p>
                  <p>• OSINT (Open Source Intelligence) gathering</p>
                  <p>• Social media platform vulnerabilities</p>
                  <p>• Phishing and pretexting strategies</p>
                  <p>• Protecting against social engineering attacks</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="freelancing" className="border-2 border-muted rounded-lg px-6">
                <AccordionTrigger className="text-left text-xl font-semibold hover:text-primary">
                  💰 Freelancing in Cybersecurity
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg space-y-3 pt-4">
                  <p>• Setting up your bug bounty hunting profile</p>
                  <p>• Best platforms: HackerOne, Bugcrowd, Synack</p>
                  <p>• Writing effective vulnerability reports</p>
                  <p>• Pricing your services and negotiating rates</p>
                  <p>• Building long-term client relationships</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="career-growth" className="border-2 border-muted rounded-lg px-6">
                <AccordionTrigger className="text-left text-xl font-semibold hover:text-primary">
                  🚀 Career & Salary Growth in Cybersecurity
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg space-y-3 pt-4">
                  <p>• Complete career roadmap from beginner to expert</p>
                  <p>• Salary expectations: ₹3L to ₹50L+ progression</p>
                  <p>• Essential certifications: CEH, CISSP, OSCP</p>
                  <p>• Building a professional network in cybersecurity</p>
                  <p>• Interview preparation and portfolio building</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* About Trainer Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Your Expert Trainer</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src={trainerImage} 
                alt="Shivam Dwivedi - Ethical Hacker" 
                className="w-80 h-80 rounded-full mx-auto mb-6 border-4 border-primary cyber-glow object-cover"
              />
              <h3 className="text-3xl font-bold mb-2">Shivam Dwivedi</h3>
              <p className="text-xl text-primary mb-4">Ethical Hacker & Bug Bounty Expert</p>
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Top Companies Hacked</h4>
                    <p className="text-muted-foreground">Google, Microsoft, Intel, Tesla & more</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Experience</h4>
                    <p className="text-muted-foreground">5+ years of experience in Bug Bounty Hunting</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Students Trained</h4>
                    <p className="text-muted-foreground">Trained 5,000+ students globally</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {["Google", "Microsoft", "Intel", "Tesla"].map((company, index) => (
                  <Badge key={index} variant="outline" className="border-secondary text-secondary">
                    {company}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What You Get</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Certificate of Attendance",
                description: "Official completion certificate"
              },
              {
                icon: Target,
                title: "3 Job Call Opportunities", 
                description: "Direct interview calls"
              },
              {
                icon: Shield,
                title: "Practical Hacking Demos",
                description: "Live hands-on demonstrations"
              },
              {
                icon: Users,
                title: "Career Roadmap",
                description: "Complete cybersecurity path"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center border-2 border-muted hover:border-primary transition-cyber cyber-glow">
                <benefit.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://rzp.io/rzp/Y8oreyCw" target="_blank" rel="noopener noreferrer">
              <Button variant="cyberOutline" size="xl">
                👉 Book My Seat Now for ₹99
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Students Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Cybersecurity Analyst",
                text: "This workshop changed my career! Got my first cybersecurity job within 3 months.",
                rating: 5
              },
              {
                name: "Priya Patel",
                role: "Bug Bounty Hunter", 
                text: "Shivam's teaching style is amazing. Earned my first bug bounty of $500!",
                rating: 5
              },
              {
                name: "Amit Kumar",
                role: "Ethical Hacker",
                text: "Best investment I made. The practical demos were incredibly valuable.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-2 border-muted">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency & Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Don't Miss Out!</h2>
            <div className="mb-8">
              <span className="text-3xl text-muted-foreground line-through mr-4">Old Price: ₹999</span>
              <span className="text-6xl font-bold text-secondary">Offer Price: ₹99 ✅</span>
            </div>
            <p className="text-xl text-primary mb-8 cyber-pulse">
              "Offer valid only for first 100 students – Don't miss out!"
            </p>
            <a href="https://rzp.io/rzp/Y8oreyCw" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="mb-4">
                🔥 Join the Workshop for ₹99
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-cyber-dark">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Cybersecurity Journey?</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>3 Hours Duration</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span>3 Job Calls</span>
              </div>
            </div>
            <a href="https://rzp.io/rzp/Y8oreyCw" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="text-xl px-16">
                👉 Yes! I want to become a Cybersecurity Pro 🚀 – Book Now for ₹99
              </Button>
            </a>
            
            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-muted">
              <p className="text-lg mb-4">Have questions? Get in touch:</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href="tel:8087203095" className="text-lg hover:text-primary transition-cyber">
                    8087203095
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-secondary" />
                  <a href="mailto:sales@ashpranix.com" className="text-lg hover:text-primary transition-cyber">
                    sales@ashpranix.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a href="https://rzp.io/rzp/Y8oreyCw" target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="hero" className="w-full" size="lg">
            🔥 Book Now for ₹99
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Index;