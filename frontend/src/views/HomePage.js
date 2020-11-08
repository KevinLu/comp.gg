import React from 'react';
import {Box, Button, Flex, Text, Select} from "@chakra-ui/core";
import {ArrowForwardIcon} from '@chakra-ui/icons';
import Top_icon from "../img/Top_icon.webp";
import Middle_icon from "../img/Middle_icon.webp";
import Bottom_icon from "../img/Bottom_icon.webp";
import Support_icon from "../img/Support_icon.webp";
import Jungle_icon from "../img/Jungle_icon.webp";
import SummonerCard from "../components/SummonerCard";

function HomePage() {
  return (
    <Box maxWidth={['400px', '628px', '900px', '1080px', '1440px']} m="auto" pt="5%" pl="2%" pr="2%">
      <Flex alignItems="center" mb={4}>
        <Text fontSize="xl" fontWeight="600" whiteSpace="nowrap" mr={4}>I want to play:</Text>
        <Select fontSize="xl" fontWeight="600" variant="flushed" placeholder="select playstyle">
          <option value="1">Engage Comp</option>
          <option value="2">Disengage Comp</option>
          <option value="3">Poke and Siege</option>
          <option value="4">Play for Picks</option>
          <option value="5">Split Push</option>
        </Select>
      </Flex>

      <Flex alignItems="center" mb={16}>
        <Text fontSize="xl" fontWeight="600" whiteSpace="nowrap" mr={4}>I want to beat:</Text>
        <Select fontSize="xl" fontWeight="600" variant="flushed" placeholder="select enemy playstyle">
          <option value="1">Engage Comp</option>
          <option value="2">Disengage Comp</option>
          <option value="3">Poke and Siege</option>
          <option value="4">Play for Picks</option>
          <option value="5">Split Push</option>
        </Select>
      </Flex>

      <Flex justifyContent="space-between" mb="2em">
        <SummonerCard
          laneImage={Top_icon}
          alt="Top Lane Icon"
          laneType="Top" />
        <SummonerCard
          laneImage={Jungle_icon}
          alt="Jungle Icon"
          laneType="Jungle" />
        <SummonerCard
          laneImage={Middle_icon}
          alt="Mid Lane Icon"
          laneType="Mid" />
        <SummonerCard
          laneImage={Bottom_icon}
          alt="Bot Lane Icon"
          laneType="Bot" />
        <SummonerCard
          laneImage={Support_icon}
          alt="Support Icon"
          laneType="Support" />
      </Flex>

      <Flex justifyContent="center">
        <Button
          colorScheme="blue"
          rightIcon={<ArrowForwardIcon />}>
            Find Compositions
        </Button>
      </Flex>
      </Box>
  );
}

export default HomePage;
