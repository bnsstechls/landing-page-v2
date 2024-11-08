"use client";

import React from 'react';
import { DollarSign, TrendingUp, AlertTriangle, Split } from 'lucide-react';
import NumberTicker from './ui/number-ticker';

const Separator = () => (
    <div className="hidden md:block w-px h-20 bg-white/40 mx-4" />
);

const Stats = () => {
    return (
        <div className="py-24 lg:py-32">
            <div className="container">
                <h2 className="text-4xl text-center md:text-5xl font-medium pb-3 mb-3 tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text">
                    India's Logistics Industry
                </h2>
                <div className="max-w-4xl lg:max-w-7xl mx-auto bg-gradient-to-tr from-blue-600 via-blue-500 to-[#4dedff] rounded-3xl p-16 md:p-20 text-center relative overflow-hidden z-5">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                        <div className="flex flex-col items-center">
                            <DollarSign className="text-white mb-3" size={32} />
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                <NumberTicker value={317} delay={0.5}/>B
                            </div>
                            <div className="mb-6 text-md md:text-lg font-medium text-white/90">TAM in India</div>
                        </div>
                        <Separator />
                        <div className="flex flex-col items-center">
                            <TrendingUp className="text-white mb-3" size={32} />
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                <NumberTicker value={12} delay={0.5}/>%
                            </div>
                            <div className="mb-6 text-md md:text-lg font-medium text-white/90">Compounded Annual Growth Rate</div>
                        </div>
                        <Separator />
                        <div className="flex flex-col items-center">
                            <AlertTriangle className="text-white mb-3" size={32} />
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                <NumberTicker value={40} delay={0.5}/>%
                            </div>
                            <div className="mb-6 text-md md:text-lg font-medium text-white/90">Fleets Struggling</div>
                        </div>
                        <Separator />
                        <div className="flex flex-col items-center">
                            <Split className="text-white mb-3" size={32} />
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">High</div>
                            <div className="mb-6 text-md md:text-lg font-medium text-white/90">Inefficiencies</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;