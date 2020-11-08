import React, {useState} from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from "@chakra-ui/core";
import {Formik, field} from 'formik';
import {ArrowForwardIcon} from '@chakra-ui/icons';
import Top_icon from "../img/Top_icon.webp";
import Middle_icon from "../img/Middle_icon.webp";
import Bottom_icon from "../img/Bottom_icon.webp";
import Support_icon from "../img/Support_icon.webp";
import Jungle_icon from "../img/Jungle_icon.webp";
import SummonerCard from "../components/SummonerCard";

function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState("NA");
  const handleRegionChange = (event) => setSelectedRegion(event.target.value);
  const [topSummoner, setTopSummoner] = useState(null);
  const [jungleSummoner, setJungleSummoner] = useState(null);
  const [midSummoner, setMidSummoner] = useState(null);
  const [botSummoner, setBotSummoner] = useState(null);
  const [supportSummoner, setSupportSummoner] = useState(null);
  const handleTopChange = (event) => setTopSummoner(event.target.value);
  const handleJungleChange = (event) => setJungleSummoner(event.target.value);
  const handleMidChange = (event) => setMidSummoner(event.target.value);
  const handleBotChange = (event) => setBotSummoner(event.target.value);
  const handleSupportChange = (event) => setSupportSummoner(event.target.value);

  return (
    <Formik
      initialValues={{region: "NA"}}
      onSubmit={(values, actions) => {

      }}
    >
      {(props) => (
        <Box maxWidth={['400px', '628px', '900px', '1080px', '1440px']} m="auto" pt="5%" pl="2%" pr="2%">
          <form>
            
            <Flex alignItems="center" mb={4}>
              <Text fontSize="xl" fontWeight="600" whiteSpace="nowrap" mr={4}>My region is:</Text>
              <Select
                value={selectedRegion}
                onChange={handleRegionChange}
                fontSize="xl"
                fontWeight="600"
                variant="flushed"
                placeholder="select region">
                <option value="NA">North America</option>
                <option value="EUN">Europe Nordic & East</option>
                <option value="EUW">Europe West</option>
                <option value="LAN">LAN</option>
                <option value="LAS">LAS</option>
                <option value="KR">Korea</option>
                <option value="OCE">Oceania</option>
                <option value="TUR">Turkey</option>
              </Select>
            </Flex>

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
                region={selectedRegion}
                value={topSummoner}
                onChange={handleTopChange}
                laneImage={Top_icon}
                alt="Top Lane Icon"
                laneType="Top" />
              <SummonerCard
                value={jungleSummoner}
                onChange={handleJungleChange}
                laneImage={Jungle_icon}
                alt="Jungle Icon"
                laneType="Jungle" />
              <SummonerCard
                value={midSummoner}
                onChange={handleMidChange}
                laneImage={Middle_icon}
                alt="Mid Lane Icon"
                laneType="Mid" />
              <SummonerCard
                value={botSummoner}
                onChange={handleBotChange}
                laneImage={Bottom_icon}
                alt="Bot Lane Icon"
                laneType="Bot" />
              <SummonerCard
                value={supportSummoner}
                onChange={handleSupportChange}
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

          </form>
        </Box>
      )}
    </Formik>
  );
}

export default HomePage;
