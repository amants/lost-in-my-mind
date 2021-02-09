import styled from "styled-components";

const UnlocksItem = ({ unlock }) => {
  return (
    <Container>
      <h3>{unlock?.title}</h3>
      <img src={`./assets/images/${unlock?.image}`} alt="Unlock" />
    </Container>
  );
};

const Container = styled.div`
  & > h3 {
    font-family: gt-pressura;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: #2e2457;
  }

  & > img {
    margin: auto;
    object-position: center center;
    object-fit: contain;
    max-height: 7rem;
    max-width: 80%;
  }
`;

export default UnlocksItem;
