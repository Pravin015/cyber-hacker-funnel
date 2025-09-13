import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  Shield,
  Target,
  Phone,
  Mail,
  Play,
} from "lucide-react";
import heroImage from "@/assets/cyber-hero-bg.jpg";
import trainerImage from "@/assets/trainer-shivam.jpg";
import cybersecurityBg from "@/assets/cybersecurity-bg.jpg";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { StickyHeader } from "@/components/StickyHeader";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const animatedText =
    "Learn to Hack, Protect, and Earn Big in Cybersecurity 🚀 ";

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    }, 15000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShownPopup]);

  const handleClosePopup = () => {
    setShowExitPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Sticky Header */}
      <StickyHeader />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 pt-20">
        {/* Background Images */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${cybersecurityBg})` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-secondary text-secondary-foreground cyber-glow-green text-xs sm:text-sm">
                🔥 Limited Time Offer - Only ₹99
              </Badge>

              <h1
                className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-4 md:mb-6 leading-snug sm:leading-tight"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #02C3F9, #13EF9B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Learn to Hack, Protect, and Earn Big in Cybersecurity 🚀
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 px-2 sm:px-0">
                3-Hour Live Masterclass by India's Top Bug Bounty Hunter – Learn
                real-world hacking skills for just ₹99 (instead of ₹4999).
              </p>

              <a
                href="https://rzp.io/rzp/Y8oreyCw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="mb-4 md:mb-6 w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  🔥 Reserve My Spot for ₹99
                </Button>
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-secondary text-sm sm:text-base mt-4">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="font-semibold text-center lg:text-left">
                  Certificate + 3 Job Calls Guaranteed
                </span>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative mt-8 lg:mt-0 w-full">
              <Card className="p-2 border-2 border-primary cyber-glow">
                <div className="relative bg-muted rounded-lg aspect-video flex items-center justify-center overflow-hidden max-w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-purple-600/20 to-transparent flex items-center justify-center">
                    <div className="text-center px-2 sm:px-4">
                      <Play className="h-16 w-16 sm:h-20 sm:w-20 text-primary mx-auto mb-4 cyber-pulse" />
                      <p className="text-lg sm:text-xl font-semibold">
                        Watch Workshop Preview
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Click to see what you'll learn
                      </p>
                    </div>
                  </div>
                  <iframe
                    className="w-full h-full rounded-lg max-w-full"
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
      {/* ==================================================== */}
      {/* About Workshop Section */}
      <section className="py-12 sm:py-16 md:py-20 px-2" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              className="text-center font-extrabold
                 text-[1.5rem] sm:text-4xl md:text-5xl lg:text-5xl
                 leading-snug sm:leading-snug md:leading-snug lg:leading-snug mb-6"
            >
              🛡 Become a Cybersecurity Pro in
              <br />
              Just 3 Hours – For Only{" "}
              <span className="text-secondary">₹99</span>!
            </h1>
          </div>

          {/* Subheading */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary cyber-pulse" />
            <span className="text-base sm:text-lg md:text-xl">
              ⏳ Limited Time Offer Ends Soon!
            </span>
          </div>

          {/* Main Section: Left & Right Divs */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            {/* Left: What You'll Learn (Border Only) */}
            <div
              className="flex-1 p-6 sm:p-8 rounded-lg border-2 border-primary cyber-glow"
              data-aos="fade-up"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-primary">
                What You'll Learn:
              </h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Introduction to Ethical Hacking",
                  "Web App Hacking",
                  "Mobile App Hacking",
                  "Social Media Hacking",
                  "Freelancing in Cybersecurity",
                  "Career & Salary Growth in Cybersecurity",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pricing Section (Equal Width, No Border) */}
            <div
              className="flex-1 p-6 sm:p-8 rounded-lg flex flex-col items-center justify-center"
              data-aos="fade-up"
            >
              <span className="text-base sm:text-lg text-muted-foreground">
                Worth <span className="line-through">₹4999</span>
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary my-4">
                ₹99
              </span>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Limited Time Offer – Grab Your Spot Now
              </p>
              <a
                href="https://rzp.io/rzp/Y8oreyCw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto text-lg sm:text-lg"
                >
                  👉 Book My Seat Now for ₹99
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-card">
        <div className="container mx-auto">
          {/* Heading animation */}
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4 sm:px-0">
              Complete Course Breakdown
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Dive deep into each module and discover what makes this workshop
              so valuable
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            {/* tighter gap */}
            <Accordion type="single" collapsible className="space-y-1.5">
              {[
                {
                  value: "intro-hacking",
                  title: "🔐 Introduction to Ethical Hacking",
                  content: [
                    "Understanding the fundamentals of cybersecurity and ethical hacking",
                    "Legal framework and responsible disclosure practices",
                    "Setting up your hacking environment and essential tools",
                    "Types of vulnerabilities and attack vectors",
                    "How to think like a security professional",
                  ],
                },
                {
                  value: "web-hacking",
                  title: "🌐 Web App Hacking",
                  content: [
                    "OWASP Top 10 vulnerabilities explained",
                    "SQL Injection, XSS, and CSRF attacks",
                    "Authentication and session management flaws",
                    "Directory traversal and file inclusion attacks",
                    "Live demonstration on real-world applications",
                  ],
                },
                {
                  value: "mobile-hacking",
                  title: "📱 Mobile App Hacking",
                  content: [
                    "Android and iOS application security testing",
                    "Reverse engineering mobile applications",
                    "API security testing for mobile backends",
                    "Static and dynamic analysis techniques",
                    "Common mobile vulnerabilities and exploits",
                  ],
                },
                {
                  value: "social-hacking",
                  title: "👥 Social Media Hacking",
                  content: [
                    "Social engineering techniques and psychology",
                    "OSINT (Open Source Intelligence) gathering",
                    "Social media platform vulnerabilities",
                    "Phishing and pretexting strategies",
                    "Protecting against social engineering attacks",
                  ],
                },
                {
                  value: "freelancing",
                  title: "💰 Freelancing in Cybersecurity",
                  content: [
                    "Setting up your bug bounty hunting profile",
                    "Best platforms: HackerOne, Bugcrowd, Synack",
                    "Writing effective vulnerability reports",
                    "Pricing your services and negotiating rates",
                    "Building long-term client relationships",
                  ],
                },
                {
                  value: "career-growth",
                  title: "🚀 Career & Salary Growth in Cybersecurity",
                  content: [
                    "Complete career roadmap from beginner to expert",
                    "Salary expectations: ₹3L to ₹50L+ progression",
                    "Essential certifications: CEH, CISSP, OSCP",
                    "Building a professional network in cybersecurity",
                    "Interview preparation and portfolio building",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={item.value}
                    className="
                rounded-lg px-4 sm:px-6 py-3 
                bg-background/70 backdrop-blur-sm 
                shadow-[0_0_6px_rgba(59,130,246,0.35)] 
                hover:shadow-[0_0_10px_rgba(59,130,246,0.55)] 
                transition-all duration-300
              "
                  >
                    {/* Trigger with hover scale */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold hover:text-primary transition-colors">
                        {item.title}
                      </AccordionTrigger>
                    </motion.div>

                    {/* Animated content */}
                    <AccordionContent asChild>
                      <AnimatePresence>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="text-muted-foreground text-sm sm:text-base md:text-lg space-y-1.5 sm:space-y-2 pt-3">
                            {item.content.map((point, idx) => (
                              <p key={idx}>• {point}</p>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* About Trainer Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4 sm:px-0">
              Meet Your Expert Trainer
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg">
              Learn from one of India’s leading ethical hackers and
              cybersecurity mentors, with hands-on experience protecting
              organizations against real-world threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto px-4 sm:px-0">
            {/* Trainer Image & Info */}
            <div className="text-center">
              <img
                src={trainerImage}
                alt="Portrait of Shivam Dwivedi, Ethical Hacker & Bug Bounty Expert"
                loading="lazy"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mx-auto mb-4 md:mb-6 border-4 border-primary cyber-glow object-cover transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Shivam Dwivedi
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-primary mb-4">
                Ethical Hacker & Bug Bounty Expert
              </p>
              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-600 hover:text-primary"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-600 hover:text-primary"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-600 hover:text-primary"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>

            {/* Trainer Details */}
            <div>
              <div className="space-y-4 sm:space-y-6">
                {/* Top Companies */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                      Top Companies Hacked
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Google, Microsoft, Intel, Tesla & more
                    </p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                      Certifications
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      CEH (Certified Ethical Hacker), OSCP, Bugcrowd Hall of
                      Fame
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                      Students Trained
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Over 5,000 students trained globally, with workshops in
                      10+ countries
                    </p>
                  </div>
                </div>

                {/* Training Style */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                      Training Style
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Practical labs, live hacking demos, and real-world case
                      studies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Companies Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Google",
                  "Microsoft",
                  "Intel",
                  "Tesla",
                  "Bugcrowd",
                  "HackerOne",
                ].map((company, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full border border-secondary text-secondary text-sm sm:text-base shadow-sm transition hover:bg-secondary hover:text-white"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Extra credibility footer */}
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-muted-foreground">
              Shivam has been{" "}
              <span className="font-semibold text-gray-400">
                featured in top cybersecurity conferences{" "}
              </span>
              including DEFCON, Nullcon, and Black Hat Asia, and regularly
              mentors budding cybersecurity enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4 sm:px-0">
              What You Get
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
            {[
              {
                icon: Award,
                title: "Certificate of Attendance",
                description: "Official completion certificate",
              },
              {
                icon: Target,
                title: "3 Job Call Opportunities",
                description: "Direct interview calls",
              },
              {
                icon: Shield,
                title: "Practical Hacking Demos",
                description: "Live hands-on demonstrations",
              },
              {
                icon: Users,
                title: "Career Roadmap",
                description: "Complete cybersecurity path",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 text-center border-2 border-muted hover:border-primary transition-cyber cyber-glow"
              >
                <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-secondary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <a
              href="https://rzp.io/rzp/Y8oreyCw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="cyberOutline"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                👉 Book My Seat Now for ₹99
              </Button>
            </a>
          </div>
        </div>
      </section>
      {/* ******************************************************************************************************   */}
      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-cyber-light">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4 sm:px-0">
              What Our Students Say
            </h2>
          </div>

          {/* Marquee Container */}
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee space-x-4 md:space-x-6">
              {[
                {
                  name: "Rahul Sharma",
                  text: "Learned practical hacking skills and got my first job in 3 months!",
                  rating: 5,
                },
                {
                  name: "Priya Patel",
                  text: "Earned my first $500 bug bounty thanks to Shivam Sir’s guidance!",
                  rating: 5,
                },
                {
                  name: "Amit Kumar",
                  text: "Hands-on labs made me confident in real-world cybersecurity tasks.",
                  rating: 5,
                },
                {
                  name: "Arjun Mehta",
                  text: "Mastered incident response and breach investigation skills.",
                  rating: 5,
                },
                {
                  name: "Neha Verma",
                  text: "Boosted my malware analysis and threat hunting skills.",
                  rating: 5,
                },
                {
                  name: "Vikram Nair",
                  text: "Learned bug bounty techniques and earned my first $1k reward!",
                  rating: 5,
                },
                {
                  name: "Anjali Gupta",
                  text: "Simplified audits and compliance thanks to Shivam Sir’s teaching.",
                  rating: 5,
                },
                {
                  name: "Rohit Menon",
                  text: "Transitioned smoothly to SOC Analyst role after the course.",
                  rating: 5,
                },
              ]
                .concat([
                  // duplicate for smooth scrolling
                  {
                    name: "Rahul Sharma",
                    text: "Learned practical hacking skills and got my first job in 3 months!",
                    rating: 5,
                  },
                  {
                    name: "Priya Patel",
                    text: "Earned my first $500 bug bounty thanks to Shivam Sir’s guidance!",
                    rating: 5,
                  },
                ])
                .map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
                  >
                    <Card className="p-4 sm:p-6 border-2 border-muted h-full flex flex-col justify-between">
                      <div className="flex mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span
                            key={i}
                            className="text-secondary text-lg sm:text-xl"
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="text-sm sm:text-base font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Cybersecurity Student under Shivam Sir
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add this CSS in your global stylesheet or tailwind config */}
      <style>
        {`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 20s linear infinite;
    }
  `}
      </style>
      {/* Urgency & Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-card relative overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8">
              🚀 Don’t Miss This Exclusive Deal!
            </h2>

            {/* Price Highlight Box */}
            <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 bg-gradient-to-r from-red-500/10 via-secondary/10 to-transparent px-6 py-5 rounded-2xl shadow-xl border border-secondary/20">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground line-through">
                ₹4999
              </span>

              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary drop-shadow-md">
                ₹99
              </span>

              <span className="ml-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-secondary to-red-500 text-white text-sm sm:text-base font-semibold animate-bounce">
                Limited Seats
              </span>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-primary mb-6 md:mb-8 px-3 sm:px-0 max-w-2xl leading-relaxed">
              ⚡ Only{" "}
              <span className="font-bold text-secondary">100 students</span> can
              grab this deal — secure your spot{" "}
              <span className="text-red-600 font-semibold">
                before it’s gone forever!
              </span>
            </p>

            {/* Call-to-Action */}
            <a
              href="https://rzp.io/rzp/Y8oreyCw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-4 rounded-2xl shadow-lg bg-gradient-to-r from-secondary to-red-500 hover:scale-110 hover:shadow-xl transition-transform duration-300"
              >
                🔥 Join the Workshop Now for Just ₹99
              </Button>
            </a>
          </div>
        </div>

        {/* Background Accent */}
        <div className="absolute inset-0 -z-0 bg-gradient-to-br from-red-500/5 via-secondary/5 to-transparent blur-3xl"></div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-cyber-dark">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 px-0 leading-tight break-words">
              Ready to Start Your Cybersecurity Journey?
            </h2>

            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                <span>3 Hours Duration</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary flex-shrink-0" />
                <span>Certificate Included</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                <span>3 Job Calls</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://rzp.io/rzp/Y8oreyCw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                size="lg"
                className="text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full sm:w-auto rounded-xl hover:shadow-md"
              >
                <span className="hidden sm:inline">
                  👉 Yes! I want to become a Cybersecurity Pro 🚀 – Book Now for
                  ₹99
                </span>
                <span className="sm:hidden">
                  🚀 Book Cybersecurity Pro for ₹99
                </span>
              </Button>
            </a>

            {/* Contact Information */}
            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-muted">
              <p className="text-base sm:text-lg md:text-xl mb-4 font-medium">
                Contact Us? Get in touch:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary flex-shrink-0" />
                  <a
                    href="tel:8087203095"
                    className="text-base sm:text-lg md:text-xl hover:text-primary transition-cyber font-medium"
                  >
                    8087203095
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-secondary flex-shrink-0" />
                  <a
                    href="mailto:sales@ashpranix.com"
                    className="text-base sm:text-lg md:text-xl hover:text-primary transition-cyber break-all sm:break-normal font-medium"
                  >
                    sales@ashpranix.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-2 left-2 right-2 z-50 sm:hidden">
        <a
          href="https://rzp.io/rzp/Y8oreyCw"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="hero" className="w-full shadow-lg" size="lg">
            🔥 Book Now for ₹99
          </Button>
        </a>
      </div>

      {/* Exit Intent Popup */}
      <ExitIntentPopup isVisible={showExitPopup} onClose={handleClosePopup} />
    </div>
  );
};

export default Index;
