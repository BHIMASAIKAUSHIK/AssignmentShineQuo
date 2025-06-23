import React, { useState } from 'react';
import Card from './components/card';
import './App.css';

import healthImage from "./components/Images/health.jpg";
import careerServicesImage from "./components/Images/careerservices.png";
import financialaid from './components/Images/financialaid.png';
import identity from './components/Images/identity.png';
import relationship from './components/Images/realtionship.webp';
import time from './components/Images/time.jpg';

function App() {
  // State for form data
  const [formData, setFormData] = useState({
    category: '',
    image: '',
    description: ''
  });

  // State for UI controls
  const [showForm, setShowForm] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [expanded, setExpanded] = useState([]);

  // State for resources
  const [resources, setResources] = useState([{ name: '', description: '', link: '' }]);

  // Resource handling functions
  const handleResourceChange = (index, field, value) => {
    const updatedResources = [...resources];
    updatedResources[index][field] = value;
    setResources(updatedResources);
  };

  const addResource = () => {
    if (resources.length < 3) {
      setResources([...resources, { name: '', description: '', link: '' }]);
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const categoryData = {
      category: formData.category,
      image: formData.image,
      description: formData.description,
      resources: resources
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/add-category/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Category added successfully!');
        
        // Reset form
        setFormData({ category: '', image: '', description: '' });
        setResources([{ name: '', description: '', link: '' }]);
        setShowForm(false);
        setShowResources(false);
      } else {
        alert('Failed to add category');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding category');
    }
  };

  // Card expansion handler
  const handleClick = (index) => {
    if (expanded.includes(index)) {
      setExpanded(prev => prev.filter(number => number !== index));
    } else {
      setExpanded(prev => [...prev, index]);
    }
  };

  // Static resources data
  const resourcesData = [
    {
      category: "Health & Wellness",
      image: healthImage,
      description: "Physical and mental health support services",
      resources: [
        {
          name: "Campus Health Center",
          description: "Primary care, urgent care, and preventive health services",
          link: "https://google.com"
        },
        {
          name: "Counseling & Psychological Services",
          description: "Free confidential mental health counseling for students",
          link: "https://google.com"
        },
        {
          name: "Crisis Hotline",
          description: "24/7 mental health crisis support and intervention",
          link: "https://google.com"
        }
      ]
    },
    {
      category: "Career Services",
      image: careerServicesImage,
      description: "Job search, internships, and career development",
      resources: [
        {
          name: "Career Center",
          description: "Resume help, interview prep, and job placement assistance",
          link: "https://google.com"
        },
        {
          name: "Handshake Job Portal",
          description: "Access thousands of internships and full-time job postings",
          link: "https://google.com"
        }
      ]
    },
    {
      category: "Financial Aid",
      image: financialaid,
      description: "Scholarships, loans, and financial assistance",
      resources: [
        {
          name: "Financial Aid Office",
          description: "FAFSA help, scholarship applications, and loan counseling",
          link: "https://google.com"
        },
        {
          name: "Emergency Financial Assistance",
          description: "Short-term financial help for unexpected expenses",
          link: "https://google.com"
        },
        {
          name: "Work-Study Programs",
          description: "Part-time campus jobs to help pay for college expenses",
          link: "https://google.com"
        }
      ]
    },
    {
      category: "Time Management",
      image: time,
      description: "Tutoring, study groups, and learning assistance",
      resources: [
        {
          name: "Learning Center",
          description: "Free tutoring and study skills workshops",
          link: "https://google.com"
        },
        {
          name: "Writing Center",
          description: "One-on-one writing assistance for all assignments",
          link: "https://google.com"
        }
      ]
    },
    {
      category: "Relationships",
      image: relationship,
      description: "Clubs, activities, and campus involvement",
      resources: [
        {
          name: "Student Activities",
          description: "Join clubs, organizations, and campus events",
          link: "https://google.com"
        },
        {
          name: "Recreation Center",
          description: "Fitness facilities, intramural sports, and group classes",
          link: "https://google.com"
        }
      ]
    },
    {
      category: "Identity",
      image: identity,
      description: "Residence halls, meal plans, and campus dining",
      resources: [
        {
          name: "Housing Services",
          description: "Residence hall applications and roommate matching",
          link: "https://google.com"
        },
        {
          name: "Dining Services",
          description: "Meal plans, dining locations, and dietary accommodations",
          link: "https://google.com"
        },
        {
          name: "Off-Campus Housing",
          description: "Apartment listings and rental assistance near campus",
          link: "https://google.com"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Campus Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your one-stop destination for all campus support services. 
            Click "More Info" to explore resources in each category.
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
          >
            + Add New Category
          </button>
        </div>

        {/* Add Category Form Modal */}
        {showForm && (
          <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Add New Category</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Category Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Health & Wellness"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Physical and mental health support services"
                  />
                </div>

                {/* Add Resources Button */}
                <button
                  type="button"
                  onClick={() => setShowResources(!showResources)}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-md"
                >
                  Add Resources
                </button>

                {/* Resources Section */}
                {showResources && (
                  <div className="border rounded p-3 mt-3 space-y-3">
                    {resources.map((resource, index) => (
                      <div key={index} className="space-y-2">
                        <p className="text-sm text-gray-600">Resource {index + 1}</p>
                        
                        <input
                          type="text"
                          placeholder="Resource name"
                          value={resource.name}
                          onChange={(e) => handleResourceChange(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border rounded"
                        />
                        
                        <input
                          type="text"
                          placeholder="Description"
                          value={resource.description}
                          onChange={(e) => handleResourceChange(index, 'description', e.target.value)}
                          className="w-full px-3 py-2 border rounded"
                        />
                        
                        <input
                          type="url"
                          placeholder="https://example.com"
                          value={resource.link}
                          onChange={(e) => handleResourceChange(index, 'link', e.target.value)}
                          className="w-full px-3 py-2 border rounded"
                        />
                        
                        {index < resources.length - 1 && <hr />}
                      </div>
                    ))}
                    
                    <button
                      type="button"
                      onClick={addResource}
                      className="text-blue-600 text-sm"
                    >
                      + Add Another Resource
                    </button>
                  </div>
                )}

                {/* Form Buttons */}
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {resourcesData.map((category, index) => (
            <Card
              key={category.category}
              category={category.category}
              image={category.image}
              description={category.description}
              resources={category.resources}
              isExpanded={expanded.includes(index)}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;