import { bool, func, shape } from "prop-types";
import styled from "styled-components";
import UnlocksItem from "./UnlocksItem";

const UnlocksWrapper = ({
  ambassador,
  active,
  unlockedData,
  setAmbassadorPopup,
}) => {
  const showElementPopUp = (elementKey) => {
    setAmbassadorPopup({
      colors: ambassador?.colors,
      content: ambassador?.clickableModels?.[elementKey],
    });
  };
  return (
    <Container active={active}>
      {(!unlockedData?.[ambassador?.key]?.length ||
        unlockedData?.[ambassador?.key]?.length === 0) && (
        <NoItemsUnlocked>
          <h4>Elementen uit de wereld nog niet beschikbaar</h4>
          <p>Scan de affiche en vind de elementen om ze vrij te spelen</p>
        </NoItemsUnlocked>
      )}
      {Object.keys(ambassador?.clickableModels)?.map((key) => (
        <UnlocksItem
          data={ambassador?.clickableModels?.[key]}
          showElementPopUp={showElementPopUp}
          unlocked={unlockedData?.[ambassador?.key]?.includes(key)}
          itemKey={key}
          key={key}
          colors={ambassador?.colors}
        />
      ))}
    </Container>
  );
};

const NoItemsUnlocked = styled.div`
  text-align: center;
  font-weight: bold;
  color: #342a63;
  grid-column: 1 / span 3;
  font-family: gt-pressura, sans-serif;

  & > h4 {
    font-size: 1.6rem;
    margin: 0;
  }

  & > p {
    margin: 0;
    font-size: 1.3rem;
  }
`;

const Container = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-gap: 0.5rem;
  padding: 2rem;
  grid-template-columns: repeat(3, 1fr);
  opacity: ${({ active }) => (active ? 1 : 0)};
  max-height: ${({ active }) => (active ? "50rem" : 0)};
  transition: all 0.2s ease;
`;

UnlocksWrapper.propTypes = {
  ambassador: shape(),
  active: bool,
  unlockedData: shape(),
  setAmbassadorPopup: func.isRequired,
};

export default UnlocksWrapper;
