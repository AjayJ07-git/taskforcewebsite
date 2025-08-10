import React from 'react'
import { Link } from 'react-router-dom'
import { testSupabaseConnection } from '../utils/testSupabase'

const Home = () => {
  const handleTestSupabase = async () => {
    const result = await testSupabaseConnection();
    if (result.success) {
      alert('✅ Supabase is working! ' + result.message);
    } else {
      alert('❌ Supabase connection failed: ' + result.error);
    }
  };

  const features = [
    {
      title: 'Regular Activities',
      description: 'Join our daily activities and structured sessions designed for all students.',
      icon: '📚'
    },
    {
      title: 'Competitive Events',
      description: 'Participate in inter-college competitions, marathons, and track events throughout the year.',
      icon: '🏆'
    },
    {
      title: 'Community Support',
      description: 'Be part of a supportive community that motivates and encourages each other to achieve goals.',
      icon: '🤝'
    },
    {
      title: 'Professional Coaching',
      description: 'Learn from experienced coaches and improve your running technique and performance.',
      icon: '👨‍🏫'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-black">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-gray-900">Taskforce</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              NIT Trichy Student Organization
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join our community of passionate students and take your academic and personal journey to the next level. 
              Whether you're a freshman or a senior, we have something for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="btn-secondary">
                Learn More About Us
              </Link>
              <Link to="/induction" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Join the Club
              </Link>
              <button 
                onClick={handleTestSupabase}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Test Supabase
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-yellow-600 font-semibold mb-2">March 15, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Annual Marathon Registration Open
              </h3>
              <p className="text-gray-600 mb-4">
                Registration for our annual marathon is now open. Join us for the biggest running event of the year!
              </p>
              <Link to="/events" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-yellow-600 font-semibold mb-2">March 10, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                New Training Schedule
              </h3>
              <p className="text-gray-600 mb-4">
                We've updated our training schedule with new time slots and specialized sessions for different skill levels.
              </p>
              <Link to="/about" className="text-yellow-600 hover:text-yellow-700 font-medium">
                View Schedule →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-yellow-600 font-semibold mb-2">March 5, 2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Welcome New Members
              </h3>
              <p className="text-gray-600 mb-4">
                We're excited to welcome 25 new members to our running family this month. Welcome aboard!
              </p>
              <Link to="/members" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Meet Them →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home