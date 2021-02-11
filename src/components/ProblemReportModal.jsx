import styled from "styled-components";

import { useEffect, useRef, useState } from "react";
import CircleSpinner from "./CircleSpinner";
import { func, shape } from "prop-types";

const PopUpComponent = ({ dispatch, marker }) => {
  const [currentProblem, setCurrentProblem] = useState();
  const [message, setMessage] = useState();
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const popUpRef = useRef();
  const containerRef = useRef();

  const sendReport = async () => {
    setLoading(true);
    const markerString = `${marker.id}: lat: ${marker.lat} long: ${marker.long}`;
    await fetch("https://amantnv.be/api-bap/index.php?do=bug-report", {
      method: "POST",
      body: JSON.stringify({
        error_type: {
          notPresent: "Er is geen affiche hier",
          technical: "Technisch probleem",
          other: "Andere",
        }[currentProblem],
        message: message || undefined,
        marker_string: markerString,
      }),
    });
    setLoading(false);
    setSuccess(true);
  };

  const closePopUp = (e) => {
    if (e) e.preventDefault();

    sessionStorage.setItem("info-seen", true);
    popUpRef.current.style.opacity = 0;
    containerRef.current.style.transform = "scale(0)";
    setTimeout(() => {
      dispatch();
    }, 200);
  };

  useEffect(() => {
    setErrors(() => {
      const errors = {};
      if (currentProblem && currentProblem !== "notPresent" && !message) {
        errors.message = "Er moet een beschrijving ingevuld worden";
      }
      return errors;
    });
  }, [message, currentProblem]);

  return (
    <Background ref={popUpRef} onClick={closePopUp}>
      <Container ref={containerRef} onClick={(e) => e.stopPropagation()}>
        {success ? (
          <>
            <ThankyouTitle>Bedankt!</ThankyouTitle>
            <ThankyouText>
              We hebbben jouw melding succesvol ontvangen. We lossen het
              probleem zo snel mogelijk op.
            </ThankyouText>
            <ButtonContainer>
              <Button onClick={closePopUp}>Sluiten</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <Title>Wat is het probleem?</Title>
            <ProblemContainer error={errors.error_type}>
              <ProblemItem
                selected={currentProblem === "notPresent"}
                onClick={() => setCurrentProblem("notPresent")}
              >
                Affiche niet aanwezig
              </ProblemItem>
              <ProblemItem
                selected={currentProblem === "technical"}
                onClick={() => setCurrentProblem("technical")}
              >
                Technisch probleem
              </ProblemItem>
              <ProblemItem
                selected={currentProblem === "other"}
                onClick={() => setCurrentProblem("other")}
              >
                Andere
              </ProblemItem>
            </ProblemContainer>
            <Error>{errors?.error_type}</Error>
            {
              {
                technical: (
                  <ProblemLabel>Er is een technisch probleem</ProblemLabel>
                ),
                other: <ProblemLabel>Andere</ProblemLabel>,
              }[currentProblem]
            }
            {currentProblem && currentProblem !== "notPresent" && (
              <>
                <TextArea
                  placeholder="Wat is het probleem precies?"
                  value={message}
                  error={errors.message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Error>{errors?.message}</Error>
              </>
            )}
            <ButtonContainer>
              <Button
                onClick={sendReport}
                disabled={
                  loading || Object.values(errors).length > 0 || !currentProblem
                }
              >
                Verstuur {loading && <CircleSpinner size={15} />}
              </Button>
              <Button onClick={closePopUp} secondary>
                Sluiten
              </Button>
            </ButtonContainer>
          </>
        )}
      </Container>
    </Background>
  );
};

const ThankyouText = styled.p`
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  padding: 0 1rem;
`;

const Error = styled.p`
  color: red;
`;

const TextArea = styled.textarea`
  border: 2px solid #342a63;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: arial, helvetica, sans-serif;
  padding: 0.5rem;
  min-height: 8rem;
`;

const ProblemLabel = styled.h3`
  color: #342a63;
  font-family: gt-pressura, sans-serif;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const ProblemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const ProblemItem = styled.button`
  padding: 0.75rem;
  border: 2px solid #342a63 !important;
  outline: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "white" : "#342A63")};
  background: ${({ selected }) => (selected ? "#342A63" : "none")};
  border-radius: 5px;
  transition: all 0.2s ease;
`;

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
  z-index: 40;
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
  width: 90%;
  z-index: 40;
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
  font-family: gt-pressura, sans-serif;
`;

const ThankyouTitle = styled.h2`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  line-height: 140%;
  color: #2e2457;
  font-family: gt-pressura, sans-serif;
`;

const Button = styled.button`
  text-decoration: none;
  width: 80%;
  position: relative;
  margin: auto;
  margin-bottom: 1rem;
  height: 3rem;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  background: ${({ secondary }) => (secondary ? "none" : "#f2a655")};
  color: ${({ secondary }) => (secondary ? "#f2a655" : "white")};
  border: 2px solid #f2a655;
  border-radius: 5px;
  &:active {
    transform: scale(0.95);
  }
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

PopUpComponent.propTypes = {
  dispatch: func.isRequired,
  marker: shape(),
};

export default PopUpComponent;
