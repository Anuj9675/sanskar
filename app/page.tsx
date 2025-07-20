"use client";
import React from "react";
import {
  FaPencilRuler,
  FaPaintBrush,
  FaRegEye,
  FaRocket,
  FaTools,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { MdCall, MdEmail } from "react-icons/md";
import { DiUikit } from "react-icons/di";

const designSteps = [
  {
    title: "Creative Brief",
    description:
      "We will understand your brand, goals, and design preferences.",
    icon: <FaPencilRuler className="text-purple-400" size={30} />,
    step: "#1",
  },
  {
    title: "Wireframe & UI Design",
    description: "I’ll create wireframes and design high-fidelity UI mockups.",
    icon: <FaPaintBrush className="text-purple-400" size={30} />,
    step: "#2",
  },
  {
    title: "Feedback & Revisions",
    description: "You can review the designs and suggest changes.",
    icon: <FaRegEye className="text-purple-400" size={30} />,
    step: "#3",
  },
  {
    title: "Final Delivery",
    description: "I will provide design files and assets ready for handoff.",
    icon: <FaRocket className="text-purple-400" size={30} />,
    step: "#4",
  },
];

const WhatsAppSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="30"
    height="30"
    fill="currentColor"
  >
    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
  </svg>
);

const MailSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 50 50"
  >
    <path d="M 16.5 10 C 11.8 10.3 8 14.2 8 19 L 8 35 C 8 35.6 8.4 36 9 36 L 25 36 L 25 19 C 25 14.2 21.2 10.3 16.5 10 z M 22.300781 10 C 25.100781 12 27 15.3 27 19 L 27 36 L 47 36 C 47.5 36 48 35.5 48 35 L 48 19 C 48 14 44 10 39 10 L 22.300781 10 z M 33 17 C 33.7 17 34.399219 17.4 34.699219 18 L 44 18 L 44 24 L 40 24 L 40 20 L 34.699219 20 C 34.399219 20.6 33.7 21 33 21 C 31.9 21 31 20.1 31 19 C 31 17.9 31.9 17 33 17 z M 14 20 L 19 20 C 19.6 20 20 20.4 20 21 C 20 21.6 19.6 22 19 22 L 14 22 C 13.4 22 13 21.6 13 21 C 13 20.4 13.4 20 14 20 z M 28 38 L 28 46 L 34 46 L 34 38 L 28 38 z"></path>
  </svg>
);

const socialLinks = [
  {
    icon: WhatsAppSVG,
    link: "https://wa.me/918269045220",
  },
  {
    icon: MailSVG,
    link: "mailto:ajmerasanskarjain@gmail.com",
  },
];

