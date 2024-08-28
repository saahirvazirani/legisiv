// AboutPage.jsx
"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const buttonRef = useRef();
  const isButtonRefInView = useInView(buttonRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <Image
              src="/pinterest.png"
              alt="saahir vazirani"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">ABOUT SAAHIR</h1>
            <p className="text-lg">
              Saahir Vazirani is a 16-year-old from New Jersey who is deeply passionate about the intersection of AI and policy. He is the creator of LegisEase, a groundbreaking web app that revolutionizes the policy writing process using AI.
            </p>
            {/* More content... */}
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              {/* More skills... */}
            </motion.div>
          </div>

          {/* RESUME BUTTON */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={buttonRef}>
            <motion.div
              initial={{ x: "-600px" }}
              animate={isButtonRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <Link
                href="https://docs.google.com/document/d/1bQUGecB28JOO-IXAXTIsIg7_SzPK37Lz/edit"
                legacyBehavior
              >
                <a target="_blank" rel="noopener noreferrer">
                  <button
                    className="p-4 text-white rounded-lg transition duration-300 hover:transform hover:scale-105"
                    style={{ backgroundColor: "#4528f8", color: "#ffffff" }}
                  >
                    View My Resume
                  </button>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
