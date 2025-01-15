import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const nodeContent = {
  p1: {
    title: "Attendance System Using Face Detection",
    techStack: ["Python", "OpenCV", "Excel", "Image Processing"],
    description: "This project aims to use facial recognition to grab attendance of employees/students of a particular organization without manual contact",
    link: "https://www.youtube.com/watch?v=qjxOIM0aH_4&t=5s",
  },
  p2: {
    title: "Air Doodling",
    techStack: ["OpenCV", "Python", "Object Detection","React","CSS"],
    description: "The project aims to use the OpenCV and NumPy libraries in python to create an air doodling program wherein the user can use a small marker to draw/write virtually on a white canvas with different ink options and a clear board option.",
    link: "https://www.youtube.com/watch?v=w4cGmdZiUrg",
  },
  p3: {
    title: "Sudoku-Solver",
    techStack: ["Python"],
    description: "This project aims to use backtracking principles to return the solved output Sudoku when the user enters the input Sudoku line by line in the form of a 9x9 grid. Updates planned to ease the process of using the program by using OpenCV to scan the Sudoku image and return the output image.",
    link: "https://github.com/harshtripathi6/sudoku_solver",
  },
  r1: {
    title: "Angular sampling completeness index and width of projection probability density function strips as spatial resolution metrics in self-collimation single photon emission tomography",
    supervisor: "Dr. Rutao Yao",
    description: "Assisting Dr Yao in SC-SPET system simulations and code optimizations. Optimized system response matrix calculation computation time by 350x over high performance computing CPU clusters. Currently working on migrating numpy based code to PyTorch for image reconstruction in SC-SPET system.",
    submissions: ["Under Review at SNMMI 2025"],
  },
  r2: {
    title: "Integrating Datasets with Discrete and Natural Language Annotations for Person Retrieval",
    supervisor: "Dr. Mehul Raval",
    description: "Worked on using soft biometrics to detect person/people of interest from surveillance clips. Pipeline comprises of language part to extract attributes from textual queries followed by vision part that uses those attributes to detect the person. Developed an end to end framework for the language part of the problem statement that takes in any textual query as input, extracts all the features possible, takes the relevant features required and gives a mapping as per the standard AVSS dataset. Framework super scalable, can expand to span various english vocabulary and is adaptable to different writing structures.",
    submissions: ["Published. Presented at IEEE-VTS 2023"],
  },
  r3: {
    title: "Micro-Expression Analysis",
    supervisor: "Dr. Tanmay Verlekar",
    description: "Collaborated with Dr Tanmay Verlekar in researching heatmap based attention networks for micro expression recognition. Developed a data gathering framework and application that generates authentic images from clips. Scalable to webcams and go-pros. ",
    submissions: ["Semester Long Project as part of curriculum of Undergraduate Degree."],
  },
  w1: {
    company: "Piramal Capital and Housing Finance Limited",
    role: "Data Scientist",
    period: "Jul 2023 - Aug 2024",
    projects: "As a member of the AI Products team, I was responsible for developing innovative solutions to address customer-centric challenges and enhance internal workflows. Additionally, I supported business teams in making key decisions by providing data-driven insights through the application of various AI/ML tools and technologies. My role encompassed the responsibilities of both a data scientist and an AI engineer, with a focus on delivering impactful, data-driven outcomes.\n \n Key Achievements \n ◦ Lead developer for generalized signature detection model over any document type using DL + ML techniques, achieved accuracy of 91% with service live from end of Q2FY24.\n ◦ Co-Lead developer in the making of several internal services. Automated form cropping service live for 3 products using Computer Vision and Image Processing techniques, helped increase throughput by 9%. \n ◦ Core contributor in the development of a Document Validation Service to expedite document checking for the firm in the MFI Vertical. Used AWS Textract, YoLOv8 to build this. Scaled the tech stack and process to 3 document types.",
    techStack: ["Python", "Deep Learning", "Machine Learning", "MongoDB", "AWS", "SQL","Image Processing","Computer Vision"],
  },
  w2: {
    company: "Piramal Capital and Housing Finance Limited",
    role: "Data Scientist Intern",
    period: "Jul 2022 - Jun 2023",
    projects: "As a member of the AI Products team, I was responsible for developing innovative solutions to address customer-centric challenges and enhance internal workflows. Additionally, I supported business teams in making key decisions by providing data-driven insights through the application of various AI/ML tools and technologies. My role encompassed the responsibilities of both a data scientist and an AI engineer, with a focus on delivering impactful, data-driven outcomes.\n \n Key Achievements \n ◦Implemented deep learning object detection models and an end-to-end solution on face liveliness detection for anti-spoofing use cases. Service went live in all branches throughout the country and reduced KYC time by 75%. \n ◦ Worked on a fraud detection model study based on bureau and PD data sources. In depth analysis with XGboost, CatBoost, RandomForest and Decision Tree classifiers for the problem statement done.",
    techStack: ["Python", "Kafka", "OpenFace", "AWS", "Machine Learning", "Object Detection"],
  },
  w3: {
    company: "Pass Consulting",
    role: "Summer Intern",
    period: "May 2020 - Jul 2020",
    projects: "Election Result Forecast using Data Analytics \n This project aimed to develop a pilot model to forecast election results using the research outcomes of a study linking past electoral outcomes of various constituencies to their demographic parameters. It facilitates PASS consulting to predict the results of Assembly elections of a constituency at an assembly-constituency level.",
    techStack: ["Python", "Machine Learning"],
  },
  e1: {
    college: "State University of New York(SUNY) at Buffalo",
    degree: "Master of Science",
    major: "Computer Science - AI/ML",
    period: "Aug 2024 - Jan 2026",
    cgpa: "3.92/4.0",
    courses: ["Machine Learning", "Deep Learning", "Computer Security", "Design and Analysis of Algorithms", "Data Intensive Computing", "Operating Systems", "Data Models and Query Languages","Predictive Analysis"],
  },
  e2: {
    college: "Birla Institute of Technology and Science Pilani",
    degree: "Master of Science",
    major: "Mathematics",
    period: "Aug 2018- Jul 2023",
    cgpa: "8.05/10.0",
    courses: ["Mathematics-I", "Mathematics-II", "Mathematics-III", "Probability and Statistics", "Optimization", "Discrete Mathematics", "Elementary Real Analysis",
              "Algebra -I", "Mathematical Methods","Operations Research","Graphs and Networks","Measure and Integration","Mathematical Modelling",
              "Combinatorial Maths","Introduction to Topology","Ordinary Differential Equations","Numerical Analysis","Introduction to Functional Analysis","Differential Geometry",
              "Partial Differential Equations","Statistical Inference and Applications","Number Theory"], 
  },
  e3: {
    college: "Birla Institute of Technology and Science Pilani",
    degree: "Bachelor of Engineering",
    major: "Electronics and Communication",
    period: "Aug 2019 - Jul 2023",
    cgpa: "8.05/10.0",
    courses: ["Electrical Sciences", "Electrical Machines", "Electronic Devices", "Digital Design","Electromagnetic Theory -I","Microprocessors and Interfacing",
            "Control Systems","Signals and Systems","Microelectronic Circuits","Communication Systems","EM Fields and Microwave Engineering","Digital Communication",
            "Digital Signal Processing","Medical Instrumentation","Digital Image Processing","Object Oriented Programming","Analog Electronics","Communication Networks",
            "Information Theory and Coding"],
  }
};

