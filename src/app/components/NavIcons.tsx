"use client";

import { BsPersonFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 relative">
      <BsPersonFill
        className="text-2xl cursor-pointer hover-effect"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 l-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <IoIosNotifications className="text-2xl cursor-pointer hover-effect" />
      <div className="relative cursor-pointer">
        <FaShoppingCart
          className="text-2xl hover-effect"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-alert-red rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
