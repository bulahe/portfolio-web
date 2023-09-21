"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowRight,BsDiscord} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

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
          Well, at least I've already written some song(s?) with my friends in{" "}
          <span className="font-bold">SJTU Art Center </span>
          plz check them out below~~
        </motion.p>
      </div>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y:100}}
        animate={{ opacity: 1, y:0 }}
        transition={{delay: 0.1 }}>
        <Link href="#contact" 
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none fucus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me here<BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a className="group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full  outline-none fucus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10" href="/bla.png" download>Download CV<HiDownload className="opacity-40 group-hover:translate-y-1 transition"/>
        </a>

        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none fucus:scale-110 hover:scale-110 hover:text-gray-950 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10">
          <BsDiscord />
        </a>

        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none fucus:scale-110 hover:scale-110 hover:text-gray-950 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10" href="https://github.com/bulahe"> 
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
