"use client";

import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";

import Image from "next/image";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">

      <Container>

        {/* Top */}

        <div className="flex items-center justify-between py-6">

          {/* Logo */}

          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={70}
          />

          {/* Search */}

          <div className="flex w-[550px]">

            <input
              className="border w-full px-5 py-3 rounded-l-lg outline-none"
              placeholder="Search for products..."
            />

            <button className="bg-[#3D5E1D] px-6 rounded-r-lg text-white">
              <Search size={20} />
            </button>

          </div>

          {/* Icons */}

          <div className="flex gap-8">

            <div className="flex flex-col items-center text-sm cursor-pointer">
              <User />
              <span>Account</span>
            </div>

            <div className="flex flex-col items-center text-sm cursor-pointer">
              <Heart />
              <span>Wishlist</span>
            </div>

            <div className="flex flex-col items-center text-sm cursor-pointer">
              <ShoppingCart />
              <span>Cart</span>
            </div>

          </div>

        </div>

        {/* Menu */}

        <div className="flex gap-10 py-5 font-medium">

          <a className="text-green-700 border-b-2 border-green-700 pb-2">
            HOME
          </a>

          <a>SHOP</a>

          <div className="flex items-center gap-1">
            CATEGORIES
            <ChevronDown size={18} />
          </div>

          <a>OFFERS</a>

          <a>ABOUT US</a>

          <a>CONTACT US</a>

        </div>

      </Container>

    </div>
  );
}