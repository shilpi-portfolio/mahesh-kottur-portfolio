import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import headshot from "@/assets/headshot.jpg";
import {
  TrendingUp, Users, Target, BarChart3, DollarSign,
  Heart, CheckCircle, Zap, Mail, Phone, MapPin,
  Linkedin, ArrowUp, Download, ChevronRight, Award,
  GraduationCap, Briefcase, Code, Megaphone, BarChart
} from "lucide-react";

const kpis = [
  { icon: DollarSign, value: "$1.6M+", label: "Pipeline Influenced / Quarter" },
  { icon: TrendingUp, value: "20%", label: "Increase in Qualified Leads" },
  { icon: Target, value: "15%", label: "Lift in Conversion Rates" },
  { icon: BarChart3, value: "25%", label: "Improvement in Data Accuracy" },
  { icon: DollarSign, value: "10%", label: "Reduction in Marketing Spend" },
  { icon: Heart, value: "90%", label: "Employee Retention Rate" },
  { icon: CheckCircle, value: "95%", label: "Campaign Execution Accuracy" },
  { icon: Zap, value: "20%", label: "Team Productivity Increase" },
];

const skillCategories = [
  {
    title: "Marketing & Automation",
    icon: Megaphone,
    skills: ["Adobe Marketo", "Salesforce", "Marketing Automation", "Demand Generation", "Lead Generation", "Account Based Marketing", "Campaign Management", "Marketo Governance", "Marketo Measure", "6sense"],
  },
  {
    title: "Analytics & Tools",
    icon: BarChart,
    skills: ["Power BI", "Reporting & Dashboard Analytics", "Google Ads", "Sitecore", "Octopost", "LinkedIn Campaign Manager", "Zoom Webinars", "GoToWebinar", "Webex"],
  },
  {
    title: "Leadership & Management",
    icon: Users,
    skills: ["Team Management", "Stakeholder Management", "Cross-functional Collaboration", "Project Management", "Quality Assurance", "Vendor Management", "Training & Development"],
  },
  {
    title: "Technical",
    icon: Code,
    skills: ["HTML5", "CSS", "JavaScript", "jQuery", "Web Design & Development", "Adobe Creative Suite"],
  },
];

const experiences = [
  {
    period: "Nov 2021 – Feb 2026",
    role: "Marketing Manager",
    company: "Blue Yonder",
    bullets: [
      "Led global demand generation across APAC, EMEA, North America",
      "Executed 60–80 multi-channel campaigns per quarter",
      "Directed governance of Marketo & Salesforce systems",
      "Built scalable automation infrastructure",
      "Created executive dashboards & reporting frameworks",
    ],
    impact: [
      "Influenced $1.6M+ quarterly pipeline",
      "Improved campaign launch timelines by 15%",
      "Increased team efficiency by 20%",
    ],
  },
  {
    period: "2017 – 2020",
    role: "Project Lead",
    company: "Blue Yonder",
    bullets: [
      "Led cross-functional campaign execution",
      "Managed automation architecture",
      "Improved marketing efficiency by 15%",
      "Strengthened CRM & automation integration",
    ],
  },
  {
    period: "2014 – 2017",
    role: "Sr. Marketing Specialist",
    company: "Blue Yonder",
    bullets: [
      "Campaign operations & automation support",
      "Built lifecycle & nurture programs",
      "Developed performance dashboards",
    ],
  },
  {
    period: "2013 – 2014",
    role: "Web/Graphic Design Lead",
    company: "Infosys",
    bullets: [
      "Designed marketing assets & digital properties",
      "Website UI enhancements",
      "HTML email campaign creation",
    ],
  },
  {
    period: "2010 – 2013",
    role: "Web Designer",
    company: "Wisdom Leaf Technologies",
    bullets: [
      "Web application development (HTML, CSS, JS)",
      "Responsive HTML email development",
      "PSD to HTML conversions",
    ],
  },
  {
    period: "2008 – 2010",
    role: "Web/Graphic Designer",
    company: "NRK Ad Systems",
    bullets: [
      "Website layouts & branding",
      "HTML email development",
      "Cross-browser optimization",
    ],
  },
];

