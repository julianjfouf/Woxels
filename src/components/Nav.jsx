import React from "react";
import Link from "next/link";

const Nav = ({ Home = false, Works = false, Contact = false, opacity = 1 }) => {
  return (
    <div className={`pt-[20px] z-[10000000] fixed duration-500 top-0 opacity-${opacity}`}>
      <Link
        href="/"
        className={`ml-[20px] ${
          Home
            ? `before:h-[2px] before:w-full relative before:absolute before:bg-[#030303] before:bottom-0`
            : null
        } xl:text-[20px] lg:text-[18px] md:text-[14px] text-[10px] font-medium text-[#030303] z-[100]`}
      >
        Home
      </Link>
      <Link
        href="/works"
        className={`ml-[20px] ${
          Works
            ? `before:h-[2px] before:w-full relative before:absolute before:bg-[#030303] before:bottom-0`
            : null
        } xl:text-[20px] lg:text-[18px] md:text-[14px] text-[10px] font-medium text-[#030303] z-[100]`}
      >
        Works
      </Link>
      <Link
        href="/contact"
        className={`ml-[20px] ${
          Contact
            ? `before:h-[2px] before:w-full relative before:absolute before:bg-[#030303] before:bottom-0`
            : null
        } xl:text-[20px] lg:text-[18px] md:text-[14px] text-[10px] font-medium text-[#030303] z-[100]`}
      >
        Contact
      </Link>
    </div>
  );
};

export default Nav;
