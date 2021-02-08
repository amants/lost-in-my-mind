import styled from "styled-components";
import { useEffect, useRef } from "react";

const PopUpComponent = ({ dispatch, ambassadorPopUp }) => {
  const ambassadorPopUpRef = useRef();

  const getAmbassadorColors = (ambassador) => {
    switch (ambassador) {
      case "Lize":
        break;
      case "Dalilla":
        break;
      case "Joost":
        break;
      default:
        break;
    }
  };

  const closePopUp = (e) => {
    if (e) e.preventDefault();
    ambassadorPopUpRef.current.style.opacity = 0;
    setTimeout(() => {
      dispatch();
    }, 200);
  };

  useEffect(() => {
    ambassadorPopUpRef.current.style.opacity = 1;
  }, []);

  return (
    <Container
      colors={getAmbassadorColors(ambassadorPopUp?.name)}
      ref={ambassadorPopUpRef}
    >
      <CloseButton onClick={() => closePopUp()}>X</CloseButton>
    </Container>
  );
};

const CloseButton = styled.a``;

const Container = styled.div`
  display: flex;
  opacity: 0;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  bottom: 0;
  flex-direction: column;
  background-color: ${({ colors }) => colors?.background};
  transition: all 0.2s ease;
`;

export default PopUpComponent;
