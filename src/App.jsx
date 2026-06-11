import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Mail, Linkedin, Github, Download, ArrowRight, ExternalLink, Youtube, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  
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

  const openProject = (project) => { setSelectedProject(project); setActiveImg(0); document.body.style.overflow = 'hidden'; };
  const closeProject = () => { setSelectedProject(null); setActiveImg(0); document.body.style.overflow = ''; };

  useEffect(() => {
    const onKey = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeProject();
      if (e.key === 'ArrowRight') setActiveImg(i => Math.min(i + 1, (selectedProject.images?.length || 1) - 1));
      if (e.key === 'ArrowLeft') setActiveImg(i => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject]);

  const projects = [
    {
      title: "Design and Manufacturing of Composite Laminates for Flexural Performance",
      problem: "Design a carbon/epoxy composite laminate to achieve a target flexural modulus without relying on costly trial-and-error fabrication.",
      approach: "Modeled a 12-ply IM7-8552 layup using Classical Lamination Theory, assuming linear elastic behavior and perfect ply bonding.",
      result: "Validated against ASTM D7264 four-point bending tests. Predictions matched within 3.2%, confirming CLT as a reliable pre-fabrication design tool.",
      skills: ["Classical Lamination Theory", "IM7-8552 Carbon/Epoxy", "Vacuum Bagging", "Autoclave Processing", "ASTM D7264", "Flexural Testing"],
      category: "Course Project",
      github: "https://github.com/vijai27/classical-lamination-theory",
      report: "https://drive.google.com/file/d/13G6A7Ftmn4NwaHD2LcSCOpv4SImf8tRC/view?usp=drive_link",
      images: ["/P1_Vacuum Bagging.png", "/P1_Testing.png", "/P1_Sample.png"]
    },
    {
      title: "Surrogate Modeling of Composite Laminated Plates",
      problem: "Running full FEM simulations for every composite plate configuration is too slow for design optimization.",
      approach: "Built an RSM surrogate model using ComposiPy, applying Morris Screening to identify the most influential variables among 15 design parameters. Log-transform optimization improved model accuracy.",
      result: "Achieved high R² across all 3 analysis modes (buckling, bending, frequency), cutting evaluation time while covering asymmetric laminate configurations.",
      skills: ["Python", "ComposiPy", "Morris Screening", "Latin Hypercube Sampling", "Surrogate Modeling", "FEM"],
      category: "Course Project",
      github: "https://github.com/vijai27/Surrogate-Modeling/tree/main",
      images: ["/P2_CONOPS.png", "/P2_Design Space.png", "/P2_RSM.png", "/P2_Residual Histogram.png"]
    },
    {
      title: "Natural Fiber Composites as a Sustainable Alternative to Glass Fiber for Automotive Structural Applications",
      problem: "Glass fiber composites dominate automotive structural parts but raise growing sustainability and recyclability concerns. This project investigates whether natural fibers can serve as a viable, eco-friendly replacement.",
      approach: "Applied supercritical fluid technology (CO₂, N₂, Ar) with TiO₂ nanoparticle functionalization to flax fibers. The core hypothesis is that SCF treatment acts analogously to shot peening, selectively removing weak surface fibers and defects rather than improving adhesion, thereby strengthening the surviving fiber population. Fabricated composite laminates from treated fibers for comparative mechanical testing.",
      result: "Tensile property evaluation is ongoing to validate the weak-fiber removal hypothesis and quantify its effect on net fiber strength distribution.",
      skills: ["Supercritical Fluid Processing", "TiO₂ Nanoparticles", "Composite Manufacturing", "Tensile Testing", "MATLAB", "Data Automation"],
      category: "Graduate Research",
      images: ["/P3_Pressure Vessel.jpeg", "/P3_Fiber Epoxy.jpeg", "/P3_Samples.jpeg", "/P3_Image.png"]
    },
    {
      title: "Gear Pump Analysis & Redesign",
      problem: "Existing gear pump design had unnecessary complexity that drove up manufacturing cost and assembly time.",
      approach: "Used FAST analysis to identify non-value-adding features, then optimized the assembly sequence and tightened GD&T specifications.",
      result: "Redesigned components achieved 40% better manufacturability and 15% cost reduction, validated through BOM review and tolerance stack-up analysis.",
      skills: ["Fusion 360", "DFMA", "GD&T", "FAST Analysis", "BOM Development", "Assembly Optimization"],
      category: "Course Project",
      video: "https://youtu.be/3rBzNfOF1Vo?si=DJq1OpNS225x4DFG",
      images: ["/P4_Final.png", "/P4_Part.png", "/P4_FAST.png", "/P4_DFM.png"]
    },
    {
      title: "Laser Surface Texturing for Dental Implant Applications",
      problem: "Smooth titanium implant surfaces promote bacterial adhesion and reduce osseointegration.",
      approach: "Designed bio-inspired texturing patterns and applied CO₂ laser processing to Ti-6Al-4V substrates, using SEM and contact angle analysis to characterize each iteration.",
      result: "Optimized pattern geometry achieved 44% improvement in hydrophobicity, demonstrating surface texture as a viable, process-controllable path to better implant performance.",
      skills: ["CO₂ Laser Processing", "Ti-6Al-4V", "SEM", "Contact Angle Analysis", "Surface Metrology", "Materials Characterization"],
      category: "UG Thesis",
      report: "https://drive.google.com/file/d/1C-xBcF4XkjhQuF_K3ElxzK2kFXH-1vtY/view?usp=sharing",
      images: ["/P5_Design 1.png", "/P5_Design 2.png", "/P5_SEM.png", "/P5_Comparison.png"]
    },
    {
      title: "Hybrid Ballistic Composite Development",
      problem: "Pure Kevlar armor is effective but expensive and non-sustainable. Can natural fibers partially replace it without sacrificing ballistic performance?",
      approach: "Fabricated Kevlar-29/flax hybrid laminates via vacuum bagging, systematically varying fiber ratios and stacking sequences, then tested under high-velocity impact using a gas gun apparatus.",
      result: "The 13-layer hybrid laminate (8 Kevlar-29 + 5 flax, 60.4% fiber volume fraction) absorbed 165–202 J per impact across gas gun specimens fired at up to 199 m/s. Simulation confirmed that introducing flax layers beyond the 8th Kevlar layer improved energy distribution over a pure Kevlar-29 stack, with the 6 mm plate demonstrating an energy absorption capacity of ~3.67 × 10⁵ W.",
      skills: ["Kevlar-29", "Flax Fibers", "Vacuum Bagging", "Gas Gun Testing", "High-Velocity Impact Testing", "Failure Analysis"],
      category: "UG Thesis",
      report: "https://drive.google.com/file/d/1fpv112fJFyaZCfaz4pgbLKEkBH5wpeAj/view?usp=drive_link",
      images: ["/P6_Process.png", "/P6_testing.png", "/P6_Final Sample.png"]
    },
    {
      title: "Autonomous Agricultural Drone Platform",
      problem: "Manual crop spraying in small-scale Indian farms is labor-intensive, imprecise, and exposes workers to chemicals.",
      approach: "Designed a multi-rotor drone with 4 kg payload capacity and an automated docking station. Led a 15-member team from concept through fabrication using Al 6061-T6 for the frame.",
      result: "Designed and assembled a multi-rotor airframe with spray and navigation systems integrated. Prototype development was suspended during bench testing before reaching flight-ready status.",
      skills: ["SolidWorks", "Al 6061-T6 Machining", "Flight Control Systems", "Autonomous Navigation", "Systems Integration", "CAD/CAM"],
      category: "UG Thesis",
      images: ["/P7_Model.png"]
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
        "Built an end-to-end image analysis pipeline (Python, OpenCV) that automated microscopy fiber thickness measurement, reducing per-image processing from 2 min (manual) to <0.5 sec while improving measurement consistency across 1,700 images",
        "Currently developing automated pressure control software (Python PID, state machine, GUI) for a 28 MPa reactor, managing valves, sensors, and actuators with MATLAB/Simulink for simulation and tuning"
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
        "Conducted GD&T analysis and dimensional inspection of aerospace components using coordinate measuring machine (CMM) and precision metrology instruments including height gauges, bore gauges, and micrometers",
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
                M.S. Aerospace Engineering | University of Michigan
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} tracking-tight leading-tight`}>
                Vijai <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Venkatesh</span>
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
                I hold a Master's degree in Aerospace Engineering from the University of Michigan, specializing in Structures and Materials with a strong foundation in Manufacturing Engineering. My work focuses on advancing composite materials, computational mechanics, and manufacturing processes for aerospace applications.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Currently, I'm a Graduate Research Assistant at The Taub Group, where I'm developing innovative treatment methods for natural fiber composites using supercritical fluids and nanoparticle integration. My research aims to enhance the mechanical performance and sustainability of composite materials for aerospace and automotive industries. I also recently completed a consulting engagement with NeoNest Global, where I developed scalable manufacturing infrastructure for medical device clinical trials across international markets.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                My technical interests span structural analysis, composite design and manufacturing, finite element modeling, and design for manufacturing. I'm passionate about developing computational tools that accelerate engineering design cycles and implementing data-driven approaches to materials development and process optimization.
              </p>

              <div className={`pt-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Education</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium">MSE Aerospace Engineering</p>
                      <p className="text-sm">University of Michigan</p>
                      <p className="text-sm">Focus: Structures & Materials</p>
                      <p className="text-sm opacity-70">May 2026</p>
                    </div>
                    <div>
                      <p className="font-medium">BE Manufacturing Engineering</p>
                      <p className="text-sm">College of Engineering Guindy</p>
                      <p className="text-sm opacity-70">Apr 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Projects</h2>
            <a href="https://drive.google.com/drive/folders/1mxykefmPrz2PD7OXBjWFQlQdOovSdHox?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                darkMode ? 'bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-600/40'
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200'}`}>
              <ExternalLink size={15} /> View Project Media
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index}
                className={`rounded-xl overflow-hidden transition-all hover:scale-[1.02] cursor-pointer ${
                  darkMode ? 'bg-slate-900/50 border border-slate-800 hover:border-blue-400/50 shadow-xl shadow-black/20'
                    : 'bg-white border border-slate-200 hover:border-blue-300 shadow-lg'}`}
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
                onClick={() => openProject(project)}
              >
                {/* Thumbnail */}
                <div className={`w-full h-44 overflow-hidden flex items-center justify-center ${
                  darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                  {project.images?.[0] ? (
                    <img src={project.images[0]} alt={project.title}
                      className="w-full h-full object-contain p-2" />
                  ) : (
                    <span className={`text-4xl font-black select-none ${darkMode ? 'text-slate-700' : 'text-slate-300'}`}>
                      {project.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      darkMode ? 'bg-blue-400/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                      {project.category}
                    </span>
                    {project.images?.length > 1 && (
                      <span className={`text-xs flex items-center gap-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <ZoomIn size={12} /> {project.images.length} photos
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>

                  <div className="mb-4 space-y-2">
                    {[{ label: "Problem", text: project.problem }, { label: "Approach", text: project.approach }, { label: "Result", text: project.result }]
                      .map(({ label, text }) => (
                        <div key={label} className="text-sm leading-relaxed">
                          <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{label}: </span>
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{text}</span>
                        </div>
                      ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.skills.map((skill, i) => (
                      <span key={i} className={`px-2.5 py-1 text-xs rounded-md ${
                        darkMode ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>{skill}</span>
                    ))}
                  </div>

                  {(project.github || project.report || project.video) && (
                    <div className="flex flex-wrap gap-2" onClick={e => e.stopPropagation()}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                            darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'}`}>
                          <Github size={15} /> GitHub
                        </a>
                      )}
                      {project.report && (
                        <a href={project.report} target="_blank" rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                            darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'}`}>
                          <ExternalLink size={15} /> Report
                        </a>
                      )}
                      {project.video && (
                        <a href={project.video} target="_blank" rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                            darkMode ? 'bg-red-900/40 hover:bg-red-900/60 text-red-400 hover:text-red-300 border border-red-900/50'
                              : 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-200'}`}>
                          <Youtube size={15} /> Video
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeProject}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
              darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'}`}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className={`sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b ${
              darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {selectedProject.category}
                </span>
                <h2 className={`text-xl font-bold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {selectedProject.title}
                </h2>
              </div>
              <button onClick={closeProject}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500'}`}>
                <X size={22} />
              </button>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-8">
              {/* Image gallery */}
              {selectedProject.images?.length > 0 && (
                <div className="space-y-3">
                  {/* Main image */}
                  <div className={`rounded-xl overflow-hidden flex items-center justify-center p-3 ${
                    darkMode ? 'bg-slate-800' : 'bg-slate-100'}`} style={{ minHeight: '280px' }}>
                    <img
                      src={selectedProject.images[activeImg]}
                      alt={`${selectedProject.title} ${activeImg + 1}`}
                      className="max-w-full max-h-72 object-contain rounded-lg"
                    />
                  </div>
                  {/* Navigation */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex items-center gap-2">
                      <button onClick={() => setActiveImg(i => Math.max(i - 1, 0))}
                        disabled={activeImg === 0}
                        className={`p-2 rounded-lg transition-colors disabled:opacity-30 ${
                          darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                        <ChevronLeft size={18} />
                      </button>
                      <div className="flex gap-1.5 flex-1 overflow-x-auto">
                        {selectedProject.images.map((src, i) => (
                          <button key={i} onClick={() => setActiveImg(i)}
                            className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                              i === activeImg
                                ? darkMode ? 'border-blue-400' : 'border-blue-500'
                                : darkMode ? 'border-slate-700 opacity-60 hover:opacity-100' : 'border-slate-200 opacity-60 hover:opacity-100'}`}>
                            <img src={src} alt="" className="w-full h-full object-contain" />
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setActiveImg(i => Math.min(i + 1, selectedProject.images.length - 1))}
                        disabled={activeImg === selectedProject.images.length - 1}
                        className={`p-2 rounded-lg transition-colors disabled:opacity-30 ${
                          darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}
                  <p className={`text-xs text-center ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {activeImg + 1} / {selectedProject.images.length} · ← → to navigate
                  </p>
                </div>
              )}

              {/* Content */}
              <div className="space-y-5">
                <div className="space-y-3">
                  {[{ label: "Problem", text: selectedProject.problem },
                    { label: "Approach", text: selectedProject.approach },
                    { label: "Result", text: selectedProject.result }]
                    .map(({ label, text }) => (
                      <div key={label} className="text-sm leading-relaxed">
                        <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{label}: </span>
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{text}</span>
                      </div>
                    ))}
                </div>

                <div>
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.skills.map((skill, i) => (
                      <span key={i} className={`px-2.5 py-1 text-xs rounded-md ${
                        darkMode ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>{skill}</span>
                    ))}
                  </div>
                </div>

                {(selectedProject.github || selectedProject.report || selectedProject.video) && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                          darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'}`}>
                        <Github size={15} /> GitHub
                      </a>
                    )}
                    {selectedProject.report && (
                      <a href={selectedProject.report} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                          darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'}`}>
                        <ExternalLink size={15} /> Report
                      </a>
                    )}
                    {selectedProject.video && (
                      <a href={selectedProject.video} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-105 ${
                          darkMode ? 'bg-red-900/40 hover:bg-red-900/60 text-red-400 hover:text-red-300 border border-red-900/50'
                            : 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-200'}`}>
                        <Youtube size={15} /> Video
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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