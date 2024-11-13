// src/pages/About.jsx
import SectionTitle from '../components/common/SectionTitle';
import { FaCheckCircle } from 'react-icons/fa';

const team = [
  {
    name: 'John Doe',
    role: 'Creative Director',
    image: '/assets/images/team/john.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Lead Videographer',
    image: '/assets/images/team/jane.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Senior Animator',
    image: '/assets/images/team/michael.jpg',
  },
  {
    name: 'Emily Davis',
    role: 'Content Strategist',
    image: '/assets/images/team/emily.jpg',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <SectionTitle
            subtitle="About Us"
            title="Our Story"
            description="We're passionate about creating impactful video content that drives results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Founded with a vision to transform corporate communication, Nextin Vision
                has been at the forefront of video production excellence. We combine
                creativity with strategic thinking to deliver results that exceed
                expectations.
              </p>
              <p className="text-gray-700">
                Our team of experienced professionals brings diverse expertise in
                videography, storytelling, and digital marketing to every project.
                We're committed to pushing the boundaries of what's possible in
                corporate video, always striving to create content that captivates
                and inspires.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary">
                    <FaCheckCircle className="w-6 h-6" />
                  </span>
                  <span className="text-gray-700">Expert team with industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">
                    <FaCheckCircle className="w-6 h-6" />
                  </span>
                  <span className="text-gray-700">Strategic approach to content creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">
                    <FaCheckCircle className="w-6 h-6" />
                  </span>
                  <span className="text-gray-700">Focus on ROI and business results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">
                    <FaCheckCircle className="w-6 h-6" />
                  </span>
                  <span className="text-gray-700">Innovative and award-winning work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Experts"
            description="The talented people behind our success."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1 text-primary">{member.name}</h3>
                  <p className="text-gray-700 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}