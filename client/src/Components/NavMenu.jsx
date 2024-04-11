import React from 'react';
import { Button, Center, HStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <Center>
      <HStack spacing={5}>
        <Button as={Link} to="/" bg="white" colorScheme="purple" variant="outline">Home</Button>
        <Button as={Link} to="/about" bg="white" colorScheme="purple" variant="outline">About Us</Button>
        <Button as={Link} to="/register-tutor" bg="white" colorScheme="purple" variant="outline">Register as Tutor</Button>
        <Button as={Link} to="/join-student" bg="white" colorScheme="purple" variant="outline">Join as Student</Button>
        <Button as={Link} to="/contact" bg="white" colorScheme="purple" variant="outline">Contact Us</Button>
      </HStack>
    </Center>
  );
};

export default NavMenu;
