// src/components/Header.tsx

import { Box, Flex, Heading, Text, Image ,Button} from "@chakra-ui/react";
import RoundedButton from './RoundedButton'; // Import your rounded button component

const Header = () => {
  return (
    <Box
   
      display="flex"
      flexDirection={{ base: 'column-reverse',sm:'column-reverse', md: 'row' }} // Column on mobile, row on desktop
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      p={{ base: 4, md: 8 }} // Adjust padding for mobile and desktop
      width="100vw" // Full width
      height={{ base: 'auto',sm:'auto', md: '100vh',  }} // Full height on desktop
      position="relative" // Set position for absolute child elements
      overflow="visible" // Prevent overflow and double scrolling
    
    >
  <Flex
   position="relative"
    height={{base:"auto",md:"100vh"}}
  flexDirection="column"
  justifyContent="flex-start" // Center content vertically
  alignItems={{base:"center", md:"start"}}// Center content horizontally
  textAlign={{base:"center", md:"start"}} // Center text for mobile and desktop
  mt={{ base: '8', md: '10' }} // Add top margin for spacing
  padding={{ base: '4', md: '0' }} // Padding for mobile to ensure spacing
  ml={{ base: '0', md: '100' }}
>
  {/* Logo Image */}
  <Image
  top={0}
  justifyContent="flex-start"
  position="relative"
    src="/assets/foodtruck.png"
    alt="Food Truck Logo"
    boxSize={{ base: '0px', md: '80px' }} // Smaller on mobile, larger on desktop
    mb={{ base: '4', md: '6' }} // Margin below the logo
  />

  {/* Heading */}
  <Heading
    fontFamily="Source Sans Pro"
    fontWeight="700"
    fontSize={{ base: '38px', md: '62px' }} // Adjust font size for mobile and desktop
    color="#0E2368"
    mb={{ base: '2', md: '4' }} // Margin below the heading
  >
    Discover the <br />
    <span style={{ color: '#E23744' }}>Best</span> Food <br />and Drinks
  </Heading>

  {/* Subtext */}
  <Text
    fontSize={{ base: '14px', md: '16px' }} // Responsive font size
    color="#444957"
    fontFamily="Open Sans"
    mb={{ base: '6', md: '8' }} // Margin below the subtext
  >
    Naturally made Healthcare Products <br />
    for the better care & support of your body.
  </Text>

  {/* Button */}
  <RoundedButton
    mt={{ base: '2', md: '4' }} // Adjust top margin for button
    p={{ base: '10px 20px', md: '14px 28px' }} // Button padding, larger on desktop
    backgroundColor="#E23744" // Red background to match design
    color="white" // White text for contrast
  >
    Explore Now!
  </RoundedButton>
</Flex> 
      <Flex
  flex="1"
  justifyContent="flex-end" // Align content to the right
  alignItems="flex-start"
  position="relative"

  mt={{ base: "0px", md: "0px" }} // Use consistent unit (px) for margins
// p={{ base: "16px", md: "32px" }} // Padding can help with spacing
 flexWrap="wrap" // Allow wrapping if items overflow
 height={{base:"auto",md:"100vh"}}// Use auto height to adapt to content
>
 
  <Image
    src="/assets/pizza.png"
    alt="Pizza"
  //  boxSize="auto"// Change size based on screen width
    objectFit="contain" // Ensure image is fully visible within the box size
  />
  
  <Image
    src="/assets/corner.png"
    alt="Side Dish"
   //boxSize="auto" // Responsive box sizes
    position="absolute"
   right={0} // Adjust right position based on screen size
    top={0} // Adjust top position based on screen size
    bottom={20}

  />
  
  {/* Adjust button margin and padding for different screens */}
  <Button
        mt={{base:2,md:50}}
        mr={{base:2,md:50}}
          variant="outline"
          borderColor="white"
          border="2px solid white"
         borderRadius="20px"
         backgroundColor="#E23744"
         color="white"
         p={5}
          _hover={{ bg: "#0E2368", color: "white" }}
          position="absolute"
        >
         Get in touch
        </Button>
  
</Flex>


    </Box>
  );
};

export default Header;
