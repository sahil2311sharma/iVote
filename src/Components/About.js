import React from "react";
import "./styles/about.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import ParticleBackground from "./particle/Particle_Contact";

// const HemantCard = () =>

// export default class About extends React.Component{
const About = () => {
  // render(){
  return (
    <div id="about" className="about_1233">
      <Navbar />
      <ParticleBackground />
      <div className="section23">
        <Container>
          <h1>About</h1>
          <Row>
            <Col>
              <p className="pt-5">
                Electoral Systems in most of the countries have been carried out
                in exactly the same traditional manner for many years. People
                standing up for the elections have evolved their way of working
                and laying down the democratic rules, their promises have
                evolved along with the growing requirements and advancements
                demanded by the public, still the process of electing the most
                reliable body for themselves is being laid down on the terms of
                100 years old technique of electoral polling. In this section,
                we will look at the function of this outdated mechanism being
                adopted for conducting elections. For all the democratic units
                functioning with the principle of distributed power among its
                people, a yet centralized system had been set up. Voting
                mechanisms carried out in most of the countries and states are
                based on physical electoral polling with voting 4 booths set up
                in various places inside the region. People have to have their
                voter identity cards with them and fulfill necessary identity
                requirements to be able to claim their Right To Vote. A specific
                time period is selected to conduct the process of election with
                the help of physical units set up for people nearby to come and
                cast their vote to the leader they seem to trust and rely on.
                These units are governed by a centralised unit and they can
                operate it the way they want. After having given their vote,
                voters get marked with the electoral ink on their index finger.
                This ink doesn’t fade away till the end of the election time
                frame. This helps the electoral unit to identify people who have
                already voted and make sure that nobody votes more than one time
                as per the election guidelines. This may seem a fair way to
                conduct this crucial decision making process. It’s been
                happening this way for a long time. The main drawback for this
                system can be clearly seen in the media which posts about the
                various unethical practises involved with this mechanism.
                Political parties indulge in unfair means of collecting votes.
                They either threaten people to cast their vote for them, or
                bluff with the counting of votes. A lot of cases have been
                reported regarding the corruption that prevails at the time of
                elections. The essence of the principle “RIght To Vote” gets
                hindered by such activities and therefore imposes insecurity
                among the people, keeping them wondering if they really own this
                right to choose their leader. Furthermore, considering the
                current situation of the world, it is of utmost importance that
                such crucial events be held with immense strategy and planning
                keeping in mind the consequences of any carelessness in regards
                to people’s health. It is not very wise to continue with this
                traditional and outdated mechanism for conducting elections. To
                counter this, during the global pandemic, people came up with
                online solutions for carrying out this process in an efficient
                manner and retaining the cruciality of the voting principles.
                But none of them proved to be the next method to be adopted.
              </p>

              <p className="pt-2">
                Considering the above scenario, after a lot of surveying and
                analysis, iVote comes up with an innovative, impactful and
                futuristic solution to this problem. With the most trending
                technologies such as Blockchain and Machine learning, this
                platform aims to provide an online, decentralised,
                3-Factor-Authentication system for conducting elections all
                around the world. It's a global web based application that
                allows people to anonymously vote for their trusted parties and
                preserve their Right To Vote in a reliable, transparent, secure
                and trustless manner. Below is a brief explanation of the
                concept that the iVote team proposes against all other
                possibilities and alternatives. The very first approach this
                solution progresses with is the idea of decentralising this
                process to make the public realise the potential of their
                distributed power for real. 5 This progression is accomplished
                with the help of fast growing and leading technology Blockchain.
                Blockchain is a decentralised, trustless and secure ledger that
                stores any data in blocks that are linked together and protected
                with one way hashing algorithms. Any data once posted on
                Blockchain stays forever with being able to change. It is
                practically impossible to corrupt a Blockchain network system.
                Using this advantage of this technology, this platform
                implements the voting logic in the form of a smart contract (A
                piece of code that is deployed on Blockchain and acts as a
                transparent and unbiased intermediary for two or more concerned
                parties for laying down rules and agreements proposed among
                them). iVote uses this aspect of Blockchain to eliminate the
                centralised electoral booth policy and bring trust to the public
                by making them own their Right To Vote and cast their opinion in
                a fair manner. Unlike the questionable nature of other online
                platforms in terms of authority and security, iVote provides
                3-factor-authentication for its users to watch upon any
                unethical or unauthorised entity entering the system. This is
                procured with the help of machine learning algorithms that are
                responsible for allowing the user to access the services the
                platform provides. To build trust of people, a strong, efficient
                and hackerproof system has to be built with the surety of
                preserving people’s data and respecting their rights. Coming to
                the functioning of iVote, with an already setup database for
                people’s identity who have the rightful authority to vote, the
                platform allows users to cast their vote by going through the
                process of 3-factor-authentication powered by machine learning.
                Providing the most recent updates about the elections, the
                platform provides an excellent user experience giving them an
                anonymous identity to place their choice. Counting of votes is
                done automatically with the help of logic implemented in the
                smart contract, and ensures elimination of any third party
                interference. After the election time window has been closed the
                results are generated and declared automatically on the website.
                With the vision of having least interference of any non
                concerned body in between the electoral process, iVote raises an
                exception among all the solutions having such an innovative and
                futuristic approach towards likewise important events.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
  // }
};
export default About;
