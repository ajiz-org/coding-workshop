import Tilt from "react-parallax-tilt";
import React from "react";

export default ({
  children,
  ang,
  ...etc
}: {
  style?: React.CSSProperties;
  children: React.ReactNode;
  ang?: number;
  className: string;
}) => (
  <Tilt
    glareEnable
    glareMaxOpacity={0.45}
    scale={1.1}
    tiltAngleYInitial={ang}
    {...etc}
  >
    {children}
  </Tilt>
);
