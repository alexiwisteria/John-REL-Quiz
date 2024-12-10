import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text = '', speed = 50, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (typeof text !== 'string') {
            setDisplayedText('');
            return;
        }

        setIsTyping(true);
        setDisplayedText(''); // Reset displayed text

        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(timer);
                setIsTyping(false);
                if (onComplete) onComplete();
            }
        }, speed);

        return () => {
            clearInterval(timer);
            setIsTyping(false);
        };
    }, [text, speed, onComplete]);

    return <p className="whitespace-pre-wrap">{displayedText}</p>;
};

export default TypingEffect;