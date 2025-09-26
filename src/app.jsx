import React from "react";

export default function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = React.useState(false);

  // ==== Skills ====
  const skills = [
    "Python","Power BI","Machine Learning","MySQL","MongoDB","Excel",
    "PySpark","Databricks","Pandas","NumPy","Matplotlib"
  ];

  // ==== Projects ====
  const projects = [
    {
      title: "Pizza Sales Dashboard",
      description:
        "Interactive Power BI dashboard visualizing total revenue, top/bottom pizzas, and daily/monthly trends.",
      img: "/pizza.png",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMDAzYmI1NGItZWNhMS00OTBmLThiN2EtMjNkNDU4ZTc3NTc0IiwidCI6ImU5ZTMyMjg2LTU0ZDktNDMxMS1hMjZjLTI2ZmIxZDYyM2VkYyJ9",
      github: "https://github.com/Jack-tech32/Pizza_Sales_Dashboard"
    },
    {
      title: "Spam Email Detection",
      description:
        "ML model that classifies emails as spam or ham with high accuracy.",
      img: "/SPAM_PROJECT.png",
      link: "https://spam-mail-detection-w2xojn5ida5a6awclkj869.streamlit.app/",
      github: "https://github.com/Jack-tech32/Spam-Mail-Detection"
    },
    {
      title: "Crop Recommendation System",
      description:
        "ML system suggesting best crops based on soil, weather and environmental data.",
      img: "/crop_image.jpg",
      link: "https://crop-recommendation-system-kwzkgofvhjdkcxzqp5wmuw.streamlit.app/",
      github: "https://github.com/Jack-tech32/Crop-Recommendation-System"
    },
    {
      title: "Jack E-Commerce Sales Dashboard",
      description:
        "Dynamic sales analysis with KPIs, category trends, and profit insights using Power BI & SQL.",
      img: "/ecommerce.png",
      link: "https://app.powerbi.com/view?r=eyJrIjoiOWFkYmQ2ODctZGM0NC00MDZhLWIyMzktMTJjZmRjMGU4NWJjIiwidCI6ImU5ZTMyMjg2LTU0ZDktNDMxMS1hMjZjLTI2ZmIxZDYyM2VkYyJ9",
      github: "https://github.com/Jack-tech32/Jack_e_Commerce_Dashboard"
    }
  ];

  // ==== Certificates ====
  const certificates = [
    {
      name: "OCI Data Science Professional",
      issuer: "Oracle",
      img: "/OCI-Data-Science.png",
      link: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC7024248&trackId=OCI25DSOCP&key=766ee21b37becdc445db497baa9f124ab66f0d19"
    },
    {
      name: "Power BI Desktop",
      issuer: "Skillcourse",
      img: "/powerbi.png"
    },
    {
      name: "Business Analytics with Excel",
      issuer: "Microsoft-simplilearn",
      img: "/bisinessanalytics.png",
      link: "https://simpli.app.link/flD11qefXWb"
    },
    {
      name: "SQL Basic",
      issuer: "Hackerrank",
      img: "/sqlbasics.png",
      link: "https://www.hackerrank.com/certificates/iframe/01d82de1c3e5"
    },
    {
      name: "SQL Intermediate",
      issuer: "Hackerrank",
      img: "/sql_intermediate.png",
      link: "https://www.hackerrank.com/certificates/iframe/18f2a3bd2453"
    },
    {
      name: "Training and Development",
      issuer: "NPTEL",
      img: "/training_NPTEL.jpg",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/109/noc25-hs78/Course/NPTEL25HS78S64760079804605000.pdf"
    }
  ];

  return (
    <div className={`min-h-screen font-sans ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      
      {/* ===== Dark/Light Mode Toggle Button (Top-Right Corner) ===== */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-full shadow-md hover:shadow-lg transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* ===== Hero ===== */}
      <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">Jayesh S Patil</h1>
        <p className="text-lg md:text-xl mx-auto text-gray-100 whitespace-nowrap">
          Data Analyst | Data Engineer | Dashboard Developer | ML Enthusiast
        </p>
      </header>

      {/* ===== Resume Download / View Section ===== */}
      <section className="py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-300">My Resume</h2>
        <p className="text-gray-300 mb-6">Download my resume here</p>
        <div className="flex justify-center gap-4">
          <a
            href="public/Data_Analyst_resume  (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            View Resume
          </a>
          <a
            href="public/Data_Analyst_resume  (1).pdf"
            download
            className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-800 hover:bg-indigo-600 transition-colors px-4 py-2 rounded-full text-sm md:text-base">{skill}</span>
          ))}
        </div>
      </section>

      {/* ===== Projects ===== */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-10 text-pink-400 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <a key={proj.title} href={proj.link} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <img src={proj.img} alt={proj.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">{proj.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{proj.description}</p>
              {proj.github && <span className="text-blue-400 text-sm">GitHub →</span>}
            </a>
          ))}
        </div>
      </section>

      {/* ===== Certificates ===== */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-indigo-400 text-center">Certificates</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <a key={cert.name} href={cert.link || "#"} target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <img src={cert.img} alt={cert.name} className="rounded-t-xl w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-100">{cert.name}</h3>
                <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <p>Email: <a href="mailto:mayurraygade32@email.com" className="text-indigo-400 hover:underline">mayurraygade32@email.com</a></p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/jayesh-patil-65b490260" className="text-indigo-400 hover:underline">linkedin.com/in/jayesh-patil-65b490260</a> | 
          GitHub: <a href="https://github.com/Jack-tech32" className="text-indigo-400 hover:underline">github.com/Jack-tech32</a>
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Jayesh S Patil • Built with React + TailwindCSS</p>
      </footer>
    </div>
  );
}   