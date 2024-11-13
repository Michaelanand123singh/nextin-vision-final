import { useState, useEffect } from 'react';
import { Video, Monitor, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';
import './Home.css';

// Data arrays moved inside the component file
const stats = [
  { 
    label: 'Projects Completed', 
    value: '200+',
    icon: Award,
    color: 'text-blue-600'
  },
  { 
    label: 'Satisfied Clients', 
    value: '50+',
    icon: Users,
    color: 'text-green-600'
  },
  { 
    label: 'Team Members', 
    value: '15+',
    icon: Users,
    color: 'text-purple-600'
  },
  { 
    label: 'Awards Won', 
    value: '10+',
    icon: Award,
    color: 'text-yellow-600'
  }
];

const services = [
  {
    icon: Video,
    title: 'Brand Story Videos',
    description: 'Compelling narratives that showcase your company\'s mission and values.',
    price: '2,000',
    features: ['4K Video Quality', 'Professional Script', 'Voice Over', 'Background Music']
  },
  {
    icon: Monitor,
    title: 'Product Showcases',
    description: 'Dynamic demonstrations that highlight your product\'s key features.',
    price: '1,500',
    features: ['HD Video Quality', 'Product Close-ups', 'Custom Graphics', 'Music']
  },
  {
    icon: Users,
    title: 'Training Content',
    description: 'Engaging educational videos for employee development.',
    price: '1,000',
    features: ['Clear Instructions', 'Chapter Markers', 'Quiz Integration', 'Progress Tracking']
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    stats: false,
    services: false,
    cta: false,
  });

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Loading state handler
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className={`hero-overlay absolute inset-0 bg-black/50 z-10 transition-opacity duration-700 ${
            videoLoaded ? 'opacity-50' : 'opacity-100'
          }`} 
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero.jpg"
          onLoadedData={handleVideoLoad}
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        <motion.div 
          className="hero-content container relative z-20 text-white px-4 mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Corporate Stories<br />
            into <span className="text-blue-400">Visual Impact</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-100">
            Professional video production services that elevate your brand and engage your audience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="btn btn-primary group bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/portfolio" 
              className="btn btn-secondary backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section 
        className="stats-section py-16 bg-gray-50"
        data-section="stats"
      >
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card bg-white rounded-xl shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.stats ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                <div className={`stat-value text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="services-section py-20"
        data-section="services"
      >
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Our Services"
            title="Professional Video Solutions"
            description="We offer a comprehensive range of video production services tailored to your business needs."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.services ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="service-card"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="cta-section py-16 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden"
        data-section="cta"
      >
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <motion.div 
          className="container px-4 mx-auto text-center text-white relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={visibleSections.cta ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-blue-600 hover:bg-gray-100 group transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}