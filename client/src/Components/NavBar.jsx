import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import Offclass_logo from "../Assets/Offclass_logo.webp";
import Payment_gate from "./Payment_gate";

const NavBar = () => {
  return (
    <>
      <HStack  align="center" justify="center" padding="20px">
        <Image src={Offclass_logo} boxSize="90px"></Image>
        <Text fontSize={19} fontWeight="extrabold" textAlign={ 'center' } color="white">
          Offclass, Where learning is done off Class.
        </Text>
      </HStack>
    </>
  );
};

export default NavBar;
