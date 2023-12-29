import { VStack, Text, HStack, Link } from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";
import Social from "./miscellaneous/Social";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
} from "./miscellaneous/Icons";

const Footer = () => {
  const hover = () => {
    return { color: "#F56E0F" };
  };
  return (
    <VStack width="80%" py={20}>
      <Text fontSize="20px" fontWeight="500" color="#F56E0F">
        Harshit Joshi
      </Text>
      <HStack
        width="40%"
        justifyContent="space-between"
        display={{ base: "none", md: "flex", lg: "flex" }}
        gap={5}
        pt={5}
      >
        <Link href="#home" _hover={hover}>
          <Text fontSize="18px" fontWeight="400">
            Home
          </Text>
        </Link>
        <Link href="#about" _hover={hover}>
          <Text fontSize="18px" fontWeight="400">
            About
          </Text>
        </Link>
        <Link href="#skills" _hover={hover}>
          <Text fontSize="18px" fontWeight="400">
            Skills
          </Text>
        </Link>
        <Link href="#projects" _hover={hover}>
          <Text fontSize="18px" fontWeight="400">
            Projects
          </Text>
        </Link>
        <Link href="#contact" _hover={hover}>
          <Text fontSize="18px" fontWeight="400">
            Contact
          </Text>
        </Link>
      </HStack>
      <HStack pt={5} gap={3}>
        <Link
          href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
          isExternal
        >
          <Social icon={LinkedInIcon} />
        </Link>
        <Link href="https://github.com/Harshit-3905" isExternal>
          <Social icon={GithubIcon} />
        </Link>
        <Link href="https://twitter.com/Harshit3905" isExternal>
          <Social icon={TwitterIcon} />
        </Link>
        <Link href="#contact">
          <Social icon={MailIcon} />
        </Link>
      </HStack>
      <HStack pt={10}>
        <FaRegCopyright />
        <Text fontSize="15px">2024 Harshit Joshi. All rights reserved.</Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
