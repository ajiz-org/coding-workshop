import React, { Suspense } from "react";

const Tilt = React.lazy(() => import("./Tilt"));

const style = (ang: number): React.CSSProperties => ({
  transform: `perspective(1000px) rotateY(${-ang}deg)`,
});

export default ({
  children,
  ang = 0,
}: {
  children: React.ReactNode;
  ang?: number;
}) => {
  const props = { ang, style: style(ang), className: "my-hover", children };
  return (
    <Suspense fallback={<div {...props} />}>
      <Tilt {...props} />
    </Suspense>
  );
};
