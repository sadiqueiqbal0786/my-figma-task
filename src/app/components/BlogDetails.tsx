"use client";

import { Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import CardComponent from "./CardComponent"; // Import your reusable card component

const BlogDetails = () => {
  const cardsData = [
    {
      image: "/assets/tomato.png",
      title: "Grilled Tomatoes at Home",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/assets/snack.png",
      title: "Snacks for Travel",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/assets/postworkout.png",
      title: "Post-workout Recipes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/assets/grilled.png",
      title: "How To Grill Corn",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/assets/crunch.png",
      title: "Crunchwrap Supreme",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
    {
      image: "/assets/brocolli.png",
      title: "Broccoli Cheese Soup",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3; // Number of cards per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // Get the current cards to be displayed based on the current page
  const paginatedCards = cardsData.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  // Handle navigation
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box p={100}  mx="auto" bg= "white" width="100%">
      <Text fontSize={{base:30, sm:30 ,md:56}} fontWeight="bold" mb={50}  color="#0E2368" ml={{base:0, md:0,xl:150}}>
        Latest Articles
      </Text>
      

      {/* Horizontal Cards Layout with fixed width and height */}
      <Flex justify="center" align="center" mb={8} flexDirection={{ base: "column", md: "row" }}>
        {paginatedCards.map((card, index) => (
          <Box
         
            key={index}
            flex="none"
            width="381px"   // Set fixed width
            height="554px"  // Set fixed height
            mr={6}
            overflow="hidden"
            
          >
            <CardComponent
              image={card.image}
              title={card.title}
              description={card.description} 
            />
          </Box>
        ))}
      </Flex>

      {/* Pagination Controls */}
      <Flex mt={8} justifyContent="center" alignItems="center">
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Previous Page"
          onClick={handlePrev}
          isDisabled={currentPage === 0}
          mr={4}
        />
        <Text>{`${currentPage + 1} / ${totalPages}`}</Text>
        <IconButton
          icon={<ArrowForwardIcon />}
          aria-label="Next Page"
          onClick={handleNext}
          isDisabled={currentPage === totalPages - 1}
          ml={4}
        />
      </Flex>
    </Box>
  );
};

export default BlogDetails;
