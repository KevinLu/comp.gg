import React, {useState} from 'react';
import {useColorMode} from "@chakra-ui/core";
import {Flex, Text, Input, Image, useToast} from "@chakra-ui/core";
import Default_icon from "../img/default_icon.jpg";
import Axios from "axios";

function SummonerCard(props) {
  const toast = useToast();
  const {colorMode} = useColorMode();
  const [SummonerIcon, setSummonerIcon] = useState(Default_icon);

  const updateSummonerIcon = summonerName => {
    if (summonerName === '') {
      setSummonerIcon(Default_icon);
      return;
    }

    Axios.get(`/api/summonerIcon?region=${props.region}&summonerName=${summonerName}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          if (SummonerIcon === Default_icon) {
            setSummonerIcon(response.data.data);
          }
        } else {
          toast({
            title: "Summoner not found.",
            description: "We can't find a summoner by that name.",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          setSummonerIcon(Default_icon);
        }
      });
  }

  if (props.submitted) {
    updateSummonerIcon(props.value);
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
      <Image boxSize="100px" borderRadius="full" src={SummonerIcon} alt="Summoner icon" mb="1em" />
      {props.submitted || props.isSubmitting ?
        <Text>{props.value}</Text> : <Input
          isDisabled={props.submitted || props.isSubmitting}
          value={props.value}
          onChange={props.onChange}
          onBlur={() => updateSummonerIcon(props.value)}
          fontWeight="600"
          fontSize="1.25em"
          width="120px"
          textAlign="center"
          variant={props.submitted ? "filled" : "flushed"}
          placeholder="Summoner" />
      }
    </Flex>
  );
}

export default SummonerCard;
