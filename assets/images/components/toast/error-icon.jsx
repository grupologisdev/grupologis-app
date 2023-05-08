import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const errorIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <Circle cx={19.5} cy={19.5} r={18} stroke="#fff" strokeWidth={3} />
    <Path
      fill="#fff"
      d="M25.966 12.327a1.08 1.08 0 0 0-1.527 0l-5.298 5.287-5.297-5.298a1.08 1.08 0 1 0-1.528 1.528l5.298 5.297-5.298 5.298a1.08 1.08 0 1 0 1.528 1.527l5.297-5.297 5.298 5.297a1.08 1.08 0 1 0 1.527-1.527L20.67 19.14l5.297-5.297a1.086 1.086 0 0 0 0-1.517Z"
    />
  </Svg>
);
export default errorIcon;
