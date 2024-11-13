// src/components/home/Services.jsx
import { ServiceCard } from '../shared/ServiceCard';
import { VideoCamera, Presentation, Users, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Brand Story Videos',
      description: 'Craft compelling narratives that showcase your company's mission, values, and unique positioning.',z
      icon: VideoCamera,
      price: '2,000'
    },
    {
      title: 'Product Showcases',
      description: 'Highlight your products and services with dynamic demonstrations and feature presentations.',
      icon: Presentation,
      price: '1,500'
    },
    {
      title: 'Training Content',
      description: 'Create engaging educational content for employee training and customer education.',
      icon: Users,
      price: '1,000'
    },
    {
      title: 'Social Media Package',
      description: 'Platform-optimized video content designed to boost engagement and reach.',
      icon: Share2,
      price: '800'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional video production services tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;