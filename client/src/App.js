import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Show , Image, Flex} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import SubjectSearchBar from "./components/SubjectSearchBar";
import AboutUs from "./components/AboutUs";
import img1 from "../src/Assets/img1.webp"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Grid
        templateAreas={{
          base: ` "header" "nav" "main" "footer"`,
          lg: ` "header" "nav" "main" "footer"`,
        }}

        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
          xlg: '800px 1fr' // first column of width 200px and second column will stretch across the remaining area
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
            <Routes>
              <Route exact path="/" element={<SubjectSearchBar />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Image src={img1} id="img1" boxSize="350px" mr="0px" mt="-50px" /> {/* Image at right end */}
          </Flex>
        </GridItem>
        <GridItem area="footer" bgGradient='linear(to-l, #7928CA, #FF0080)' color="yellow">
          <Footer></Footer>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
