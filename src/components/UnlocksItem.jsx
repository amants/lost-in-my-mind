import styled from "styled-components";

const UnlocksItem = ({ data, colors, unlocked, showElementPopUp, itemKey }) => {
  return (
    <Container
      unlocked={unlocked}
      colors={colors}
      onClick={() => showElementPopUp(itemKey)}
    >
      <img src={`./assets/images/${data?.image}`} alt="Unlock" />
      <h3>{data?.title}</h3>
    </Container>
  );
};

const Container = styled.a`
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  ${({ unlocked }) =>
    !unlocked && `pointer-events: none; filter: contrast(0); opacity: 0.5;`}
  border-radius: 1rem;
  background-color: #d6846622;
  border: 1px solid ${({ colors }) => colors?.background};
  & > h3 {
    font-family: gt-pressura;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #2e2457;
    margin: 0;
    ${({ unlocked }) => !unlocked && `display: none;`}
  }

  & > img {
    margin: auto;
    object-position: center center;
    object-fit: contain;
    max-height: 5rem;
    max-width: 80%;
  }

  &:active {
    transform: scale(0.95);
  }

  transition: all 0.2s ease;
`;

export default UnlocksItem;
