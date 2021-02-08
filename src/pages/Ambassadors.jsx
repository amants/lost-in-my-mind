import { useState } from "react";
import styled from "styled-components";
import AmbassadorSwiper from "../components/AmbassadorSwiper";
import Layout from "../components/Layout";
import InfoPopUpAmbassadors from "../components/InfoPopUpAmbassadors";
import headerAmbassadorsImage from "../assets/images/header_ambassadors.png";
const Ambassadors = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Layout>
      {showInfo && <InfoPopUpAmbassadors dispatch={() => setShowInfo(false)} />}
      <Heading>
        <DesktopHeading>
          <LeftSide />
          <RightSide>
            <h2>Verdwaal in mijn Gedachten</h2>
            <p>
              Leer <span>onze 5 ambassadeurs</span> op een unieke manier kennen.
              Neem een kijkje in hun gedachten en ga op zoek naar wie de auteur
              is en hoe hij of zij denkt.
            </p>
            <p>
              In Kortrijk zijn 5 interactieve affiches te vinden gekoppeld aan
              een ambassadeur. Door de QR-code te scannen krijg je toegang tot
              hun interactieve AR-wereld.
            </p>
          </RightSide>
        </DesktopHeading>
        <MobileHeading>
          <Title>De 5 ambassadeurs</Title>
          <Information onClick={() => setShowInfo(true)}>i</Information>
        </MobileHeading>
      </Heading>
      <AmbassadorSwiper />
      <ButtonContainer>
        <Button href="/map">Zoek interactieve affiches</Button>
        <Button href="/" secondary>
          Open AR-Lens
          <ButtonIcon src="./assets/images/camera-icon.svg" />
        </Button>
      </ButtonContainer>
    </Layout>
  );
};

const MobileHeading = styled.header`
  display: block;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const DesktopHeading = styled.header`
  display: none;
  grid-template-columns: repeat(2, 1fr);
  color: white;
  border-radius: 12px;
  font-size: 1.5rem;
  line-height: 1.4;
  overflow: hidden;

  @media screen and (min-width: 900px) {
    display: grid;
  }
`;
const LeftSide = styled.div`
  font-family: gt-pressura, sans-serif;
  background-image: url(${headerAmbassadorsImage});
  background-size: cover;
`;
const RightSide = styled.div`
  padding: 5rem;
  background-color: #2e2457;
  & > h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 140%;
    color: #f2a655;
    margin: 0 0 2rem 0;
  }

  & > p {
    font-weight: normal;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const ButtonIcon = styled.img`
  margin-left: 1rem;
`;

const Button = styled.a`
  text-decoration: none;
  width: 80%;
  margin: auto;
  margin-bottom: 1rem;
  height: 3rem;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ secondary }) => (secondary ? "none" : "#f2a655")};
  color: ${({ secondary }) => (secondary ? "#f2a655" : "white")};
  border: 2px solid #f2a655;
  border-radius: 5px;
`;

const Heading = styled.div`
  display: flex;
  align_items: center;
  justify-content: space-between;
  margin: 0 2rem;

  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 2.2rem;
  line-height: 3.1rem;
  letter-spacing: 0.03em;
  margin: 0;
  text-transform: uppercase;
  color: #f2a655;
`;

const Information = styled.a`
  text-decoration: none;
  border-radius: 50%;
  border: 2px solid #f2a655;
  height: 2.2rem;
  width: 2.2rem;
  font-weight: 900;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 3.1rem;
  letter-spacing: 0.03em;
  color: #f2a655;
`;

export default Ambassadors;
