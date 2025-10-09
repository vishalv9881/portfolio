import { Award, BookOpen, Briefcase, ChevronDown, Cloud, Code, Coffee, Database, Download, Github, GraduationCap, Layers, Linkedin, Mail, MapPin, Menu, Phone, Rocket, Shield, Star, Target, TrendingUp, Users, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from './assets/vishal-verma.jpg';

export default function ProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { category: 'Backend Technologies', items: ['Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'Spring AOP', 'Hibernate ORM', 'Spring Core'], icon: Code, color: 'from-orange-500 to-red-600' },
    { category: 'Programming Languages', items: ['Java 8+ (Streams, Lambda)', 'JavaScript ES6+', 'TypeScript', 'SQL'], icon: Layers, color: 'from-orange-400 to-yellow-600' },
    { category: 'Database & Caching', items: ['MySQL', 'Redis', 'JPA/Hibernate', 'Database Optimization'], icon: Database, color: 'from-red-500 to-orange-600' },
    { category: 'Cloud & DevOps', items: ['AWS (EC2, S3, RDS)', 'Docker', 'CI/CD Pipelines', 'Nginx', 'PM2'], icon: Cloud, color: 'from-orange-600 to-red-500' },
    { category: 'Security & Auth', items: ['JWT', 'OAuth2', 'RBAC', 'Spring Security'], icon: Shield, color: 'from-yellow-500 to-orange-600' },
    { category: 'Architecture & Design', items: ['Microservices', 'REST APIs', 'Event-Driven', 'Design Patterns'], icon: Rocket, color: 'from-red-600 to-orange-500' },
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design'], icon: Star, color: 'from-orange-500 to-yellow-500' },
    { category: 'Messaging & Queues', items: ['Apache Kafka', 'Event Streaming', 'Async Processing'], icon: Zap, color: 'from-yellow-600 to-orange-600' },
    { category: 'Tools & Version Control', items: ['Git/GitHub', 'Maven', 'IntelliJ IDEA', 'Postman', 'VS Code'], icon: Target, color: 'from-orange-400 to-red-500' }
  ];

  const projects = [
    {
      title: 'Food Delivery Management System',
      status: 'Ongoing',
      type: 'Enterprise Application',
      tech: ['Spring Boot', 'Microservices', 'React.js', 'MySQL', 'Kafka', 'Docker', 'Redis', 'AWS'],
      highlights: [
        'Architected 15+ independent Spring Boot microservices (User, Vendor, Order, Payment, Delivery, Notification)',
        'Built scalable REST APIs with Spring Security (JWT), Eureka Service Discovery, and API Gateway',
        'Designed responsive React.js frontend with role-based dashboards for Customers, Vendors, and Admins',
        'Implemented event-driven architecture using Apache Kafka for real-time order processing and delivery alerts',
        'Integrated multiple notification channels: Email, SMS, and Push notifications via FCM',
        'Deployed on AWS with Docker containerization, centralized logging, and automated CI/CD pipelines',
        'Achieved 99.9% uptime with load balancing and fault-tolerant architecture'
      ],
      metrics: ['15+ Microservices', '3 Role Types', '99.9% Uptime']
    },
    {
      title: 'Learning Management System (LMS)',
      status: 'Production',
      type: 'Educational Platform',
      tech: ['Spring Boot', 'Spring Security', 'MySQL', 'React.js', 'Redis', 'AWS S3'],
      highlights: [
        'Built comprehensive LMS with course management, student enrollment, assignment tracking, and grading system',
        'Implemented role-based access control for Admin, Instructor, and Student with JWT authentication',
        'Developed interactive React.js frontend with course dashboards, progress tracking, and multimedia support',
        'Integrated Redis caching for frequently accessed course content, improving response time by 25%',
        'Created advanced analytics dashboard showing student performance, course completion rates, and engagement metrics',
        'Implemented file upload system using AWS S3 for course materials, videos, and assignments',
        'Built notification system for assignment deadlines, course updates, and announcements'
      ],
      metrics: ['1000+ Students', '50+ Courses', '25% Faster']
    }
  ];

  const achievements = [
    { icon: Code, title: '40+ Microservices', description: 'Developed and deployed across multiple projects' },
    { icon: TrendingUp, title: '30% Performance Boost', description: 'Through optimization and caching strategies' },
    { icon: Shield, title: '150+ Secure Endpoints', description: 'With JWT/OAuth2 authentication' },
    { icon: Users, title: '10,000+ Users', description: 'Serving across production applications' },
    { icon: Zap, title: '99.9% Uptime', description: 'Maintained across critical systems' },
    { icon: Award, title: 'Production Ready', description: 'Multiple enterprise-grade deployments' }
  ];

  const interests = [
    { name: 'Backend Development', icon: Code },
    { name: 'System Design', icon: Layers },
    { name: 'Microservices', icon: Rocket },
    { name: 'Cloud Architecture', icon: Cloud },
    { name: 'Debugging', icon: Target },
    { name: 'Performance Optimization', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-orange-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-orange-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                &lt;Vishal.devloper/&gt;
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Achievements', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/50'
                        : 'text-gray-300 hover:bg-orange-500/20 hover:text-orange-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500/20"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-orange-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-orange-500/20 hover:text-orange-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Image */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Profile Image Section */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500/50 shadow-2xl shadow-orange-500/50">
                {/* Profile image */}
                <img
                  src={profileImage}
                  alt="Vishal Verma"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full shadow-2xl shadow-orange-500/50 border-4 border-slate-950">
                <p className="text-sm font-bold">Available for Work</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="mb-8">
              <p className="text-orange-400 text-lg mb-2 font-semibold">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent animate-pulse">
                Vishal Verma
              </h1>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                <p className="text-2xl md:text-3xl text-orange-300">Java Full Stack Developer</p>
                <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mb-6">
                Crafting scalable, secure enterprise applications with <span className="text-orange-400 font-semibold">Spring Boot</span>, <span className="text-orange-400 font-semibold">Microservices</span>, and <span className="text-orange-400 font-semibold">React.js</span>
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm">
                <span className="bg-orange-500/20 border border-orange-500/50 px-4 py-2 rounded-full text-orange-300">~1 Year Experience</span>
                <span className="bg-red-500/20 border border-red-500/50 px-4 py-2 rounded-full text-red-300">50+ APIs Built</span>
                <span className="bg-orange-500/20 border border-orange-500/50 px-4 py-2 rounded-full text-orange-300">10K+ Users Served</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href="mailto:vishalv6391@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50">
                <Mail size={20} />
                <span className="font-semibold">Hire Me</span>
              </a>
              <button className="flex items-center gap-2 bg-transparent border-2 border-orange-400 hover:bg-orange-500/20 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Download size={20} />
                <span className="font-semibold">Download CV</span>
              </button>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://github.com/vishalv9881" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800/50 border border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/vishal-verma" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800/50 border border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vishalv6391@gmail.com" className="w-12 h-12 rounded-full bg-slate-800/50 border border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-orange-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
                <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <Briefcase size={28} />
                  Professional Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Java Full Stack Developer with <span className="text-orange-400 font-semibold"> ~1 year</span> of hands-on experience at JPR Technosoft LLP, specializing in building scalable, secure enterprise applications using cutting-edge technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My expertise lies in architecting robust backend systems with <span className="text-orange-400 font-semibold">Spring Boot</span> and <span className="text-orange-400 font-semibold">Microservices</span>, while creating seamless user experiences with <span className="text-orange-400 font-semibold">React.js</span>.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
                <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <Target size={28} />
                  Core Competencies
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">▹</span>
                    <span><span className="font-semibold">REST API Development:</span> 40+ microservices deployed in production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">▹</span>
                    <span><span className="font-semibold">Security Implementation:</span> JWT/OAuth2 authentication across 150+ endpoints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">▹</span>
                    <span><span className="font-semibold">Performance Optimization:</span> 30% improvement through caching & query optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 mt-1">▹</span>
                    <span><span className="font-semibold">Agile Delivery:</span> End-to-end project execution from design to deployment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md p-6 rounded-xl border border-orange-500/30 shadow-xl shadow-orange-500/10">
                  <MapPin className="text-orange-400 mb-3" size={28} />
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-gray-300 text-sm">Greater Noida, U.P.</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md p-6 rounded-xl border border-orange-500/30 shadow-xl shadow-orange-500/10">
                  <Phone className="text-orange-400 mb-3" size={28} />
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-300 text-sm">+91-6391688206</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-md p-6 rounded-xl border border-orange-500/30 shadow-xl shadow-orange-500/10 col-span-2">
                  <Mail className="text-orange-400 mb-3" size={28} />
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-300 text-sm break-all">vishalv6391@gmail.com</p>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
                <h3 className="text-2xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <Rocket size={28} />
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Full Stack Development</h4>
                      <p className="text-gray-400 text-sm">Building complete web applications from database to UI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Microservices Architecture</h4>
                      <p className="text-gray-400 text-sm">Designing scalable, distributed systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Database Optimization</h4>
                      <p className="text-gray-400 text-sm">Query tuning and performance enhancement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Cloud Deployment</h4>
                      <p className="text-gray-400 text-sm">AWS infrastructure setup and management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              Work Experience
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-500"></div>
            
            <div className="relative pl-20 md:pl-0">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>
              
              <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10 md:ml-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-orange-400" size={28} />
                      <h3 className="text-2xl font-bold text-orange-400">Java Full Stack Developer</h3>
                    </div>
                    <p className="text-xl text-white font-semibold">JPR Technosoft LLP</p>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <MapPin size={16} />
                      Greater Noida, U.P.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-semibold shadow-lg shadow-orange-500/50">
                      January 2025 - Present
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-center">
                    <Code className="text-orange-400 mx-auto mb-2" size={28} />
                    <p className="text-2xl font-bold text-orange-400">40+</p>
                    <p className="text-sm text-gray-400">APIs Deployed</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-center">
                    <TrendingUp className="text-orange-400 mx-auto mb-2" size={28} />
                    <p className="text-2xl font-bold text-orange-400">30%</p>
                    <p className="text-sm text-gray-400">Performance Gain</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-center">
                    <Shield className="text-orange-400 mx-auto mb-2" size={28} />
                    <p className="text-2xl font-bold text-orange-400">150+</p>
                    <p className="text-sm text-gray-400">Secure Endpoints</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-orange-300 mb-4">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-orange-400 mt-1 text-xl">▹</span>
                    <span>Engineered and deployed <span className="text-orange-400 font-semibold">40+ scalable microservices</span> and REST APIs using Spring Boot 3, MySQL, and React.js with seamless integration</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-orange-400 mt-1 text-xl">▹</span>
                    <span>Implemented secure authentication using <span className="text-orange-400 font-semibold">JWT and OAuth2</span> with comprehensive role-based access control (RBAC) across 150+ endpoints</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-orange-400 mt-1 text-xl">▹</span>
                    <span>Enhanced system performance by <span className="text-orange-400 font-semibold">30%</span> through optimized JPA queries, Redis caching strategies, and asynchronous processing techniques</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-orange-400 mt-1 text-xl">▹</span>
                    <span>Built <span className="text-orange-400 font-semibold">dynamic, responsive React.js frontends</span> with feature-rich dashboards, reusable components, and seamless user interaction patterns</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-orange-400 mt-1 text-xl">▹</span>
                    <span>Delivered complete <span className="text-orange-400 font-semibold">end-to-end systems</span> featuring authentication, course & order management, payment integration, real-time notifications, and advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <span className="text-orange-400 mt-1 text-xl">▹</span>
                    <span>Collaborated in <span className="text-orange-400 font-semibold">Agile environment</span> with daily standups, sprint planning, and code reviews to ensure high-quality deliverables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Showcasing enterprise-grade applications built with modern tech stack
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-orange-500/20 shadow-xl shadow-orange-500/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Rocket className="text-orange-400" size={32} />
                        <h3 className="text-3xl font-bold text-orange-400">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 rounded-full shadow-lg shadow-orange-500/50">
                          {project.status}
                        </span>
                        <span className="text-sm bg-orange-500/20 border border-orange-500/50 px-4 py-1 rounded-full text-orange-300">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-4 md:mt-0">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center bg-slate-800/50 px-4 py-2 rounded-lg border border-orange-500/30">
                          <p className="text-orange-400 font-bold text-sm">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-800/50 border border-orange-500/30 text-orange-300 px-3 py-1.5 rounded-full hover:bg-orange-500/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors border border-orange-500/10">
                        <span className="text-orange-400 mt-1 flex-shrink-0">✦</span>
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              Technical Skills
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Comprehensive technology stack for building modern web applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div key={index} className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-6 border border-orange-500/20 shadow-xl shadow-orange-500/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className={`flex items-center gap-3 mb-4 p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} bg-opacity-20`}>
                    <Icon className="text-orange-400 group-hover:scale-110 transition-transform" size={28} />
                    <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="text-gray-300 text-sm flex items-center gap-2 p-2 rounded hover:bg-orange-500/10 transition-colors">
                        <span className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Technical Knowledge */}
          <div className="mt-12 bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
            <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-3">
              <BookOpen size={28} />
              Core Computer Science Concepts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Object-Oriented Programming',
                'Exception Handling',
                'Multithreading',
                'Collections Framework',
                'Design Patterns',
                'Data Structures',
                'Algorithm Design',
                'System Design'
              ].map((concept, i) => (
                <div key={i} className="bg-slate-800/30 border border-orange-500/20 rounded-lg p-4 text-center hover:bg-orange-500/10 transition-colors">
                  <p className="text-gray-300 font-semibold">{concept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl shadow-lg shadow-orange-500/50">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-xl text-white font-semibold">Maa Gayatri Degree College, Naini Prayagraj</p>
                  <p className="text-gray-400 mt-1">Affiliated with Allahabad State University</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs bg-orange-500/20 border border-orange-500/50 px-3 py-1 rounded-full text-orange-300">
                      Computer Science
                    </span>
                    <span className="text-xs bg-orange-500/20 border border-orange-500/50 px-3 py-1 rounded-full text-orange-300">
                      Software Engineering
                    </span>
                    <span className="text-xs bg-orange-500/20 border border-orange-500/50 px-3 py-1 rounded-full text-orange-300">
                      Web Development
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full font-bold text-lg shadow-lg shadow-orange-500/50">
                  2022 - 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              Key Achievements
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Milestones that define my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 text-center group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/50">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              );
            })}
          </div>

          {/* Areas of Interest */}
          <div className="mt-16 bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Areas of Interest & Passion
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {interests.map((interest, i) => {
                const Icon = interest.icon;
                return (
                  <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-4 hover:from-orange-500/20 hover:to-red-500/20 transition-all group">
                    <Icon className="text-orange-400 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-white font-semibold">{interest.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              Let's Connect
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm currently <span className="text-orange-400 font-semibold">open to new opportunities</span> and exciting projects. Let's build something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:vishalv6391@gmail.com" className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/50">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-orange-400 mb-2">Email Me</h3>
              <p className="text-gray-300 text-sm break-all">vishalv6391@gmail.com</p>
            </a>
            
            <a href="https://github.com/vishalv9881" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/50">
                <Github size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-orange-400 mb-2">GitHub</h3>
              <p className="text-gray-300 text-sm">@vishalv9881</p>
            </a>
            
            <a href="https://linkedin.com/in/vishal-verma" target="_blank" rel="noopener noreferrer" className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20 shadow-xl shadow-orange-500/10 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/50">
                <Linkedin size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-orange-400 mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">Vishal Verma</p>
            </a>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl shadow-2xl shadow-orange-500/50 text-center">
            <Coffee className="mx-auto mb-4 text-white" size={48} />
            <h3 className="text-3xl font-bold mb-4 text-white">Available for Collaboration</h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Looking for a passionate developer to join your team or collaborate on an exciting project? Let's have a conversation!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:vishalv6391@gmail.com" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Send Email
              </a>
              <a href="tel:+916391688206" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/80 backdrop-blur-md py-8 px-4 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
                Vishal Verma
              </p>
              <p className="text-gray-400 text-sm">
                Java Full Stack Developer | Building Digital Excellence
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/vishalv9881" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/vishal-verma" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 border border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vishalv6391@gmail.com" className="w-10 h-10 rounded-full bg-slate-800/50 border border-orange-500/30 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-orange-500/10 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Vishal Verma. Crafted with <span className="text-orange-400">❤</span> using React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}