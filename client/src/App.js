import logo from "./logo.svg";
import "./App.css";
import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "header" "nav" "main" "footer"`,
        lg: ` "header" "nav" "main" "footer"`,
      }}

      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
        xlg: '800px 1fr' // first coumn of width 200ps and second column will stretch across the remaining area
      }}

    >
      <GridItem area="header" bgGradient='linear(to-l, #7928CA, #FF0080)'>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="nav" bgGradient='linear(to-l, #7928CA, #FF0080)' color="green" padding="10px">
        <NavMenu></NavMenu>
      </GridItem>
      <GridItem area="main" color="blue">
      </GridItem>
      <GridItem area="footer" color="yellow">
      </GridItem>
      
    </Grid>
  );
}

export default App;
