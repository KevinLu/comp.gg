import React, {useState} from 'react';
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  Select,
  FormControl,
  Divider,
  Progress
} from "@chakra-ui/core";
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {ArrowForwardIcon} from '@chakra-ui/icons';
import Top_icon from "../img/Top_icon.webp";
import Middle_icon from "../img/Middle_icon.webp";
import Bottom_icon from "../img/Bottom_icon.webp";
import Support_icon from "../img/Support_icon.webp";
import Jungle_icon from "../img/Jungle_icon.webp";
import SummonerCard from "../components/SummonerCard";
import ChampionCard from "../components/ChampionCard";
import Axios from 'axios';

function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState("NA");
  const handleRegionChange = (event) => setSelectedRegion(event.target.value);
  const [topSummoner, setTopSummoner] = useState("");
  const [jungleSummoner, setJungleSummoner] = useState("");
  const [midSummoner, setMidSummoner] = useState("");
  const [botSummoner, setBotSummoner] = useState("");
  const [supportSummoner, setSupportSummoner] = useState("");
  const handleTopChange = (event) => {setTopSummoner(event.target.value);}
  const handleJungleChange = (event) => setJungleSummoner(event.target.value);
  const handleMidChange = (event) => setMidSummoner(event.target.value);
  const handleBotChange = (event) => setBotSummoner(event.target.value);
  const handleSupportChange = (event) => setSupportSummoner(event.target.value);
  const [CompsFound, setCompsFound] = useState(false);
  const [Comps, setComps] = useState([]);

  return (
    <Box maxWidth={['400px', '628px', '900px', '1080px', '1440px']} m="auto" pt="2%" pl="10px" pr="10px">
      <Formik
        initialValues={{
          region: "NA",
          myPlaystyle: "",
          topSummoner: "",
          jungleSummoner: "",
          midSummoner: "",
          botSummoner: "",
          supportSummoner: ""
        }}
        validationSchema={Yup.object().shape({
          region: Yup.string().required('Select a region'),
          myPlaystyle: Yup.string().required('Select your playstyle')
        })}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            const dataToSubmit = {
              region: values.region,
              myPlaystyle: values.myPlaystyle,
              summoners: {
                topSummoner: topSummoner,
                jungleSummoner: jungleSummoner,
                midSummoner: midSummoner,
                botSummoner: botSummoner,
                supportSummoner: supportSummoner
              }
            };
            console.log(dataToSubmit);
            Axios.post('/api/championList', dataToSubmit)
              .then((response) => {
                if (response.data.success) {
                  console.log(response.data.data);
                  setCompsFound(true);
                  setComps(response.data.data);
                  setSubmitting(false);
                } else {
                  console.log(response.data);
                }
              });
          }, 100);
        }}
      >
        {(props) => (

          <form onSubmit={props.handleSubmit}>
            <Flex alignItems="center" mb={4}>
              <Text fontSize="xl" fontWeight="600" whiteSpace="nowrap" mr={4}>My region is:</Text>
              <Field name="region">
                {({field, form}) => (
                  <FormControl>
                    <Select
                      {...field}
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
                    <Text>{form.errors.region}</Text>
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Flex alignItems="center" mb="4em">
              <Text fontSize="xl" fontWeight="600" whiteSpace="nowrap" mr={4}>I want to play:</Text>
              <Field name="myPlaystyle">
                {({field, form}) => (
                  <FormControl id="myPlaystyle">
                    <Select {...field} fontSize="xl" fontWeight="600" variant="flushed" placeholder="select playstyle">
                      <option value="ENGAGE">Engage Comp</option>
                      {/* <option value="DISENGAGE">Disengage Comp</option> */}
                      <option value="POKE_AND_SIEGE">Poke and Siege</option>
                      <option value="PICK">Play for Picks</option>
                      <option value="SPLITPUSH">Split Push</option>
                    </Select>
                    <Text>{form.errors.myPlaystyle}</Text>
                  </FormControl>
                )}
              </Field>
            </Flex>

            <SimpleGrid minChildWidth="10rem" columns={5} mb="2em" spacing={4}>
              <SummonerCard
                isSubmitting={props.isSubmitting}
                submitted={CompsFound}
                region={selectedRegion}
                value={topSummoner}
                onChange={handleTopChange}
                laneImage={Top_icon}
                alt="Top Lane Icon"
                laneType="Top" />
              <SummonerCard
                isSubmitting={props.isSubmitting}
                submitted={CompsFound}
                region={selectedRegion}
                value={jungleSummoner}
                onChange={handleJungleChange}
                laneImage={Jungle_icon}
                alt="Jungle Icon"
                laneType="Jungle" />
              <SummonerCard
                isSubmitting={props.isSubmitting}
                submitted={CompsFound}
                region={selectedRegion}
                value={midSummoner}
                onChange={handleMidChange}
                laneImage={Middle_icon}
                alt="Mid Lane Icon"
                laneType="Mid" />
              <SummonerCard
                isSubmitting={props.isSubmitting}
                submitted={CompsFound}
                region={selectedRegion}
                value={botSummoner}
                onChange={handleBotChange}
                laneImage={Bottom_icon}
                alt="Bot Lane Icon"
                laneType="Bot" />
              <SummonerCard
                isSubmitting={props.isSubmitting}
                submitted={CompsFound}
                region={selectedRegion}
                value={supportSummoner}
                onChange={handleSupportChange}
                laneImage={Support_icon}
                alt="Support Icon"
                laneType="Support" />
            </SimpleGrid>

            <Flex justifyContent="center">
              <Button
                isLoading={props.isSubmitting}
                type="submit"
                colorScheme="blue"
                rightIcon={<ArrowForwardIcon />}
                mb="2em">
                Find Compositions
              </Button>
            </Flex>
            {props.isSubmitting ? <Progress isIndeterminate /> : <></>}
          </form>
        )}
      </Formik>
      
      {CompsFound ?
        (Comps.map((lane, index) => {
          return (
            <Flex mb="2em" flexDir="column">
              <Flex justifyContent="space-between" mb="2em">
              {lane.map((champion, i) => {
                return (
                <ChampionCard
                  championName={champion} />
                );
              })}
              </Flex>
              <Divider />
            </Flex>
          );
        }))

        : <></>
      }

    </Box>
  );
}

export default HomePage;
