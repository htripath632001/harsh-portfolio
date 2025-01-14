// pages/About.js
/*import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose prose-invert">
        <p className="text-xl mb-6">
        I'm a gradute computer science student at UB ! I have previously worked as a data scientist at Piramal Finance, working on various projects across ML/DL/CV during my two year stint. I love working with great people, getting creative with data, using state-of-the-art technologies and building awesome products. 
        Interested in working together or having a chat? Feel free to contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
*/

import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ events }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600/30"></div>
      
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`flex items-center mb-8 ${
            index % 2 === 0 ? 'flex-row-reverse' : ''
          }`}
        >
          {/* Content */}
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
            <h3 className="text-xl font-bold text-white-600 mb-2">{event.title}</h3>
            <p className="text-red-600">{event.description}</p>
            <span className="text-sm text-red-400/70">{event.date}</span>
          </div>

          {/* Circle */}
          <div className="w-2/12 flex justify-center">
            <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black"></div>
          </div>

          {/* Empty space for alignment */}
          <div className="w-5/12"></div>
        </motion.div>
      ))}
    </div>
  );
};

const About = () => {
  const timelineEvents = [
    {
      title: "Started as a Graduate RA",
      description: "Began work as a graduate RA with Prof Rutao in the departmenet of nuclear medicine.",
      date: "September 2024"
    },
    {
      title: "Started at University at Buffalo",
      description: "Began my MS in Computer Science at SUNY Buffalo, focusing on AI and ML.",
      date: "August 2024"
    },
    {
      title: "First Research Publication",
      description: "Presented my first paper at IEEE-VTS at Hong Kong alongside Prof Mehul Raval",
      date: "October 2023"
    },
    {
      title: "Started as a Data Scientist at Piramal Capital",
      description: "Started working as a data scientist at Piramal Capital, in the AI Products Team.",
      date: "August 2023"
    },
    {
      title: "Graduation from BITS",
      description: "Graduated from BITS Pilani double majoring in Mathematics and ECE with lots of memories and an amazing bunch of friends.",
      date: "July 2023"
    },
    {
      title: "Started as a Data Scientist Intern at Piramal Capital",
      description: "Started working as a data scientist intern at Piramal Capital, in the AI Products Team.",
      date: "July 2023"
    },
    {
      title: "Started Undergraduate RA",
      description: "Started my research with Prof Mehul Raval on Person Retrieval.",
      date: "June 2022"
    },
    {
      title: "Started semester long DOP",
      description: "Started my semester long research with Prof Tanmay Verlekar on microexpression analysis",
      date: "Jan 2022"
    },
    {
      title: "Started as a TA ",
      description: "Started working as a Teaching Assistant for the MATH F212 Optimization Course, assisting Prof Anushaya Mohapatra",
      date: "August 2020"
    },
    {
      title: "Started at BITS",
      description: "Started my dual degree at BITS Pilani KK Birla Goa Campus",
      date: "August 2018"
    },

    
    // Add more events as needed
  ];

  return (
    <div className="min-h-screen bg-black">
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6 text-red-600">About Me</h1>
          <div className="prose prose-invert">
            <p className="text-xl mb-6 text-white-600">
            I'm a gradute computer science student at UB ! I have previously worked as a data scientist at Piramal Finance, working on various projects across ML/DL/CV during my two year stint. I love working with great people, getting creative with data, using state-of-the-art technologies and building awesome products. Interested in working together or having a chat? Feel free to contact me.
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src="/avatar.jpeg" // Replace with your photo path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-red-600 rounded-2xl -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-red-600 rounded-2xl -z-10"></div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Timeline</h2>
        <Timeline events={timelineEvents} />
      </div>
    </div>
  </div>
  );
};

export default About;
