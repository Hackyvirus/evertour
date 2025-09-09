import React from 'react';
import { MapPin, Users, Award, BookOpen, Calendar, Phone, Mail, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFBE9]">
        <Navbar/>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#AD8B73] to-[#CEAB93] text-[#FFFBE9] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Fergusson College</h1>
            <p className="text-xl mb-6 opacity-90">A Legacy of Excellence Since 1885</p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-5 h-5" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#AD8B73] mb-6">About Fergusson College</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Fergusson College stands as one of India's most prestigious educational institutions, founded in 1885 by the Deccan Education Society. Named after Sir James Fergusson, the then Governor of Bombay, the college has been a beacon of academic excellence and cultural heritage for over 138 years.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Located in the heart of Pune, our institution has nurtured countless leaders, scholars, and innovators who have made significant contributions to society. We continue to uphold our founding principles of providing quality education while fostering critical thinking, creativity, and social responsibility.
            </p>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, number: "138+", label: "Years of Excellence" },
              { icon: Users, number: "15,000+", label: "Students" },
              { icon: BookOpen, number: "50+", label: "Academic Programs" },
              { icon: Award, number: "500+", label: "Faculty Members" }
            ].map((stat, index) => (
              <div key={index} className="bg-[#CEAB93] text-[#FFFBE9] rounded-xl p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Excellence */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#AD8B73] mb-6">Academic Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#CEAB93] mb-3">Undergraduate Programs</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Bachelor of Arts (BA)</li>
                  <li>• Bachelor of Science (BSc)</li>
                  <li>• Bachelor of Commerce (BCom)</li>
                  <li>• Bachelor of Computer Applications (BCA)</li>
                  <li>• Bachelor of Management Studies (BMS)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#CEAB93] mb-3">Postgraduate Programs</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Master of Arts (MA)</li>
                  <li>• Master of Science (MSc)</li>
                  <li>• Master of Commerce (MCom)</li>
                  <li>• Master of Computer Applications (MCA)</li>
                  <li>• MBA Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#AD8B73] text-[#FFFBE9] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                To be a globally recognized institution of higher learning that empowers students with knowledge, skills, and values necessary to become responsible citizens and leaders in their chosen fields.
              </p>
            </div>
            <div className="bg-[#CEAB93] text-[#FFFBE9] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To provide transformative educational experiences through innovative teaching, research, and community engagement while preserving our rich cultural heritage and promoting inclusive growth.
              </p>
            </div>
          </div>
        </section>

        {/* Campus Life */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#AD8B73] mb-6">Campus Life</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#CEAB93] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#FFFBE9]" />
                </div>
                <h4 className="font-semibold text-[#AD8B73] mb-2">Student Organizations</h4>
                <p className="text-gray-600 text-sm">Over 50 active clubs and societies fostering leadership and creativity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#CEAB93] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#FFFBE9]" />
                </div>
                <h4 className="font-semibold text-[#AD8B73] mb-2">Sports & Recreation</h4>
                <p className="text-gray-600 text-sm">State-of-the-art facilities for various sports and recreational activities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#CEAB93] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#FFFBE9]" />
                </div>
                <h4 className="font-semibold text-[#AD8B73] mb-2">Library & Resources</h4>
                <p className="text-gray-600 text-sm">Extensive collection with digital resources and modern learning spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] text-[#FFFBE9] rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-sm opacity-90">Fergusson College Road, Shivajinagar, Pune - 411004, Maharashtra, India</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-sm opacity-90">+91-20-2553-2039</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3" />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-sm opacity-90">principal@fergusson.edu</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;