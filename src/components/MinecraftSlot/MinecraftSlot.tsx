import React from "react";
import styles from "../MinecraftInventory/styles.module.css";
import Link from "@docusaurus/Link";
import MinecraftTextFormatter from "../MinecraftTextFormatter/MinecraftTextFormatter";

type MinecraftSlotProps = {
  itemName: string;
  tooltip: string;
  link?: string;
};

const MinecraftSlot: React.FC<MinecraftSlotProps> = (props) => {
  return (
    <Link to={props.link}>
      <div className={styles.slot}>
        <img src={convertToImageURL(props.itemName)} alt="" />
        {props.tooltip && (
          <div className={styles.tooltip}>
            <div className={styles.tooltipcontentwrapper}>
              <MinecraftTextFormatter text={props.tooltip} />
              </div>
          </div>
        )}
      </div>
    </Link>
  );
};

function convertToImageURL(itemName: string) {
  return `/citybuild-wiki/img/minecraft-items/minecraft_${itemName}.png`;
}

export default MinecraftSlot;
