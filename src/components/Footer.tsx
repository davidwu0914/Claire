import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Claire-克萊兒皮膚管理中心。版權所有。</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/profile.php?id=100063784972538" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com/claire_beautyspa/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.threads.net/@claire_beautyspa" target="_blank" rel="noopener noreferrer">Threads</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;