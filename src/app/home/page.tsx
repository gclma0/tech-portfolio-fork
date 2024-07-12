"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/home/Hero";
import {Services} from "../../components/home/Services";
import Expertise from "../../components/home/Expertise";
import { Choice } from "@/components/home/Choice";
import { Testimonial } from "@/components/home/Testimonial";

export default function Home() {
  const sections = ["hero", "features", "about", "contact", "testimonial", "footer"];
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);

  const handleScroll = (event: WheelEvent) => {
    const direction = event.deltaY > 0 ? 1 : -1;
    setScrollDirection(direction);
    const nextSection = Math.min(Math.max(activeSection + direction, 0), sections.length - 1);
    setActiveSection(nextSection);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

  const handleClick = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className="relative overflow-hidden h-screen">
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
        {sections.map((section, index) => (
          <div key={section} className="relative mb-2">
            <motion.div
              className={`w-3 h-3 rounded-full ${
                activeSection === index ? "bg-teal-400" : "bg-gray-800"
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => handleClick(index)}
            />
            <motion.div
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0"
              whileHover={{ opacity: 1 }}
            >
              {section}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="h-screen">
        {sections.map((section, index) => (
          <Section
            key={section}
            id={section}
            name={section}
            isActive={activeSection === index}
            scrollDirection={scrollDirection}
          />
        ))}
      </div>
    </div>
  );
}

interface SectionProps {
  id: string;
  name: string;
  isActive: boolean;
  scrollDirection: number;
}

const Section: React.FC<SectionProps> = ({ id, name, isActive, scrollDirection }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection > 0 ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: scrollDirection > 0 ? -50 : 50,
    },
  };

  return (
    <motion.div
      id={id}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
      initial="hidden"
      animate={isActive ? "visible" : "exit"}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
    >
      <SectionContent name={name} />
    </motion.div>
  );
};

interface SectionContentProps {
  name: string;
}

const SectionContent: React.FC<SectionContentProps> = ({ name }) => {
  switch (name) {
    case "hero":
      return <Hero />;
    case "features":
      return <Services />;
    case "about":
      return <Expertise />;
    case "contact":
      return <Choice />;
    case "testimonial":
      return <Testimonial />;
    case "footer":
      return (
        <div>
          <h1 className="text-4xl mb-4">Footer</h1>
          <p className="text-lg">
            Thank you for visiting our website. Follow us on social media for updates and more information.
          </p>
        </div>
      );
    default:
      return (
        <div>
          <h1 className="text-4xl mb-4">Section</h1>
          <p className="text-lg">
            This is a default section with some placeholder content.
          </p>
        </div>
      );
  }
};
