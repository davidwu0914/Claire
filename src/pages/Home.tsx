import React from 'react';
import Hero from '../components/Hero';
import Services from './Services';
import About from './About';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <section className="welcome-section">
                <div className="container">
                    <div className="welcome-content">
                        <div className="welcome-text">
                            <h2>歡 迎 來 到 我 們 的 美 容 網 站</h2>
                            <p>您所有美容需求的首選目的地。</p>
                            <p>在我們的現代沙龍體驗奢華與關懷。</p>
                        </div>
                        <div className="welcome-image">
                            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600" alt="奢 華 沙 龍" />
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <About />
        </div>
    );
};

export default Home;