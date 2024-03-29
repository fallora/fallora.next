import Color from "./color";
import { EditorFormater } from "../types/formater";

const FormaterMap = {
  color: Color,
};

export type FormatNameProp = keyof typeof FormaterMap;

export default FormaterMap as { [key: string]: EditorFormater };
