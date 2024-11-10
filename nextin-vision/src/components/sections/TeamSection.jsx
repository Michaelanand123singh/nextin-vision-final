// src/components/sections/TeamSection.jsx
import React from 'react';
import { LinkedIn, Twitter, Mail } from 'lucide-react';

const TeamSection = ({ team }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member) => (
        <div key={member.id} className="text-center">
          <div className="mb-4 relative group">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex space-x-4">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <LinkedIn className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                <a href={`mailto:${member.email}`} className="text-gray-600">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-gray-600 mb-2">{member.role}</p>
          <p className="text-sm text-gray-500">{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export { PortfolioGrid, TeamSection };