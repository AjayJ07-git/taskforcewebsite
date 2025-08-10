import React from 'react'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Taskforce
            </h1>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white min-h-screen pb-24">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To foster a vibrant student community at NIT Trichy that promotes academic excellence, 
                personal development, and collaborative growth. We aim to provide a supportive environment 
                where students of all backgrounds can learn, innovate, and thrive together.
              </p>
              <p className="text-lg text-gray-600">
                Through structured programs, engaging activities, and community outreach, 
                we strive to develop not just better students, but better individuals who embody 
                the values of discipline, perseverance, and teamwork.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be recognized as the premier student organization in South India, known for our 
                commitment to excellence, innovation in student development, and the 
                empowerment of future leaders.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where Taskforce alumni continue to make their mark in 
                various fields and industries, while our organization serves as a 
                model for other institutions across the country.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About