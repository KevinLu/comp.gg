import React, {useState} from 'react';
import {useColorMode} from "@chakra-ui/core";
import {Flex, Text, Image, useToast} from "@chakra-ui/core";
import Default_icon from "../img/Clash_Crest_icon.webp";
import Axios from "axios";

function ChampionCard(props) {
  const toast = useToast();
  const {colorMode} = useColorMode();
  const [ChampionIcon, setChampionIcon] = useState(Default_icon);

  Axios.get(`/api/championIcon?championName=${props.championName}`)
    .then((response) => {
      console.log(response.data);
      if (response.data.success) {
        setChampionIcon(response.data.data);
      } else {
        toast({
          title: "Champion not found.",
          description: "We can't find a champion by that name.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setChampionIcon(Default_icon);
      }
    });

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
      <Image boxSize="100px" borderRadius="full" src={ChampionIcon} alt="Champion Icon" mb="1em" />
      <Text>
        {props.championName}
      </Text>
    </Flex>
  );
}

export default ChampionCard;