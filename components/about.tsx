"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hi I am a Flutter Developer. Over the past two years I have created several projects for my portfolio, scientific papers and clients.
Apart from that I have also interned at a company for several months, I am also an educator at the Garut Institute of Technology campus as a Lab assistant, I teach and guide students in various important subjects such as Programming Fundamentals, Algorithms and Data Structures, Computer Networks, and Mobile Programming. I am proud to be able to share my knowledge and help students understand basic concepts and practical skills in the field of computer science and mobile application development.
I am passionate about development and education, and I constantly strive to improve my skills while helping others to excel in their learning journey.
        
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        games or watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
