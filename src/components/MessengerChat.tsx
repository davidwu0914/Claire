import React, { useEffect } from 'react';

declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any;
    }
}

const MessengerChat: React.FC = () => {
    useEffect(() => {
        // 1. Create the Facebook Chat div elements
        const fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.appendChild(fbRoot);

        const fbCustomerChat = document.createElement('div');
        fbCustomerChat.id = 'fb-customer-chat';
        fbCustomerChat.className = 'fb-customerchat';
        fbCustomerChat.setAttribute('page_id', '100063784972538');
        fbCustomerChat.setAttribute('attribution', 'biz_inbox');
        document.body.appendChild(fbCustomerChat);

        // 2. Initialize the Facebook SDK
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: 'v18.0'
            });
        };

        // 3. Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s) as HTMLScriptElement;
            js.id = id;
            js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
            fjs.parentNode?.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        return () => {
            // Cleanup if necessary (optional, usually scripts stay)
        };
    }, []);

    return null;
};

export default MessengerChat;
