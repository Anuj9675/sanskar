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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 346 512.36"
          width="32"
          height="32"
        >
          <g fillRule="nonzero">
            <path
              fill="#00B6FF"
              d="M172.53 246.9c0-42.04 34.09-76.11 76.12-76.11h11.01c.3.01.63-.01.94-.01 47.16 0 85.4 38.25 85.4 85.4 0 47.15-38.24 85.39-85.4 85.39-.31 0-.64-.01-.95-.01l-11 .01c-42.03 0-76.12-34.09-76.12-76.12V246.9z"
            />
            <path
              fill="#24CB71"
              d="M0 426.98c0-47.16 38.24-85.41 85.4-85.41l87.13.01v84.52c0 47.65-39.06 86.26-86.71 86.26C38.67 512.36 0 474.13 0 426.98z"
            />
            <path
              fill="#FF7237"
              d="M172.53.01v170.78h87.13c.3-.01.63.01.94.01 47.16 0 85.4-38.25 85.4-85.4C346 38.24 307.76 0 260.6 0c-.31 0-.64.01-.95.01h-87.12z"
            />
            <path
              fill="#FF3737"
              d="M0 85.39c0 47.16 38.24 85.4 85.4 85.4h87.13V.01H85.39C38.24.01 0 38.24 0 85.39z"
            />
            <path
              fill="#874FFF"
              d="M0 256.18c0 47.16 38.24 85.4 85.4 85.4h87.13V170.8H85.39C38.24 170.8 0 209.03 0 256.18z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Photoshop",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.76 498.97">
          <title>adobe-photoshop</title>
          <rect width="511.76" height="498.97" rx="90.62" />
          <path
            fill="#31a8ff"
            d="M115.24,349.91V130.53c0-1.59.68-2.4,2.06-2.4,3.65,0,7,0,12-.17s10.47-.23,16.31-.34l18.54-.35q9.78-.17,19.39-.17,26.09,0,44,6.52a76.4,76.4,0,0,1,28.66,17.51,67.06,67.06,0,0,1,15.62,24.21A80.31,80.31,0,0,1,276.61,203q0,27.48-12.7,45.32a71.82,71.82,0,0,1-34.33,25.92c-14.42,5.38-30.45,7.2-48.07,7.2-5,0-8.58-.05-10.64-.17s-5.15-.17-9.27-.17v68.49a2.72,2.72,0,0,1-2.32,3.09,2.49,2.49,0,0,1-.77,0H117.64C116,352.65,115.24,351.74,115.24,349.91ZM161.6,169.33v71.55q4.46.35,8.24.34h11.33a80.56,80.56,0,0,0,24.55-3.92A37,37,0,0,0,223.23,226q6.69-7.89,6.69-22a34.74,34.74,0,0,0-5-18.88A32,32,0,0,0,210,172.93,63.68,63.68,0,0,0,185,168.64q-8.25,0-14.59.17t-8.76.52Z"
          />
          <path
            fill="#31a8ff"
            d="M409.35,227.87a80,80,0,0,0-20.43-7.21,108.28,108.28,0,0,0-23.86-2.75,44.38,44.38,0,0,0-12.87,1.55,11.55,11.55,0,0,0-6.7,4.29,10.79,10.79,0,0,0-1.71,5.84,9.08,9.08,0,0,0,2.06,5.49,23.25,23.25,0,0,0,7.21,5.66,141.8,141.8,0,0,0,15.1,7,150,150,0,0,1,32.79,15.62,50,50,0,0,1,16.82,17.68,47.17,47.17,0,0,1,5,22,49.41,49.41,0,0,1-8.24,28.33,54.23,54.23,0,0,1-23.86,19.05Q375,357.3,352,357.3a140.51,140.51,0,0,1-29-2.75,92.44,92.44,0,0,1-21.8-6.87,4.44,4.44,0,0,1-2.41-4.12V306.49a2,2,0,0,1,.86-1.89,1.66,1.66,0,0,1,1.89.17A91.62,91.62,0,0,0,328,315.24a108.66,108.66,0,0,0,25.07,3.26q12,0,17.68-3.09a9.7,9.7,0,0,0,5.66-8.92q0-4.47-5.15-8.59T350.3,288a126.06,126.06,0,0,1-30.38-15.45,52.42,52.42,0,0,1-16.14-18,47.35,47.35,0,0,1-5-21.8A49.21,49.21,0,0,1,306,206.93a52.37,52.37,0,0,1,22.32-19.57q15.1-7.55,37.76-7.55a167.13,167.13,0,0,1,26.44,1.88,69.58,69.58,0,0,1,18.4,5,3.13,3.13,0,0,1,2.06,1.89,9.31,9.31,0,0,1,.34,2.57v34.68a2.3,2.3,0,0,1-1,2.06A3.33,3.33,0,0,1,409.35,227.87Z"
          />
        </svg>
      ),
    },
    {
      name: "Premiere Pro",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.84 500.01">
          <title>adobe-premiere-pro</title>
          <path
            fill="#2A003F"
            d="M90.81,0H422a90.74,90.74,0,0,1,90.82,90.81V409.2A90.73,90.73,0,0,1,422,500H90.81A90.73,90.73,0,0,1,0,409.2V90.81A90.74,90.74,0,0,1,90.81,0Z"
          />
          <path
            fill="#9999FF"
            d="M121.8,350.65V130.77c0-1.49.64-2.35,2.14-2.35,3.63,0,7.05,0,12-.21,5.13-.21,10.47-.21,16.24-.43s12-.21,18.59-.43,13-.21,19.45-.21c17.52,0,32,2.14,44,6.62a76.35,76.35,0,0,1,28.64,17.53,67.94,67.94,0,0,1,15.6,24.36,81.86,81.86,0,0,1,4.91,27.77q0,27.57-12.82,45.52A73.2,73.2,0,0,1,236.12,275c-14.53,5.34-30.56,7.26-48.08,7.26-5.13,0-8.55,0-10.68-.21s-5.13-.21-9.19-.21v68.59a2.66,2.66,0,0,1-2.35,3H124.36C122.65,353.43,121.8,352.57,121.8,350.65Zm46.58-181v71.8c3,.21,5.77.43,8.33.43H188A79.61,79.61,0,0,0,212.61,238a36.71,36.71,0,0,0,17.52-11.32c4.49-5.35,6.63-12.61,6.63-22a35.19,35.19,0,0,0-4.92-19,31,31,0,0,0-15-12.18,62.55,62.55,0,0,0-25.22-4.27c-5.55,0-10.47,0-14.53.21a49.8,49.8,0,0,0-8.76.21Z"
          />
          <path
            fill="#9999FF"
            d="M313.26,182.06h37.39a4.8,4.8,0,0,1,4.49,3.42,21.39,21.39,0,0,1,1.28,5.34c.43,2.13.86,4.48,1.07,6.62.21,2.35.43,4.92.43,7.69a79.63,79.63,0,0,1,22.86-18.37,66.17,66.17,0,0,1,32.48-8.34,2.66,2.66,0,0,1,3,2.35V223.3c0,1.71-1.07,2.35-3.42,2.35a92.62,92.62,0,0,0-23.08,2.13,88.75,88.75,0,0,0-17.94,5.77,33.3,33.3,0,0,0-10.9,7.91v109c0,2.13-.86,3-2.78,3H316a3,3,0,0,1-3.41-2.57V231.63c0-5.13,0-10.47-.22-16s-.21-11.11-.43-16.66c0-4.92-.42-9.62-.85-14.53a2,2,0,0,1,1.5-2.35c0-.22.42-.22.64,0Z"
          />
        </svg>
      ),
    },
    {
      name: "Illustrator",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.45 498.66">
          <rect width="511.45" height="498.66" rx="90.57" fill="#300" />
          <path
            fill="#ff9a00"
            d="M247.84,299.26H168.58l-16.12,50.09a4,4,0,0,1-4.12,3.09H108.2q-3.44,0-2.4-3.78L174.42,151q1-3.09,2.06-7a74.51,74.51,0,0,0,1.37-13.9,2.11,2.11,0,0,1,1.8-2.4,2,2,0,0,1,.6,0H234.8c1.6,0,2.51.57,2.75,1.71L315.43,349c.69,2.28,0,3.43-2.06,3.43h-44.6a3.17,3.17,0,0,1-3.43-2.4ZM180.94,256h54.2q-2.05-6.87-4.8-15.44t-5.83-18.36l-6.18-19.55q-3.09-9.78-5.66-18.88T208,167.17h-.34a276.76,276.76,0,0,1-7.21,27.44q-4.8,15.45-9.78,31.57T180.94,256Z"
          />
          <path
            fill="#ff9a00"
            d="M361.74,164.08a24.9,24.9,0,0,1-18.87-7.55,27.12,27.12,0,0,1-7.2-19.56,25.17,25.17,0,0,1,7.72-19,26.52,26.52,0,0,1,19-7.38q12.35,0,19.38,7.38a26.52,26.52,0,0,1,7,19,26.78,26.78,0,0,1-7.38,19.56A26.32,26.32,0,0,1,361.74,164.08ZM338.07,349V185c0-2.06.91-3.09,2.74-3.09H383c1.82,0,2.74,1,2.74,3.09V349c0,2.28-.91,3.43-2.74,3.43H341.16C339.1,352.44,338.07,351.29,338.07,349Z"
          />
        </svg>
      ),
    },
    {
      name: "Canva",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="Bzs3Q20SDmnq8e419w3cTa_EZQdGLNeo7JI_gr1"
            x1="40.097"
            x2="7.182"
            y1="297.569"
            y2="333.871"
            gradientTransform="matrix(1 0 0 -1 0 340)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#823af3"></stop>
            <stop offset=".36" stop-color="#4b66e1"></stop>
            <stop offset=".906" stop-color="#01f1c4"></stop>
          </linearGradient>
          <path
            fill="url(#Bzs3Q20SDmnq8e419w3cTa_EZQdGLNeo7JI_gr1)"
            fill-rule="evenodd"
            d="M37.722,6.506H9.073c-1.758,0-3.183,1.425-3.183,3.183	v28.649c0,1.758,1.425,3.183,3.183,3.183h28.649c1.758,0,3.183-1.425,3.183-3.183V9.689C40.905,7.931,39.48,6.506,37.722,6.506z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            d="M30.123,30.343c-1.176,1.081-1.94,1.825-3.651,2.699 c-0.98,0.489-2.083,0.784-3.123,0.784c-3.12,0-4.642-2.873-4.945-5.354c-0.777-6.366,4.816-15.115,8.716-15.115 c0.91,0,1.722,0.791,1.873,2.024c0.234,1.919,0.196,3.279-1.788,4.936c-0.217,0.181-0.281,0.474-0.169,0.648 c0.169,0.259,0.702,0.286,1.779-0.259c2.11-1.065,2.871-2.709,2.639-4.612c-0.259-2.112-2.102-3.88-4.573-3.88 c-1.202,0-2.523,0.359-3.704,1.078c-5.143,3.133-8.462,10.283-7.795,15.735c0.211,1.73,0.93,3.624,2.289,4.897 c0.916,0.848,2.571,1.893,4.523,1.893c2.113,0,3.897-0.816,5.497-1.826c1.085-0.695,1.992-1.535,2.758-2.395 C31.707,30.426,30.803,29.701,30.123,30.343z"
            opacity=".07"
          ></path>
          <path
            fill="#1d1d1b"
            d="M26.882,12.212c2.472,0,4.315,1.768,4.573,3.88c0.232,1.904-0.528,3.548-2.639,4.612 c-0.619,0.313-1.059,0.438-1.353,0.438c-0.217,0-0.355-0.068-0.427-0.178c-0.112-0.173-0.049-0.467,0.169-0.648 c1.984-1.658,2.022-3.018,1.788-4.936c-0.151-1.233-0.964-2.024-1.873-2.024c-3.9,0-9.494,8.75-8.716,15.115 c0.303,2.481,1.825,5.354,4.945,5.354c1.04,0,2.142-0.294,3.123-0.784c1.711-0.875,2.475-1.618,3.651-2.699 c0.175-0.165,0.364-0.239,0.528-0.239c0.474,0,0.733,0.623-0.201,1.491c-0.766,0.86-1.674,1.701-2.758,2.395 c-1.6,1.01-3.385,1.826-5.497,1.826c-1.951,0-3.607-1.045-4.523-1.893c-1.358-1.273-2.078-3.167-2.289-4.897 c-0.667-5.453,2.652-12.602,7.795-15.735C24.358,12.571,25.68,12.212,26.882,12.212 M26.882,11.212 c-1.428,0-2.928,0.434-4.224,1.223c-5.291,3.223-9,10.72-8.267,16.711c0.269,2.203,1.215,4.21,2.597,5.506 c0.705,0.653,2.616,2.164,5.206,2.164c2.594,0,4.684-1.13,6.031-1.98c1.051-0.673,2.011-1.504,2.941-2.542 c1.126-1.069,0.942-1.965,0.81-2.303c-0.212-0.539-0.732-0.887-1.325-0.887c-0.433,0-0.864,0.182-1.214,0.512l-0.175,0.161 c-1.052,0.969-1.746,1.609-3.245,2.375c-0.868,0.433-1.819,0.674-2.668,0.674c-2.514,0-3.7-2.411-3.952-4.475 c-0.491-4.017,1.758-8.949,4.234-11.745c1.265-1.429,2.537-2.249,3.49-2.249c0.368,0,0.788,0.393,0.881,1.145 c0.219,1.796,0.149,2.722-1.437,4.047c-0.605,0.503-0.764,1.345-0.367,1.958c0.155,0.239,0.524,0.635,1.266,0.635 c0.488,0,1.078-0.178,1.804-0.546c2.349-1.185,3.478-3.183,3.18-5.626C32.116,13.258,29.723,11.212,26.882,11.212L26.882,11.212z"
            opacity=".05"
          ></path>
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M30.123,30.343c-1.176,1.081-1.94,1.825-3.651,2.699	c-0.98,0.489-2.083,0.784-3.123,0.784c-3.12,0-4.642-2.873-4.945-5.354c-0.777-6.366,4.816-15.115,8.716-15.115	c0.91,0,1.722,0.791,1.873,2.024c0.234,1.919,0.196,3.279-1.788,4.936c-0.217,0.181-0.281,0.474-0.169,0.648	c0.169,0.259,0.702,0.286,1.779-0.259c2.11-1.065,2.871-2.709,2.639-4.612c-0.259-2.112-2.102-3.88-4.573-3.88	c-1.202,0-2.523,0.359-3.704,1.078c-5.143,3.133-8.462,10.283-7.795,15.735c0.211,1.73,0.93,3.624,2.289,4.897	c0.916,0.848,2.571,1.893,4.523,1.893c2.113,0,3.897-0.816,5.497-1.826c1.085-0.695,1.992-1.535,2.758-2.395	C31.707,30.426,30.803,29.701,30.123,30.343z"
            clip-rule="evenodd"
          ></path>
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
                  className="bg-gray-900 hover:bg-gray-900 transition-all duration-200 p-4 rounded-2xl flex flex-col items-center justify-center text-center group shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white text-3xl bg-gray-900 rounded-full mb-3 group-hover:scale-105 transition-transform">
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
                  src="https://images.unsplash.com/photo-1580196969807-cc6de06c05be?q=80&w=1279&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
