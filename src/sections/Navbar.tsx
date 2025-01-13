"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { Menu, MenuSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3   py-2 px-4 items-center ">
              <div>
                <Image
                  src={logoImage}
                  alt="Layers Logo"
                  className="h-9 w-auto md:h-auto"
                />
              </div>
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-2">
                <div
                  className="md:hidden cursor-pointer transition-all duration-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <MenuSquare /> : <Menu />}
                </div>

                <Button className="border border-white/80 rounded-full bg-transparent md:inline-flex hidden">
                  Log In
                </Button>
                <Button
                  className="bg-yellow-400 text-primary rounded-full md:inline-flex hidden "
                  variant={"outline"}
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-2 py-2">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label} className="">
                        {link.label}
                      </a>
                    ))}
                    <Button className="border border-white/80 rounded-full bg-transparent ">
                      Log In
                    </Button>
                    <Button
                      className="bg-yellow-400 text-primary rounded-full"
                      variant={"outline"}
                    >
                      Sign Up
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="py-10 md:py-12"></div>
    </>
  );
}
