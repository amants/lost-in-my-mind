import styled from "styled-components";

import { useRef, useState } from "react";

const PopUpComponent = ({ dispatch }) => {
  const [currentProblem, setCurrentProblem] = useState();
  const popUpRef = useRef();
  const containerRef = useRef();
  const closePopUp = (e) => {
    if (e) e.preventDefault();

    sessionStorage.setItem("info-seen", true);
    popUpRef.current.style.opacity = 0;
    containerRef.current.style.transform = "scale(0)";
    setTimeout(() => {
      dispatch();
    }, 200);
  };

  return (
    <Background ref={popUpRef} onClick={closePopUp}>
      <Container ref={containerRef} onClick={(e) => e.stopPropagation()}>
        <Title>Wat is het probleem?</Title>
        <ProblemContainer>
          <ProblemItem
            selected={currentProblem === "notPresent"}
            onClick={() => setCurrentProblem("notPresent")}
          ></ProblemItem>
        </ProblemContainer>
        {
          {
            notPresent: <p>notPresent</p>,
            technical: <p>technical</p>,
            other: <p>other</p>,
          }[currentProblem]
        }
        <ButtonContainer>
          <Button onClick={closePopUp}>Verstuur</Button>
          <Button onClick={closePopUp} secondary>
            Sluiten
          </Button>
        </ButtonContainer>
      </Container>
    </Background>
  );
};

const ProblemContainer = styled.div``;
const ProblemItem = styled.button``;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-iteration-count: once;
  transition: all 0.2s ease;
`;

const Container = styled.div`
  display: flex;
  padding: 2rem;
  margin: 2rem;
  flex-direction: column;
  background: #f6d6c1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  animation-name: scale-in;
  animation-duration: 0.2s;
  animation-iteration-count: once;
  transition: all 0.2s ease;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #2e2457;
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
  &:active {
    transform: scale(0.95);
  }
  transition: all 0.2s ease;
`;

export default PopUpComponent;
