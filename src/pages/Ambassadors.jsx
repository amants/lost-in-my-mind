import { useState } from "react";
import styled from "styled-components";
import AmbassadorSwiper from "../components/AmbassadorSwiper";
import Layout from "../components/Layout";
import InfoPopUpAmbassadors from "../components/InfoPopUpAmbassadors";

const Ambassadors = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Layout>
      {showInfo && <InfoPopUpAmbassadors dispatch={() => setShowInfo(false)} />}
      <Heading>
        <Title>De 5 ambassadeurs</Title>
        <Information onClick={() => setShowInfo(true)}>i</Information>
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
