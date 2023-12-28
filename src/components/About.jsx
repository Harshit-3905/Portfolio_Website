import { VStack, Heading, Flex, Text, Image } from "@chakra-ui/react";
import MyImage from "../assets/HarshitImage.jpeg";

const About = () => {
  return (
    <VStack id="about" width={{ base: "100%", md: "100%", lg: "80%" }} pt={10}>
      <Heading pt={10}>About</Heading>
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        width="100%"
        py={20}
      >
        <Flex
          width={{ base: "100%", md: "40%", lg: "40%" }}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={MyImage}
            alt="My Image"
            width="300"
            height="300"
            borderRadius="full"
          />
        </Flex>
        <VStack
          width={{ base: "100%", md: "60%", lg: "60%" }}
          textAlign="center"
          borderRadius="lg"
          px={10}
        >
          <Text fontWeight="bold" fontSize="xl">
            Hi, I&apos;m Harshit!
          </Text>
          <Text fontSize="lg">
            I am a passionate developer and a third-year Information Technology
            undergraduate student at Kalyani Government Engineering College.
          </Text>
          <Text fontSize="lg">
            My aspiration is to make a positive impact on the people around me
            through personal projects, internships, hackathons, and various
            experiences.
          </Text>
          <Text fontSize="lg">
            As a self-taught developer, I am deeply passionate about web
            development and problem-solving. My strong background in software
            development has led me to work on a diverse range of projects.
          </Text>
          <Text fontSize="lg">
            Feel free to reach out to me at{" "}
            <strong>harshitjoshidev@gmail.com</strong>.
          </Text>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default About;
