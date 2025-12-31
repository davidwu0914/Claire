import React from 'react';
import BookingForm from '../components/BookingForm';
import contactHero from '../assets/images/contact_hero.png';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-header">
                    <div className="contact-text">
                        <h1>聯 絡 我 們</h1>
                        <p>如有任何問題或預約需求，請填寫以下表單與我們聯絡。</p>
                    </div>
                    <div className="contact-image">
                        <img src={contactHero} alt="聯 絡 我 們" />
                    </div>
                </div>
                <div className="contact-content">
                    <div className="contact-form">
                        <BookingForm />
                    </div>
                    <div className="contact-info">
                        <h2>聯 絡 資 訊</h2>
                        <p><strong>電話:</strong> <a href="tel:0989764440">0989764440</a></p>
                        <p><strong>LINE ID:</strong> JessicaWu</p>
                        <p><strong>地址:</strong> 242新北市新莊區思源路510號1樓</p>
                        <div className="map-container" style={{ marginTop: '20px', borderRadius: '15px', overflow: 'hidden', height: '400px' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=克萊兒皮膚管理中心(242新北市新莊區思源路510號1樓)&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;