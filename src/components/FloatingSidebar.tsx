import React from 'react';

const FloatingSidebar: React.FC = () => {
    return (
        <div className="floating-sidebar">
            <a href="https://line.me/ti/p/~JessicaWu" target="_blank" rel="noreferrer" className="floating-icon line" title="LINE 預約">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE" />
            </a>
            <a href="https://m.me/100063784972538" target="_blank" rel="noreferrer" className="floating-icon facebook" title="Facebook 線上對話">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="FB" />
            </a>
            <a href="tel:0989764440" className="floating-icon phone" title="撥打電話">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
            </a>
        </div>
    );
};

export default FloatingSidebar;
