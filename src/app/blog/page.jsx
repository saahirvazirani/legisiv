// AboutPage.jsx
"use client";

import { motion, useInView, useScroll } from "framer-motion";
import FooterComponent from "@/components/FooterComponent"; // Adjust based on export type

const Blog = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex bg-white">
      </div>
    </motion.div>
  );
};

export default Blog;
