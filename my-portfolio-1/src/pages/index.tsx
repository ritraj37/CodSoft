import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Portfolio</h1>
                <p>
                    Hello! I'm [Your Name], a passionate developer with a love for creating beautiful and functional web applications. 
                    Explore my projects and learn more about my skills and background.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;