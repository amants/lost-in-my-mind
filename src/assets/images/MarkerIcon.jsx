import { string } from "prop-types";

const MarkerIcon = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="27"
      fill="none"
      viewBox="0 0 20 27"
    >
      <g clipPath="url(#clip0)">
        <path
          fill={fill}
          d="M8.972 26.455C1.405 15.347 0 14.207 0 10.125 0 4.533 4.477 0 10 0s10 4.533 10 10.125c0 4.082-1.405 5.222-8.972 16.33a1.242 1.242 0 01-2.056 0zM10 14.344c2.301 0 4.167-1.889 4.167-4.219S12.3 5.906 10 5.906c-2.301 0-4.167 1.889-4.167 4.219S7.7 14.344 10 14.344z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H20V27H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

MarkerIcon.propTypes = {
  fill: string.isRequired,
};

export default MarkerIcon;
