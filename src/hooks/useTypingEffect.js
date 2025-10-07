// src/hooks/useTypingEffect.js
import { useState, useEffect } from 'react';

export const useTypingEffect = (roles, typeSpeed = 100, deleteSpeed = 50, delayAfterTyping = 2000) => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex % roles.length];
            
            const updatedText = isDeleting
                ? currentRole.substring(0, text.length - 1)
                : currentRole.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentRole) {
                setTimeout(() => setIsDeleting(true), delayAfterTyping);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setRoleIndex(prevIndex => prevIndex + 1);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, roles, typeSpeed, deleteSpeed, delayAfterTyping]);

    return text;
};