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
  background-image: url("https://www.gannett-cdn.com/-mm-/cf59ef81c81abe3d60ecd65e8f191c7284bca08b/c=0-345-3853-2522&r=x1683&c=3200x1680/local/-/media/2017/05/30/WisPub/WisconsinStateFarmer/636317822843016918-NDNBrd-04-29-2017-Citizen-1-B002--2017-04-27-IMG-GettyImages-48653045-2-1-Q8I72A07-L1018974487-IMG-GettyImages-48653045-2-1-Q8I72A07.jpg");
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
  display: flex !important;
  margin-left: auto;
  height: 80vh;
  width: 65vh;
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
            <Button fluid attached="top" positive>
              Sign Up Now!
            </Button>
          </Link>
          <Header as='h1' style={{fontFamily: 'Times New Roman', color: "#ffffff"}}>Bucket To Beak Curbside Composting</Header>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Segment raised padded style={styles.compost}>
                  <Header>What is Composting?</Header>
                  <p>According to the EPA, Compost is organic material that can be added to soil to help plants grow. Food scraps and yard waste currently make up 20 to 30 percent of what we throw away, and should be composted instead. Making compost keeps these materials out of landfills where they take up space and release methane, a potent greenhouse gas.</p>
                </Segment>
                <Segment raised padded style={styles.compost}>
                  <Header>What are the benefits?</Header>
                  <li>Enriches soil, helping retain moisture and suppress plant diseases and pests.</li>
                  <li>Reduces the need for chemical fertilizers.</li>
                  <li>Encourages the production of beneficial bacteria and fungi that break down organic matter to create humus, a rich nutrient-filled material.</li>
                  <li>Reduces methane emissions from landfills and lowers your carbon footprint.</li>
                </Segment>
              </Grid.Column>
              <Grid.Column style={styles.grid}>
              <Header as='h3' style={styles.rtext}>Local, Responsible, Regenerative</Header>
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
            <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header style={styles.text}>How is it done? It's as easy as 1, 2, 3!</Header>
                <Accordion styled style={styles.accordion}>
                  <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} style={styles.atexts}>
                    <Icon name='leaf' />
                    1) Sign Up
                    <Icon name='dropdown' />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}><p style={styles.texts}>Sign up for a monthly membership to receive weekly benefits</p></Accordion.Content>
                  <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} style={styles.atexts}>
                    <Icon name='leaf' />
                    2) Fill Up The Bin We Provide
                    <Icon name='dropdown' />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}><p style={styles.texts}>As you eat during the week, simply place any leftover food (eggshells, apple cores, etc...) into the bin we provide. Helping you cut down on your trash while also helping you eat healthier and happier.</p></Accordion.Content>
                  <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} style={styles.atexts}>
                    <Icon name='leaf' />
                    3) Take Out The Trash
                    <Icon name='dropdown' />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}><p style={styles.texts}>Once a week, just take your trash out and we will replace the bins for you so you can start all over again. Giving you that warm fuzzy feeling that only taking out the trash can can do.</p></Accordion.Content>
                </Accordion>
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
    color: "#ffffff"
  },
  texts: {
    color: "black",
    backgroundColor: "white"
  },
  atexts: {
    color: "white",
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
  },
  grid: {
    height: "60vh",
    overFlow: "hidden"
  },
  accordion: {
    marginLeft: "2vw",
    marginRight: "2vw",
    textAlign: "left",
    background: "transparent"
  }
}


export default Home;
