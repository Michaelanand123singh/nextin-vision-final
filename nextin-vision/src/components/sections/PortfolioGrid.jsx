// src/components/sections/PortfolioGrid.jsx
import React from 'react';
import { VideoPlayer } from '../shared/VideoPlayer';

const PortfolioGrid = ({ items }) => {
  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="group cursor-pointer"
          onClick={() => setSelectedItem(item)}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                View Project
              </span>
            </div>
          </div>
          <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.category}</p>
        </div>
      ))}

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <VideoPlayer src={selectedItem.videoUrl} className="aspect-video" />
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Project Details</h3>
                <ul className="text-gray-600">
                  <li>Client: {selectedItem.client}</li>
                  <li>Category: {selectedItem.category}</li>
                  <li>Duration: {selectedItem.duration}</li>
                </ul>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedItem(null)}
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};