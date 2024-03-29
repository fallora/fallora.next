import React, { useMemo } from "react";
import SvgIcon from "~/components/icon/SvgIcon";
import { useAppDispatch, useAppSelector } from "~/hooks/app";
import { ComponentIconMap } from "~/components/document";
import classNames from "classnames";
import { SvgName } from "~/components/icon/svg";
import { addSelectingKey } from "~/redux/documentSlice";
import styles from "@/components/document/menu/layer.module.scss";

interface LayerItemProps {
  keyRender: string;
  hierarchy: number;
}

const LayerItem = ({ keyRender, hierarchy }: LayerItemProps) => {
  const dispatch = useAppDispatch();
  const paddingLeft = 22;
  const flatDataRender = useAppSelector((state) => state.documentState.flatDataRender);
  const selectingKeys = useAppSelector((state) => state.documentState.selectingKeys);

  const dataRender = flatDataRender[keyRender];

  const layerIconName = useMemo<SvgName>(() => {
    if (ComponentIconMap[dataRender.component]) {
      return ComponentIconMap[dataRender.component];
    }
    return ComponentIconMap["default"];
  }, [dataRender, keyRender]);

  const layerItemInnerStyle = useMemo<React.CSSProperties>(() => {
    return {
      paddingLeft: `${16 + paddingLeft * hierarchy}px`,
    };
  }, [hierarchy]);

  const selected = useMemo(() => {
    if (selectingKeys.includes(keyRender)) {
      return true;
    }
    return false;
  }, [selectingKeys, keyRender]);

  const renderLayerItemChild = () => {
    const childDataRender = Object.values(flatDataRender).filter((_) => _.parentKey === keyRender);
    if (childDataRender && childDataRender.length) {
      return childDataRender.map((_) => {
        return <LayerItem keyRender={_.key} key={_.key} hierarchy={hierarchy + 1} />;
      });
    }
  };

  const handleOnLayerClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(addSelectingKey({ key: keyRender }));
  };

  if (!dataRender) {
    return null;
  }

  return (
    <div className={styles["layer-item"]}>
      <div
        style={layerItemInnerStyle}
        className={classNames({
          [styles["layer-item-inner"]]: true,
          [styles.selected]: selected,
        })}
      >
        <div className={styles["layer-overlay"]} onClick={handleOnLayerClick} />
        <div className={styles["layer-icon"]}>
          <SvgIcon name={layerIconName} width={16} height={16} />
        </div>
        <div className={styles["layer-name"]}>{dataRender.name ?? dataRender.component}</div>
      </div>
      {renderLayerItemChild()}
    </div>
  );
};

export default LayerItem;
