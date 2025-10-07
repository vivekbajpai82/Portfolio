// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
    {
        status: 'Ongoing',
        title: 'Diabetic Retinopathy Detection',
        stack: 'React • Python • PyTorch • Flask • Keras',
        description: 'Developed a deep learning system to automatically detect diabetic retinopathy from retinal fundus images for early diagnosis.',
        points: [' Developing a deep learning model using EfficientNet-B3 with PyTorch, currently focusing on improving model accuracy', 'Implementing data preprocessing and augmentation strategies to enhance generalization and effectively manage class imbalance', ' Building scalable training pipelines for efficient experimentation and reproducibility',' Designing the architecture for a Flask-based API to serve predictions; UI integration planned for future implementation.','Optimizing inference for CPU/GPU performance, ensuring faster and reliable predictions prior to deployment.'],
        github: 'https://github.com/vivekbajpai82'
    },
    {
        date: 'Dec 2023',
        title: 'Pharma Care',
        stack: 'React • Node • Express • MongoDB • JWT',
        description: 'Web application to convert handwritten prescriptions into clean, typed format for better readability by pharmacists.',
        points: ['Developed a full-stack MERN application to digitize handwritten prescriptions, directly improving readability and reducing errors for pharmacists', ' Implemented a secure JWT-based authentication system with a predefined medicine database, reducing manual typing errors', ' Designed and built a responsive, interactive User Interface with robust form validation to streamline prescription creation for doctors',' Enhanced pharmacist workflow by delivering clean, typed prescriptions, minimizing misinterpretation and boosting operational efficiency.',' Ensured scalable backend architecture with RESTful APIs, enabling smooth integration and future system expansion.'],
        liveLink: 'https://pharma-caree.netlify.app/',
        github: 'https://github.com/vivekbajpai82'
    },
    {
        date: 'Aug 2025',
        title: 'Social Media Content Analyzer',
        stack: 'HTML • CSS • JavaScript',
        description: 'Advanced sentiment analysis tool that processes social media content to extract insights, trends and public opinion.',
        points: ['Multi-platform content scraping with sentiment analysis and emotion detection', 'Trend identification and hashtag performance analytics with visual dashboards', 'Real-time monitoring with automated alerts for brand mentions and keywords', 'Comprehensive reporting with charts, graphs and exportable analytics data'],
        liveLink: 'https://social-content-analyzer.netlify.app/',
        github: 'https://github.com/vivekbajpai82'
    },
    {
        date: 'Jan 2024',
        title: 'Spam Message Classifier',
        stack: 'Python • Scikit-learn • NLTK • Streamlit',
        description: 'Machine learning model to classify SMS messages as spam or legitimate using natural language processing techniques.',
        points: ['Implemented Naive Bayes and SVM algorithms for text classification', 'Used TF-IDF vectorization for feature extraction from text data', 'Built interactive web interface using Streamlit for real-time predictions', 'Achieved 95%+ accuracy on test dataset with comprehensive preprocessing'],
        github: 'https://github.com/vivekbajpai82/Spam_Message_Detector'
    },
    {
        date: 'Mar 2024',
        title: 'Car Price Prediction',
        stack: 'Python • Pandas • Regression • Flask',
        description: 'Predictive model to estimate car prices based on various features like brand, model, year, mileage and engine specifications.',
        points: ['Applied linear and polynomial regression techniques for price prediction', 'Performed extensive data cleaning and feature engineering on car dataset', 'Created REST API using Flask for model deployment and integration', 'Implemented cross-validation and hyperparameter tuning for optimal performance'],
        github: 'https://github.com/vivekbajpai82/Car_Price_Predictor'
    },
    {
        date: 'Sep 2024',
        title: 'Type Rush',
        stack: 'HTML • CSS • JavaScript',
        description: 'Interactive typing speed test game with real-time WPM calculation, accuracy tracking and progressive difficulty levels.',
        points: ['Real-time typing speed and accuracy calculation with visual feedback', 'Multiple difficulty levels with different text passages and themes', 'Local leaderboard system to track personal best scores and progress', 'Responsive design with smooth animations and keyboard highlighting'],
        liveLink: 'https://vivekbajpai82.github.io/TYPE-RUSH/',
        github: 'https://github.com/vivekbajpai82'
    },
    {
        date: 'Oct 2024',
        title: 'QR Code Generator',
        stack: 'HTML • CSS • JavaScript',
        description: 'Desktop application to generate customized QR codes for text, URLs, contact info with various styling options.',
        points: ['Generate QR codes for text, URLs, WiFi credentials and contact information', 'Customizable QR code styling with colors, logos and different error correction levels', 'Batch QR code generation with CSV import for bulk processing', 'User-friendly GUI built with Tkinter for easy interaction and file management'],
        liveLink: 'https://vivekbajpai82.github.io/QR-Code-Generator/',
        github: 'https://github.com/vivekbajpai82'
    },
    {
        date: 'Aug 2024',
        title: 'PSIT Attendance Calculator',
        stack: 'HTML • CSS • JavaScript',
        description: 'Desktop tool specifically designed for PSIT students to track and calculate attendance.',
        points: ['Subject-wise attendance tracking with automatic percentage calculations', 'Minimum attendance prediction and class requirement suggestions', 'Data export to Excel with detailed attendance reports and analytics', 'Local database storage with backup and restore functionality'],
        liveLink: 'https://vivekbajpai82.github.io/Psit-Attendence-Calculator/',
        github: 'https://github.com/vivekbajpai82'
    },
    {
        date: 'Jul 2023',
        title: 'TextUtils',
        stack: 'React • JavaScript • HTML • CSS',
        description: 'Web-based text utility tool for multiple text transformations including case conversion and text analysis.',
        points: ['Real-time text analysis with instant feedback', 'Remove extra spaces, case conversion, word counting', 'Optimized for large text inputs without lag', 'Interactive interface for seamless text manipulation'],
        liveLink: 'https://vivekbajpai82.github.io/Text-Utils/',
        github: 'https://github.com/vivekbajpai82'
    },
    {
        date: 'Nov 2024',
        title: 'Weather Today',
        stack: 'HTML • CSS • JavaScript',
        description: 'Modern weather application providing current conditions, forecasts and weather alerts with beautiful UI design.',
        points: ['Current weather data with hourly and weekly forecasts display', 'Location-based weather with GPS integration and city search functionality', 'Interactive weather maps showing precipitation, temperature and wind patterns', 'Weather alerts and notifications with customizable user preferences'],
        liveLink: 'https://vivekbajpai82.github.io/Weather-Today/',
        github: 'https://github.com/vivekbajpai82'
    },
     {
        date: 'Nov 2024',
        title: 'Analog-Watch ',
        stack: 'HTML • CSS • JavaScript',
        description: 'A simple Analog Watch web application that displays a real-time analog clock.',
        points: ['Built using HTML, CSS, and JavaScript.','Features rotating hour, minute, and second hands.','Updates every second to show the current time.',
        'Uses JavaScript to manipulate the rotation of the clock hands.'],
        liveLink: 'https://vivekbajpai82.github.io/Analog-Watch/',
        github: 'https://github.com/vivekbajpai82'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
    return (
        <section id="projects">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8 }}
            >
                Featured Projects
            </motion.h2>
            <motion.div 
                className="projects-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.005 }} 
                transition={{ staggerChildren: 0.2 }} 
            >
                {projectData.map((project, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <div className="project-card">
                            {project.status && <div className="project-status ongoing">{project.status}</div>}
                            {project.date && <div className="project-date">{project.date}</div>}
                            <h3>{project.title}</h3>
                            <p className="tech-stack">{project.stack}</p>
                            <div className="project-description">
                                <p>{project.description}</p>
                                <ul>
                                    {project.points.map((point, i) => <li key={i}>{point}</li>)}
                                </ul>
                            </div>
                            <div className="project-links">
                                {project.liveLink && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <i className="fab fa-github"></i> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;