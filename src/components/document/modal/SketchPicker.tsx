import React, { useEffect, useRef, useState } from "react";
import Modal, { ModalMethods } from "~/components/document/modal/Modal";
import Saturation from "~/components/color/Saturation";
import Hue from "~/components/color/Hue";
import { Size } from "~/types/document";
import { color2hsb, raw2hsb } from "~/utils/color";
import { HSBColor } from "~/components/color/types";
import styles from "@/components/document/modal/sketch-picker.module.scss";
import { useDocumentEventListener } from "~/components/document/event/hooks";
import Alpha from "~/components/color/Alpha";

const SketchPicker = () => {
  const modalRef = useRef<ModalMethods>(null);
  const onChangeRef = useRef<((hsbColor: HSBColor) => any) | null>(null);

  const [hsbColor, setHSBColor] = useState<HSBColor>(raw2hsb("#20D131"));

  const [modalSize] = useState<Size>({
    width: 250,
    height: 500,
  });

  useDocumentEventListener("modal.color.show", (event) => {
    if (event.onChange) {
      onChangeRef.current = event.onChange;
    }
    if (event.color) {
      setHSBColor(color2hsb(event.color));
    }
    modalRef.current?.show();
  });

  useEffect(() => {
    onChangeRef.current && onChangeRef.current(hsbColor);
  }, [hsbColor]);

  return (
    <Modal title="Color" size={modalSize} ref={modalRef}>
      <div className={styles.container}>
        <Saturation
          size={{ width: modalSize.width, height: modalSize.width }}
          hsbColor={hsbColor}
          onChange={(saturation, bright) => setHSBColor({ ...hsbColor, saturation, bright })}
        />
        <div className={styles.h16} />
        <div className={styles.px16}>
          <Hue hsbColor={hsbColor} size={{ height: 16 }} onChange={(hue) => setHSBColor({ ...hsbColor, hue })} />
          <div className={styles.h16} />
          <Alpha hsbColor={hsbColor} size={{ height: 16 }} onChange={(alpha) => setHSBColor({ ...hsbColor, alpha })} />
        </div>
      </div>
    </Modal>
  );
};

export default SketchPicker;