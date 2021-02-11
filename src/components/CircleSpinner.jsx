import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const CircleSpinner = ({ size, color, sizeUnit, className, position }) => (
  <Wrapper
    className={className}
    size={size}
    color={color}
    sizeUnit={sizeUnit}
    position={position}
  />
);

const Wrapper = styled.div`
  position: ${(props) => props.position};
  right: 2rem;
  width: ${(props) => `${props.size}${props.sizeUnit}`};
  height: ${(props) => `${props.size}${props.sizeUnit}`};
  border: ${(props) => `${props.size / 5}${props.sizeUnit}`} solid
    ${(props) => props.color};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
`;

CircleSpinner.defaultProps = {
  loading: true,
  size: 30,
  color: '#fff',
  sizeUnit: 'px',
  className: '',
  position: 'absolute',
};

CircleSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  sizeUnit: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.string,
};

export default CircleSpinner;
