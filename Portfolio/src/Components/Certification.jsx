import React from 'react';

const certificationsData = [
  {
    title: "React Developer Certification",
    issuer: "FreeCodeCamp",
    date: "January 2023",
    link: "https://www.freecodecamp.org/certification/username/react-developer",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Codecademy",
    date: "June 2022",
    link: "https://www.codecademy.com/username/certifications/javascript-fundamentals",
  },
  {
    title: "Full Stack Web Developer",
    issuer: "Udemy",
    date: "March 2022",
    link: "https://www.udemy.com/certificate/username/full-stack-web-developer",
  },
  // Add more certifications as needed
];

function CertificationPage() {
  return (
    <section id="certifications" className="py-20 bg-cyan-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-cyan-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
              <p className="text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-300 mb-4">{cert.date}</p>
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
    </section>
  );
}

export default CertificationPage;
