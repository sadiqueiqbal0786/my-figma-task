import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";

interface CardComponentProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  title,
  description,
  buttonText = "Read More", // Default text if none provided
}) => {
  return (
    <Box
      m={10}
      maxW="sm"
      borderWidth="1px"
      borderRadius="20px"
      border="2px solid #93A2D361"
      overflow="hidden"
      p={4}
      boxShadow="md"
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }} // Add hover effect
      transition="all 0.2s ease-in-out"
      alignItems="center" // Center horizontally
      justifyContent="space-between" // Distribute space between items
    >
      <Image src={image} alt={title} objectFit="cover" borderRadius="md"  />

      <Box p={4}>
        <Heading fontSize="lg" mb={4} color="#0E2368" >
          {title}
        </Heading>
        <Text noOfLines={3} color="#444957" fontSize="15px">{description}</Text>

        <Button
        mt={5}
        
          variant="outline"
          borderColor="#424961"
         borderRadius="20px"
         backgroundColor="white"
         color="#424961"
         p={5}
          _hover={{ bg: "#0E2368", color: "white" }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default CardComponent;
