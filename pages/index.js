export default function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Discover Your Path</h1>
            <p style={styles.description}>
                Welcome to a journey of faith and choice. Inspired by the timeless teachings of John, this interactive story invites you to explore themes of light, love, and redemption. Each decision reveals a lesson—will you follow the light or wander the shadows?
            </p>
            <a href="#/quiz/1" style={styles.link}>
                <button style={styles.button}>Start the Adventure</button>
            </a>
            <p style={styles.betaNote}>This is a beta version. Your feedback is welcome!</p>
        </div>
    );
}

// Styles
const styles = {
    container: {
        textAlign: 'center',
        margin: '50px auto',
        padding: '20px',
        maxWidth: '600px',
        backgroundColor: '#fff',
        border: '1px solid #000',
        borderRadius: '8px',
        fontFamily: 'Georgia, serif',
        color: '#000',
    },
    title: {
        fontSize: '36px',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    description: {
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '20px',
        fontStyle: 'italic',
        color: '#333',
    },
    link: {
        textDecoration: 'none',
    },
    button: {
        padding: '12px 25px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#000',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        transition: 'background-color 0.3s',
    },
    betaNote: {
        marginTop: '20px',
        fontSize: '12px',
        color: '#777',
        fontStyle: 'italic',
    },
};
