import React, { useState } from 'react'

const Induction = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    rollNo: '',
    department: '',
    preferences: [],
    studentLifeEasier: '',
    leadershipExperience: '',
    eventSuggestion: '',
    taskforceMeaning: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePreferenceSelect = (team) => {
    const currentPreferences = [...formData.preferences]
    const teamIndex = currentPreferences.indexOf(team)
    
    if (teamIndex > -1) {
      // Remove team if already selected
      currentPreferences.splice(teamIndex, 1)
    } else if (currentPreferences.length < 3) {
      // Add team if less than 3 selected
      currentPreferences.push(team)
    }
    
    setFormData({
      ...formData,
      preferences: currentPreferences
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate preferences
    if (formData.preferences.length === 0) {
      alert('Please select at least one team preference.')
      return
    }
    
    // Handle form submission here
    console.log('Induction form submitted:', formData)
    alert('Thank you for your application! We will review your submission and get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      phone: '',
      rollNo: '',
      department: '',
      preferences: [],
      studentLifeEasier: '',
      leadershipExperience: '',
      eventSuggestion: '',
      taskforceMeaning: ''
    })
  }

  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Electronics & Communication',
    'Production Engineering',
    'Metallurgical Engineering',
    'Architecture',
    'Other'
  ]

  const subteams = [
    'Admin',
    'Treasury & Relations',
    'WeOps',
    'Publicity & Content',
    'Design & Media'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Deputy Member Induction
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ready to make student life easier? Apply to become a Taskforce deputy member!
            </p>
          </div>
        </div>
      </section>

      {/* Induction Form */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Form</h2>
              <p className="text-xl text-gray-600">
                Fill out this form to apply for deputy member position at Taskforce
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-2">
                      Roll Number *
                    </label>
                    <input
                      type="text"
                      id="rollNo"
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Your roll number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="">Select your department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Preference */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Team Preference</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Top 3 Preferences *
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Click on the teams to select your preferences in order. You can select up to 3 teams.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {subteams.map((team, index) => {
                      const isSelected = formData.preferences.includes(team)
                      const preferenceNumber = formData.preferences.indexOf(team) + 1
                      
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handlePreferenceSelect(team)}
                          className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? 'border-yellow-400 bg-yellow-50 text-yellow-800'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-yellow-300 hover:bg-yellow-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{team}</span>
                            {isSelected && (
                              <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                                {preferenceNumber}
                              </span>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  
                  {formData.preferences.length > 0 && (
                    <div className="bg-white p-3 rounded-lg border">
                      <p className="text-sm font-medium text-gray-700 mb-2">Your Preferences:</p>
                      <div className="space-y-1">
                        {formData.preferences.map((team, index) => (
                          <div key={index} className="text-sm text-gray-600">
                            {index + 1}. {team}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {formData.preferences.length === 0 && (
                    <p className="text-sm text-red-600">Please select at least one preference.</p>
                  )}
                </div>
              </div>

              {/* Application Questions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Application Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="studentLifeEasier" className="block text-sm font-medium text-gray-700 mb-2">
                      In one line, what does "making student life easier" mean to you? *
                    </label>
                    <input
                      type="text"
                      id="studentLifeEasier"
                      name="studentLifeEasier"
                      value={formData.studentLifeEasier}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Your answer in one line..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="leadershipExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Describe a time when you led a team under pressure. What was your approach? *
                    </label>
                    <textarea
                      id="leadershipExperience"
                      name="leadershipExperience"
                      value={formData.leadershipExperience}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Describe your leadership experience and approach..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventSuggestion" className="block text-sm font-medium text-gray-700 mb-2">
                      Suggest one event that you think Taskforce should organise this semester. *
                    </label>
                    <textarea
                      id="eventSuggestion"
                      name="eventSuggestion"
                      value={formData.eventSuggestion}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Describe your event idea and why it would be valuable..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="taskforceMeaning" className="block text-sm font-medium text-gray-700 mb-2">
                      What does Taskforce in this college mean to you? *
                    </label>
                    <textarea
                      id="taskforceMeaning"
                      name="taskforceMeaning"
                      value={formData.taskforceMeaning}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Share your thoughts about Taskforce and its role in the college..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-12 py-4 text-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Application Review</h3>
                <p className="text-gray-600">
                  Our team will carefully review your application and responses to assess your fit for the deputy member role.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🗣️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interview Process</h3>
                <p className="text-gray-600">
                  Shortlisted candidates will be invited for an interview to discuss their vision and commitment to Taskforce.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Welcome Aboard</h3>
                <p className="text-gray-600">
                  Selected deputy members will be welcomed into the Taskforce family and begin their journey of making student life easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
              Join Taskforce as a deputy member and help us create a better student experience at NIT Trichy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-secondary" onClick={() => document.querySelector('form').scrollIntoView({behavior: 'smooth'})}>
                Fill Application
              </a>
              <a href="/about" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Learn About Taskforce
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Induction