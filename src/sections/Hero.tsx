"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1 }],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeIn" },
      ],
    ]);
  }, [
    leftDesignScope,
    leftDesignAnimate,
    leftPointerAnimate,
    leftPointerScope,
    rightDesignAnimate,
    rightDesignScope,
    rightPointerAnimate,
    rightPointerScope,
  ]);

  return (
    <section className="py-24 overflow-x-clip cursor-custom-cursor-you">
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="Design Example"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Xwnsnowy" color="blue" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="Design Example"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Xwnsnowy" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-primary font-semibold cursor-default">
            ✨$7.5M seed round raised✨
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-medium text-center mt-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Impactful desgin, created effortlessly
        </h1>
        <p className="text-center text-xl text-accent/80 mt-4 max-w-2xl mx-auto">
          Design tools should&apos;n slow you down. Layers is the fastest way to
          create exceptional work. It&apos;s intuitive, powerful, and free.
        </p>
        <form
          action=""
          className="flex border border-white/15 rounded-full py-2 px-4 items-center mt-6 gap-2 max-w-lg mx-auto"
        >
          <Input
            placeholder="Enter your email"
            type="email"
            className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
          />
          <Button
            type="submit"
            className="bg-yellow-400 text-primary rounded-full"
            variant={"outline"}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
