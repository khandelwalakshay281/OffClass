import React from 'react';
import { Button, Center, HStack } from "@chakra-ui/react";

const NavMenu = () => {
  return (
    <Center>
      <HStack spacing={5}>
        <Button bg="white" colorScheme="purple" variant="outline">Home</Button>
        <Button bg="white" colorScheme="purple" variant="outline">About Us</Button>
        <Button bg="white" colorScheme="purple" variant="outline">Register as Tutor</Button>
        <Button bg="white" colorScheme="purple" variant="outline">Join as Student</Button>
        <Button bg="white" colorScheme="purple" variant="outline">Contact Us</Button>
      </HStack>
    </Center>
  );
};

export default NavMenu;
