import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = props => {
    const handleClick = () => window.location.href = 'https://www.facebook.com/nctthien677/';
    return (
        <div className="flex flex-col">
            <div className="m-auto w-[100%] md:w-[80%] lg:w-[60%] bg-slate-800 text-white text-center p-6 rounded-[10px]">
                <h1 className="text-[1.5rem] font-bold">Nguyễn Cảnh Thiện</h1>
                <h3>Developer full stack</h3>
            </div>
            <div className="m-auto mt-3 text-center">
                <button className="bg-slate-600 text-white px-4 py-1 rounded-[5px]" onClick={handleClick}>
                    <FontAwesomeIcon icon={faEarthAmericas} className="me-2" />
                    <span>Visit my facebook</span>
                </button>
            </div>
            <div className="m-auto w-[100%] md:w-[80%] lg:w-[60%] p-6 rounded-[10px] mt-3">
                <h3 className="font-bold">Hướng phát triển hiện tại</h3>
                <ul className="mt-1">
                    <li className="list-disc">Trở thành một Full Stack Developer</li>
                    <li className="list-disc">Phát triển cả frontend và backend</li>
                </ul>
                <h3 className="font-bold mt-3">Skills</h3>
                <ul className="mt-1">
                    <li className="list-disc">Frontend Skills: HTML, CSS, Bootstrap, TailwindCSS, ReactJS</li>
                    <li className="list-disc">Backend Skills: Node.js, PHP - basic</li>
                    <li className="list-disc">Other Languages: C++, Java</li>
                </ul>
            </div>
        </div >
    );
};

export default About;