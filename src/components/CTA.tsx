"use client";

import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const CTA = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='pb-[250px] pt-[120px] relative overflow-clip'>
            <div className="container relative">

                <div className="max-w-4xl lg:max-w-7xl mx-auto bg-blue-500 rounded-3xl p-16 md:p-20 lg:p-28 text-center relative overflow-hidden z-5">

                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_right,#4dedff,transparent_75%)] opacity-50"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_right,#4dedff,transparent_40%)] opacity-50"></div>


                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,#4dedff,transparent_75%)] opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,#4dedff,transparent_40%)] opacity-50"></div>

                    <div className="relative z-10 mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                            Drive India's{' '}
                            <span className="inline-block">
                                <span className="bg-gradient-to-r from-[#4dedff] to-white text-transparent bg-clip-text">
                                    Logistics Revolution
                                </span>
                            </span>
                            {' '}with Us.
                        </h2>
                        <p className='mb-6 md:mb-12 text-md md:text-lg font-medium text-white/90'>
                            Get in touch to explore Partnership Opportunities.<br />Invest in the future of Logistics.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <a
                        href="https://drive.google.com/file/d/1pxXrf-rnxh67-oGbqiGn3kQihckEUiKH/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center group w-full sm:w-auto px-3 py-2.5 sm:py-3 bg-white text-blue-500 font-semibold rounded-md transition text-sm sm:text-base shadow-lg"
                        >
                        Invest in Our Vision
                        <MdKeyboardArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </a>

                            <button
                                className="flex items-center justify-center group w-full sm:w-auto px-3 py-2.5 text-white font-semibold border border-white rounded-md transition text-sm sm:text-base shadow-lg"
                                onClick={() => scrollToSection('contact')}
                            >
                                Contact Us
                                <MdKeyboardArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[3200px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-white/15 bg-[radial-gradient(closest-side,#000_95%,#333333)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] z-5">
            </div>

        </div>
    )
}

export default CTA

