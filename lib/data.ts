import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import expensify from "@/public/expensify.png";
import vidyalaras from "@/public/vidyalaras.png";
import schoolabc from "@/public/schoolabc.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree Graduate",
    location: "Institut Teknologi Garut",
    description:
      "Bachelor's degree in Informatics Engineering, Department of Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },{
    title: "Dicoding MSIB Batch 3 Graduate",
    location: "Dicoding X Kampus Merdeka",
    description:
      "Become the best graduate on the learning path 'Pengembangan Multi-platform dan Back-End' at Dicoding Academy . ",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "Vidya Laras for Student",
    description:
      "Vidya Laras for Student is a learning platform to assist the teaching and learning process for role students integrated with https://lms.pptik.id.",
    tags: ["Figma", "Flutter", "Material Design"],
    imageUrl: vidyalaras,
  },{
    title: "School ABC",
    description:
      "School ABC is an application to learn the letters of the Indonesian alphabet accompanied by examples of animal images",
    tags: ["Flutter"],
    imageUrl: schoolabc,
  },
  {
    title: "Expensify",
    description:
      "Expensify is an application that can make it easier for users to manage finances.",
    tags: ["Figma", "Flutter", "Firebase"],
    imageUrl: expensify,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Dart", 
  "Flutter", 
  "Figma", 
  "Bootstrap", 
  "Linux",
  "Firebase"
] as const;
