import { useEffect } from "react";
import { useEditorSelection } from "./selection";
import { useEditorContainer } from "./container";
import { useEditorKeyboard } from "./keyboard";
import { useEditorModel } from "./model";
import { FormatNameProp } from "~/components/document/text/formats";

export const useTextEditor = () => {
  const container = useEditorContainer();
  const selection = useEditorSelection(container);
  const model = useEditorModel(container, selection);
  const keyboard = useEditorKeyboard(container, model, selection);

  useEffect(() => {
    keyboard.listen();
    return () => keyboard.destroy();
  }, []);

  const getRange = () => {
    return selection.getRange();
  };

  const appendText = (content: string, formats?: { [Property in FormatNameProp]?: any }) => {
    model.appendRaw(content, formats);
  };

  const format = (formats?: { [Property in FormatNameProp]?: any }) => {
    const range = model.getRangeAlteration();

    if (!range || range.collapsed) {
      return;
    }

    for (let index = range.start.index; index <= range.end.index; index++) {
      if (index === range.start.index && index === range.end.index) {
        const seperatedAlterations = model.seperate(range.start.alteration, [range.start.offset, range.end.offset]);
        if (range.start.offset > 0) {
          model.format(seperatedAlterations[1], formats);
        } else {
          model.format(seperatedAlterations[0], formats);
        }
        model.replaceMany(range.start.alteration, seperatedAlterations);
        continue;
      }
      if (index === range.start.index) {
        const seperatedAlterations = model.seperate(range.start.alteration, [range.start.offset]);
        if (index === range.start.index && seperatedAlterations.length) {
          model.format(seperatedAlterations[seperatedAlterations.length - 1], formats);
        }
        model.replaceMany(range.start.alteration, seperatedAlterations);
        continue;
      }
      if (index === range.end.index) {
        const seperatedAlterations = model.seperate(range.end.alteration, [range.end.offset]);
        if (index === range.end.index && seperatedAlterations.length) {
          model.format(seperatedAlterations[0], formats);
        }
        model.replaceMany(range.end.alteration, seperatedAlterations);
        continue;
      }
      model.formatAt(index, formats);
    }
  };

  const empty = () => {
    model.clear();
    container.clear();
  };

  const focus = (select?: boolean) => {
    container.ref.current?.focus();
    if (select) {
      selection.selectAll();
    }
  };

  return {
    ref: container.ref,
    appendText,
    empty,
    focus,
    getRange,
    format,
  };
};
