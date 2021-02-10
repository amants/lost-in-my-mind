import styled from "styled-components";
import UnlocksItem from "./UnlocksItem";

const UnlocksWrapper = ({ ambassador, active, unlockedData }) => {
  return (
    <Container active={active}>
      {Object.keys(ambassador?.clickableModels)?.map((key) => (
        <UnlocksItem
          data={ambassador?.clickableModels?.[key]}
          unlocked={unlockedData?.[ambassador?.key]?.includes(key)}
          itemKey={key}
          key={key}
          colors={ambassador?.colors}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  opacity: ${({ active }) => (active ? 1 : 0)};
  max-height: ${({ active }) => (active ? "50rem" : 0)};
  transition: all 0.2s ease;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export default UnlocksWrapper;
