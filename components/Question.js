import React from 'react';
import TypingEffect from './TypingEffect';

const Question = ({ question, options = [], scripture, onNavigate }) => {
    const handleAnswer = (nextId) => {
        onNavigate(nextId);
    };

    return (
        <div className="question-container" style={styles.container}>
            <h1 style={styles.title}>
                <TypingEffect
                    text={question}
                    speed={60}
                />
            </h1>
            <div style={styles.optionsContainer}>
                {options.length > 0 ? (
                    options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option.nextId)}
                            style={styles.button}
                        >
                            {option.text}
                        </button>
                    ))
                ) : (
                    <p>No options available</p> // Graceful fallback
                )}
            </div>
            {scripture && (
                <div style={styles.scriptureContainer}>
                    <p style={styles.scripture}>
                        <em>{scripture.text}</em>
                    </p>
                    <p style={styles.reference}>{scripture.reference}</p>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#ffffff', // White background
        color: '#000000', // Black text
        borderRadius: '5px',
        border: '1px solid #000000', // Thin black border
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        gap: '10px', // Spacing between buttons
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '2px solid #000000', // Black border for minimalist look
        backgroundColor: '#ffffff', // White background
        color: '#000000', // Black text
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s', // Smooth hover effect
    },
    scriptureContainer: {
        marginTop: '30px',
        textAlign: 'center',
    },
    scripture: {
        fontSize: '18px',
        fontStyle: 'italic',
        marginBottom: '10px',
    },
    reference: {
        fontSize: '14px',
        fontWeight: 'lighter',
        color: '#000000',
    },
};

export default Question;
