import React, { useState } from 'react'
import membersData from '../data/members.json'
import coreMembersData from '../data/coreMembers.json'
import DrSreejithMohan from '../../assests/sreejith mohan.jpeg'

const Members = () => {
  const [activeTab, setActiveTab] = useState('faculty')
  const [activeMemberSubTab, setActiveMemberSubTab] = useState('core')

  const facultyAdvisors = [
    {
      name: 'Dr. Sreejith Mohan',
      position: 'Faculty Advisor',
      department: 'Department of Mechanical Engineering',
      linkedIn: 'https://www.linkedin.com/in/sreejith-mohan-a06b0566/',
      photo: DrSreejithMohan
    }
  ]

  /* Ex-Core removed as per request
  const exCore = [
    {
      name: 'Arjun Krishnan',
      position: 'Ex-President',
      year: 'Alumni, Computer Science 2023',
      linkedIn: '#'
    },
    {
      name: 'Priya Sharma',
      position: 'Ex-Vice President',
      year: 'Alumni, Mechanical Engineering 2023',
      linkedIn: '#'
    },
    {
      name: 'Rahul Menon',
      position: 'Ex-Training Head',
      year: 'Alumni, Electrical Engineering 2023',
      linkedIn: '#'
    }
  ] */
 
  const coreTeam = coreMembersData;
/* LEGACY hardcoded core team (to be removed)


      position: 'Training Coordinator',
      year: 'Third Year, Mechanical',
      linkedIn: '#'
    },
    {
      name: 'Divya Krishnan',
      position: 'Events Head',
      year: 'Second Year, Chemical',
      linkedIn: '#'
    },
    {
      name: 'Riya Gupta',
      position: 'Publicity Head',
      year: 'Third Year, Production',
      linkedIn: '#'
    },
    {
      name: 'Suresh Babu',
      position: 'Content Manager',
      year: 'Second Year, Civil',
      linkedIn: '#'
    },
    {
      name: 'Kavya Menon',
      position: 'Design Head',
      year: 'Second Year, EEE',
      linkedIn: '#'
    },
    {
      name: 'Arun Kumar',
      position: 'Media Coordinator',
      year: 'Third Year, Metallurgy',
      linkedIn: '#'
    }
  ] */
  // Retrieve members array regardless of whether the JSON exports a plain array
  const members = Array.isArray(membersData) ? membersData : membersData.members || []

  // Helper function to filter members by division
  const getMembersByDivision = (division) =>
    members.filter((m) => (m.division || m.subtype) === division)

  // Member divisions for sub-tabs
  const memberDivisions = [
    { id: 'admin', label: 'Admin Relation & Treasury', members: getMembersByDivision('Admin Relation & Treasury') },
    { id: 'weops', label: 'WeOps', members: getMembersByDivision('WeOps') },
    { id: 'publicity', label: 'Publicity & Content', members: getMembersByDivision('Publicity & Content') },
    { id: 'design', label: 'Design & Media', members: getMembersByDivision('Design & Media') },
  ]

  const tabs = [
    { id: 'faculty', label: 'Faculty Advisors', count: facultyAdvisors.length },
    
    { id: 'core', label: 'Core Team', count: coreTeam.length },
    { id: 'managers', label: 'Managers', count: members.length }
  ]

  // Badge color based on division
  const getDivisionColor = (division) => {
    switch (division) {
      case 'Admin Relation & Treasury':
        return 'bg-red-100 text-red-800'
      case 'WeOps':
        return 'bg-green-100 text-green-800'
      case 'Publicity & Content':
        return 'bg-purple-100 text-purple-800'
      case 'Design & Media':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const renderMemberCard = (member, showBio = false) => (
    <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 w-64 flex-none">
      <div className="p-6 text-center">
        {/* Member Photo */}
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-48 object-contain rounded-lg mb-4 bg-gray-100" />
        ) : (
          <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
        {/* Member Details */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
          {member.position && (
            <p className="text-yellow-600 font-medium text-sm">{member.position}</p>
          )}
          <p className="text-gray-600 text-sm">{member.year || member.department}</p>
          
          {/* LinkedIn Icon */}
          <div className="flex justify-center mt-3">
            <a 
              href={member.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        

      </div>
    </div>
  )

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Meet the dedicated individuals who make Taskforce the premier student organization at NIT Trichy
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{facultyAdvisors.length}</div>
              <div className="text-gray-600">Faculty Advisors</div>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{coreTeam.length}</div>
              <div className="text-gray-600">Core Team</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{members.length}+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
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

          {/* Faculty Advisors */}
          {activeTab === 'faculty' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Advisors</h2>
                <p className="text-xl text-gray-600">
                  Academic mentors who provide guidance and support to our club
                </p>
              </div>
              <div className="max-w-sm mx-auto">
                {facultyAdvisors.map((member) => renderMemberCard(member, false))}
              </div>
            </div>
          )}

          {/* Core Team */}
          {activeTab === 'core' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Team</h2>
                <p className="text-xl text-gray-600">
                  Current leadership driving the club towards new achievements
                </p>
              </div>
              <div className="flex flex-col items-center gap-6 md:flex-row md:flex-nowrap md:overflow-x-auto pb-4">
                {coreTeam.map((member) => renderMemberCard(member, false))}
              </div>
            </div>
          )}

          {/* Managers */}
          {activeTab === 'managers' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Managers</h2>
                <p className="text-xl text-gray-600">
                  Managers oversee sub-team activities and drive Taskforce operations
                </p>
              </div>
              
              {/* Member Sub-tabs */}
              <div className="flex flex-wrap justify-center mb-8">
                {memberDivisions.map((division) => (
                  <button
                    key={division.id}
                    onClick={() => setActiveMemberSubTab(division.id)}
                    className={`px-4 py-2 mx-1 mb-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeMemberSubTab === division.id
                        ? 'bg-yellow-400 text-black'
                        : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
                    }`}
                  >
                    {division.label} ({division.members.length})
                  </button>
                ))}
              </div>

              {/* Member Content by Division */}
              {memberDivisions.map((division) => (
                activeMemberSubTab === division.id && (
                  <div key={division.id}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {division.label} Team
                      </h3>
                      <p className="text-gray-600">
                        {division.id === 'admin' && 'Members involved in leadership and administrative responsibilities'}
                        {division.id === 'treasury' && 'Members managing finances and external relations'}
                        {division.id === 'weops' && 'Members coordinating operations and events'}
                        {division.id === 'publicity' && 'Members handling publicity and content creation'}
                        {division.id === 'design' && 'Members working on design and media production'}
                      </p>
                    </div>
                    
                    {division.members.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {division.members.map((member) => (
                          <div key={member.name}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                              <div className="p-6 text-center">
                                {/* Large Centered Photo Placeholder (rectangle) */}
                                <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                
                                {/* Member Details */}
                                <div className="space-y-2">
                                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                                  {member.position && (
                                    <p className="text-yellow-600 font-medium text-sm">{member.position}</p>
                                  )}
                                  <p className="text-gray-600 text-sm">{member.year || member.department}</p>
                                  
                                  {/* LinkedIn Icon */}
                                  <div className="flex justify-center mt-3">
                                    <a 
                                      href={member.linkedIn} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                    >
                                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                                
                                {/* Division badge removed as per request */}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">No members in this category yet</h4>
                        <p className="text-gray-600">We're always looking for passionate members to join this team!</p>
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-yellow-400">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students to join our community. 
              Whether you're a freshman or experienced, there's a place for you in Taskforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/induction" className="btn-secondary">
                Apply Now
              </a>
              <a href="/events" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Structure</h2>
            <p className="text-xl text-gray-600">Understanding our organizational structure and roles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center mb-3">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Admin Relation & Treasury</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Administration</h3>
              <p className="text-gray-600 text-sm">Leadership roles, strategic planning, and overall club management</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">WeOps</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operations</h3>
              <p className="text-gray-600 text-sm">Training coordination, event management, and operational activities</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">WeOps</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operations</h3>
              <p className="text-gray-600 text-sm">Training coordination, event management, and operational activities</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div className="flex items-center mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Publicity & Content</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing</h3>
              <p className="text-gray-600 text-sm">Social media management, content creation, and publicity</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <div className="flex items-center mb-3">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">Design & Media</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Team</h3>
              <p className="text-gray-600 text-sm">Graphic design, photography, videography, and visual content creation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Members;