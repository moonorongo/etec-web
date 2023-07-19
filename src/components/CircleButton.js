import { syne } from "@/app/layout";
import classNames from "classnames";
import { motion } from "framer-motion";
import React from "react";

export const CircleButton = ({ icon, text, onClick, className, textColor }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="flex flex-col items-center"
    >
      <div className={classNames("rounded-full p-1 mb-1", className)}>
        <div>{icon}</div>
      </div>
      {text && (
        <p
          className={classNames(
            textColor === "light" ? "text-white" : "text-gray-950",
            "text-xs",
            syne.className
          )}
        >
          {text}
        </p>
      )}
    </motion.button>
  );
};
