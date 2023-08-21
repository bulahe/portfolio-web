"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              alt="picture of bulahe chung"
              src="/IMG_0214.png"
              width={192}
              height={192}
              priority={true}
              className="h-[8.5rem] w-[8.5rem] rounded-full object-cover border-[0.2rem] border-double border-white border-opacity-70 shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <span className="absolute bottom-0 right-0 text-5xl ">👋</span>
          </motion.div>
        </div>
      </div>

      <div className="h-[3rem]"></div>

      <div className="text-center max-w-[50rem] dark:text-neutral-300 text-neutral-700 mb-4 mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="text-xl"
        >
          Hi, I'm{""}
          <span className="font-bold"> Bulahe Chung.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
          className="text-xl"
        >
          I'm a 20 yo EE student at {""}
          <a
            href="https://www.sjtu.edu.cn"
            className="underline hover:text-gray-500"
          >
            SJTU
          </a>
          . I'm currently learning {""}
          <span className="font-bold">web development </span>
          and hope that I'll be able to start my own project ASAP. {""}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.6 }}
          className="text-xl"
        >
          well, at least I've already written some song(s?) with my friends in{" "}
          <span className="font-bold">SJTU Art Center </span>
          plz check them out below~~
        </motion.p>
      </div>
    </section>
  );
}