const awards = [
  { year: "2025", title: "Individual Pillar Award" },
  { year: "2024", title: "Team Pillar Award" },
  { year: "2023", title: "Individual Pillar Award" },
  { year: "", title: "ACE Award" },
];

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative bg-primary min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-green-medium to-green-dark opacity-90" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsla(37,28%,64%,0.08) 0%, transparent 50%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="flex-shrink-0 animate-fade-up">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
              <img src={headshot} alt="Mahesh Kottur" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center md:text-left animate-fade-up animate-fade-up-delay-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              Mahesh Kottur
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium mb-4">
              Strategic Marketing Operations & Program Management Leader
            </p>
            <p className="text-primary-foreground/70 text-lg max-w-xl mb-8 leading-relaxed">
              Driving Global Demand Generation, Marketing Automation Excellence & Revenue Growth for 16+ Years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition-all shadow-lg"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all"
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight size={28} className="text-primary-foreground/40 rotate-90" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto fade-section">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">About Me</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-10 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed text-center">
            Strategic Marketing Operations & Program Management Leader with 16+ years of experience leading global digital marketing operations, demand generation, and campaign automation. Expert in driving large-scale campaign execution, scaling marketing automation infrastructure, and partnering with cross-regional teams across APAC, EMEA, and Americas to deliver measurable pipeline impact. Proven leader managing high-performing teams, optimizing end-to-end lead lifecycle processes, and executing high-ROI marketing campaigns.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-24 px-6 bg-section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="fade-section text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Key Impact Metrics</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <div
                key={i}
                className="fade-section bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <kpi.icon size={24} className="text-gold" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{kpi.value}</div>
                <div className="text-sm text-muted-foreground">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="fade-section text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, i) => (
              <div key={i} className="fade-section bg-card rounded-xl p-8 shadow-md border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <cat.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-section-alt text-sm text-foreground rounded-full border border-border hover:border-gold hover:bg-gold-light transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <div className="fade-section text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Professional Experience</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <div key={i} className="fade-section relative pl-12 md:pl-20">
                  <div className="absolute left-2.5 md:left-6.5 top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-card shadow" />
                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-gold font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-section-alt px-3 py-1 rounded-full self-start">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-muted-foreground text-sm">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <ChevronRight size={14} className="text-gold mt-1 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.impact && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm font-semibold text-foreground mb-2">Business Impact:</p>
                        <ul className="space-y-1 text-sm">
                          {exp.impact.map((imp, j) => (
                            <li key={j} className="flex items-start gap-2 text-gold">
                              <TrendingUp size={14} className="mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="fade-section text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Awards & Recognition</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="fade-section bg-card rounded-xl p-6 shadow-md border border-border flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{award.title}</h3>
                  {award.year && <p className="text-sm text-muted-foreground">{award.year}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <div className="fade-section text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Education</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="fade-section flex justify-center">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border flex items-center gap-6 max-w-lg w-full">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Bachelor of Science</h3>
                <p className="text-gold font-medium">Computer Science</p>
                <p className="text-sm text-muted-foreground">Osmania University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-primary py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="fade-section text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Get In Touch</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="fade-section flex flex-col md:flex-row items-center justify-center gap-10 mb-14">
            <a href="tel:+917093590356" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
              <Phone size={20} /> <span>+91 7093590356</span>
            </a>
            <a href="mailto:maheshkottur5@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
              <Mail size={20} /> <span>maheshkottur5@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <MapPin size={20} /> <span>Hyderabad, India</span>
            </div>
          </div>
          <div className="fade-section flex justify-center mb-10">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 text-center">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Mahesh Kottur. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center hover:brightness-110 transition-all z-40"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </footer>
    </div>
  );
};

export default Index;
