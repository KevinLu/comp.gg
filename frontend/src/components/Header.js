import React from 'react';
import {useColorMode} from "@chakra-ui/core";
import {Divider, IconButton, Flex, Image, Heading} from '@chakra-ui/core';
import {Link} from 'react-router-dom';
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import Clash_Crest_icon from '../img/Clash_Crest_icon.webp';

const headerStyle = {
  padding: '1% 5%',
};

function Header() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        style={headerStyle}>
        <Link to="/">
          <Flex alignItems="center">
            <Image boxSize="50px" src={Clash_Crest_icon} alt="Logo" mr="1em" />
            <Heading as="h1" size="lg">
              COMP.GG
        </Heading>
          </Flex>
        </Link>

        <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
      </Flex>
      <Divider />
    </div>
  );
}

export default Header;
