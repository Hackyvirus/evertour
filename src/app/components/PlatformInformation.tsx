import React from 'react'
import { MapPin, BookOpen, Globe } from 'lucide-react';

const PlatformInformation = () => {
  return (
    <div>
        
         {/* Additional Platform Information Section */}
      <section className="bg-[#FFFBE9] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#AD8B73] mb-4">Virtual Campus Experience</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover Fergusson College like never before through our immersive virtual tour platform. 
              Experience 138 years of academic excellence from anywhere in the world.
            </p>
          </div>

          {/* Platform Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#CEAB93] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#FFFBE9]" />
              </div>
              <h3 className="text-xl font-semibold text-[#AD8B73] mb-3">360° Virtual Tours</h3>
              <p className="text-gray-600">Explore every corner of our historic campus with interactive 360-degree views of all major buildings and facilities.</p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#CEAB93] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#FFFBE9]" />
              </div>
              <h3 className="text-xl font-semibold text-[#AD8B73] mb-3">Interactive Campus Map</h3>
              <p className="text-gray-600">Navigate through our campus with detailed interactive maps showing all departments, facilities, and points of interest.</p>
            </div>
            
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#CEAB93] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#FFFBE9]" />
              </div>
              <h3 className="text-xl font-semibold text-[#AD8B73] mb-3">Rich Information</h3>
              <p className="text-gray-600">Access detailed information about each location, including history, facilities, and academic programs offered.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] rounded-2xl p-8 text-[#FFFBE9]">
            <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
            <p className="text-lg mb-6 opacity-90">
              Take a virtual journey through Fergusson College and discover what makes us one of India&apos;s premier educational institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-2 border-[#FFFBE9] rounded-md bg-transparent px-8 py-3 cursor-pointer font-bold text-[#FFFBE9] hover:bg-[#FFFBE9] hover:text-[#AD8B73] transition-all duration-300">
                Start Virtual Tour
              </button>
              <button className="bg-[#FFFBE9] rounded-md px-8 py-3 cursor-pointer font-bold text-[#AD8B73] hover:bg-white transition-all duration-300">
                Learn About Admissions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlatformInformation