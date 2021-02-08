import styled from "styled-components";

const PopUpComponent = ({ dispatch, children }) => {
  const closePopUp = () => {
    setTimeout(() => {
      dispatch();
    }, 200);
  };

  return (
    <Container>
      <CloseButton onClick={closePopUp}>x</CloseButton>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: fixed;
  top: 4rem;
  left: 2rem;
  right: 2rem;
  bottom: 4rem;
`;

const CloseButton = styled.div`
  display: absolute;
  top: 1rem;
  right: 1rem;
`;

export default PopUpComponent;
