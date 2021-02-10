import styled from "styled-components";
import { useRef } from "react";

const PopUpComponent = ({ dispatch, ambassadorPopUp }) => {
  const ambassadorPopUpRef = useRef();
  const containerRef = useRef();

  const closePopUp = (e) => {
    if (e) e.preventDefault();

    ambassadorPopUpRef.current.style.opacity = 0;
    containerRef.current.style.transform = "scale(0)";
    setTimeout(() => {
      dispatch();
    }, 200);
  };

  return (
    <Background ref={ambassadorPopUpRef} onClick={closePopUp}>
      <Container
        ref={containerRef}
        background={ambassadorPopUp?.colors?.background}
      >
        <Header>
          <Title color={ambassadorPopUp?.colors?.titleColor}>
            {ambassadorPopUp?.content?.title}
          </Title>
          <CloseButton
            color={ambassadorPopUp?.colors?.titleColor}
            onClick={() => closePopUp()}
          >
            X
          </CloseButton>
        </Header>
        <Content color={ambassadorPopUp?.colors?.textColor}>
          {ambassadorPopUp?.content?.content}
        </Content>
        <ImageContainer>
          <Img src={`./assets/images/${ambassadorPopUp?.content?.image}`} />
        </ImageContainer>
      </Container>
    </Background>
  );
};

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Img = styled.img``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.8rem;
  align-items: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;

  animation-name: fade-in;
  animation-duration: 0.2s;
  animation-iteration-count: once;
  transition: all 0.2s ease;
`;

const CloseButton = styled.a`
  color: ${({ color }) => color};
`;

const Title = styled.h2`
  color: ${({ color }) => color};
  margin: 0;
`;

const Content = styled.p`
  font-size: 1.8rem;
  margin: 0;
  line-height: 1.5;
  color: ${({ color }) => color};
`;

const Container = styled.div`
  display: flex;
  padding: 2rem;
  margin: 2rem;
  border-radius: 1rem;
  flex-direction: column;
  background-color: ${({ background }) => background};

  animation-name: scale-in;
  animation-duration: 0.2s;
  animation-iteration-count: once;
  transition: all 0.2s ease;
`;

export default PopUpComponent;
