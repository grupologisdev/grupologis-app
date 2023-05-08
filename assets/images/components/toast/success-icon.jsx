import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SuccessIcon = (props) => (
  <Svg
    width={39}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={19.5} cy={19.5} r={18} stroke="#fff" strokeWidth={3} />
    <Path
      d="m17.55 26-5.7-5.7 1.425-1.425 4.275 4.275 9.175-9.175L28.15 15.4 17.55 26Z"
      fill="#fff"
    />
  </Svg>
);

export default SuccessIcon;
