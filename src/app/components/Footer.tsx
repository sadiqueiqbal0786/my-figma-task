"use client";

import { Box, Flex, Text, Link, VStack, HStack, Icon, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box 
      as="footer"
      bg="#F8F8F8"
      color="black" 
      p={8} 
      mt={4}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }} // Stacks on mobile, row on larger screens
        justify="space-between"
        align="start"
        wrap="wrap"
        gap={8}
      >
        {/* Logo Section */}
        <VStack align={{base:"center",md:"start"}} mb={{ base: 4, md: 0 }} ml={{base:50,md:0}}> {/* Added bottom margin for mobile */}
          <Box bg="#F8F8F8" p={2} borderRadius="md">
            <Image src="/assets/foodtruck.png" alt="Food Truck Logo" boxSize="100px" />
          </Box>
        </VStack>

        {/* Contact Us Section */}
        <VStack align="start" mb={{ base: 4, md: 0 }}> {/* Added bottom margin for mobile */}
          <Text fontSize="lg" color="#0E2368" fontWeight="bold">Contact Us</Text>
          <Text color="#646874">
          Lorem Ipsum Pvt Ltd.5/1, Magalton<br/> Road, Phartosh Gate near YTM <br/>Market, XYZ-343434
          </Text>
          <Text color="#646874">example2020@gmail.com</Text>
          <Text color="#646874">(904) 443-0343</Text>
        </VStack>

        {/* More Section */}
        <VStack align="start" mb={{ base: 4, md: 0 }}> {/* Added bottom margin for mobile */}
          <Text fontSize="lg" fontWeight="bold" color="#0E2368">More</Text>
          <Link href="#" color="#646874">About Us</Link>
          <Link href="#" color="#646874">Products</Link>
          <Link href="#" color="#646874">Career</Link>
          <Link href="#" color="#646874">Contact Us</Link>
        </VStack>

        {/* Social Links Section */}
        <VStack align="start" mb={{ base: 4, md: 0 }} ml={{base:50,md:0}}> {/* Added bottom margin for mobile */}
          <Text fontSize="lg" color="#0E2368" fontWeight="bold">Social Links</Text>
          <HStack spacing={4}>
            <Link href="#" aria-label="Instagram">
              <Icon as={FaInstagram} w={6} h={6} color="#0E2368" /> {/* Adjusted icon size for better fit */}
            </Link>
            <Link href="#" aria-label="Twitter">
              <Icon as={FaTwitter} w={6} h={6} color="#0E2368" /> {/* Adjusted icon size for better fit */}
            </Link>
            <Link href="#" aria-label="Facebook">
              <Icon as={FaFacebook} w={6} h={6}  color="#0E2368"/> {/* Adjusted icon size for better fit */}
            </Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Footer Bottom Text */}
      <Text textAlign={{base:"center",md:"right"}} fontSize="sm" color="gray.500" mt={8} mr={{base:0,md:20}} >
        © 2024 Food Truck Example. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
