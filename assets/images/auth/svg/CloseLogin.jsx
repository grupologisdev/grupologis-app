import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const CloseLogin = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Circle cx={19} cy={19} r={19} fill="#D9D9D9" fillOpacity={0.22} />
    <Path
      fill="#fff"
      d="M25.825 12.186a1.078 1.078 0 0 0-1.527 0L19 17.473l-5.297-5.298a1.08 1.08 0 1 0-1.528 1.527L17.472 19l-5.297 5.297a1.08 1.08 0 1 0 1.527 1.528L19 20.528l5.297 5.297a1.08 1.08 0 1 0 1.528-1.527L20.528 19l5.297-5.297a1.086 1.086 0 0 0 0-1.517Z"
    />
  </Svg>
);
export default CloseLogin;
