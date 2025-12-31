import React from 'react';
import serviceFacial from '../assets/images/service_facial.png';
import serviceBody from '../assets/images/service_body.png';
import serviceSpa from '../assets/images/service_spa.png';
import salonInterior from '../assets/images/salon_interior.png';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h1>關 於 我 們</h1>
                        <p>Claire-克萊兒皮膚管理中心是一家專注於提供全方位美容服務的公司，致力於讓每位客戶都能感受到最好的護理體驗。</p>
                        <p>我們的團隊由經驗豐富的專業人士組成，提供纖體、美體、美顏和SPA等服務。</p>
                        <p>我們的使命是提升每位客戶的自信心，讓您在每一次的服務中都能感受到美的力量。</p>
                    </div>
                    <div className="about-image">
                        <img src={salonInterior} alt="美容沙龍內部環境" />
                    </div>
                </div>
                <div className="about-gallery">
                    <h2>我們的服務環境</h2>
                    <div className="gallery-grid">
                        <img src={serviceFacial} alt="美 顏 服 務" />
                        <img src={serviceBody} alt="美 體 護 理" />
                        <img src={serviceSpa} alt="S P A 放 鬆" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;