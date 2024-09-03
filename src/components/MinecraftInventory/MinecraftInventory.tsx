// src/components/MinecraftInventory.tsx

import React from "react";
import MinecraftSlot from "../MinecraftSlot/MinecraftSlot";
import styles from "./styles.module.css";

type MinecraftInventoryProps = {
  slots: { itemName: string; tooltip: string; link?: string }[];
  headerText?: string; // Optionaler Text für die obere linke Ecke
};

const MinecraftInventory: React.FC<MinecraftInventoryProps> = ({
  slots,
  headerText,
}) => (
  <div className={styles.inventoryContainer}>
    <div className={styles.inventory}>
      {headerText && <div className={styles.header}>{headerText}</div>}
      {(slots.length % 9 > 0
        ? slots.concat(
            new Array(9 - (slots.length % 9)).fill({
              itemName: "",
              tooltip: "",
            })
          )
        : slots
      ).map((slot, index) => (
        <MinecraftSlot
          key={slot.itemName + index}
          itemName={slot.itemName}
          tooltip={slot.tooltip}
          link={slot.link}
        />
      ))}
    </div>
  </div>
);

export default MinecraftInventory;
