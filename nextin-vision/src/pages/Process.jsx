// src/pages/Process.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  PenTool, 
  Video, 
  BarChart, 
  CheckCircle 
} from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ProcessSteps from '../components/home/ProcessSteps';

const ProcessPage = () => {
  const deliverables = [
    'High-quality video files optimized for different platforms',
    'Detailed analytics and performance tracking setup',
    'Raw footage and project files (upon request)',
    'Social media cutdowns and variations',
    'Comprehensive usage rights and licensing'
  ];

  const advantages = [
    {
      icon: Search,
      title: 'Thorough Discovery',
      description: 'We dive deep into understanding your brand, goals, and target audience to create content that resonates.'
    },
    {
      icon: PenTool,
      title: 'Creative Excellence',
      description: 'Our experienced team crafts compelling narratives and visually stunning content that captures attention.'
    },
    {
      icon: Video,
      title: 'Production Quality',
      description: 'Using top-tier equipment and techniques to ensure professional-grade output every time.'
    },
    {
      icon: BarChart,
      title: 'Results Focused',
      description: 'We measure success through concrete metrics and optimize content for maximum impact.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Production Process
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A strategic, results-driven approach to creating impactful corporate videos
              that deliver measurable results.
            </p>
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Start Your Project
              <CheckCircle size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <ProcessSteps />

      {/* Detailed Process Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            subtitle="Workflow"
            title="Detailed Production Phases"
            description="Each phase is carefully designed to ensure quality, efficiency, and success."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {[
              {
                phase: "Discovery Phase",
                steps: [
                  "Initial consultation and goal setting",
                  "Target audience analysis",
                  "Content strategy development",
                  "Budget and timeline planning"
                ]
              },
              {
                phase: "Creative Planning",
                steps: [
                  "Concept development and ideation",
                  "Storyboarding and visual direction",
                  "Script writing and refinement",
                  "Production schedule creation"
                ]
              },
              {
                phase: "Production",
                steps: [
                  "Professional filming and direction",
                  "Motion graphics and animation",
                  "Sound design and music selection",
                  "Color grading and final touches"
                ]
              },
              {
                phase: "Review & Optimization",
                steps: [
                  "Client feedback integration",
                  "Platform-specific optimization",
                  "Analytics setup and tracking",
                  "Performance monitoring"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-2xl font-semibold mb-4">{phase.phase}</h3>
                <ul className="space-y-3">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1" size={20} />
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Our Advantages"
            description="What sets our production process apart from others"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <advantage.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-primary text-white rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">What You'll Receive</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-gray-100 mt-8 inline-flex items-center gap-2"
              >
                Schedule a Call
                <CheckCircle size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;