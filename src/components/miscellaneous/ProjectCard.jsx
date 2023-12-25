import {
  HStack,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  Icon,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const ProjectCard = (props) => {
  return (
    <VStack
      width="100%"
      minH="450px"
      backgroundColor="green.500"
      borderRadius="2xl"
      padding={3}
      justifyContent="center"
    >
      <Heading fontSize="30px" textAlign="center">
        {props.name}
      </Heading>
      <HStack pt={5} gap={5}>
        <Image src={props.image} height="300px"></Image>
        <VStack gap={3} alignItems="flex-start">
          <Text>{props.description}</Text>
          <Text fontSize="20px">Tech Stack :</Text>
          <HStack>
            {props.techStack.map((tech) => (
              <Icon as={tech} key={tech} />
            ))}
          </HStack>
          <HStack pt={3}>
            <Link href={props.liveLink} isExternal>
              <Button>Live</Button>
            </Link>
            <Link href={props.githubLink} isExternal>
              <Button>Github</Button>
            </Link>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  liveLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default ProjectCard;