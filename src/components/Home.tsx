import { useEffect, useState, useRef } from 'react';
import { 
  Instagram, 
  Linkedin, 
  Github, 
  Menu, 
  X, 
  Zap, 
  Users, 
  Target, 
  Lightbulb,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // About section images
  const aboutImages = [
    { src: '/assets/gallery/gallery2.JPG', alt: 'DEAM Team' },
    { src: '/assets/teknofest-images/teknofest-2021.png', alt: 'Teknofest 2021' },
    { src: '/assets/teknofest-images/teknofest-2022.png', alt: 'Teknofest 2022' },
    { src: '/assets/teknofest-images/teknofest-2023.png', alt: 'Teknofest 2023' },
    { src: '/assets/teknofest-images/teknofest-2024.png', alt: 'Teknofest 2024' },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Prof. Dr. Mehmet Yılmaz",
      role: "Automotive Engineering Expert",
      content: "DEAM's innovative approach to electric vehicle development showcases the future of sustainable transportation in Turkey.",
      rating: 5
    },
    {
      name: "Ayşe Kaya",
      role: "Teknofest Judge",
      content: "Their consistent performance in Teknofest competitions demonstrates exceptional engineering capabilities and team dedication.",
      rating: 5
    },
    {
      name: "Can Özdemir",
      role: "Technology Investor",
      content: "DEAM represents the next generation of Turkish tech talent. Their vision and execution are truly remarkable.",
      rating: 5
    }
  ];

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMenuOpen(false);
          }
        }
      }
    };

    // Fixed navigation on scroll
    const handleScroll = () => {
      setIsNavFixed(window.scrollY > 100);
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Set up event listeners
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));
    window.addEventListener('scroll', handleScroll);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observerRef.current?.observe(el));

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
      window.removeEventListener('scroll', handleScroll);
      animatedElements.forEach(el => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
      clearInterval(testimonialInterval);
    };
  }, [testimonials.length]);

  // Navigation handler for testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  // Image changing function with deck-style shuffle animation
  const handleImageClick = () => {
    setIsImageChanging(true);
    
    setTimeout(() => {
      setCurrentAboutImage(prev => (prev + 1) % aboutImages.length);
    }, 400); // Change image at the peak of the animation
    
    setTimeout(() => {
      setIsImageChanging(false);
    }, 800); // Complete animation duration
  };

  // Features data
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electric Innovation",
      description: "Cutting-edge electric vehicle technology that pushes the boundaries of sustainable transportation."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "A dedicated team of engineers and developers committed to excellence in every project."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Engineering",
      description: "Meticulous attention to detail and precision in every aspect of our vehicle development."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Solutions",
      description: "Innovative problem-solving approaches that drive the future of automotive technology."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
          
          @keyframes cardDeckShuffle {
            0% {
              transform: translateX(0) translateY(0) rotateY(0deg) scale(1);
              opacity: 1;
              z-index: 20;
            }
            30% {
              transform: translateX(150px) translateY(-30px) rotateY(25deg) scale(1.05);
              opacity: 0.8;
              z-index: 20;
            }
            60% {
              transform: translateX(300px) translateY(-20px) rotateY(45deg) scale(0.95);
              opacity: 0.3;
              z-index: 1;
            }
            100% {
              transform: translateX(0) translateY(8px) rotateY(0deg) scale(0.92);
              opacity: 0.7;
              z-index: 1;
            }
          }
          
          @keyframes cardReveal {
            0% {
              transform: translateY(4px) scale(0.96);
              opacity: 0.8;
              z-index: 5;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
              z-index: 20;
            }
          }
          
          @keyframes cardStackShift {
            0% {
              transform: translateY(8px) scale(0.92);
              opacity: 0.7;
            }
            100% {
              transform: translateY(4px) scale(0.96);
              opacity: 0.8;
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
          }
          
          .animate-card-shuffle {
            animation: cardDeckShuffle 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          }
          
          .animate-card-reveal {
            animation: cardReveal 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          }
          
          .animate-card-stack-shift {
            animation: cardStackShift 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .image-clickable {
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .image-clickable:hover {
            transform: scale(1.02);
          }
          
          .perspective-1000 {
            perspective: 1000px;
          }
        `
      }} />

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavFixed ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl lg:text-3xl font-bold gradient-text">
              DEAM
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Features</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
              <a href="#gallery" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Gallery</a>
              <a href="#sponsors" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Sponsors</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Testimonials</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden glass-effect rounded-lg mt-2 p-6 space-y-4">
              <a href="#hero" className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#features" className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Features</a>
              <a href="#about" className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
              <a href="#gallery" className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Gallery</a>
              <a href="#sponsors" className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Sponsors</a>
              <a href="#testimonials" className="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Testimonials</a>
              <a 
                href="#contact" 
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center font-medium"
              >
                Get Started
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="animate-on-scroll">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Innovating</span>
              <br />
              <span className="text-slate-800">The Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Representing Turkey in cutting-edge electric vehicle technology and sustainable innovation. 
              Join us as we drive toward a cleaner, smarter tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#features" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/assets/DEAM-SD.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 font-semibold"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Why Choose <span className="gradient-text">DEAM</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with sustainable innovation to create 
              the future of electric vehicle development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="animate-on-scroll group p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 border border-slate-100"
              >
                <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-800">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Since December 25, 2020, DEAM has been at the forefront of electric vehicle 
                  innovation in Turkey. What started as a vision shared by four passionate students 
                  has evolved into a pioneering force in sustainable transportation technology.
                </p>
                <p>
                  For four consecutive years, we've proudly represented Turkey as finalists in 
                  the prestigious Teknofest Efficiency Challenge Electric Vehicle Development 
                  Competition, showcasing our commitment to excellence and innovation.
                </p>
                <p>
                  Our multidisciplinary expertise spans software development, electronics, 
                  3D design, analysis, and CAD, enabling us to deliver comprehensive solutions 
                  that push the boundaries of what's possible in electric mobility.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-slate-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">4</div>
                  <div className="text-sm text-slate-600 mt-1">Teknofest Finals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">4</div>
                  <div className="text-sm text-slate-600 mt-1">Vehicle Models</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-slate-600 mt-1">Sustainable</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-on-scroll">
              <div className="relative perspective-1000">
                {/* Background decorative card */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform rotate-6 transition-all duration-300 ${
                  isImageChanging ? 'animate-card-shuffle' : ''
                }`}></div>
                
                {/* Deck of cards - render multiple cards for stacking effect */}
                <div className="relative">
                  {/* Card 3 - bottom layer */}
                  <div className="absolute inset-0 bg-white p-4 rounded-3xl shadow-lg transform translate-y-8 scale-90 opacity-60 z-0">
                    <ImageWithFallback 
                      src={aboutImages[(currentAboutImage + 3) % aboutImages.length].src} 
                      alt="Card 3"
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Card 2 - middle layer */}
                  <div className={`absolute inset-0 bg-white p-4 rounded-3xl shadow-xl transform transition-all duration-600 z-10 ${
                    isImageChanging ? 'animate-card-stack-shift translate-y-4 scale-95 opacity-75' : 'translate-y-4 scale-96 opacity-80'
                  }`}>
                    <ImageWithFallback 
                      src={aboutImages[(currentAboutImage + 1) % aboutImages.length].src} 
                      alt="Next photo preview"
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Main card - top layer */}
                  <div 
                    className={`relative bg-white p-4 rounded-3xl shadow-2xl image-clickable transition-all duration-300 z-20 ${
                      isImageChanging ? 'animate-card-shuffle' : 'hover:shadow-3xl hover:scale-[1.02]'
                    }`}
                    onClick={handleImageClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleImageClick()}
                    aria-label="Click to view different team photos"
                    style={{ 
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Current Image */}
                    <ImageWithFallback 
                      src={aboutImages[currentAboutImage].src} 
                      alt={aboutImages[currentAboutImage].alt}
                      className={`w-full h-96 object-cover rounded-2xl transition-all duration-300 ${
                        isImageChanging ? '' : 'animate-card-reveal'
                      }`}
                    />
                    
                   
                    {/* Image counter */}
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentAboutImage + 1} / {aboutImages.length}
                    </div>
                    
                    {/* Image description */}
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-medium max-w-48 truncate">
                      {aboutImages[currentAboutImage].alt}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Our <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are proud to be supported by visionary sponsors who believe in innovation, education, 
              and sustainable progress. Their contributions empower us to turn ideas into impact.
            </p>
          </div>

          {/* Sponsor Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {[
              '/assets/sponsors/Screenshot_2025-06-26_211606-removebg-preview-rRMIlexOmqQjkfdZKcfEWg.png',
              '/assets/sponsors/images-removebg-preview1-f3NMy-HkGvT2F9SkSBaxKQ.png',
              '/assets/sponsors/korustan-ofis-removebg-preview-ZUYwHwY8rGVlv161bD6wgg.png',
              '/assets/sponsors/logouser-DQ73dkYznYLDXt95TOlepQ.png',
              '/assets/sponsors/safterlogo-DVNFeJFPVZIH0n-EM8ahIg.png',
              '/assets/sponsors/sazcilarlogo_1_-removebg-preview-Zk5gstezLLan1nBBx_cxxg.png'
            ].map((logo, index) => (
              <div key={index} className="animate-on-scroll group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 h-24 flex items-center justify-center group-hover:transform group-hover:scale-105">
                  <ImageWithFallback 
                    src={logo} 
                    alt={`Sponsor ${index + 1}`}
                    className="max-h-16 max-w-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="animate-on-scroll text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Brand Visibility</h3>
              <p className="text-slate-600 leading-relaxed">
                Showcase your brand to tech enthusiasts and industry professionals at major competitions.
              </p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Community Impact</h3>
              <p className="text-slate-600 leading-relaxed">
                Support the next generation of Turkish engineers and contribute to sustainable innovation.
              </p>
            </div>
            
            <div className="animate-on-scroll text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Innovation Partnership</h3>
              <p className="text-slate-600 leading-relaxed">
                Collaborate with cutting-edge technology development and R&D initiatives.
              </p>
            </div>
          </div>

          {/* Sponsorship CTA */}
          <div className="text-center animate-on-scroll">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-slate-800">
                Become Our <span className="gradient-text">Partner</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Would you like to join our mission to drive sustainable innovation? 
                Download our comprehensive sponsorship portfolio to explore partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/assets/DEAM-SD.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold flex items-center gap-2"
                >
                  Download Sponsorship Package
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="text-slate-500 text-sm">
                  📧 Contact us for custom partnership opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our journey through innovation, from concept to competition-ready vehicles.
            </p>
          </div>

          {/* Featured Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { name: 'Naima', image: '/assets/cars/cars0.jpeg', year: '2021', description: 'Our pioneering first prototype that marked the beginning of our electric vehicle journey.', specs: ['First Generation', 'Prototype Phase', 'Learning Foundation'] },
              { name: 'Sezgin', image: '/assets/cars/cars1.png', year: '2022', description: 'Enhanced efficiency model with improved performance metrics and refined engineering.', specs: ['Improved Efficiency', 'Better Performance', 'Enhanced Design'] },
              { name: 'Umay', image: '/assets/cars/cars2.jpeg', year: '2023', description: 'Advanced design iteration featuring cutting-edge technology and superior functionality.', specs: ['Advanced Technology', 'Superior Design', 'Enhanced Safety'] },
              { name: 'Umay YC-01', image: '/assets/cars/cars3.jpeg', year: '2024', description: 'Latest innovation milestone representing the pinnacle of our engineering excellence.', specs: ['Latest Innovation', 'Peak Performance', 'Competition Ready'] }
            ].map((car, index) => (
              <div key={index} className="animate-on-scroll group">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-slate-100 group-hover:transform group-hover:scale-[1.02]">
                  {/* Car Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Year Badge */}
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      {car.year}
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-8">
                    {/* Car Name */}
                    <h3 className="text-3xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {car.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      {car.description}
                    </p>
                    
                    {/* Specifications */}
                    <div className="space-y-2 mb-6">
                      {car.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                          <span className="text-slate-700 font-medium">{spec}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <button className="w-full bg-gradient-to-r from-slate-100 to-slate-200 hover:from-blue-600 hover:to-purple-600 text-slate-700 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-slate-200 hover:border-transparent hover:shadow-lg">
                      Learn More About {car.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/assets/gallery/gallery1.png',
              '/assets/gallery/gallery3.jpeg',
              '/assets/gallery/gallery4.jpeg',
              '/assets/gallery/gallery5.jpeg',
              '/assets/gallery/gallery6.jpeg',
              '/assets/gallery/gallery7.jpeg',
              '/assets/gallery/gallery8.jpeg',
              '/assets/teknofest-images/teknofest-2024.png'
            ].map((image, index) => (
              <div key={index} className="animate-on-scroll aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <ImageWithFallback 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to drive the future together? Get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-8 text-slate-800">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Follow Us</h4>
                    <p className="text-slate-600">@deamelectric</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Connect</h4>
                    <p className="text-slate-600">DEAM Studio</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Github className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Collaborate</h4>
                    <p className="text-slate-600">Open Source Projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership CTA */}
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Partner With Us</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Interested in sponsorship opportunities or collaboration? Download our 
                  comprehensive partnership portfolio to learn more about working with DEAM.
                </p>
                <a 
                  href="/assets/DEAM-SD.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Download Portfolio
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="text-3xl font-bold gradient-text mb-4">DEAM</div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Pioneering the future of electric vehicle technology in Turkey. 
                Representing innovation, sustainability, and excellence in every project.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/deamelectric/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/deam-studio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/deam-team" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  aria-label="View our GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#hero" className="block text-slate-300 hover:text-white transition-colors duration-300">Home</a>
                <a href="#features" className="block text-slate-300 hover:text-white transition-colors duration-300">Features</a>
                <a href="#about" className="block text-slate-300 hover:text-white transition-colors duration-300">About</a>
                <a href="#gallery" className="block text-slate-300 hover:text-white transition-colors duration-300">Gallery</a>
                <a href="#testimonials" className="block text-slate-300 hover:text-white transition-colors duration-300">Testimonials</a>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Achievements</h4>
              <div className="space-y-3 text-slate-300">
                <div>🏆 Teknofest 2021 Finalist</div>
                <div>🏆 Teknofest 2022 Finalist</div>
                <div>🏆 Teknofest 2023 Finalist</div>
                <div>🏆 Teknofest 2024 Finalist</div>
                <div>🚗 4 Electric Vehicle Models</div>
                <div>🇹🇷 Representing Turkey</div>
              </div>
            </div>
          </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              <p>© 2025 DEAM. All rights reserved. Built with passion for a sustainable future.</p>
                <p className="mt-1">
                Written with love and gifted 🎁❤️ - 
                <a 
                  href="https://github.com/VastSea0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 ml-1"
                >
                  Egehan KAHRAMAN
                </a>
                </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
