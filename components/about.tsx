"use client";
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';

export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-4 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <div className='mb-28 text-center max-w-[45rem] leading-8 sm:mb-40 '>
            <SectionHeading>about me</SectionHeading>
            <p className='mb-3 '>
                <span className='font-medium'>为什么叫bulahe呢？</span>{" "}
                 bulahe其实是台语小鱼干的意思（念做“bu”（拼音一声）“la”（拼音一声）“he“（念英文的he，不过是二声））我的英文名其实原本叫做 {""}<span className='font-medium'>Brian，</span>不过我的外公不太会念，因此把我念做bulahe。
            </p>
            <p className='mb-3'>然后其实用bulahe最主要的原因还是 {""}
                <span className='font-medium'>brianchung.com的域名实在太贵了{""}</span>

            </p>

        </div>
        </motion.section>
  )
}
