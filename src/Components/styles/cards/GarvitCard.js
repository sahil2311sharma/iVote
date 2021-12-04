import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Card } from 'react-bootstrap';

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "../team.css";

import Typical from 'react-typical'

const Container = styled(animated.div)`
cursor: pointer;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const name = [
  'Garvit Kumar',1000,
];
const designation = [
  'Machine Learning',1000,
  'Developer',1000,
];

const GarvitCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <Card >
                    <div className="content" >
                        <Card.Img className="imgBx imgBx3" variant="top" src=".../images/Garvit.jpg" />
                        <Card.Body className="contentBx">
                          <Card.Title>
                          <Typical wrapper="span" steps={name} loop={Infinity} className={'caca'} />  
                          </Card.Title>
                          <Card.Text>
                            <Typical wrapper="span" steps={designation} loop={Infinity} className={'caca'} /> 
                          </Card.Text>
                          <div className="d-flex  justify-content-center">
                            <div className="p-4">
                              <a href="http://facebook.com">
                              <BsLinkedin />
                              </a>
                            </div>
                            <div className="p-4">
                              <a href="http://twittwe.com">
                              <BsTwitter />
                              </a>
                            </div>
                            <div className="p-4">
                              <a href="http://facebook.com">
                                <BsFacebook />
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </div>
                    </Card>
        </Container>
    );
}

export default GarvitCard;