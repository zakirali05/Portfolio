import { motion } from "framer-motion";
import Image from "next/image";
import img from "../images/angel.png";
const Preview = () => {
  return (
    <div className=" z  w-screen overflow-hidden   flex-col gap-2  h-screen flex items-center justify-center bg-white  ">
      <div
        className={`text flex gap-5 flex-col items-center justify-center     text-black  `}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="img top-[6.5rem] md:top-10 absolute "
        >
          <Image
            className="object-cover "
            height={300}
            width={300}
            src={img}
            alt="img"
          />
        </motion.div>
        <motion.h1
          initial={{ y: "200%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="specialfont  font-bold   text-5xl md:text-6xl lg:text-7xl "
        >
          ZAKIR ALI
        </motion.h1>
        <motion.h1
          initial={{ y: "500%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-2xl ld:text-3xl  font-[400] text-center "
        >
          PASSIONATE MERN STACK WEB DEVELOPER AND FREELANCER
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.9 }}
        transition={{ duration: 0.4 }}
        className="one 0 absolute top-5 right-2 h-[30px] w-[30px] rounded-full bg-[black]  "
      ></motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.9 }}
        transition={{ duration: 0.4 }}
        className="two absolute top-5 left-2  h-[30px] w-[30px] rounded-full bg-[black]  "
      ></motion.div>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.9 }}
        transition={{ duration: 0.4 }}
        className="three absolute bottom-5  right-2  h-[30px] w-[30px] rounded-full bg-[black] "
      ></motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.9 }}
        transition={{ duration: 0.4 }}
        className="four absolute  bottom-5 left-2  h-[30px] w-[30px] rounded-full bg-[black]  "
      ></motion.div>
    </div>
  );
};

export default Preview;
