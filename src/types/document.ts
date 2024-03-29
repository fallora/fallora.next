import { ComponentName } from "~/components/document";

export type TemplateDataRender = {
  key?: string;
  parentKey?: string;
  name?: string;
  component: ComponentName;
  options?: {
    [key: string]: any;
  };
  style?: React.CSSProperties;
  position?: Position;
  size?: Size;
  children?: TemplateDataRender[];
};

export type DataRender = TemplateDataRender & {
  key: string;
  boundingSize?: Size;
  children?: DataRender[];
  position: Position;
};

export type FlatMapDataRender = {
  [key: string]: DataRender;
};

export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type Color = string;

export type VectorProps = {
  size: Size;
  radius?: number | number[];
  fill: Color;
};

export type EditingContext = {
  key: string;
};
