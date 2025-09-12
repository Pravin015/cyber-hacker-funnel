import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Award, Shield, Target } from "lucide-react";
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
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-secondary text-secondary-foreground cyber-glow-green">
              🔥 Limited Time Offer - Only ₹99
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              Learn to Hack Ethically & Build a 6-Figure Cybersecurity Career 🚀
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              3-Hour Live Masterclass by India's Top Bug Bounty Hunter – Learn real-world hacking skills for just ₹99 (instead of ₹999).
            </p>
            <Button variant="hero" size="xl" className="mb-6">
              🔥 Reserve My Spot for ₹99
            </Button>
            <div className="flex items-center justify-center gap-4 text-secondary">
              <CheckCircle className="h-5 w-5" />
              <span className="font-semibold">Certificate + 3 Job Calls Guaranteed</span>
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
              <Button variant="secondary" size="xl">
                👉 Book My Seat Now for ₹99
              </Button>
            </div>
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
            <Button variant="cyberOutline" size="xl">
              👉 Book My Seat Now for ₹99
            </Button>
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
            <Button variant="hero" size="xl" className="mb-4">
              🔥 Join the Workshop for ₹99
            </Button>
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
            <Button variant="hero" size="xl" className="text-xl px-16">
              👉 Yes! I want to become a Cybersecurity Pro 🚀 – Book Now for ₹99
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button variant="hero" className="w-full" size="lg">
          🔥 Book Now for ₹99
        </Button>
      </div>
    </div>
  );
};

export default Index;