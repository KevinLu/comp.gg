import React, {useState} from 'react';
import {useColorMode} from "@chakra-ui/core";
import {Flex, Text, Input, Image} from "@chakra-ui/core";
import Default_icon from "../img/default_icon.jpg";

function SummonerCard(props) {
  const {colorMode} = useColorMode();
  const [Blurred, setBlurred] = useState(null);

  if (Blurred) {
    // TODO: call API to retrieve summoner icon
  }

  return (
    <Flex
      backgroundColor={colorMode === "light" ? "#F7FAFC" : "#2D3748"}
      pt="1em"
      pb="1em"
      pl="2em"
      pr="2em"
      border="1px"
      borderColor={colorMode === "light" ? "#CBD5E0" : "#4A5568"}
      borderRadius="8px"
      flexDir="column"
      alignItems="center">
      <Image boxSize="50px" src={props.laneImage} alt={props.alt} mb="1em" />
      <Text fontWeight="600" mb="2em">{props.laneType}</Text>
      <Image boxSize="100px" borderRadius="full" src={Default_icon} alt="Summoner icon" mb="1em" />
      <Input
        onFocus={() => {setBlurred(false);}}
        onBlur={() => {setBlurred(true);}}
        fontWeight="600"
        fontSize="1.25em"
        width="120px"
        textAlign="center"
        variant="flushed"
        placeholder="Summoner" />
    </Flex>
  );
}

export default SummonerCard;
