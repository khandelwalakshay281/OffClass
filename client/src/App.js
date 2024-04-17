import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Button, ButtonGroup, Grid, GridItem, HStack, Show , Image, Flex} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import SubjectSearchBar from "./Components/SubjectSearchBar";
import AboutUs from "./Components/AboutUs";
import img1 from "../src/Assets/img1.webp";
import Footer from "./Components/Footer";
import StdJoinPage from "./Components/StdJoinPage";
import Login from "./Components/Admin/Login";
import Dashboard from "./Components/Admin/Dashboard";

function App() {
  return (
    <div>
       <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
    <Router>
     
       
        <NavBar></NavBar>
            <Routes>
              <Route exact path="/" element={<SubjectSearchBar />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/join-student" element={<StdJoinPage/>}/>
              <Route path='/admin' Component={Login}/>
              <Route path='/admin/dashboard' Component={Dashboard}/>
            </Routes>
          
      
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
