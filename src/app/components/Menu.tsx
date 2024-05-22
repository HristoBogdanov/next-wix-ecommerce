"use client";

import { NavbarLinks } from "@/utils/navbar-links";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (open) {
      setAnimationClass("slide-in");
    } else if (!open && animationClass === "slide-in") {
      setAnimationClass("slide-out");
    }
  }, [open, animationClass]);

  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <RiMenu3Fill className="w-8 h-8 cursor-pointer hover:effect" />
      </div>
      {(open || animationClass === "slide-out") && (
        <div
          className={`absolute w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10 text-white left-0 top-20 bg-gradient-to-tr from-violet-600 to-indigo-600 ${animationClass}`}
          onAnimationEnd={() => {
            if (animationClass === "slide-out") {
              setAnimationClass("");
            }
          }}
        >
          {NavbarLinks.map((link) => (
            <Link key={link} href="/">
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
