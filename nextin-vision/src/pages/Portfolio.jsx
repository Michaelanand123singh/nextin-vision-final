// src/pages/Portfolio.jsx
import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';

const categories = ['All', 'Brand Story', 'Product', 'Training', 'Social Media'];

const portfolioItems = [
  {
    title: 'Tech Company Brand Story',
    category: 'Brand Story',
    image: '/assets/images/portfolio/brand-1.jpg',
    description: 'A compelling brand story for a leading tech company.'
  },
  {
    title: 'Product Launch Video',
    category: 'Product',
    image: '/assets/images/portfolio/product-1.jpg',
    description: 'New product launch video for consumer electronics.'
  },
  // Add more portfolio items
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="section">
        <div className="container">
          <SectionTitle
            subtitle="Our Work"
            title="Featured Projects"
            description="Explore our collection of successful video projects."
            center
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}