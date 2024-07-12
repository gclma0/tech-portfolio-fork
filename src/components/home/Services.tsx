import { motion } from 'framer-motion';
import { HoverEffect } from "../ui/card-hover-effect";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
};

export function Services() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-5xl mx-auto px-8 py-16"
    >
      <h2 className='text-3xl font-semibold px-4'>What we do</h2>
      <HoverEffect items={projects} />
    </motion.div>
  );
}
export const projects = [
  {
    title: "WHAT WE DO",
    description:
      "From innovative mobile apps to AI-powered solutions, we craft bespoke experiences and build products that maximize your digital impact.",
    link: "https://stripe.com",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "We enable you to create highly productive mobile apps with the most recent technologies. All of our developments are very secured and highly scalable.",
    link: "https://netflix.com",
  },
  {
    title: "WEB APPLICATION",
    description:
      "Rely on our proven track record in web application development, where creativity and functionality converge to elevate your online presence.",
    link: "https://google.com",
  },
  {
    title: "NETWORK SOLUTIONS",
    description:
      "Build a reliable network infrastructure tailored to your business needs, benefiting from our extensive experience in ensuring seamless connectivity and communication.",
    link: "https://meta.com",
  },
  {
    title: "CYBER SECURITY",
    description:
      "Safeguard your digital assets with our proven cybersecurity solutions, a testament to our enduring commitment to protecting organizations from potential threats.",
    link: "https://amazon.com",
  },
  {
    title: "MOBILE APPLICATION",
    description:
      "Trust our skilled professionals to craft bespoke mobile applications, delivering unparalleled user experiences honed over years of practice.",
    link: "https://microsoft.com",
  },
];

