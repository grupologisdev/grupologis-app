import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export const ErrorIcon = (props) => {
  return (
    <Svg
      width={39}
      height={39}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={19.5} cy={19.5} r={18} stroke="#fff" strokeWidth={3} />
      <Path
        d="M25.966 12.327a1.08 1.08 0 00-1.527 0l-5.298 5.287-5.297-5.298a1.08 1.08 0 10-1.528 1.528l5.298 5.297-5.298 5.298a1.08 1.08 0 101.528 1.527l5.297-5.297 5.298 5.297a1.08 1.08 0 101.527-1.527L20.67 19.14l5.297-5.297a1.086 1.086 0 000-1.517z"
        fill="#fff"
      />
    </Svg>
  );
};

export const SuccessIcon = (props) => {
  return (
    <Svg
      width={39}
      height={39}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={19.5} cy={19.5} r={18} stroke="#fff" strokeWidth={3} />
      <Path
        d="M17.55 26l-5.7-5.7 1.425-1.425 4.275 4.275 9.175-9.175L28.15 15.4 17.55 26z"
        fill="#fff"
      />
    </Svg>
  );
};
