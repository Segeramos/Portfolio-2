// import React from 'react';

// const certificationsData = [
//   {
//     title: "ALX Professional Foundations",
//     issuer: <a href="https://www.alxafrica.com/" target="_blank" rel="noopener noreferrer">ALX Africa</a>,
//     date: "August 2024",
//     link: "https://intranet.alxswe.com/certificates/9e2BSs5Zhc",
//   },
//   {
//     title: "Front-End Web Development ",
//     issuer: <a href="https://www.alxafrica.com/" target="_blank" rel="noopener noreferrer">ALX Africa</a>,
//     date: "January 2025",
//     link: "https://intranet.alxswe.com/certificates/CE8B5fFhN7",
//   },
//   {
//     title: "ALX AI Starter Kit",
//     issuer: <a href="https://www.alxafrica.com/" target="_blank" rel="noopener noreferrer">ALX Africa</a>,
//     date: "March 2025",
//     link: "https://intranet.alxswe.com/certificates/cny5pJFxzr",
//   },
//   // Add more certifications as needed
// ];

// function MyJourney() {
//   return (
//     <section id="certifications" className="py-20 bg-cyan-800 text-cyan-700">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-cyan-300">My Journey</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {certificationsData.map((cert, index) => (
//             <div key={index} className="bg-cyan-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
//               <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
//               <p className="text-gray-400 mb-2">{cert.issuer}</p>
//               <p className="text-cyan-800 mb-4">{cert.date}</p>
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 View Certificate
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MyJourney;


import React from 'react';

const certificationsData = [
  {
    title: "ALX Professional Foundations",
    issuer: <a href="https://www.alxafrica.com/" target="_blank" rel="noopener noreferrer">ALX Africa</a>,
    date: "August 2024",
    link: "https://intranet.alxswe.com/certificates/9e2BSs5Zhc",
  },
  {
    title: "Front-End Web Development ",
    issuer: <a href="https://www.alxafrica.com/" target="_blank" rel="noopener noreferrer">ALX Africa</a>,
    date: "January 2025",
    link: "https://intranet.alxswe.com/certificates/CE8B5fFhN7",
  },
  {
    title: "ALX AI Starter Kit",
    issuer: <a href="https://www.alxafrica.com/" target="_blank" rel="noopener noreferrer">ALX Africa</a>,
    date: "March 2025",
    link: "https://intranet.alxswe.com/certificates/cny5pJFxzr",
  },
];

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: <a href="https://cuk.ac.ke/" target="_blank" rel="noopener noreferrer">Cooperative University of Kenya</a>,
    graduationYear: "2021- Present",
  },
];

const professionalHistoryData = [
  {
    jobTitle: "Digital marketer",
    company: <a href="https://rondamo.co.ke/" target="_blank" rel="noopener noreferrer">Rondamo Technologies</a>,
    duration: "May 2023 - Present",
    description: " Driving brand growth through online strategies like SEO, content marketing, and social media. By leveraging data and analytics, they craft targeted campaigns that engage audiences and boost sales..",
  },
 
];

function MyJourney() {
  return (
    <section id="journey" className="py-20 bg-cyan-800 text-cyan-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-300">My Journey</h2>

        {/* Certifications Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certificationsData.map((cert, index) => (
              <div key={index} className="bg-cyan-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                <h4 className="text-xl font-semibold mb-3">{cert.title}</h4>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-cyan-800 mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-cyan-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                <h4 className="text-xl font-semibold mb-3">{edu.degree}</h4>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-cyan-800 mb-4">{edu.graduationYear}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional History Section */}
        <div>
        <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center">Professional History</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalHistoryData.map((job, index) => (
              <div key={index} className="bg-cyan-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
                <h4 className="text-xl font-semibold mb-3">{job.jobTitle}</h4>
                <p className="text-gray-400 mb-2">{job.company}</p>
                <p className="text-cyan-800 mb-4">{job.duration}</p>
                <p className="text-gray-500">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyJourney;
