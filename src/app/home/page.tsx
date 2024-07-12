"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/home/Hero";
import { Services } from "../../components/home/Services";
import Expertise from "../../components/home/Expertise";
import { Choice } from "@/components/home/Choice";
import { Testimonial } from "@/components/home/Testimonial";
import Featured from "@/components/home/Featured";
import Contact from "@/components/home/Contact";

export default function Home() {
  const sections = ["hero", "features", "expertise", "choose", "testimonial", "featured", "contact"];
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = (event: WheelEvent) => {
    if (isAnimating) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    const nextSection = Math.min(Math.max(activeSection + direction, 0), sections.length - 1);
    if (nextSection !== activeSection) {
      setScrollDirection(direction);
      setActiveSection(nextSection);
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, isAnimating]);

  const handleClick = (index: number) => {
    if (isAnimating) return;

    setActiveSection(index);
    setIsAnimating(true);
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
            setIsAnimating={setIsAnimating}
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
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

const Section: React.FC<SectionProps> = ({
  id,
  name,
  isActive,
  scrollDirection,
  setIsAnimating,
}) => {
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
      transition={{ duration: 1 }} // Increase duration for slower animation
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={() => setIsAnimating(false)}
      style={{ pointerEvents: isActive ? "auto" : "none" }}
    >
      {isActive && <SectionContent name={name} />}
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
    case "expertise":
      return <Expertise />;
    case "choose":
      return <Choice />;
    case "testimonial":
      return <Testimonial />;
    case "featured":
      return <Featured />;
    case "contact":
      return <Contact />;
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
