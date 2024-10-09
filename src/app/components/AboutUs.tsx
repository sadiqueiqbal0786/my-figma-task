"use client";

import { Box, Flex, Heading, Text, Image  } from "@chakra-ui/react";
import RoundedButton from "./RoundedButton";

const AboutUs = () => {

  return (
    <Box
    // css={{
    //   "@media (max-width: 48em)": {
    //     flexDirection: "column",
    //   },
    //   "@media (min-width: 48em)": {
    //     flexDirection: "row",
    //   },
    // }}
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }} // Column on mobile, row on desktop
      alignItems="center"
      justifyContent="space-between"
      p={{ base: 4, md: 0 }} // Adjust padding for mobile and desktop
      width="100%"
      height="auto"
      bg="#F8F8F8" // Set the gradient with 80% white // Set the gradient with 80% white

    >
      {/* Left Column */}
      
      <Flex
        flex="1"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mb={{ base: '20px', md: '0' }} // Add margin for mobile
        display={{ base: "none", md: "flex" }} // Hide on small screens
        visibility={{ base: "hidden", md: "visible" }} // Hide on small screens
      >
        <Image
          src="/assets/spoon.png" // Replace with actual image path
          alt="Spoon and Ingredients"
          objectFit="contain"
          borderRadius="md"
          boxSize={{ base: '250px', md: '400px' }} // Image size
         
        />
      </Flex>

      {/* Right Column */}
      <Flex
        flex="1"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems={{ base: 'center', md: 'flex-start' }} // Center on mobile, left on desktop
        textAlign={{ base: 'center', md: 'left' }} // Center text on mobile
        p={{ base: 4, md: 6 }}
      >
        <Heading
          fontFamily="Source Sans Pro"
          fontWeight="600"
          fontSize={42}
          lineHeight="1.2"
          color="#0E2368"
          mb={4}
        >
          About Us
        </Heading>
        <Text
          fontSize={{ base: '16px', md: '18px' }}
          color="#4A4A4A"
          mb={6}
        >
          Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been the industry&rsquo;s <br/>standard dummy text ever since the 1500s, when an unknown <br/>printer took a galley of type and scrambled it to make a type<br/> specimen book. t has survived not only five centuries.
        </Text>
        <RoundedButton mt={4 } p={8} width={132}>Read More</RoundedButton>
      </Flex>
    </Box>
  );
};

export default AboutUs;
