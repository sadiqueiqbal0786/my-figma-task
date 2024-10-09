// src/components/Header.tsx

import { Box, Flex, Heading, Text, Image ,Button} from "@chakra-ui/react";
import RoundedButton from './RoundedButton'; // Import your rounded button component

const Header = () => {
  return (
    <Box
    css={{
      "@media (max-width: 48em)": {
        flexDirection: "column-reverse",
      },
      "@media (min-width: 48em)": {
        flexDirection: "row",
      },
    }}
      display="flex"
      flexDirection={{ base: 'column-reverse',sm:'column-reverse', md: 'row' }} // Column on mobile, row on desktop
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      p={{ base: 4, md: 8 }} // Adjust padding for mobile and desktop
      width="100vw" // Full width
      height={{ base: 'auto',sm:'auto', md: '100vh', lg: '100vh',xl:'100vh' }} // Full height on desktop
      position="relative" // Set position for absolute child elements
      overflow="hidden" // Prevent overflow and double scrolling
    
    >
      {/* Left Column */}
      <Flex
        flexDirection="column"
        flex="1"
        paddingRight={{ base: '10', md: '30' }}
        justifyContent="flex-start" // Center vertically
        alignItems="flex-start" // Align items to the start
        textAlign={{ base: 'center', md: 'left' }} // Center text on mobile
        mt={100} // Add top margin to the left column
        ml={100} // Add left margin to the left column
      >
        <Image src="/assets/foodtruck.png" alt="Food Truck Logo" boxSize="100px"  position="absolute" // Make the image position absolute
          top={0} // Align to the top
          left={0} // Align to the left
          mt={20}
          ml={100}
           />
        <Heading
          fontFamily="Source Sans Pro"
          fontWeight="700"
          fontSize={54}
         // lineHeight={{ base: '38px', md: '69px' }}
          color="#0E2368"
          mb={20}
         
        >
        {/*Break the line */}

          Discover the <br /><span style={{ color: '#E23744' }}>Best</span> Food <br />and Drinks
        </Heading>
        <Text mt={10} fontSize={16.42} color="#444957" fontFamily="Open Sans
" mb={20}>
          Naturally made Healthcare Products <br/>for the better care & support of your body.
        </Text>
        <RoundedButton mt={4 } p={14}>Explore Now!</RoundedButton>
      </Flex>
      <Flex
  flex="1"
  justifyContent="flex-end" // Align content to the right
  alignItems="flex-start"
  position="relative"
  mt={{ base: "20px", md: "50px" }} // Use consistent unit (px) for margins
  p={{ base: "16px", md: "32px" }} // Padding can help with spacing
//  flexWrap="wrap" // Allow wrapping if items overflow
  height="auto" // Use auto height to adapt to content
>
  {/* Adjust image sizes for different breakpoints */}
  <Button
        mt={50}
        mr={10}
          variant="outline"
          borderColor="white"
         borderRadius="20px"
         backgroundColor="#E23744"
         color="white"
         p={16}
          _hover={{ bg: "#0E2368", color: "white" }}
          position="absolute"
        >
         Get in touch
        </Button>
  <Image
    src="/assets/pizza.png"
    alt="Pizza"
    boxSize={{ base: "150px", sm: "200px", md: "250px", lg: "300px" }} // Change size based on screen width
    objectFit="contain" // Ensure image is fully visible within the box size
  />
  
  <Image
    src="/assets/corner.png"
    alt="Side Dish"
    boxSize={{ base: "100px", sm: "150px", md: "200px", lg: "250px" }} // Responsive box sizes
    position="absolute"
    right={{ base: "10px", sm: "20px", md: "30px" }} // Adjust right position based on screen size
    top={{ base: "50px", md: "100px" }} // Adjust top position based on screen size
  />
  
  {/* Adjust button margin and padding for different screens */}
  <Button
        mt={50}
        mr={50}
          variant="outline"
          borderColor="white"
          border="2px solid white"
         borderRadius="20px"
         backgroundColor="#E23744"
         color="white"
         p={16}
          _hover={{ bg: "#0E2368", color: "white" }}
          position="absolute"
        >
         Get in touch
        </Button>
  
</Flex>

      {/* Right Column */}
      {/* <Flex
        flex="1"
        justifyContent={{ base: "center",sm:"center", md: "flex-end" }}// Always justify to the right
        alignItems="flex-start" // Align items to the start
        position="relative" // Set position for imagesm
        marginTop={{ base: '20px', md: '50' }}
      >
        <Image
    src="/assets/pizza.png"
    alt="Pizza"
    boxSize={{ base: "150px", sm: "200px", md: "250px", lg: "300px" }} // Change size based on screen width
    objectFit="contain" // Ensure image is fully visible within the box size
  />
        <Image src="/assets/corner.png" alt="Side Dish" boxSize={{ base: 'auto',sm:'auto', md: '100px' }} position="absolute" right="0" />
        
        {/* Stack the button on top of the image */}
        {/* <Button
        mt={50}
        mr={50}
          variant="outline"
          borderColor="white"
         borderRadius="20px"
         backgroundColor="#E23744"
         color="white"
         p={16}
          _hover={{ bg: "#0E2368", color: "white" }}
        >
         Get in touch
        </Button>
      </Flex> */} 
    </Box>
  );
};

export default Header;
