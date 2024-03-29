import { VStack, HStack, Text, Box, Link, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Social from "./miscellaneous/Social";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import homeAnimatedwebm from "../assets/homeanimated.webm";
import homeAnimatedmp4 from "../assets/homeanimated.mp4";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [typetext, setTypetext] = useState("");
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const textArray = [
    "Full Stack Developer",
    "Open Source Enthusiast",
    "Competitive Coder",
  ];

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (textIndex === textArray[textArrayIndex].length - 1) {
        setIsDeleting(true);
      }
      if (textIndex === 0 && isDeleting) {
        setIsDeleting(false);
        setTextArrayIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
      if (isDeleting) {
        setTypetext((text) => text.slice(0, Math.max(0, textIndex - 1)));
        setTextIndex((prevIndex) => Math.max(0, prevIndex - 1));
      } else {
        setTypetext((text) => text + textArray[textArrayIndex][textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);
    return () => clearTimeout(typingTimeout);
  }, [typetext, textIndex, isDeleting, textArrayIndex, textArray]);

  return (
    <Flex
      direction={{ base: "column", md: "row", lg: "row" }}
      id="home"
      pt={{ base: "40", md: "0" }}
      width={{ base: "100%", md: "100%", lg: "80%" }}
      minH={{ base: "80vh", md: "90vh", lg: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        width={{ base: "100%", md: "50%", lg: "50%" }}
        alignItems="flex-start"
      >
        <Box
          alignItems="flex-start"
          pl={{ base: "5", md: "20" }}
          width="100%"
          color="#FBFBBF"
        >
          <Fade direction="left" triggerOnce>
            <Text fontSize={{ base: "30px", md: "35px" }}>Hey!</Text>
            <HStack fontSize={{ base: "40px", md: "45px" }}>
              <Text>I&apos;m </Text>
              <Text color="#F56E0F">Harshit Joshi</Text>
            </HStack>
            <Text fontSize={{ base: "30px", md: "35px" }} color="#F56E0F">
              {typetext}|
            </Text>
            <HStack pt={5} gap={3}>
              <Link
                href="https://www.linkedin.com/in/harshit-joshi-40953321b/"
                isExternal
              >
                <Social icon={FaLinkedin} />
              </Link>
              <Link href="https://github.com/Harshit-3905" isExternal>
                <Social icon={FaGithub} />
              </Link>
              <Link href="https://twitter.com/Harshit3905" isExternal>
                <Social icon={FaTwitter} />
              </Link>
              <Link href="#contact">
                <Social icon={IoIosMail} />
              </Link>
            </HStack>
          </Fade>
        </Box>
      </VStack>
      <Box
        width={{ base: "100%", md: "50%", lg: "50%" }}
        alignItems="center"
        justifyContent="center"
        pl={{ base: "5", md: "20" }}
      >
        <Fade direction="right" triggerOnce>
          <video autoPlay loop muted playsInline height="400px" width="400px">
            <source src={homeAnimatedwebm} type="video/webm" />
            <source src={homeAnimatedmp4} type="video/mp4" />
          </video>
        </Fade>
      </Box>
    </Flex>
  );
};

export default Home;
