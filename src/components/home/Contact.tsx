"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LampContainer } from "../ui/lamp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Contact = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      setAnimationTriggered(true);
    } else {
      setAnimationTriggered(false);
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center h-full w-full text-center"
    >
      <LampContainer>
        <motion.div
          key={animationTriggered ? "contact-animate" : "contact-initial"}
          initial={{ opacity: 0.5, y: 100 }}
          animate={animationTriggered ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 100 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-lg mb-4">
              <strong>Address:</strong> House-105, Road No-4, Block-D, Banani, Dhaka, Bangladesh
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong> +8801712345678
            </p>
            <p className="text-lg mb-4">
              <strong>Email:</strong> oneitech@gmail.com
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-700"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-pink-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Contact;
