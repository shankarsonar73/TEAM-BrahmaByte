import React from 'react';
import './shankarapp.css';
const About = () => {
  return (
    <div className="container max-w-screen h-screen mx-auto px-6 py-10 bg-customBlue text-white transition duration-300 ease-in-out hover:bg-blue-600">
      <div className='ml-10 mr-18'>
      <h1 className="text-4xl font-bold text-center mb-4">About Our Social Media Platform</h1>
      <p className="text-lg text-white">
        Our social media platform, developed specifically for SGGS College, Nanded, aims to create a vibrant and inclusive community where students and faculty members can connect, collaborate, and share ideas seamlessly.
      </p>  
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="list-disc list-inside text-lg text-white mb-8">
        <li>Connect with all faculty members and fellow students</li>
        <li>Share updates, announcements, and important information</li>
        <li>Participate in group discussions and forums</li>
        <li>Access course materials and resources</li>
        <li>Stay updated on college events and activities</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg text-white mb-8">
        Our mission is to foster a sense of community and collaboration within SGGS College by providing a user-friendly and intuitive social media platform that facilitates communication and knowledge sharing among students and faculty members.
      </p>
      <h2 className="text-2xl font-bold mb-4">Get Started</h2>
      <p className="text-lg text-white mb-8">
        Join our social media platform today and start connecting with your peers and faculty members. Together, let's create a vibrant online community for SGGS College, Nanded!
      </p>
    </div>

    </div>
  );
};

export default About;
