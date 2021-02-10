import styled from "styled-components";
import CameraIcon from "../assets/images/camera-icon.jsx";

const AppNav = ({ activePage }) => (
  <Container>
    <Button href="/kaart" secondary={activePage !== "map"}>
      Zoek affiches
    </Button>
    <CameraButton secondary={activePage !== "camera"} href="/">
      <CameraIcon fill={activePage !== "camera" ? "#f2a655" : "white"} />
      Camera
    </CameraButton>
    <Button href="/ambassadeurs" secondary={activePage !== "ambassadors"}>
      Ambassadeurs
    </Button>
  </Container>
);

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  z-index: 9;
  padding: 2rem;
  grid-template-columns: 2fr 1fr 2fr;
  grid-gap: 2rem;
  background-color: #f9f7f5ee;
  border-top: 2px solid #f2a655;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const Button = styled.a`
  text-decoration: none;
  width: 100%;
  margin: auto;
  height: 5rem;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  z-index: 10;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ secondary }) => (secondary ? "white" : "#f2a655")};
  color: ${({ secondary }) => (secondary ? "#f2a655" : "white")};
  ${"" /* border: 2px solid #f2a655; */}
  border-radius: 5px;
  &:active {
    transform: scale(0.95);
  }
  transition: all 0.2s ease;
`;

const CameraButton = styled.a`
  text-decoration: none;
  width: 100%;
  margin: auto;
  height: 5rem;
  font-weight: bold;
  text-align: center;
  text-align: center;
  z-index: 10;
  text-transform: uppercase;
  flex-direction: column;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ secondary }) => (secondary ? "white" : "#f2a655")};
  color: ${({ secondary }) => (secondary ? "#f2a655" : "white")};
  border-radius: 5px;
  &:active {
    transform: scale(0.95);
  }
  transition: all 0.2s ease;

  & > svg {
    margin-bottom: 0.5rem;
  }
`;

export default AppNav;
