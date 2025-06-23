import React from 'react';

const Card = ({ category, image, description, resources, isExpanded, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <img 
        src={image} 
        alt={category}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{category}</h3>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        
        <div className="mt-auto">
          <button 
            onClick={onClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full"
          >
            {isExpanded ? 'Less Info' : 'More Info'}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-3 border-t pt-4">
            <h4 className="font-semibold text-gray-800">Available Resources:</h4>
            {resources.map((resource, id) => (
              <div key={id} className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium text-gray-800">{resource.name}</h5>
                <p className="text-sm text-gray-600 max-w-2xl mb-2">{resource.description}</p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Visit Site →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;