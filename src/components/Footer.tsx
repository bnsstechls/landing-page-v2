"use client";

import React from "react";
import Link from "next/link";
import { MdMail as Mail, MdPhone as Phone } from "react-icons/md";
import { LuMapPin as MapPin } from "react-icons/lu";
import { FaXTwitter as Twitter, FaLinkedinIn as LinkedIn, FaInstagram as Instagram} from "react-icons/fa6";

const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <footer className="pb-12 pt-4">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold mb-1">LOGISETU</h3>
                                <p className="text-sm text-zinc-400">
                                    Redefining Logistics
                                </p>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="nav-item">
                                    <Twitter className="w-5 h-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href="#" className="nav-item">
                                    <LinkedIn className="w-5 h-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a href="#" className="nav-item">
                                    <Instagram className="w-5 h-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                                <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('mission'); }}>Our Mission</a></li>
                                <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('advantages'); }}>Advantages</a></li>
                                <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('business-model'); }}>Business Model</a></li>
                                <li><a href="#" className="nav-item" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Our Team</a></li>
                            </ul>
                        </div>
                        <div id="contact">
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <a href="mailto:support@logisetu.com" className="nav-item">
                                        support@logisetu.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <a href="tel:+919337473802" className="nav-item">
                                        +91 9337473802
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span className="nav-item cursor-default">
                                        Bengaluru, Karnataka, India
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/20 text-center">
                        <p className="text-sm text-zinc-400">&copy; 2024 LogiSetu. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;