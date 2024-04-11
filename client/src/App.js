import "./App.css";
import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Show , Image, Flex} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import SubjectSearchBar from "./components/SubjectSearchBar";
import img1 from "../src/Assets/img1.webp"

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
      <GridItem area="main" bgGradient='linear(to-l, #7928CA, #FF0080)' color="blue" height="300px" position="relative">
        <Flex justify="space-between" align="center">
          <SubjectSearchBar></SubjectSearchBar> {/* Search bar at left end */}
          <Image src={img1} id="img1" boxSize="350px" mr="0px" mt="-50px" /> {/* Image at right end */} 
        </Flex>
      </GridItem>
      <GridItem area="footer" bgGradient='linear(to-l, #7928CA, #FF0080)' color="yellow">
      </GridItem>
      
    </Grid>
  );
}

export default App;
