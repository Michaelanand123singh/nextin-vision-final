// src/pages/Services.jsx
import { Video, Monitor, Users, Megaphone, Presentation } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';

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
  {
    icon: Megaphone,
    title: 'Social Media Content',
    description: 'Engaging short-form videos optimized for social platforms.',
    price: '800'
  },
  {
    icon: Presentation,
    title: 'Executive Communications',
    description: 'Professional video presentations for leadership messages.',
    price: '1,500'
  },
];

export default function Services() {
  return (
    <div className="pt-20">
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

      {/* Process Overview */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="Our streamlined process ensures quality results and client satisfaction."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', description: 'Understanding your goals and vision' },
              { title: 'Planning', description: 'Developing the creative strategy' },
              { title: 'Production', description: 'Creating your video content' },
              { title: 'Delivery', description: 'Final review and optimization' },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
