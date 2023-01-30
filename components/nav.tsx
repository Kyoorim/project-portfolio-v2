import React from "react";
import { Box, Center } from "ready-to-use-components";
import Link from "next/link";

const navLinks = [
  { title: "홈", path: "/" },
  { title: "프로필", path: "/aboutMe" },
  { title: "방명록", path: "/board" },
];

const Nav = () => {
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
