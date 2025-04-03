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
  // Add more certifications as needed
];

function CertificationPage() {
  return (
    <section id="certifications" className="py-20 bg-cyan-800 text-cyan-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-300">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-cyan-300 shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
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
    </section>
  );
}

export default CertificationPage;
