import React from 'react';
import { cn } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";
import Image from 'next/image';

const teamMembers = [
  {
    name: "Srikrrishn",
    description: "I drive LogiSetu's growth by shaping business strategies. My experience with AI and Aerospace at DRDO and NAL inspires me to transform logistics with tech-driven, sustainable solutions.",
    image: '/assets/srikrrishn.jpeg'
  },
  {
    name: "Samrudh",
    description: "I handle the technology for LogiSetu. Previously, I worked as a backend engineer at a FinTech startup.",
    image: '/assets/samrudh.jpeg',
  },
  {
    name: "Bishal",
    description: "Managing overall vision and strategy. With a family background in the transportation industry, I lead Logisetu’s mission to innovate logistics and drive sustainable growth.",
    image: '/assets/bishal.jpeg',
  },
  {
    name: "Navneet",
    description: "I oversee operations at LogiSetu. I leverage my team management experience from college to streamline India’s fragmented logistics and drive its growth.",
    image: '/assets/navneet.jpeg',
  },
];

const Team = () => {
  return (
    <div id="team" className="w-full py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center md:text-5xl font-medium mb-16 tracking-tight bg-gradient-to-b from-white via-white to-[#111111] text-transparent bg-clip-text">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
            <div className="mb-4">
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
                unoptimized={true}
                width={128}  
                height={128} 
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
            <p className="text-zinc-400">{member.description}</p>
          </div>
          
          ))}
        </div>
      </div>
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
    </div>
  );
};

export default Team;
