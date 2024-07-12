import { HoverEffect } from "../ui/card-hover-effect";
import BlurFade from '../magicui/blur-fade';

export function Services() {
  return (
      <BlurFade delay={0.25} inView className="max-w-[100rem] mx-auto px-4 md:px-8 py-16">
        <h2 className='text-3xl font-semibold px-8'>What we do</h2>
        <HoverEffect items={projects} />
      </BlurFade>
  );
}

export const projects = [
  {
    title: "Software Development and ERP Solution",
    description: "Custom software and ERP solutions to streamline your business operations.",
    link: "https://stripe.com",
  },
  {
    title: "Cloud Onboarding/Services",
    description: "Efficient and secure cloud services to boost your productivity.",
    link: "https://netflix.com",
  },
  {
    title: "Web and App Development",
    description: "Creating innovative web and mobile applications tailored to your needs.",
    link: "https://google.com",
  },
  {
    title: "Network Solutions",
    description: "Reliable network infrastructure to keep your business connected.",
    link: "https://meta.com",
  },
  {
    title: "Cyber Security",
    description: "Protecting your digital assets with advanced cybersecurity measures.",
    link: "https://amazon.com",
  },
  {
    title: "Automation and IOT",
    description: "Implementing smart automation and IoT solutions for enhanced efficiency.",
    link: "https://microsoft.com",
  },
  {
    title: "Backup and Disaster Recovery",
    description: "Ensuring data safety with robust backup and disaster recovery solutions.",
    link: "https://stripe.com",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces and experiences.",
    link: "https://netflix.com",
  },
  {
    title: "Domain, Hosting and Email Services",
    description: "Comprehensive domain, hosting, and email solutions for your business.",
    link: "https://google.com",
  },
  {
    title: "Marketing Consultancy",
    description: "Expert marketing strategies to elevate your brand's presence.",
    link: "https://meta.com",
  },
  {
    title: "End User Workplace Support",
    description: "Providing seamless support to enhance end-user productivity.",
    link: "https://amazon.com",
  },
];
