"use client";
import { useEffect, useState } from "react";
import Preview from "./components/Preview";
import HomeComponent from "./components/Home";
import { motion } from "framer-motion";
export default function Home() {
  const [preview, setPreview] = useState(true);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setPreview(false);
    }, 3000);
    const mouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(mouse);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouse]);

  const varients = {
    default: {
      x: mouse.x - 16,
      y: mouse.y - 16,
    },
  };

  return (
    <div className="main w-screen ">
      <motion.div
        variants={varients}
        animate="default"
        className="cursor z  h-[32px] w-[32px] flex items-center justify-center  rounded-full bg-white/30 fixed top-0 left-0 "
      >
        <div className="div h-[20px] w-[20px] rounded-full bg-white animate-ping "></div>
      </motion.div>
      <div
        className={`absolute  ${
          preview ? "" : "transitionn translate-y-[-100%]"
        }`}
      >
        <Preview />
      </div>

      <HomeComponent />
    </div>
  );
}
