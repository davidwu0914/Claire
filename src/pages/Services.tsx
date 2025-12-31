import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ServiceCard from '../components/ServiceCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import serviceFacial from '../assets/images/service_facial.png';
import serviceBody from '../assets/images/service_body.png';
import serviceSpa from '../assets/images/service_spa.png';
import serviceOrangeBlossom from '../assets/images/service_orange_blossom.png';
import serviceHydraFacial from '../assets/images/service_hydra_facial.png';
import serviceSuperHydration from '../assets/images/service_super_hydration.png';
import serviceWaterGlow from '../assets/images/service_water_glow.png';
import serviceRFLifting from '../assets/images/service_rf_lifting.png';
import serviceDeepHydration4X from '../assets/images/service_deep_hydration_4x.png';
import serviceMiracleSculpting from '../assets/images/service_miracle_sculpting.png';
import serviceVitaminCWhitening from '../assets/images/service_vitamin_c_whitening.png';
import serviceHeadSpa from '../assets/images/service_head_spa.png';
import serviceEarCandle from '../assets/images/service_ear_candle.png';
import serviceBodyScrub from '../assets/images/service_body_scrub.png';
import serviceSeaweedWrap from '../assets/images/service_seaweed_wrap.png';
import serviceBreastWellness from '../assets/images/service_breast_wellness.png';
import serviceBodySculpting from '../assets/images/service_body_sculpting.png';


const services = [
    {
        id: 1,
        title: '橙花水凝水潤課程',
        description: '深層補水，賦予肌膚彈性與光澤，適合乾燥缺水肌膚。',
        price: 'NT$ 1800',
        imageUrl: serviceOrangeBlossom
    },
    {
        id: 2,
        title: '八倍淨膚水雕渦旋',
        description: '深層清潔毛孔，去除老廢角質，讓肌膚呼吸。',
        price: 'NT$ 2800',
        imageUrl: serviceHydraFacial
    },
    {
        id: 3,
        title: '超導濕潤課程',
        description: '利用超導技術導入精華，長效鎖水保濕。',
        price: 'NT$ 2800',
        imageUrl: serviceSuperHydration
    },
    {
        id: 4,
        title: '水光針課程',
        description: '打造水煮蛋肌，提升肌膚亮度與細緻度。',
        price: 'NT$ 3800',
        imageUrl: serviceWaterGlow
    },
    {
        id: 5,
        title: 'RF微波提肌術',
        description: '非侵入式拉提，緊緻輪廓線，回復年輕風采。',
        price: 'NT$ 4000',
        imageUrl: serviceRFLifting
    },
    {
        id: 6,
        title: '4X超導保濕深度課程',
        description: '四倍保濕因子導入，極致潤澤，修復受損肌膚。',
        price: 'NT$ 4500',
        imageUrl: serviceDeepHydration4X
    },
    {
        id: 7,
        title: '青春奇蹟提塑課程',
        description: '全方位抗老護理，撫平細紋，重現青春光彩。',
        price: 'NT$ 4500',
        imageUrl: serviceMiracleSculpting
    },
    {
        id: 8,
        title: '精純C水漾亮白課程',
        description: '高濃度維他命C導入，改善暗沉，均勻膚色。',
        price: 'NT$ 5000',
        imageUrl: serviceVitaminCWhitening
    },
    {
        id: 9,
        title: '頭部SPA放壓課程',
        description: '20分鐘極致放鬆，舒緩頭部緊繃與壓力。',
        price: 'NT$ 1000',
        imageUrl: serviceHeadSpa
    },
    {
        id: 10,
        title: '耳燭淨化腦壓課程',
        description: '20分鐘耳燭療法，淨化身心，改善睡眠品質。',
        price: 'NT$ 1200',
        imageUrl: serviceEarCandle
    },
    {
        id: 11,
        title: '全身去角質',
        description: '溫和去除身體老廢角質，重現嫩滑牛奶肌。',
        price: 'NT$ 1500',
        imageUrl: serviceBodyScrub
    },
    {
        id: 12,
        title: '全身海藻淨化敷體',
        description: '利用海藻精華進行全身敷體，排毒代謝，緊緻肌膚。',
        price: 'NT$ 2000',
        imageUrl: serviceSeaweedWrap
    },
    {
        id: 13,
        title: '美胸活氧保健',
        description: '20分鐘美胸護理，疏通淋巴，維持胸部健康與彈性。',
        price: 'NT$ 2000',
        imageUrl: serviceBreastWellness
    },
    {
        id: 14,
        title: '雕塑曲線爆脂無痛',
        description: '針對背、手、腰、臀、大腿進行局部雕塑，打造完美S曲線。',
        price: 'NT$ 2500/區',
        imageUrl: serviceBodySculpting
    }
];

const Services: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="services-page">
            <div className="container">
                <h1>我們的服務</h1>
                <p className="services-subtitle">全方位美力團隊，為您打造完美身形與肌膚</p>

                {isMobile ? (
                    <div className="services-slider-container">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1.2}
                            centeredSlides={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            className="services-swiper"
                        >
                            {services.map(service => (
                                <SwiperSlide key={service.id}>
                                    <ServiceCard
                                        title={service.title}
                                        description={service.description}
                                        price={service.price}
                                        imageUrl={service.imageUrl}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className="services-list">
                        {services.map(service => (
                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                imageUrl={service.imageUrl}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;