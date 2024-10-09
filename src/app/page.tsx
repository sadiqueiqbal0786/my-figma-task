"use client";

import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import BlogDetails from "./components/BlogDetails";
import Footer from "./components/Footer";
import { Box,ChakraProvider } from "@chakra-ui/react"; // Import Chakra UI Box for spacing
import theme from "./theme/theme";
export default function Home() {
  return (
    <>
 
      <Header />
      <ChakraProvider theme={theme}> 
      {/* AboutUs with margin-top */}
      <Box mt={{ base: 100, md: 100 }}>
      
        <AboutUs />
      
      </Box>

      {/* BlogDetails with margin-top */}
      <Box mt={{ base: 6, md: 12 }}>
        <BlogDetails />
      </Box>

      {/* Footer with margin-top */}
      <Box mt={{ base: 6, md: 12 }}>
        <Footer />
      </Box>
      </ChakraProvider>
    </>
  );
}
