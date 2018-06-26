import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const NavFront = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  display: block;
  align-self: center;
  margin-left: 7%;
  margin-right: 7%;
`

const NavBack = styled.div`
  display: block;
  align-self: center;
  background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3380034.jpg");
  background-size: cover;
`


class Footer extends Component{

  render() {
    return (
      <NavBack>
        <NavFront>
          <Segment>
            <FooterContainer>
              <Header as="h5">Sources: "https://www.epa.gov/recycle/composting-home"</Header>
            </FooterContainer>
          </Segment>
        </NavFront>
      </NavBack>
    )
  }
}

const FooterContainer = styled.div `
  position: absolute,
  bottom: 0,
  width: 100%,
`

export default Footer;
