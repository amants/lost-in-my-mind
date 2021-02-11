import { string } from 'prop-types';
import styled from 'styled-components';
import AmbassadorsIcon from '../assets/images/AmbassadorsIcon.jsx';
import CameraIcon from '../assets/images/camera-icon.jsx';
import MarkerIcon from '../assets/images/MarkerIcon.jsx';

const AppNav = ({ activePage }) => (
  <Container>
    <IconButton href="/kaart" active={activePage === 'map'}>
      <MarkerIcon fill={activePage === 'map' ? '#f2a655' : '#DDD5C9'} />
      Zoek affiches
    </IconButton>
    <IconButton active={activePage === 'camera'} href="/">
      <CameraIcon fill={activePage === 'camera' ? '#f2a655' : '#DDD5C9'} />
      Camera
    </IconButton>
    <IconButton href="/ambassadeurs" active={activePage === 'ambassadors'}>
      <AmbassadorsIcon
        fill={activePage === 'ambassadors' ? '#f2a655' : '#DDD5C9'}
      />
      Ambassadeurs
    </IconButton>
  </Container>
);

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  z-index: 9;
  height: 6rem;
  padding: 0.5rem;
  grid-template-columns: 2fr 2fr 2fr;
  padding: 0.5rem 1.5rem;
  grid-gap: 2rem;
  font-family: gt-pressura;
  background-color: #f9f7f5;
  border-top: 2px solid #f2a655;

  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const IconButton = styled.a`
  text-decoration: none;
  width: 100%;
  margin: auto;
  height: 100%;
  text-align: center;
  text-align: center;
  z-index: 10;
  flex-direction: column;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active }) => (active ? '#f2a655' : '#DDD5C9')};
  border-radius: 5px;
  &:active {
    transform: scale(0.95);
  }
  transition: all 0.2s ease;

  & > svg {
    height: 2rem;
    width: 2rem;
    object-fit: contain;
  }
`;

AppNav.propTypes = {
  activePage: string.isRequired,
};

export default AppNav;
