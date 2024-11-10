// src/components/home/ProcessSteps.jsx
const ProcessSteps = () => {
    const steps = [
      {
        number: '01',
        title: 'Discovery',
        description: 'We learn about your goals, audience, and vision through in-depth consultation.'
      },
      {
        number: '02',
        title: 'Creative Planning',
        description: 'Our team develops concepts, storyboards, and production strategies.'
      },
      {
        number: '03',
        title: 'Production',
        description: 'Professional filming, editing, and post-production with attention to detail.'
      },
      {
        number: '04',
        title: 'Optimization',
        description: 'Performance tracking and optimization to ensure maximum impact.'
      }
    ];
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to delivering exceptional video content
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProcessSteps;