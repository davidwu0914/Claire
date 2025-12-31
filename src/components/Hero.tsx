import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>相 信 自 己 ， 你 能 做 到 ！</h1>
                <p>您的美麗是我們的熱情。探索我們的服務，今天就預約吧！</p>
                <button className="btn-primary">立即預約</button>
            </div>
        </div>
    );
};

export default Hero;