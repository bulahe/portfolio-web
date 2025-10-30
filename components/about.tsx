"use client";
import React, {use, useEffect} from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mx-auto max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <div className='mx-auto text-center max-w-[45rem] leading-8 space-y-4 sm:space-y-5'>
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