const NeuralNetwork = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const navigate = useNavigate();
  
  const nodes = {
    intro: { id: 'intro', x: 50, y: 250, label: 'Start \nHere' },
    projects: { id: 'projects', x: 175, y: 100, label: 'Projects' },
    research: { id: 'research', x: 175, y: 200, label: 'Research' },
    workExp: { id: 'workExp', x: 175, y: 300, label: 'Work Exp' },
    education: { id: 'education', x: 175, y: 400, label: 'Education' },
    p1: { id: 'p1', x: 300, y: 100, label: 'P1' },
    p2: { id: 'p2', x: 425, y: 200, label: 'P2' },
    p3: { id: 'p3', x: 550, y: 100, label: 'P3' },
    r1: { id: 'r1', x: 300, y: 300, label: 'R1' },
    r2: { id: 'r2', x: 425, y: 100, label: 'R2' },
    r3: { id: 'r3', x: 550, y: 300, label: 'R3' },
    w1: { id: 'w1', x: 300, y: 200, label: 'W1' },
    w2: { id: 'w2', x: 425, y: 400, label: 'W2' },
    w3: { id: 'w3', x: 550, y: 400, label: 'W3' },
    e1: { id: 'e1', x: 300, y: 400, label: 'E1' },
    e2: { id: 'e2', x: 425, y: 300, label: 'E2' },
    e3: { id: 'e3', x: 550, y: 200, label: 'E3' },
    contact: { id: 'contact', x: 675, y: 250, label: 'Contact' }
  };

  const categoryPaths = {
    projects: ['projects', 'p1', 'p2', 'p3', 'contact'],
    research: ['research', 'r1', 'r2', 'r3', 'contact'],
    workExp: ['workExp', 'w1', 'w2', 'w3', 'contact'],
    education: ['education', 'e1', 'e2', 'e3', 'contact'],
    intro: ['intro', 'projects', 'research', 'workExp', 'education']
  };

  const connections = [
    ['intro', 'projects'], ['intro', 'research'], ['intro', 'workExp'], ['intro', 'education'],
    ['projects', 'p1'], ['projects', 'w1'], ['projects', 'r1'], ['projects', 'e1'],
    ['research', 'r1'], ['research', 'w1'], ['research', 'p1'], ['research', 'e1'],
    ['workExp', 'w1'], ['workExp', 'p1'], ['workExp', 'r1'], ['workExp', 'e1'],
    ['education', 'e1'],  ['education', 'p1'], ['education', 'w1'], ['education', 'r1'],
    ['p1', 'p2'],  ['p1','r2'], ['p1','e2'], ['p1','w2'],
    ['r1', 'r2'],  ['r1','p2'], ['r1','e2'], ['r1','w2'],
    ['w1', 'w2'],  ['w1','p2'], ['w1','e2'], ['w1','r2'],
    ['e1', 'e2'],  ['e1','p2'], ['e1','r2'], ['e1','w2'],
    ['r2', 'p3'], ['r2', 'w3'], ['r2','e3'], ['r2','r3'], 
    ['p2', 'p3'], ['p2', 'e3'], ['p2','r3'], ['p2','w3'],
    ['e2', 'p3'], ['e2', 'r3'], ['e2','w3'], ['e2','e3'],
    ['w2', 'p3'], ['w2', 'r3'], ['w2','e3'], ['w2','w3'],
    ['p3', 'contact'], ['r3', 'contact'], ['w3', 'contact'], ['e3', 'contact']
  ];

  const getActivePath = (nodeId) => {
    if (!nodeId) return new Set();
    
    let activePath = new Set();
    for (const [category, path] of Object.entries(categoryPaths)) {
      if (path.includes(nodeId)) {
        activePath = new Set(path);
        break;
      }
    }
    return activePath;
  };

  const handleNodeClick = (nodeId) => {
    if (nodeId === 'contact') {
      navigate('/contact');  // Navigate to contact page
      return;
    }

    if (nodeId === activeNode) {
      setActiveNode(null);
      setIsModalVisible(true);
    } else {
      setActiveNode(nodeId);
      setIsModalVisible(true);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target.tagName === 'svg' || e.target.tagName === 'div') {
      setActiveNode(null);
    }
  };

  const isConnectionActive = (start, end) => {
    if (!activeNode) return false;
    
    const activePath = getActivePath(activeNode);
    return activePath.has(start) && activePath.has(end) &&
           connections.some(([s, e]) => 
             (s === start && e === end) || (s === end && e === start)
           );
  };

  const isNodeActive = (nodeId) => {
    if (!activeNode) return false;
    return getActivePath(activeNode).has(nodeId);
  };

  return (
    <div className="w-full h-full bg-black relative" onClick={handleBackgroundClick}>
      <svg viewBox="0 0 800 550" className="w-full h-full">
        {connections.map(([start, end], idx) => (
          <g key={`${start}-${end}`}>
            <line
              x1={nodes[start].x}
              y1={nodes[start].y}
              x2={nodes[end].x}
              y2={nodes[end].y}
              style={{
                stroke: isConnectionActive(start, end) ? '#dc2626' : '#ffffff',
                strokeWidth: isConnectionActive(start, end) ? 2 : 1,
                opacity: isConnectionActive(start, end) ? 1 : 0.3,
                transition: 'all 300ms'
              }}
            />
            {isConnectionActive(start, end) && (
              <>
                <circle className="moving-particle">
                  <animate
                    attributeName="cx"
                    from={nodes[start].x}
                    to={nodes[end].x}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={nodes[start].y}
                    to={nodes[end].y}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle className="moving-particle" begin="0.5s">
                  <animate
                    attributeName="cx"
                    from={nodes[start].x}
                    to={nodes[end].x}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    from={nodes[start].y}
                    to={nodes[end].y}
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </>
            )}
          </g>
        ))}

        {/* Caption at bottom */}
        <text x="400" y="520" className="fill-white text-sm" textAnchor="middle">
        <tspan x="400" y="520">Figure 1: TripathiNet - An Interactive Neural Network Portfolio Architecture</tspan>
        <tspan x="400" dy="1.2em">Click on each node to learn more !</tspan>
        </text>
        
        {Object.values(nodes).map((node) => {
          const isSubLayerNode = /^[ewpr][123]$/.test(node.id);

          return (
            <g
              key={node.id}
              transform={`translate(${node.x},${node.y})`}
              onClick={() => handleNodeClick(node.id)}
              className="cursor-pointer"
            >
              <circle
                r="30"
                className={`transition-all duration-300 ${
                  isNodeActive(node.id)
                    ? 'fill-red-600 stroke-red-400'
                    : 'fill-white stroke-gray-300'
                }`}
              />
              {!isSubLayerNode && (
                <text
                  className="text-xs fill-black text-center"
                  textAnchor="middle"
                  dy=".3em"
                >
                  {node.label.split('\n').map((line, i) => (
                    <tspan
                      key={i}
                      x="0"
                      dy={i === 0 ? 0 : '1.2em'}
                      className="font-medium"
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <AnimatePresence>
        {activeNode && nodeContent[activeNode] && isModalVisible && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              exit={{ 
                scale: 0,
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" }
              }}
              className="relative bg-black border-2 border-red-600 rounded-xl shadow-xl p-8 
                         w-[40rem] max-h-[80vh] m-4 overflow-y-auto"
            >
              {/* Close Button - Modified to use new state */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalVisible(false);
                }}
                className="absolute top-4 right-4 text-red-400 hover:text-red-600 
                           transition-colors duration-200"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>

        {/* Education Card */}
        {/^e\d$/.test(activeNode) && (
          <>
            <h3 className="text-2xl font-bold text-red-600 mb-4">{nodeContent[activeNode].college}</h3>
            <div className="text-white-400 space-y-2">
              <p><span className="font-semibold">Degree:</span> {nodeContent[activeNode].degree} in {nodeContent[activeNode].major}</p>
              <p><span className="font-semibold">Period:</span> {nodeContent[activeNode].period}</p>
              <p><span className="font-semibold">CGPA:</span> {nodeContent[activeNode].cgpa}</p>
              <div>
                <p className="font-semibold">Courses:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  {nodeContent[activeNode].courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Research Card */}
        {/^r\d$/.test(activeNode) && (
          <>
            <h3 className="text-2xl font-bold text-red-600 mb-4">{nodeContent[activeNode].title}</h3>
            <div className="text-red-white space-y-4">
              <p><span className="font-semibold">Supervisor:</span> {nodeContent[activeNode].supervisor}</p>
              <div className="whitespace-pre-line">{nodeContent[activeNode].description}</div>
              <div>
                <p className="font-semibold mt-4">Submissions:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  {nodeContent[activeNode].submissions.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Work Experience Card */}
        {/^w\d$/.test(activeNode) && (
          <>
            <h3 className="text-2xl font-bold text-red-600 mb-4">{nodeContent[activeNode].company}</h3>
            <div className="text-white-400 space-y-4">
              <p><span className="font-semibold">Role:</span> {nodeContent[activeNode].role}</p>
              <p><span className="font-semibold">Period:</span> {nodeContent[activeNode].period}</p>
              <p className="whitespace-pre-line">{nodeContent[activeNode].projects}</p>
              <div>
                <p className="font-semibold">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {nodeContent[activeNode].techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-red-900/30 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Project Card */}
        {/^p\d$/.test(activeNode) && (
          <>
            <h3 className="text-2xl font-bold text-red-600 mb-4">{nodeContent[activeNode].title}</h3>
            <div className="text-white-400 space-y-4">
              <div className="flex flex-wrap gap-2">
                {nodeContent[activeNode].techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-red-900/30 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="whitespace-pre-line">{nodeContent[activeNode].description}</p>
              <a 
                href={nodeContent[activeNode].link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 underline inline-flex items-center gap-1"
              >
                View Project
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )}
</AnimatePresence>

    </div>
  );
};

export default NeuralNetwork;
