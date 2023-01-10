import React from "react";
import { Box, Center, SimpleGrid } from "ready-to-use-components";
import { useRouter } from "next/router";
import Link from "next/link";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "AboutMe", path: "/aboutMe" },
];

const Nav = () => {
  //   const router = useRouter();
  return (
    <Box
      as="nav"
      zIndex={1}
      position="absolute"
      top={-12}
      right={40}
      bg="#3188ae"
      borderRadius="10px 10px 0px 0px"
    >
      <Box as="ul" p={10} display="flex" m={0}>
        {navLinks.map((link) => (
          <Center as="li" key={link.title} px={10}>
            <Link
              href={link.path}
              style={{ color: "white", fontWeight: "700" }}
            >
              {link.title}
            </Link>
          </Center>
        ))}
      </Box>
    </Box>
  );
};

export default Nav;
