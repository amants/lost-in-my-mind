import styled from "styled-components";
import UnlocksItem from "./UnlocksItem";

const UnlocksWrapper = ({ ambassador, active }) => {
  return (
    <Container active={active}>
      {Object.keys(ambassador?.clickableModels)?.map((key) => (
        <UnlocksItem
          unlock={ambassador?.clickableModels?.[key]}
          itemKey={key}
          key={key}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  opacity: ${({ active }) => (active ? 1 : 0)};
  max-height: ${({ active }) => (active ? "50rem" : 0)};
  transition: all 0.2s ease;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

export default UnlocksWrapper;
