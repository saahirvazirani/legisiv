"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./FooterComponent"; 

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen flex flex-col justify-between">
        {/* Top transition animation */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Text transition animation */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        {/* Bottom transition animation */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="flex-1 flex flex-col">
          {/* Navbar fixed at the top */}
          <div className="h-24 z-10">
            <Navbar />
          </div>

          {/* Page content */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>

          {/* Footer fixed at the bottom */}
          <Footer className="z-10" />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
