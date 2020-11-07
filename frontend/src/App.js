import './App.css';
import {CSSReset, ThemeProvider} from "@chakra-ui/core";
import {theme} from "@chakra-ui/core";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './views/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
