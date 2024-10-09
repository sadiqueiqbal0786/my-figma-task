// src/components/RoundedButton.tsx
"use client";
import { Button } from "@chakra-ui/react";

import { ButtonProps } from "@chakra-ui/react";

interface RoundedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const RoundedButton = ({ children, ...props }: RoundedButtonProps) => {
  return (
    <Button
      borderRadius="20px" // Adjust radius as needed
      backgroundColor="#E23744"
      color="white"
      _hover={{ backgroundColor: "#C32D39" }} // Optional: hover effect
      {...props} // Spread props to allow customization
    >
      {children}
    </Button>
  );
};

export default RoundedButton;
