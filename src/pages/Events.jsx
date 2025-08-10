import React, { useState } from 'react'

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Taskforce Marathon',
      date: 'April 15, 2024',
      time: '6:00 AM',
      location: 'NIT Trichy Campus',
      type: 'Competition',
      description: 'Our biggest event of the year! Join us for a full marathon, half marathon, and 10K run.',
      registrationOpen: true,
      participants: '200+ expected',
      prizes: 'Trophies and medals for top finishers',
      image: '🏃‍♂️'
    },
    {
      id: 2,
      title: 'Speed Training Workshop',
      date: 'March 25, 2024',
      time: '5:30 PM',
      location: 'Athletic Track',
      type: 'Training',
      description: 'Learn advanced speed training techniques from professional coaches.',
      registrationOpen: true,
      participants: 'Limited to 30 members',
      prizes: 'Certificate of participation',
      image: '⚡'
    },
    {
      id: 3,
      title: 'Inter-College Running Championship',
      date: 'May 10, 2024',
      time: '7:00 AM',
      location: 'Regional Sports Complex',
      type: 'Competition',
      description: 'Compete against the best runners from colleges across Tamil Nadu.',
      registrationOpen: true,
      participants: '500+ athletes expected',
      prizes: 'Cash prizes and scholarships',
      image: '🏆'
    },
    {
      id: 4,
      title: 'Night Run Challenge',
      date: 'March 30, 2024',
      time: '8:00 PM',
      location: 'Campus Circuit',
      type: 'Fun Run',
      description: 'A unique night running experience with LED lights and music.',
      registrationOpen: true,
      participants: 'Open to all',
      prizes: 'Glow-in-the-dark medals',
      image: '🌙'
    }
  ]

  const pastEvents = [
    {
      id: 5,
      title: 'Winter Marathon 2024',
      date: 'January 20, 2024',
      location: 'NIT Trichy Campus',
      type: 'Competition',
      description: 'Successfully completed with 180 participants from 15 colleges.',
      results: 'Taskforce members won 8 medals including 3 gold',
      image: '🥇'
    },
    {
      id: 6,
      title: 'New Year Fun Run',
      date: 'January 1, 2024',
      location: 'Campus Circuit',
      type: 'Fun Run',
      description: 'Started the year with an energetic 5K fun run.',
      results: '120 participants, great community spirit',
      image: '🎉'
    },
    {
      id: 7,
      title: 'Endurance Training Camp',
      date: 'December 15-17, 2023',
      location: 'Kodaikanal Hills',
      type: 'Training',
      description: '3-day intensive training camp in the hills.',
      results: 'Significant improvement in member fitness levels',
      image: '⛰️'
    },
    {
      id: 8,
      title: 'Diwali Dash',
      date: 'November 12, 2023',
      location: 'City Center',
      type: 'Fun Run',
      description: 'Festive themed run celebrating Diwali.',
      results: '200+ participants, raised funds for charity',
      image: '🪔'
    }
  ]

  const regularActivities = [
    {
      title: 'Morning Training Sessions',
      schedule: 'Monday - Friday, 6:00 AM - 7:30 AM',
      location: 'Campus Track',
      description: 'Daily endurance and technique training for all levels',
      image: '🌅'
    },
    {
      title: 'Speed Work Sessions',
      schedule: 'Monday, Wednesday, Friday, 5:30 PM - 7:00 PM',
      location: 'Athletic Track',
      description: 'Interval training and speed development sessions',
      image: '💨'
    },
    {
      title: 'Weekend Long Runs',
      schedule: 'Saturday, 6:00 AM - 8:00 AM',
      location: 'Various Routes',
      description: 'Group long-distance runs exploring different routes',
      image: '🛣️'
    },
    {
      title: 'Recovery Sessions',
      schedule: 'Sunday, 7:00 AM - 8:00 AM',
      location: 'Campus Grounds',
      description: 'Light jogging, stretching, and recovery activities',
      image: '🧘‍♂️'
    }
  ]

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Events', count: upcomingEvents.length },
    { id: 'past', label: 'Past Events', count: pastEvents.length },
    { id: 'regular', label: 'Regular Activities', count: regularActivities.length }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Competition':
        return 'bg-red-100 text-red-800'
      case 'Training':
        return 'bg-blue-100 text-blue-800'
      case 'Fun Run':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const renderEventCard = (event, isPast = false) => (
    <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="text-3xl mr-3">{event.image}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{event.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-4">📅 {event.date}</span>
                {event.time && <span>🕐 {event.time}</span>}
              </div>
              <div className="text-gray-600 mb-2">📍 {event.location}</div>
            </div>
          </div>
          {event.type && (
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
              {event.type}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="space-y-2 text-sm">
          {event.participants && (
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-2">👥 Participants:</span>
              <span className="text-gray-600">{event.participants}</span>
            </div>
          )}
          {event.prizes && (
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-2">🏆 Prizes:</span>
              <span className="text-gray-600">{event.prizes}</span>
            </div>
          )}
          {event.results && (
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-2">📊 Results:</span>
              <span className="text-gray-600">{event.results}</span>
            </div>
          )}
        </div>
        
        {!isPast && event.registrationOpen && (
          <div className="mt-6">
            <button className="btn-primary w-full">
              Register Now
            </button>
          </div>
        )}
      </div>
    </div>
  )

  const renderActivityCard = (activity) => (
    <div key={activity.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{activity.image}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
          <p className="text-yellow-600 font-medium">{activity.schedule}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-3">{activity.description}</p>
      <div className="text-sm text-gray-500">📍 {activity.location}</div>
    </div>
  )

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join us for exciting running events, training sessions, and competitions throughout the year
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">2000+</div>
              <div className="text-gray-600">Total Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">25+</div>
              <div className="text-gray-600">Competitions Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
              <div className="text-gray-600">Monthly Activities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white text-gray-700 hover:bg-yellow-50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                <p className="text-xl text-gray-600">
                  Don't miss out on these exciting upcoming events and activities
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => renderEventCard(event))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
                <p className="text-xl text-gray-600">
                  Look back at our successful events and achievements
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pastEvents.map((event) => renderEventCard(event, true))}
              </div>
            </div>
          )}

          {/* Regular Activities */}
          {activeTab === 'regular' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Regular Activities</h2>
                <p className="text-xl text-gray-600">
                  Join our regular training sessions and activities throughout the week
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularActivities.map((activity) => renderActivityCard(activity))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Calendar</h2>
            <p className="text-xl text-gray-600">Stay updated with our event schedule</p>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">March 2024</div>
                <ul className="space-y-2 text-gray-600">
                  <li>25th - Speed Training Workshop</li>
                  <li>30th - Night Run Challenge</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">April 2024</div>
                <ul className="space-y-2 text-gray-600">
                  <li>15th - Annual Marathon</li>
                  <li>28th - Endurance Training</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">May 2024</div>
                <ul className="space-y-2 text-gray-600">
                  <li>10th - Inter-College Championship</li>
                  <li>25th - Summer Training Camp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-yellow-400">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Participate?
            </h2>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
              Join our upcoming events and be part of the Taskforce running community. 
              Registration is now open for multiple events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Contact for Registration
              </a>
              <a href="/induction" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Join the Club
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Guidelines */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Guidelines</h2>
            <p className="text-xl text-gray-600">Important information for all participants</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Registration</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Register at least 3 days before event</li>
                <li>• Valid student ID required</li>
                <li>• Medical certificate for competitions</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dress Code</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Proper running shoes mandatory</li>
                <li>• Comfortable athletic wear</li>
                <li>• Club t-shirt for competitions</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Follow all safety instructions</li>
                <li>• Stay hydrated during events</li>
                <li>• Report any injuries immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events