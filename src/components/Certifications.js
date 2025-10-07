// src/components/Certifications.js
import React from 'react';
import { motion } from 'framer-motion';

const certificationsData = [
    { 
        provider: 'Udemy', 
        title: 'Mastering Data Structures and Algorithms using C and C++', 
        date: 'Issued: May 2024',
        link: 'https://www.udemy.com/certificate/UC-31198886-94de-4c4e-9f4c-94a978994a0b/'
    },
    { 
        provider: 'Udemy', 
        title: 'Learn C++ Programming - Beginner to Advanced (Deep Dive in C++)', 
        date: 'Issued: February 2025',
        link: 'https://www.udemy.com/certificate/UC-10e2f6f9-f6db-42be-b8c2-a5b8ac2e9fc8/' 
    },
    { 
        provider: 'Coursera', 
        title: 'Databases and SQL for Data Science', 
        date: 'Issued: March 2025',
        link: 'https://www.credly.com/badges/7f20d17d-ccfe-48c6-beb0-9b03025b92cd'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Certifications = () => {
    return (
        <section id="certifications">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                Certifications
            </motion.h2>
            <motion.div 
                className="certifications-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {certificationsData.map((cert, index) => (
                    <motion.div className="certification-card" key={index} variants={cardVariants}>
                       
                        <div>
                            <div className="cert-provider">{cert.provider}</div>
                            <h4>{cert.title}</h4>
                        </div>
                       
                        <div className="cert-footer">
                            <p className="cert-date">{cert.date}</p>
                            <div className="cert-link-wrapper">
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Certifications;