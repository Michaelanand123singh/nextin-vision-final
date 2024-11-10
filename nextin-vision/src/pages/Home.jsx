// src/pages/Home.jsx
import { Video, Monitor, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';

const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'Satisfied Clients', value: '50+' },
  { label: 'Team Members', value: '15+' },
  { label: 'Awards Won', value: '10+' },
];

const services = [
  {
    icon: Video,
    title: 'Brand Story Videos',
    description: 'Compelling narratives that showcase your company\'s mission and values.',
    price: '2,000'
  },
  {
    icon: Monitor,
    title: 'Product Showcases',
    description: 'Dynamic demonstrations that highlight your product\'s key features.',
    price: '1,500'
  },
  {
    icon: Users,
    title: 'Training Content',
    description: 'Engaging educational videos for employee development.',
    price: '1,000'
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/videos/hero-poster.jpg"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="container relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Corporate Stories into Visual Impact
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Professional video production services that elevate your brand and engage your audience.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link to="/portfolio" className="btn bg-white/10 text-white hover:bg-white/20">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Our Services"
            title="Professional Video Solutions"
            description="We offer a comprehensive range of video production services tailored to your business needs."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}