const Portfolio = () => {
  const skillsData = [
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
          <circle cx="12" cy="6" r="4" fill="#F24E1E" />
          <circle cx="12" cy="18" r="4" fill="#1ABCFE" />
          <circle cx="12" cy="12" r="4" fill="#A259FF" />
          <circle cx="18" cy="12" r="4" fill="#0ACF83" />
          <circle cx="6" cy="12" r="4" fill="#FF7262" />
        </svg>
      ),
    },
    {
      name: "Photoshop",
      icon: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
          <rect width="32" height="32" rx="7" fill="#001E36" />
          <text
            x="7"
            y="24"
            fill="#31A8FF"
            fontWeight="bold"
            fontSize="17"
            fontFamily="Arial"
          >
            Ps
          </text>
        </svg>
      ),
    },
    {
      name: "Premiere Pro",
      icon: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
          <rect width="32" height="32" rx="7" fill="#2A003F" />
          <text
            x="5.8"
            y="24"
            fill="#9999FF"
            fontWeight="bold"
            fontSize="17"
            fontFamily="Arial"
          >
            Pr
          </text>
        </svg>
      ),
    },
    {
      name: "Illustrator",
      icon: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
          <rect width="32" height="32" rx="7" fill="#320000" />
          <text
            x="6"
            y="24"
            fill="#FF9A00"
            fontWeight="bold"
            fontSize="17"
            fontFamily="Arial"
          >
            Ai
          </text>
        </svg>
      ),
    },
    {
      name: "Canva",
      icon: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
          <circle cx="16" cy="16" r="16" fill="#00C4CC" />
          <text
            x="5"
            y="24"
            fill="#FFFFFF"
            fontWeight="bold"
            fontSize="17"
            fontFamily="Arial"
          >
            Ca
          </text>
        </svg>
      ),
    },
  ];


  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="flex flex-col lg:flex-row gap-6 p-6 overflow-hidden">
        {/* Left Section */}
        <div className="lg:w-1/3 space-y-6">
          {/* Profile Card */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 space-y-6 w-full max-w-4xl mx-auto shadow-lg">
            {/* Top section */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Image */}
              <div className="w-28 h-28 rounded-xl overflow-hidden border border-gray-700">
                <Image
                  src="/assets/hero.jpg"
                  alt="Sanskar"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Name & Role */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold">Sanskar Jain</h2>
                <p className="text-purple-400 text-lg mt-1">
                  Graphic & UI/UX Designer
                </p>
              </div>
            </div>

            {/* Tags (relocated below) */}
            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
              <span className="bg-gray-800 px-3 py-1 rounded-full">
                English & Hindi
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">India</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">
                Freelancer
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">20 y/o</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="mailto:ajmerasanskarjain@gmail.com"
                className="flex-1 bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold text-white text-center flex items-center justify-center gap-2 transition duration-200"
              >
                <MdEmail className="text-xl" /> Hire Me
              </Link>
              <Link
                href="tel:+918269045220"
                className="bg-gray-800 hover:bg-gray-700 py-3 px-5 rounded-xl font-semibold text-white text-center flex items-center justify-center gap-2 transition duration-200"
              >
                <MdCall className="text-xl" /> Call
              </Link>
            </div>
          </div>

          {/* Tools I Work On */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-inner">
            <h3 className="text-2xl font-bold mb-1 text-white">
              <span className="text-purple-400">
                <FaTools />
              </span>{" "}
              Tools I Work On
            </h3>
            <p className="text-md text-gray-400 mb-6">
              My favorite tools I use on my projects
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-2xl flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white text-3xl bg-gray-800 rounded-full mb-3 group-hover:scale-105 transition-transform">
                    {skill.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-900 px-7 py-10 rounded-lg border border-black text-center text-white">
            {/* Heading */}
            <div className="font-semibold text-xl md:text-3xl flex items-center justify-center gap-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Let&apos;s Connect
            </div>

            {/* Subtext */}
            <p className="text-sm md:text-lg text-gray-300 mb-6">
              and make your idea comes into reality
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-x-3">
              {socialLinks.map((socialLink, index) => {
                const IconComponent = socialLink.icon;
                return (
                  <a
                    key={index}
                    href={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 text-black rounded-full duration-300 border-2 border-gray-400 hover:border-gray-800 drop-shadow-sm"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 space-y-6 flex flex-col">
          {/* Projects Section */}
          <div className="bg-gray-900 p-6 rounded-2xl  mx-auto w-full">
            <div className="group flex flex-col sm:flex-row sm:items-start justify-start items-start gap-4 sm:gap-6 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800 w-full">
              {/* Floating Image Box */}
              <div className="relative sm:w-1/2 w-full h-44 sm:h-56 rounded-lg overflow-hidden bg-gray-800 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 transition duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1568219557405-376e23e4f7cf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Project Preview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between w-full sm:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-100 flex items-center gap-2">
                  <span className="text-purple-400">
                    <DiUikit />
                  </span>
                  Creative UI/UX Projects
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-snug mb-4">
                  A collection of modern, responsive web interfaces and branding
                  projects, crafted with attention to design and performance.
                </p>
                <Link
                  href="/projects"
                  className="bg-purple-600 hover:bg-purple-700 font-bold text-white rounded px-5 py-2 text-sm w-fit transition-colors duration-200"
                >
                  View Projects →
                </Link>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="bg-gray-900 text-white rounded-xl p-8 space-y-6 ">
            <div>
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span className="text-purple-400">
                  <FaPencilRuler />
                </span>
                Work Process
              </h2>
              <p className="text-sm text-gray-400">
                The design process explained in 4 simple steps
              </p>
            </div>

            {designSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start justify-between bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                <div className="flex items-start gap-3">
                  <div>{step.icon}</div>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </div>
                </div>
                <div className="bg-gray-700 px-2 py-1 rounded-full text-sm font-bold text-white">
                  {step.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
