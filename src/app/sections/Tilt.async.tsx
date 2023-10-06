import React, { Suspense } from "react";

const Tilt = React.lazy(() => import("./Tilt"));

const style = (ang: number): React.CSSProperties => ({
  transform: `perspective(1000px) rotateY(${-ang}deg)`,
});

export default ({
  children,
  ang = 0,
  notilt,
}: {
  children: React.ReactNode;
  ang?: number;
  notilt?: boolean;
}) => {
  const props = { ang, style: style(ang), className: "my-hover", children },
    div = <div {...props} />;
  return notilt ? (
    div
  ) : (
    <Suspense fallback={div}>
      <Tilt {...props} />
    </Suspense>
  );
};
