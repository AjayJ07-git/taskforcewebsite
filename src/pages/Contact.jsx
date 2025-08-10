import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }



  const socialLinks = [
    {
      platform: 'Instagram',
      handle: '@taskforce_nitt',
      url: '#',
      icon: '📷'
    },
    {
      platform: 'Facebook',
      handle: 'Taskforce NIT Trichy',
      url: '#',
      icon: '📘'
    },
    {
      platform: 'Twitter',
      handle: '@TaskforceNITT',
      url: '#',
      icon: '🐦'
    },
    {
      platform: 'WhatsApp',
      handle: 'Join our group',
      url: '#',
      icon: '💬'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Have questions about Taskforce? Want to connect with us? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Social Media */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to get in touch with Taskforce? 
                Send us a message and we'll get back to you soon!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect with Us</h2>
              <p className="text-gray-600 mb-8">
                Follow us on social media to stay updated with our latest activities, 
                events, and running tips!
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-yellow-50 hover:border-yellow-300 transition-colors duration-200"
                  >
                    <div className="text-2xl mr-4">{social.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{social.platform}</div>
                      <div className="text-gray-600">{social.handle}</div>
                    </div>
                  </a>
                ))}
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
              Ready to Connect?
            </h2>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
              Have questions or want to get involved? Send us a message or follow us on social media!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-secondary" onClick={() => document.querySelector('form').scrollIntoView({behavior: 'smooth'})}>
                Send Message
              </a>
              <a href="/about" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact