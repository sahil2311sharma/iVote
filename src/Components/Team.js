import React from "react";
import "./styles/team.css";
// import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import {Container, Row, Col} from 'react-bootstrap';
import Footer from './Footer';
// import GlassCard from './glassCard';
import GarvitCard from './styles/cards/GarvitCard';
import ShrutiCard from './styles/cards/ShrutiCard';
import SahilCard from './styles/cards/SahilCard';
import ShrishtiCard from './styles/cards/ShrishtiCard';
import HemantCard from './styles/cards/HemantCard';
const Team=()=>{
    // render(){
        return(
          <div id="teams">
            <Navbar />
            <div className="sectionasd">
              <Container>
                <Row className="row1">
                  <Col>
                      <GarvitCard />
                      
                  </Col>
                  
                  <Col>
                      <ShrutiCard />
                  </Col>
                  <Col>
                      <SahilCard />
                  </Col>
                </Row>
                <Row className="row2">
                  <Col>
                      <ShrishtiCard />
                  </Col>

                  <Col>
                      <HemantCard />
                  </Col>
                </Row>
              </Container>

            </div>
            <Footer/>
          </div>
        )
    // }
};
export default Team;