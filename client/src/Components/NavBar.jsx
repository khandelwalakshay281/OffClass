import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import Offclass_logo from "../Assets/Offclass_logo.webp";
import Payment_gate from "./Payment_gate";

const NavBar = () => {
  return (
    <>
      <HStack  align="center" justify="center" padding="20px">
        <Image src={Offclass_logo} boxSize="150px"></Image>
        <Text fontSize={25} fontWeight="extrabold" textAlign={ 'center' } color="white">
          OffClass, Where learning happens off Class.
        </Text>
      </HStack>
    </>
  );
};

export default NavBar;
