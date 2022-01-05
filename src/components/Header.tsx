import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/blog" passHref>
        <a>Blog</a>
      </Link>
      <Link href="/contact" passHref>
        <a>Contact me</a>
      </Link>
      <Link href="/published" passHref>
        <a>Published work</a>
      </Link>
    </nav>
  );
};

export default Header;
