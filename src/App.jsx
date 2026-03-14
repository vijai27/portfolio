import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  
  const profileImage = '/profile.jpg';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
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
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Design and Manufacturing of Composite Laminates for Flexural Performance",
      summary: "Problem: Predict flexural performance of a carbon/epoxy laminate before costly fabrication. Modeled a 12-ply IM7-8552 layup using Classical Lamination Theory, assuming linear elastic behavior and perfect ply bonding. Validated against ASTM D7264 four-point bending tests — predictions matched within 3.2%, confirming CLT as a reliable pre-fabrication design tool.",
      skills: ["Classical Lamination Theory", "IM7-8552 Carbon/Epoxy", "Vacuum Bagging", "Autoclave Processing", "ASTM D7264", "Flexural Testing"],
      category: "Course Project",
      github: "https://github.com/vijai27/classical-lamination-theory"
    },
    {
      title: "Surrogate Modeling of Composite Laminated Plates",
      summary: "Problem: Running full FEM simulations for every composite plate configuration is too slow for design optimization. Built an RSM surrogate model using ComposiPy, first applying Morris Screening to identify the most influential variables among 15 design parameters. Log-transform optimization pushed model accuracy to high R² across all 3 analysis modes (buckling, bending, frequency) — cutting evaluation time while covering asymmetric laminate configurations.",
      skills: ["Python", "ComposiPy", "Morris Screening", "Latin Hypercube Sampling", "Surrogate Modeling", "FEM"],
      category: "Course Project",
      github: "https://github.com/vijai27/Surrogate-Modeling/tree/main"
    },
    {
      title: "Natural Fiber Composite Enhancement Research",
      summary: "Problem: Untreated natural fibers bond poorly with polymer matrices, limiting composite strength. Applied supercritical fluid technology (CO₂, N₂, Ar) with TiO₂ nanoparticle functionalization to improve flax fiber surface adhesion. Built a Python/OpenCV image analysis pipeline to process tensile test data — reduced analysis time from 2 minutes to under 0.5 seconds across 1,700 images, enabling faster iteration on treatment parameters.",
      skills: ["Supercritical Fluid Processing", "TiO₂ Nanoparticles", "Composite Manufacturing", "Tensile Testing", "MATLAB", "Data Automation"],
      category: "Graduate Research"
    },
    {
      title: "Gear Pump Analysis & Redesign",
      summary: "Problem: Existing gear pump design had unnecessary complexity that drove up manufacturing cost and assembly time. Used FAST analysis to identify non-value-adding features, then optimized the assembly sequence and tightened GD&T specifications. Redesigned components achieved 40% better manufacturability and 15% cost reduction — decisions validated through BOM review and supplier feasibility checks.",
      skills: ["Fusion 360", "DFMA", "GD&T", "FAST Analysis", "BOM Development", "Assembly Optimization"],
      category: "Course Project"
    },
    {
      title: "Laser Surface Texturing for Dental Implant Applications",
      summary: "Problem: Smooth titanium implant surfaces promote bacterial adhesion and reduce osseointegration. Designed bio-inspired texturing patterns and applied CO₂ laser processing to Ti-6Al-4V substrates, using SEM and contact angle analysis to characterize each iteration. Optimized pattern geometry achieved 44% improvement in hydrophobicity — demonstrating surface texture as a viable, process-controllable path to better implant performance.",
      skills: ["CO₂ Laser Processing", "Ti-6Al-4V", "SEM", "Contact Angle Analysis", "Surface Metrology", "Materials Characterization"],
      category: "UG Thesis"
    },
    {
      title: "Hybrid Ballistic Composite Development",
      summary: "Problem: Pure Kevlar armor is effective but expensive and non-sustainable — can natural fibers partially replace it without sacrificing ballistic performance? Fabricated Kevlar-29/flax hybrid laminates via vacuum bagging, systematically varying fiber ratios. Tested under high-velocity impact using a gas gun apparatus and analyzed failure modes — results established the hybrid configuration that balances energy absorption, weight, and material cost.",
      skills: ["Kevlar-29", "Flax Fibers", "Vacuum Bagging", "Gas Gun Testing", "High-Velocity Impact Testing", "Failure Analysis"],
      category: "UG Thesis"
    },
    {
      title: "Autonomous Agricultural Drone Platform",
      summary: "Problem: Manual crop spraying in small-scale Indian farms is labor-intensive, imprecise, and exposes workers to chemicals. Designed a multi-rotor drone with 4 kg payload capacity and an automated docking station for autonomous operation. Led a 15-member team from concept through fabrication — structural decisions centered on Al 6061-T6 for the frame, with flight control tuned for stable low-altitude navigation over crop rows.",
      skills: ["SolidWorks", "Al 6061-T6 Machining", "Flight Control Systems", "Autonomous Navigation", "Systems Integration", "CAD/CAM"],
      category: "UG Thesis"
    }
  ];

  const experiences = [
    {
      role: "Graduate Research Assistant",
      organization: "The Taub Group, University of Michigan",
      duration: "Jan 2025 – Present",
      location: "Ann Arbor, MI",
      description: "Advancing sustainable composite materials through innovative fiber treatment processes and data-driven analysis methodologies.",
      highlights: [
        "Executed systematic process optimization of flax fiber surface treatments using supercritical fluid technology (CO₂, N₂, Ar) with TiO₂ nanoparticle functionalization to enhance mechanical performance",
        "Fabricated composite laminates directly from treated fibers and conducted comparative tensile testing to assess mechanical property improvements and structural performance between treated and untreated fiber systems",
        "Built an end-to-end image analysis pipeline (Python, OpenCV) that automated microscopy fiber thickness measurement, reducing per-image processing from 2 min (manual) to <0.5 sec while improving measurement consistency across 1,700 images."
      ]
    },
    {
      role: "Project Management Consultant",
      organization: "NeoNest Global",
      duration: "Sep 2025 – Dec 2025",
      location: "Remote",
      description: "Led strategic manufacturing planning for medical device clinical trials, establishing scalable production infrastructure across international markets.",
      highlights: [
        "Developed scalable manufacturing plan for medical device clinical trials by conducting comprehensive supplier feasibility studies and shortlisting 10-15 NDA-compliant manufacturers with ISO 13485 certification across selected countries",
        "Built comprehensive manufacturer evaluation framework assessing technical capabilities, quality systems, regulatory compliance, production capacity, and regional viability to ensure supply chain readiness",
        "Ensured clinical trial production infrastructure aligned with regulatory requirements and quality standards for international medical device manufacturing"
      ]
    },
    {
      role: "Manufacturing Engineering Intern",
      organization: "Hindustan Aeronautics Limited",
      duration: "July 2022 – Aug 2022",
      location: "Chennai, India",
      description: "Performed precision inspection and quality validation for aerospace components in a high-reliability manufacturing environment.",
      highlights: [
        "Conducted GD&T analysis and dimensional inspection of 50+ aerospace components using coordinate measuring machine (CMM) and precision metrology instruments including height gauges, bore gauges, and micrometers",
        "Reviewed engineering drawings and inspection documentation to ensure measurement compliance with aerospace manufacturing quality standards and specifications",
        "Maintained measurement accuracy and traceability alignment with aerospace manufacturing regulatory requirements in tool room environment"
      ]
    }
  ];

  const skills = {
    "Software & Simulation": [
      "SolidWorks",
      "Fusion 360",
      "Ansys",
      "MATLAB",
      "Python"
    ],
    "Manufacturing & Processes": [
      "Composite Manufacturing",
      "DFMA",
      "Vacuum Bagging",
      "Autoclave Processing",
      "Laser Processing",
      "Rapid Prototyping"
    ],
    "Testing & Characterization": [
      "Tensile Testing",
      "Flexural Testing",
      "SEM Analysis",
      "Contact Angle Analysis",
      "High-Velocity Impact Testing",
      "Materials Characterization"
    ],
    "Analysis & Design": [
      "Classical Lamination Theory",
      "Composite Design",
      "FEM",
      "GD&T",
      "Surrogate Modeling",
      "Solid Mechanics"
    ],
    "Metrology & Quality": [
      "CMM",
      "Micrometers",
      "Surface Metrology",
      "Process Planning",
      "Lean Six Sigma"
    ]
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950' : 'bg-slate-50'} transition-colors duration-300`}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50' 
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tight`}>
                VVN<span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>.</span>
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? darkMode
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-blue-600 bg-blue-50'
                      : darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`ml-4 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  darkMode 
                    ? 'text-slate-300 hover:text-white bg-slate-800/50' 
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                }`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-slate-200'}`}>
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.toLowerCase()
                      ? darkMode
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-blue-600 bg-blue-50'
                      : darkMode
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-px ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  height: `${Math.random() * 200 + 100}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: Math.random() * 0.5,
                  animationDelay: `${Math.random() * 5}s`,
                  animation: 'float 10s infinite ease-in-out'
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <div className="space-y-6">
              <div className={`inline-block px-4 py-2 rounded-full ${
                darkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-50 text-blue-600'
              } text-sm font-medium`}>
                Graduate Student | University of Michigan
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tight leading-tight`}>
                Vijai Venkatesh<br />
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Natarajan Ganesh Babu</span>
              </h1>
              <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Aerospace Engineer specializing in Structures, Materials & Manufacturing
              </p>
              <p className={`text-lg ${darkMode ? 'text-slate-500' : 'text-slate-500'} leading-relaxed`}>
                Pushing sustainable materials to their limits
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    darkMode
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  }`}
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-lg font-medium transition-all ${
                    darkMode
                      ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                      : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-300'
                  }`}
                >
                  Get in Touch
                </button>
                <a
                  href="https://drive.google.com/file/d/1SoSRt05H-EaTPZhcoDIhIE59MgjhrDc8/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all ${
                    darkMode
                      ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                      : 'bg-white hover:bg-slate-50 text-slate-900 border border-slate-300'
                  }`}
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com/in/vijai-venkatesh/" target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors border ${
                    darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200'
                  }`}>
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/vijai27" target="_blank" rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors border ${
                    darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200'
                  }`}>
                  <Github size={20} />
                </a>
                <a href="mailto:vijaiv@umich.edu"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors border ${
                    darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200'
                  }`}>
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className={`relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ${
                darkMode ? 'border-4 border-slate-800' : 'border-4 border-slate-200'
              }`}>
                <img
                  src={profileImage}
                  alt="Vijai Venkatesh"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-8`}>
              About Me
            </h2>
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                I'm a Master's student in Aerospace Engineering at the University of Michigan, specializing in Structures and Materials with a strong foundation in Manufacturing Engineering. My work focuses on advancing composite materials, computational mechanics, and manufacturing processes for aerospace applications.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Currently, I'm a Graduate Research Assistant at The Taub Group, where I'm developing innovative treatment methods for natural fiber composites using supercritical fluids and nanoparticle integration. My research aims to enhance the mechanical performance and sustainability of composite materials for aerospace and automotive industries. I also recently completed a consulting engagement with NeoNest Global, where I developed scalable manufacturing infrastructure for medical device clinical trials across international markets.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                My technical interests span structural analysis, composite design and manufacturing, finite element modeling, and design for manufacturing. I'm passionate about developing computational tools that accelerate engineering design cycles and implementing data-driven approaches to materials development and process optimization.
              </p>

              <div className={`grid md:grid-cols-2 gap-6 pt-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">MSE Aerospace Engineering</p>
                      <p className="text-sm">University of Michigan | GPA: 3.73</p>
                      <p className="text-sm">Focus: Structures & Materials</p>
                      <p className="text-sm opacity-70">Aug 2024 - May 2026</p>
                    </div>
                    <div className="pt-2">
                      <p className="font-medium">BE Manufacturing Engineering</p>
                      <p className="text-sm">College of Engineering Guindy | GPA: 3.71</p>
                      <p className="text-sm opacity-70">Graduated Apr 2024</p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-lg ${darkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Research Interests</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight size={18} className={`mr-2 mt-1 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span>Composite Materials & Manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className={`mr-2 mt-1 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span>Design for Manufacturing & Assembly</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className={`mr-2 mt-1 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span>Advanced Manufacturing Processes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className={`mr-2 mt-1 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span>Sustainable Materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-12`}>
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all hover:scale-[1.02] ${
                  darkMode
                    ? 'bg-slate-900/50 border border-slate-800 hover:border-blue-400/50 shadow-xl shadow-black/20'
                    : 'bg-white border border-slate-200 hover:border-blue-300 shadow-lg'
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div className="mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    darkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.summary}
                </p>

                <div>
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 text-xs rounded-md ${
                          darkMode
                            ? 'bg-slate-800 text-slate-300 border border-slate-700'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                        darkMode
                          ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                      }`}
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-12`}>
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 pb-12 border-l-2 ${
                  darkMode ? 'border-slate-700' : 'border-slate-300'
                } last:pb-0`}
              >
                <div className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${
                  darkMode ? 'bg-blue-400 ring-4 ring-slate-900' : 'bg-blue-600 ring-4 ring-white'
                }`} />
                
                <div className={`p-6 rounded-xl ${
                  darkMode
                    ? 'bg-slate-800/50 border border-slate-700'
                    : 'bg-slate-50 border border-slate-200'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                        {exp.organization}
                      </p>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'} mt-2 md:mt-0 text-right`}>
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  
                  <p className={`mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'} italic`}>
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className={`flex items-start ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        <ArrowRight size={18} className={`mr-3 mt-1 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-12`}>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className={`p-8 rounded-xl ${
                  darkMode
                    ? 'bg-slate-900/50 border border-slate-800'
                    : 'bg-white border border-slate-200 shadow-lg'
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {category}
                </h3>
                <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {skillList.map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-8`}>
            Get In Touch
          </h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            I'm actively seeking internship and full-time opportunities in aerospace engineering,
            mechanical engineering, materials engineering, composite materials, and manufacturing engineering. Let's connect!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:vijaiv@umich.edu"
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Mail size={22} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email</h3>
            </a>

            <a
              href="https://www.linkedin.com/in/vijai-venkatesh/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Linkedin size={22} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>LinkedIn</h3>
            </a>

            <a
              href="https://github.com/vijai27"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Github size={22} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>GitHub</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-slate-950 border-t border-slate-800' : 'bg-white border-t border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              © 2025 Vijai Venkatesh Natarajan Ganesh Babu. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="mailto:vijaiv@umich.edu" className={`${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}>
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vijai-venkatesh/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}>
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/vijai27" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}>
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;