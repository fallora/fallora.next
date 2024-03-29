import React from "react";
import { VectorProps } from "~/types/document";
import VECTOR_MAP, { VectorName } from "./vectors";
import { useDocumentColor } from "~/hooks/document";

type ShapeProps = VectorProps & {
  vector: VectorName;
};

const Shape = ({ vector, size, radius, fill }: ShapeProps) => {
  const fillColor = useDocumentColor(fill);
  const VectorComponent = VECTOR_MAP[vector];

  if (!VectorComponent) {
    return null;
  }

  return (
    <div className="shape">
      <VectorComponent size={size} fill={fillColor} radius={radius} />
    </div>
  );
};

export default Shape;
