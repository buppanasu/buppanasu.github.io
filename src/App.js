import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import JobExperience from './components/jobExperience';
import ProjectCard from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import AISG from './assets/ai-singapore.jpg';
import DSAIL from './assets/Dsail.png';
import UOB from './assets/uob.png';
import JJ from './assets/jj2.jpg';

import CHIRPSENSE from './assets/ChirpSense.png';
import GROOMNGO from './assets/GroomNGo.jpg';
import ECOROUTES from './assets/EcoRoutes.png';
import LANGUAGEFRIEND from './assets/LanguageFriend.png';
import SPACEGAMES from './assets/SpaceGames.png';
import LIVE2YOU from './assets/Live2YouApp.png';


// import SIT from './assets/icons/SIT.png';
function App() {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    AOS.init({

      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Allow animations to happen more than once
      offset: 120, // Offset value in pixels to delay the animation
    });
    document.title = "Ang Jun Jie";
  }, []);

  // Handle Navbar Link Click
  const handleLinkClick = () => {
    setDisableAnimations(true); // Disable animations
    setTimeout(() => {
      setDisableAnimations(false); // Re-enable animations after 500ms (adjust if needed)
    }, 500);
  };
  // Job Experience
  const jobExperiences = [
    {
      companyImage: DSAIL,
      companyName: 'Data Science & AI Lab, SIT-Nvidia',
      jobTitle: 'Student Developer',
      date: 'Sep 2024 - Present',
      description: 'Development of a multimodal RAG system',
      skills: ['Python', 'LlamaIndex', 'API Development', 'React', 'Docker'],
    },
    {
      companyImage: AISG,
      companyName: 'AI Singapore',
      jobTitle: 'AIIP Intern',
      date: 'Aug 2024 - Present',
      description: 'Development and implementation of an end-to-end Retrieval Augmented Generation system, leveraging the Haystack framework with MinIO object storage, FastAPI framework with Uvicorn server, CouchDB NoSQL database and Milvus Vector Store to enhance the accuracy and efficiency of document-based queries. Development and deployment of a webhook service into a Kubernetes cluster',
      skills: ['Python', 'Haystack', 'Docker', 'Kubernetes'],
    },
    {
      companyImage: UOB,
      companyName: 'United Overseas Bank Limited',
      jobTitle: 'QA Intern',
      date: 'Mar 2019 - May 2019',
      description: 'Developed test cases, performed testing of test cases',
      skills: ['Software testing'],
    },



  ];

  const projects = [
    {
      title: 'Live2You: Translating your world!',
      description: 'Live2You is an innovative mobile application designed to enhance language learning by connecting users with real-world objects. The app utilizes AR and machine learning to detect objects in the users environment through the phones camera, translating their names into various languages using Googles MLKit. Users can save detected objects, practice pronunciations, and access interactive overlays. The app provides an immersive learning experience that bridges the gap between theoretical language lessons and practical, everyday usage.',
      image: LIVE2YOU,
      date: "Mar 2024",
      techStack: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore', 'Firebase Storage', 'Google MLKit (Vision API, Translation)', 'Sceneview -AR', 'Speech to text', 'Text to speech', 'Github Actions - CI/CD'],
      videoUrl: "https://www.youtube.com/watch?v=22NLYOyA2XE"
    },
    {
      title: 'Groom&Go',
      description: 'This project aims to optimize e-commerce content management by employing a hybrid database approach using both SQL (MySQL) and NoSQL (MongoDB) databases. It demonstrates the strengths of relational databases in handling structured data like transactions, while NoSQL databases efficiently process unstructured data such as user reviews. The system architecture utilizes a LAMP stack, offering users CRUD operations for managing products, orders, and personalized recommendations. Performance testing was conducted to compare indexing strategies, showcasing faster write speeds with NoSQL for large datasets and improved query performance with relational databases under specific conditions.',
      image: GROOMNGO,
      date: "Sept 2023",
      techStack: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'RESTful APIs', 'MySQL', 'MongoDB', 'Performance Testing, Benchmarking'],
      videoUrl: "https://youtu.be/rlexXsksMe8"
    },
    {
      title: 'LanguageFriend',
      description: 'LanguageFriend is an AI-powered mobile web application designed to enhance language learning through dynamic, conversational practice. It leverages AI to simulate real-world scenarios, allowing users to engage in practical conversations, receive real-time feedback, and improve their language skills. The app features two modes: free-flow conversation with AI and scenario-based learning, where users practice in immersive AR environments. It aims to boost learners confidence in speaking and writing by providing personalized feedback and adapting to their individual progress.',
      image: LANGUAGEFRIEND,
      date: "Oct 2023",
      techStack: ['HTML', 'CSS', 'React', 'ChatGPT API', 'AR Integration', 'Python'],
      videoUrl: "https://youtu.be/Ayy18cVwb8o"
    },
    {
      title: 'EcoRoutes',
      description: 'EcoRoutes is a comprehensive routing application tailored for Singapores transport system. Providing users with real-time, eco-friendly travel options, EcoRoutes aims to usher in a more sustainable transport culture. We firmly believe that EcoRoutes stands as a significant stride towards a greener future, enabling individuals to understand and minimize the environmental impact of their travel choices.',
      image: ECOROUTES,
      date: "Jul 2023",
      techStack: ['Python', 'OSMNX', 'Flask', 'Matplotlib', 'Networkx', 'Pandas', 'Geopy', 'Folium', 'Scikit-learn'],
      videoUrl: "https://youtu.be/jI8eT5uG4Yw"
    },
    {
      title: 'SpaceGames',
      description: 'This project focuses on building a versatile 2D game engine that allows for easy plugin development using the Visitor design pattern. The engine supports game entities, behaviors, and UI components through abstract classes, making it flexible and adaptable for various games. Three games—SpaceTyper, SpaceDodge, and SpaceInvaders—were developed to showcase the engine’s features, including collision detection, input handling, and entity lifecycle management. The engine promotes modularity, following SOLID principles, and includes performance optimizations and a custom Input Manager for enhanced gameplay experiences.',
      image: SPACEGAMES,
      date: "Mar 2023",
      techStack: ['Java', 'Visitor Design Pattern', 'Prototype Pattern', 'Iterator Pattern'],
      videoUrl: "https://www.youtube.com/watch?v=8uuV_0n3cB8"
    },
    {
      title: 'ChirpSense - A Twitter Sentiment Analyser',
      description: 'The Twitter Sentiment Analyzer examines public sentiments surrounding the repeal of Section 377A in Singapore. The application scrapes Twitter data using Snscrape, sanitizes it, and performs sentiment and emotion analysis using machine learning models like RoBERTa. It generates topic models, word clouds, and visual charts to visualize discussions. The tool supports researchers in analyzing evolving social trends and public policy debates through an intuitive interface.',
      image: CHIRPSENSE,
      date: "Sep 2022",
      techStack: ['Python', 'PySimpleGUI', 'Snscrape', 'Pandas', 'RoberTA', 'EmoRoberta', 'Seaborn', 'Matplotlib'],
      videoUrl: "https://www.youtube.com/watch?v=WGHvbukqQc4"
    },








  ];

  return (

    <div className="bg-slate-900 min-h-screen text-slate-200">
      <Navbar onLinkClick={handleLinkClick} /> {/* Pass the click handler to Navbar */}
      <div className="flex flex-col items-center justify-center mt-20">

        <section
          id="about"
          className="w-full max-w-5xl min-h-screen flex items-center justify-center p-8 rounded-lg shadow-lg"
          data-aos={!disableAnimations ? "fade-up" : ""}
        >
          <div className="text-center">
            <img
              src={JJ}
              alt="Your Name"
              className="w-128 h-96  mx-auto mb-4 shadow-lg"
            />
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4">
              3rd Year Software Engineering Undergraduate with a strong foundation in Python, JavaScript, Java and SQL. Passionate about full stack development, including frontend and backend work, database management and system deployment. Eager to learn more about and design scalable, highly available systems with a focus on continuous improvement. Experienced In developing Retrieval Augmented Generation (RAG) systems, earning 1st Place at the National AI Student Challenge 2024. Also enthusiastic about AI and Machine Learning, with a keen interest in leveraging emerging technologies to create innovative solutions that solve real-world challenges.
            </p>
          </div>
        </section>

        <section
          id="experience"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-left" : ""}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Experiences</h1>
          {jobExperiences.map((experience, index) => (
            <JobExperience
              key={index}
              companyImage={experience.companyImage}
              companyName={experience.companyName}
              jobTitle={experience.jobTitle}
              date={experience.date}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </section>

        <section
          id="projects"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-right" : ""}
        >
          <h1 className="text-4xl font-bold text-center">Projects</h1>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}

export default App;