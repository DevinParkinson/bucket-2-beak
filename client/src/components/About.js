import React from 'react';
import { Header, Image, Segment, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import Jaren from '../images/Jaren.jpg';

const AppContainer = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2014/04/05/11/19/background-315143_960_720.jpg");
  background-size: cover;
  margin-left: 7%;
  margin-right: 7%;
  height: auto;
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

class About extends React.Component {
  render(){
    return (
      <FullApp>
        <AppContainer>
          <Header as='h2' style={styles.head}>Welcome To Bucket To Beak</Header>
          <Segment raised padded style={styles.about}>
            <Image src={Jaren} style={styles.photo} />
            <Header as='h1'>About Bucket To Beak</Header>
            <p>   Hi, I'm Jaren, the owner of Bucket To Beak Curbside Composting. I was born and raised right here in summit county, just on the other side of the mountain in Oakley. Despite growing up in a rural agricultural community, I didn't have much interest in agriculture. And when it came time to graduate high school I began to see how much greener the grass looked on the other side of those beautiful mountains, and quickly moved to the Salt Lake valley.

    I spent the next ten years of my life on the grind in Utah, Salt Lake and Davis counties. And year after year that shade of green began to fade more and more. I found myself returning more frequently to Oakley to visit, and eventually became more interested in agriculture, permaculture, diet and where our food comes from.

    I began doing what I could to be self sustainable on our small urban lot by raising quail and rabbits, composting and gardening. I also started a YouTube Channel to teach others. Then in the fall of 2017 a remarkable opportunity came up to move back to Oakley onto a 2 acre property where I could expand my operations and do more. I had been wanting to start a large composting operation for some time, and now I had the space to do it. And so Bucket To Beak was born.</p>
          </Segment>
          <Segment raised padded style={styles.about}>
            <Header as='h2'>Why Is Composting Important?</Header>
            <p>Did you know that 40% of our food goes to waste, uneaten? That's 20 pounds per person per month in the U.S. Reducing consumption should be priority 1, and donating extra food to those in need should come next. But what's left after that usually ends up in our landfills. This produces large amounts of methane, a much more dangerous greenhouse gas than co2

  Not only does composting reduce your carbon footprint, but it can help with another serious problem. Do you know what the number 1 U.S. export is? From an economical standpoint the answer is oil and automotive products. But the real number 1 export is TOPSOIL. Each year 45 Billion tons of topsoil is washed out to sea from serious erosion due to irresponsible farming practices. Modern agriculture tends to treat our soil like dirt, no pun intended.

  There an old proverb that's says we owe our entire existence to six inches of topsoil and the fact that it rains. Well that first part of the equation is being depleted at an alarming rate, and nothing is being done comparatively to restore it. This is why composting is so important. We need to do our part to rebuild the topsoil that we will eventually run out of, by turning our unused food into compost.</p>
          </Segment>
          <Segment raised padded style={styles.about}>
            <Header as='h2'>Why should I choose Bucket To Beak to compost my scraps?</Header>
            <p>Several things make Bucket To Beak stand out from other composting companies. First of all, we donate all of our compost to responsible local farms and gardens. This not only helps us build are topsoil locally, but it also improves the quality of our local food.

  We also use a unique system for composting food waste. We let some of mother nature's best composters do the work; ducks and chickens. We consolidate the food waste where the birds can access it freely. They eat much of the scraps and add necessary nitrogen in the form of manure in the process. As they scratch and sift through the waste they naturally "turn" and aerate the mixture which speeds up the composting process.

  Feeding the waste to the birds also supplements their diet up to 100% depending on the time of year. This reduces the burden on shipping in feed, and also produces high quality eggs which we donate to those of our community who are in need.</p>
          </Segment>
          <Divider hidden />
        </AppContainer>
      </FullApp>
    )
  }
}

const styles = {
  photo: {
    display: "flex",
    float: "right",
    height: "30vh",
    marginRight: "1vw",
    boxShadow: "0 0 15px black"
  },
  head: {
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
  },
  about: {
    display: "block",
    backgroundColor: "#ffffff",
    color: "#000000",
    marginLeft: "4vw",
    marginRight: "4vw",
    marginTop: "8vh",
    boxShadow: " 0 0 15px #000000"
  }
}

export default About;
