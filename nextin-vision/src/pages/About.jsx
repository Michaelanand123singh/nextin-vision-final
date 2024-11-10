// src/pages/About.jsx
import SectionTitle from '../components/common/SectionTitle';

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
  // Add more team members
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="About Us"
            title="Our Story"
            description="We're passionate about creating impactful video content that drives results."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Founded with a vision to transform corporate communication, Nextin Vision
                has been at the forefront of video production excellence. We combine
                creativity with strategic thinking to deliver results that exceed
                expectations.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals brings diverse expertise in
                videography, storytelling, and digital marketing to every project.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
                  <span>Expert team with industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
                  <span>Strategic approach to content creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
                  <span>Focus on ROI and business results</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}