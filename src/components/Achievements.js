// src/components/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';

const achievementsData = [
    { icon: 'fab fa-hackerrank', title: 'Five Star Problem Solver', platform: 'on HackerRank' },
    { icon: 'fas fa-fire', title: '500+ Day Streak', platform: 'on LeetCode' },
    { icon: 'fas fa-code', title: '450+ Problems Solved', platform: 'on LeetCode Platform' }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Achievements = () => {
    return (
        <section id="achievements">
             <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                Achievements & Recognition
            </motion.h2>
            <motion.div 
                className="achievements-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {achievementsData.map((achievement, index) => (
                    <motion.div className="achievement-card" key={index} variants={cardVariants}>
                        <div className="achievement-icon">
                            <i className={achievement.icon}></i>
                        </div>
                        <h4>{achievement.title}</h4>
                        <p>{achievement.platform}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Achievements;