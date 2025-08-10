import React from 'react'

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every run, every training session, and every competition.',
      icon: '⭐'
    },
    {
      title: 'Community',
      description: 'Building strong bonds and supporting each other through every step of our journey.',
      icon: '🤝'
    },
    {
      title: 'Perseverance',
      description: 'Never giving up, pushing through challenges, and achieving our personal best.',
      icon: '💪'
    },
    {
      title: 'Growth',
      description: 'Continuous improvement in our running skills, fitness levels, and personal development.',
      icon: '📈'
    }
  ]

  const timeline = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'Taskforce was founded by a group of passionate runners at NIT Trichy with a vision to create a supportive running community.'
    },
    {
      year: '2020',
      title: 'First Competition',
      description: 'Despite challenges, we organized our first inter-college virtual running competition, bringing together runners from across the region.'
    },
    {
      year: '2021',
      title: 'Growth Phase',
      description: 'Membership grew to over 100 active runners, and we established regular training programs and coaching sessions.'
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Won multiple inter-college competitions and received recognition as the most active sports club on campus.'
    },
    {
      year: '2023',
      title: 'Expansion',
      description: 'Launched specialized training programs for different distances and introduced mentorship programs for new runners.'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Today, we are 150+ strong community continuing to inspire and support runners of all levels at NIT Trichy.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Taskforce
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              More than just a run club - we're a family of dedicated athletes committed to 
              excellence, community, and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To foster a vibrant running community at NIT Trichy that promotes physical fitness, 
                mental well-being, and personal excellence. We aim to provide a supportive environment 
                where runners of all levels can train, compete, and grow together.
              </p>
              <p className="text-lg text-gray-600">
                Through structured training programs, competitive events, and community outreach, 
                we strive to develop not just better runners, but better individuals who embody 
                the values of discipline, perseverance, and teamwork.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be recognized as the premier running club in South India, known for our 
                commitment to excellence, innovation in training methodologies, and the 
                development of world-class athletes.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where Taskforce alumni continue to make their mark in 
                national and international running competitions, while our club serves as a 
                model for other institutions across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape the culture of our running community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Training Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive training program designed for all skill levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Morning Sessions</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Monday - Friday:</strong> 6:00 AM - 7:30 AM</p>
                <p><strong>Focus:</strong> Endurance training, tempo runs</p>
                <p><strong>Location:</strong> Campus track & surrounding areas</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evening Sessions</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Monday, Wednesday, Friday:</strong> 5:30 PM - 7:00 PM</p>
                <p><strong>Focus:</strong> Speed work, interval training</p>
                <p><strong>Location:</strong> Athletic track</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weekend Long Runs</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Saturday:</strong> 6:00 AM - 8:00 AM</p>
                <p><strong>Focus:</strong> Long distance, group runs</p>
                <p><strong>Location:</strong> Various scenic routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming NIT Trichy's premier run club
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-yellow-600 font-bold text-xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating our successes and milestones over the years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">25+ Competitions Won</h3>
              <p className="text-gray-600">Inter-college and regional running competitions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Sports Club 2022</h3>
              <p className="text-gray-600">Awarded by NIT Trichy for outstanding contribution</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">5 National Qualifiers</h3>
              <p className="text-gray-600">Members who qualified for national level competitions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About