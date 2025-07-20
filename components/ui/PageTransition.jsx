"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "../Stairs";

const CombinedTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Fade page content transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
          className="relative"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Stairs overlay transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + "-stairs"}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" } }}
          exit={{ opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
          className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
        >
          <Stairs />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CombinedTransition;
