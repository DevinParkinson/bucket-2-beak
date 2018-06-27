import React, { Component } from 'react';
import { Header, Button, Grid, Divider, Segment, Accordion, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import Compost1 from '../images/compost1.jpg';
import Compost2 from '../images/compost2.jpg';
import Compost3 from '../images/compost3.jpeg';
import Compost4 from '../images/compost4.png';


const AppContainer = styled.div`
  justify-content: center;
  background-image: url("https://cdn.pixabay.com/photo/2014/04/05/11/19/background-315143_960_720.jpg");
  background-size: cover;
  margin-left: 7%;
  margin-right: 7%;
  height: 100%;
  text-align: center;
  font-family: Courier;
  color: #ffffff;
`
const FullApp = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3380034.jpg");
`

const Carousel1 = styled(Carousel)`
  height: 50vh;
  width: auto;
  overflow: hidden;
`

class Home extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <FullApp>
        <AppContainer>
          <Link to="/register" style={styles.text}>
            <Button fluid positive>
              Sign Up Now!
            </Button>
          </Link>
          <Header as='h1' style={{fontFamily: 'Courier', color: "#ffffff"}}>Bucket To Beak Curbside Composting</Header>
          <Grid rows={2} columns={1} celled="internally" divided>
            <Grid.Row>
              <Grid.Column>
                <Segment raised padded style={styles.compost}>
                      <Header style={styles.atexts}>What is Composting?</Header>
                      <p>According to the EPA, Compost is organic material that can be added to soil to help plants grow. Food scraps and yard waste currently make up 20 to 30 percent of what we throw away, and should be composted instead. Making compost keeps these materials out of landfills where they take up space and release methane, a potent greenhouse gas.</p>
                      <Header style={styles.atexts}>Why Should We Compost Our Food Scraps?</Header>
                      <p>There are lots of good reasons to compost. Save money, save resources, improve your soil and reduce your impact on the environment. Regardless of your reasons, composting is a win/win scenario. Good for you and good for the environment.</p>
                      <Carousel1 autoPlay infiniteLoop>
                        <div>
                          <img src={Compost1} alt='Pic1' />
                          <p className="legend">Bilge water yardarm chase Yellow Jack splice the main brace bounty skysail lateen sail lanyard Sea Legs. Argggggh</p>
                        </div>
                        <div>
                          <img src={Compost2} alt='Pic2' />
                          <p className="legend">Chantey bucko Davy Jones Locker pressgang avast tack nipper American Main wherry broadside. Splice the main brace driver careen Jack Tar maroon long boat red ensign gangway lanyard chandler.</p>
                        </div>
                        <div>
                          <img src={Compost3} alt='Pic3' />
                          <p className="legend">Heave down barque deadlights rutters no prey, no pay league grapple quarter jolly boat capstan. Starboard grog blossom spanker matey lanyard parrel snow tender boom rigging.</p>
                        </div>
                        <div>
                          <img src={Compost4} alt='Pic4' />
                          <p className="legend">Measured fer yer chains Yellow Jack spyglass Jack Tar no prey, no pay yardarm spirits sutler scuppers six pounders.</p>
                        </div>
                      </Carousel1>
                      <Header style={styles.atexts}>What are the benefits?</Header>
                      <li>Enriches soil, helping retain moisture and suppress plant diseases and pests.</li>
                      <li>Reduces the need for chemical fertilizers.</li>
                      <li>Encourages the production of beneficial bacteria and fungi that break down organic matter to create humus, a rich nutrient-filled material.</li>
                      <li>Reduces methane emissions from landfills and lowers your carbon footprint.</li>
                </Segment>
                <Segment raised padded style={styles.compost}>
                  <Header style={styles.atexts}>Local,   Responsible,   Regenerative</Header>
                  <Grid doubling columns={3} style={styles.grid}>
                    <Grid.Column floated="left" stretched>
                    <Header style={styles.texts}>Local</Header>
                    <ul>Pillage six pounders American Main Davy Jones Locker grapple Arr lass square-rigged rum Nelsons folly.</ul>
                    <ul>Schooner tack Buccaneer Sink me knave gunwalls walk the plank hardtack cog skysail.</ul>
                    </Grid.Column>
                    <Grid.Column style={styles.grid} stretched>
                      <Header style={styles.texts}>Responsible</Header>
                      <ul>Run a rig rutters flogging Buccaneer Privateer boom clipper quarterdeck killick Pirate Round. Fire in the hole matey hempen halter grog keel topmast black jack mizzen to go on account warp.</ul>
                    </Grid.Column>
                    <Grid.Column style={styles.grid} floated="right" stretched>
                      <Header style={styles.texts}>Regenerative</Header>
                      <ul>Lass trysail handsomely scallywag warp salmagundi log chandler draught Sail ho. Lass hempen halter no prey, no pay Admiral of the Black plunder prow Letter of Marque barque topgallant parley.</ul>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
              <Grid.Column style={styles.grid}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
            <Grid>
            <Grid.Row>
              <Grid.Column>
                <Segment style={styles.accordion} raised padded>
                  <Header style={styles.texts}>Starting is as easy as 1, 2, 3!</Header>
                  <Accordion fluid inverted>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} style={styles.texts}>
                      <Icon name='leaf' />
                      1 Sign Up
                      <Icon name='dropdown' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}><p style={styles.text}><Link to="/register">Sign up</Link> for a monthly membership to receive weekly benefits</p></Accordion.Content>
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} style={styles.texts}>
                      <Icon name='leaf' />
                      2) Fill Up The Bin We Provide
                      <Icon name='dropdown' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}><p style={styles.text}>As you eat during the week, simply place any leftover food (eggshells, apple cores, etc...) into the bin we provide. Helping you cut down on your trash while also helping you eat healthier and happier.</p></Accordion.Content>
                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} style={styles.texts}>
                      <Icon name='leaf' />
                      3) Take Out The Trash
                      <Icon name='dropdown' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}><p style={styles.text}>Once a week, just take your trash out and we will replace the bins for you so you can start all over again. Giving you that warm fuzzy feeling that only taking out the trash can can do.</p></Accordion.Content>
                  </Accordion>
                </Segment>
                <Divider hidden />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </AppContainer>
      </FullApp>
    );
  }
}

const styles = {
  text: {
    marginLeft: "2vw",
    textAlign: "left",
    color: "black",
    fontFamily: "Courier"
  },
  texts: {
    color: "#00a224",
    fontFamily: "Courier",
    textAlign: "left",
    textDecoration: "underline",
  },
  atexts: {
    color: "#00a224",
    fontFamily: "Courier",
    textAlign: "center",
    textDecoration: "underline",
  },
  rtext: {
    color: "white",
    justifyContent: "center",
    fontFamily: "Courier"
  },
  compost: {
    marginLeft: "2vw",
    boxShadow: " 0 0 15px #000000",
    color: "black",
    fontFamily: "Courier",
    height: "auto",
    width: "auto",
    overFlow: "auto",
    textAlign: "left",
  },
  grid: {
    display: "inline-block",
    height: "auto",
    overFlow: "auto",
  },
  accordion: {
    marginLeft: "3vw",
    marginRight: "1vw",
    textAlign: "left",
    color: "black"
  },
  slide: {
    background: "transparent"
  }
}


export default Home;
