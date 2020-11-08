import './App.css';
import {ChakraProvider, extendTheme} from "@chakra-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './views/HomePage';

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
}

const customTheme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
