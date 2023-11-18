import React from 'react';
import logoReact from '../../assets/images/logo-react.png';
import logoNodeJS from '../../assets/images/logo-nodejs.png';
import logoTailWindCSS from '../../assets/images/logo-tailwindcss.png';

const Footer = () => {
    return (
        <footer>
            <div className="w-[100%] py-8 bg-[#dedede] fixed bottom-0 flex justify-center items-center gap-20">
                <img src={logoReact} alt="ReactJS" className="h-8" />
                <img src={logoTailWindCSS} alt="TailWindCss" className="h-8" />
                <img src={logoNodeJS} alt="NodeJS" className="h-8" />
            </div>
        </footer>
    );
};

export default Footer;